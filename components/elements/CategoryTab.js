"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const icons = [
    // Desenvolvimento
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>,
    // Redes
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>,
    // Cibersegurança
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>,
    // Dados & IA
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>,
    // Suporte Técnico
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>,
    // Hardware & IoT
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>,
    // Cloud
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>,
    // Marketing
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
    </svg>,
    // UI & UX
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>,
    // Consultoria
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>,
    // E-Commerce
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
];

const categories = [
    "Desenvolvimento",
    "Redes",
    "Cibersegurança",
    "Dados & IA",
    "Suporte Técnico",
    "Hardware & IoT",
    "Cloud",
    "Marketing",
    "UI & UX",
    "Consultoria",
    "E-Commerce",
];

const CategoryTab = () => {
    const [active, setActive] = useState(1);
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleOnClick = (index) => setActive(index);

    useEffect(() => {
        async function fetchOffers() {
            try {
                const res = await fetch("/api/offer/list");
                const data = await res.json();
                setOffers(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Erro ao carregar ofertas", err);
            } finally {
                setLoading(false);
            }
        }
        fetchOffers();
    }, []);

    const filteredOffers = offers
    .filter((offer) =>
        offer.tags?.some((tag) =>
        tag.toLowerCase().includes(categories[active - 1].toLowerCase())
        )
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);

    return (
        <>
            <div className="list-tabs text-center">
                <ul className="nav nav-tabs" role="tablist">
                    {categories.map((cat, index) => (
                        <li key={index}>
                            <a
                                className={active === index + 1 ? "active" : ""}
                                onClick={() => handleOnClick(index + 1)}
                            >
                                {icons[index]} {cat}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tab-content mt-30" id="myTabContent-1">
                <div className="tab-pane fade show active">
                    <div className="row">
                        {loading ? (
                            <p>A carregar ofertas...</p>
                        ) : filteredOffers.length === 0 ? (
                            <p className="text-center">Sem ofertas nesta categoria.</p>
                        ) : (
                            filteredOffers.map((offer) => (
                                <div key={offer._id} className="col-12 col-md-4">
                                <div className="card-grid-2 hover-up" style={{ height: "auto", minHeight: "325px" }}>
                                    <div className="row">
                                    <div className="col-12">
                                        <div className="card-grid-2-image-left">
                                        <div className="image-box">
                                            <img style={{ height: "100%" }} src={offer.company.logo.secure_url} alt="logo" />
                                        </div>
                                        <div className="right-info">
                                            <span className="name-job">{offer.company.name}</span>
                                            <span className="location-small capitalize">
                                                {offer.company.city}, {offer.company.country}
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="card-block-info">
                                    <h4>
                                        <Link legacyBehavior href={`/offer/${offer._id}`}>
                                        <span className="capitalize">{offer.level} {offer.role}</span>
                                        </Link>
                                    </h4>

                                    <div className="mt-5">
                                        <span>
                                        {{
                                            fulltime: "Tempo inteiro",
                                            parttime: "Part-time",
                                            internship: "Estágio"
                                        }[offer.type]}

                                        {offer.type && offer.remote && <>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</>}

                                        {{
                                            presencial: "Presencial",
                                            hybrid: "Híbrido",
                                            remote: "Remoto"
                                        }[offer.remote]}

                                        {(offer.type || offer.remote) && offer.experience && <>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</>}

                                        {{
                                            less_than_1: "< 1 ano de experiência",
                                            "1_to_2": "1 a 2 anos de experiência",
                                            "2_to_3": "2 a 3 anos de experiência",
                                            "3_to_4": "3 a 4 anos de experiência",
                                            "4_to_5": "4 a 5 anos de experiência",
                                            more_than_5: "> 5 anos de experiência"
                                        }[offer.experience]}
                                        </span>
                                    </div>

                                    <div className="skills-wrapper mt-3">
                                        {offer.tags.map((tag, i) => (
                                        <a key={i} className="btn btn-tags-sm">{tag}</a>
                                        ))}
                                    </div>

                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <span className="card-text-price">
                                            {offer.salary?.salaryMin && offer.salary?.salaryMax ? (
                                                <>
                                                {offer.salary.salaryMin}€ <span style={{ color: "black" }}>-</span> {offer.salary.salaryMax}€
                                                </>
                                            ) : offer.salary?.salaryMin ? (
                                                `${offer.salary.salaryMin}€`
                                            ) : (
                                                <span style={{ color: "black" }}>Sem salário definido</span>
                                            )}
                                            </span>
                                        </div>
                                        <div className="col-lg-5 col-5 text-end">
                                            <Link href={`/offer/${offer._id}`}>
                                            <span className="btn btn-apply-now">Ver detalhes</span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryTab;
