"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function FavoriteButton({ offerId }) {
    const { data: session } = useSession();
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        async function checkIfSaved() {
            if (!session?.user?.email) return;
            const res = await fetch("/api/offer/check-favorite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ offerId }),
            });
            const data = await res.json();
            setIsSaved(data.saved);
        }

        checkIfSaved();
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

    if (!session) return null;

    return (
        <div className="single-apply-jobs mt-10">
            <div className="row align-items-center">
                <div className="col-md-6 d-flex gap-2">

                    <a className="btn btn-default">Candidatar-me</a>

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
        
    );
}
