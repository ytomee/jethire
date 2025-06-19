"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function FavoriteButton({ offerId }) {
    const { data: session } = useSession();
    const [isSaved, setIsSaved] = useState(false);
    const [isCandidate, setIsCandidate] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function checkOfferStatus() {
            if (!session?.user?.email) return;

            const [savedRes, candidateRes] = await Promise.all([
                fetch("/api/offer/check-favorite", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ offerId }),
                }),
                fetch("/api/offer/check-apply", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ offerId }),
                }),
            ]);

            const savedData = await savedRes.json();
            const candidateData = await candidateRes.json();

            setIsSaved(savedData.saved);
            setIsCandidate(candidateData.isCandidate);
        }

        checkOfferStatus();
    }, [session, offerId]);

    const toggleFavorite = async () => {
        const res = await fetch("/api/offer/favorite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ offerId }),
        });
        const data = await res.json();
        setIsSaved(data.saved);
    };

    const handleToggleApply = async () => {
        try {
            const res = await fetch("/api/offer/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ offerId }),
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                setIsCandidate(data.applied);
            } else {
                alert("Erro ao processar a candidatura.");
            }
        } catch (err) {
            console.error(err);
            alert("Erro inesperado.");
        }
        setShowModal(false);
    };

    if (!session) return null;

    return (
        <>
            <div className="single-apply-jobs mt-10">
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex gap-2">
                        <button className="btn btn-default" onClick={() => setShowModal(true)}>
                            {isCandidate ? "Remover candidatura" : "Candidatar-me"}
                        </button>

                        <button className="btn btn-border-brand-2" onClick={toggleFavorite}>
                            {isSaved ? (
                                <i className="fa-solid fa-star mr-5"></i>
                            ) : (
                                <i className="fa-regular fa-star mr-5"></i>
                            )}{" "}
                            Favorito
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>
                            {isCandidate
                                ? "Remover candidatura"
                                : "Confirmar candidatura"}
                        </h3>
                        <p>
                            {isCandidate
                                ? "Tem a certeza?"
                                : "Quer mesmo candidatar-se a esta oferta?"}
                        </p>
                        <div className="modal-buttons">
                            <button className="btn btn-cancel" onClick={() => setShowModal(false)}>
                                Cancelar
                            </button>
                            <button className="btn btn-apply" onClick={handleToggleApply}>
                                Confirmar
                            </button>
                        </div>
                    </div>

                    <style jsx>{`
                        .modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 100vh;
                            background: rgba(0, 0, 0, 0.5);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 9999;
                        }
                        .modal-content {
                            background: white;
                            padding: 2rem;
                            border-radius: 10px;
                            max-width: 400px;
                            width: 90%;
                            text-align: left;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                        }
                        .modal-buttons {
                            display: flex;
                            gap: 10px;
                            margin-top: 20px;
                        }
                        .modal-buttons button {
                            flex: 1;
                            border-radius: 5px;
                        }
                    `}</style>
                </div>
            )}
        </>
    );
}
