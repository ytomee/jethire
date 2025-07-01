"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function JobList() {
    const { data: session } = useSession();

    const [offers, setOffers] = useState([]);
    const [filteredOffers, setFilteredOffers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const [savedOffers, setSavedOffers] = useState([]);
    const [filters, setFilters] = useState({
        tags: [],
        salary: [],
        experience: [],
        remote: [],
        type: [],
        isMinorFriendly: [],
    });

    const toggleFilter = (category, value) => {
        setFilters((prev) => {
            const isActive = prev[category].includes(value);
            return {
                ...prev,
                [category]: isActive
                    ? prev[category].filter((v) => v !== value)
                    : [...prev[category], value],
            };
        });
    };

    useEffect(() => {
        async function fetchOffers() {
            try {
                const res = await fetch("/api/offer/list");
                const data = await res.json();

                if (Array.isArray(data)) {
                    setOffers(data);
                    setFilteredOffers(data);
                } else {
                    setOffers([]);
                    setFilteredOffers([]);
                }
            } catch (err) {
                console.error("Erro ao carregar ofertas", err);
            } finally {
                setLoading(false);
            }
        }

        fetchOffers();
    }, []);

    useEffect(() => {
        async function fetchSaved() {
            if (!session?.user?.email) return;

            try {
                const res = await fetch(`/api/offer/list-favorite?email=${session.user.email}`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setSavedOffers(data);
                }
            } catch (err) {
                console.error("Erro ao carregar favoritos:", err);
            }
        }

        fetchSaved();
    }, [session]);

    useEffect(() => {
        const lowerSearch = search.toLowerCase();

        const filtered = offers.filter((offer) => {
            const matchesSearch = (
                offer.role.toLowerCase().includes(lowerSearch) ||
                offer.level.toLowerCase().includes(lowerSearch) ||
                offer.type.toLowerCase().includes(lowerSearch) ||
                offer.remote.toLowerCase().includes(lowerSearch) ||
                offer.experience.toLowerCase().includes(lowerSearch) ||
                offer.tags.some(tag => tag.toLowerCase().includes(lowerSearch)) ||
                offer.company.name.toLowerCase().includes(lowerSearch) ||
                offer.company.city.toLowerCase().includes(lowerSearch) ||
                offer.company.country.toLowerCase().includes(lowerSearch)
            );

            const matchesTags = filters.tags.length === 0 || filters.tags.some(tags =>
                Array.isArray(offer.tags)
                    ? offer.tags.some(a => a.toLowerCase() === tags.toLowerCase())
                    : offer.tags?.toLowerCase() === tags.toLowerCase()
            );

            const matchesSalary = filters.salary.length === 0 || filters.salary.some(range => {
                const min = offer.salary?.salaryMin || 0;
                const max = offer.salary?.salaryMax || 0;
                switch (range) {
                    case "0-500": return max <= 500;
                    case "501-800": return min >= 501 && max <= 800;
                    case "801-1100": return min >= 801 && max <= 1100;
                    case "1101-1400": return min >= 1101 && max <= 1400;
                    case "1401-1700": return min >= 1401 && max <= 1700;
                    case "1701-2000": return min >= 1701 && max <= 2000;
                    case "2001-2500": return min >= 2001 && max <= 2500;
                    case "2501-3000": return min >= 2501 && max <= 3000;
                    case "3001-9999": return min >= 3001;
                    default: return true;
                }
            });

            const matchesExperience = filters.experience.length === 0 || filters.experience.includes(offer.experience);
            const matchesRemote = filters.remote.length === 0 || filters.remote.includes(offer.remote);
            const matchesType = filters.type.length === 0 || filters.type.includes(offer.type);

            const matchesMinorFriendly =
                filters.isMinorFriendly.length === 0 ||
                (filters.isMinorFriendly.includes("true") && offer.isMinorFriendly === true) ||
                (filters.isMinorFriendly.includes("false") && offer.isMinorFriendly === false);

            const matchesAll = matchesSearch && matchesTags && matchesSalary && matchesExperience && matchesRemote && matchesType && matchesMinorFriendly;

            if (onlyFavorites) {
                return matchesAll && savedOffers.includes(offer._id);
            }

            return matchesAll;
        });

        setFilteredOffers(filtered);
    }, [search, offers, filters, savedOffers, onlyFavorites]);

    const getCount = (category, value) => {
        return offers.filter((offer) => {
            switch (category) {
                case "tags":
                    return Array.isArray(offer.tags)
                        ? offer.tags.includes(value)
                        : offer.tags === value;
                case "salary":
                    const min = offer.salary?.salaryMin || 0;
                    const max = offer.salary?.salaryMax || 0;
                    switch (value) {
                        case "0-500": return max <= 500;
                        case "501-800": return min >= 501 && max <= 800;
                        case "801-1100": return min >= 801 && max <= 1100;
                        case "1101-1400": return min >= 1101 && max <= 1400;
                        case "1401-1700": return min >= 1401 && max <= 1700;
                        case "1701-2000": return min >= 1701 && max <= 2000;
                        case "2001-2500": return min >= 2001 && max <= 2500;
                        case "2501-3000": return min >= 2501 && max <= 3000;
                        case "3001-9999": return min >= 3001;
                        default: return true;
                    }
                case "experience":
                    return offer.experience === value;
                case "remote":
                    return offer.remote === value;
                case "type":
                    return offer.type === value;
                case "isMinorFriendly":
                    return (value === "true" && offer.isMinorFriendly === true) ||
                        (value === "false" && offer.isMinorFriendly === false);
                default:
                    return false;
            }
        }).length;
    };

    const checkbox = (category, label, value) => (
        <li key={value}>
            <label className="cb-container">
                <input
                    type="checkbox"
                    onChange={() => toggleFilter(category, value)}
                    checked={filters[category].includes(value)}
                />
                <span className="text-small">{label}</span>
                <span className="checkmark" />
            </label>
            <span className="number-item">{getCount(category, value)}</span>
        </li>
    );

    return (
        <Layout>
            <div>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-single banner-single-bg">
                            <div className="block-banner text-center">
                                <h3 className="wow animate__animated animate__fadeInUp">
                                    <span className="job-list-number">{filteredOffers.length}</span> ofertas disponíveis
                                </h3>
                                <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp">
                                    Procura a oportunidade ideal entre as nossas ofertas.
                                </div>
                                <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            className="form-input input-keysearch mr-10"
                                            type="text"
                                            placeholder="Palavras-chave... "
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">
                                <div className="box-filters-job d-flex justify-content-between mb-3">
                                    <span className="text-small">
                                        A mostrar <strong>{filteredOffers.length}</strong> de <strong>{offers.length}</strong> ofertas
                                    </span>
                                    {session?.user?.email && (
                                        <span
                                            className="text-small"
                                            style={{ cursor: "pointer", color: onlyFavorites ? "#d33" : "inherit" }}
                                            onClick={() => setOnlyFavorites(prev => !prev)}
                                        >
                                            {onlyFavorites ? "A mostrar apenas favoritos" : "Mostrar apenas favoritos"}
                                        </span>
                                    )}
                                </div>

                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-danger" role="status" />
                                        <p className="mt-3">A carregar ofertas...</p>
                                    </div>
                                ) : (
                                    <div className="row">
                                        {filteredOffers.map((offer) => (
                                            <div key={offer._id} className="col-12 col-md-6 mb-4">
                                                <div className="card-grid-2 hover-up" style={{ height: "auto", minHeight: "350px" }}>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img style={{ height: "50px", width: "50px" }} src={offer.company.logo.secure_url} alt="logo" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <span className="name-job">{offer.company.name}</span>
                                                                    <span className="location-small">{[offer.company.city, offer.company.country].filter(Boolean).join(', ') || 'Sem localização'}</span>
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
                                                                        {offer.salary?.salaryMin && offer.salary?.salaryMax
                                                                        ? <>{offer.salary.salaryMin}€ <span style={{color: "black"}}>-</span> {offer.salary.salaryMax}€</>
                                                                        : offer.salary?.salaryMin
                                                                        ? `${offer.salary.salaryMin}€`
                                                                        : <span style={{ color: "black" }}>Sem salário definido</span>
                                                                        }
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
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <div className="sidebar-shadow none-shadow mb-30">
                                    <div className="sidebar-filters">
                                        <div className="filter-block head-border mb-30">
                                            <h5>
                                                Filtros avançados
                                                <a className="link-reset" onClick={() => setFilters({ tags: [], salary: [], experience: [], remote: [], type: [], isMinorFriendly: [] })}>
                                                    <i className="fa-solid fa-rotate-right mr-5"></i> Repor
                                                </a>
                                            </h5>
                                        </div>

                                        {/* Filtro Área */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Área</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {["Desenvolvimento", "Redes", "Cibersegurança", "Dados & IA", "Suporte Técnico", "Hardware & IoT", "Cloud", "Marketing", "UI & UX", "Consultoria", "E-Commerce"]
                                                        .map(val => checkbox("tags", val, val))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Filtro Salário */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Salário</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {[
                                                        ["0-500", "< 500€"],
                                                        ["501-800", "501€ - 800€"],
                                                        ["801-1100", "801€ - 1.100€"],
                                                        ["1101-1400", "1.101€ - 1.400€"],
                                                        ["1401-1700", "1.401€ - 1.700€"],
                                                        ["1701-2000", "1.701€ - 2.000€"],
                                                        ["2001-2500", "2.001€ - 2.500€"],
                                                        ["2501-3000", "2.501€ - 3.000€"],
                                                        ["3001-9999", "> 3.000€"]
                                                    ].map(([val, label]) => checkbox("salary", label, val))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Filtro Experiência */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Experiência</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {[
                                                        ["less_than_1", "< 1 ano"],
                                                        ["1_to_2", "1 a 2 anos"],
                                                        ["2_to_3", "2 a 3 anos"],
                                                        ["3_to_4", "3 a 4 anos"],
                                                        ["4_to_5", "4 a 5 anos"],
                                                        ["more_than_5", "> 5 anos"]
                                                    ].map(([val, label]) => checkbox("experience", label, val))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Filtro Modalidade */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Modalidade</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {[
                                                        ["presencial", "Presencial"],
                                                        ["remote", "Remoto"],
                                                        ["hybrid", "Híbrido"]
                                                    ].map(([val, label]) => checkbox("remote", label, val))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Filtro Tipo */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Tipo de Trabalho</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {[
                                                        ["fulltime", "Tempo inteiro"],
                                                        ["parttime", "Part-time"],
                                                        ["internship", "Estágio"],
                                                    ].map(([val, label]) => checkbox("type", label, val))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Filtro Menores de idade */}
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Aceita menores de 18</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    {[
                                                        ["true", "Sim"],
                                                        ["false", "Não"]
                                                    ].map(([val, label]) => checkbox("isMinorFriendly", label, val))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}