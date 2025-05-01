import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Candidates from "../components/elements/candidates/Candidates";

export default function CandidateGrid() {
    
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("recent");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true); 
            const response = await fetch('/api/candidates');
            const data = await response.json();
            setUsers(data);
            setIsLoading(false);
        };
    
        fetchUsers();
    }, []);

    const filteredUsers = users
        .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = new Date(a.createdAt || a._id);
            const dateB = new Date(b.createdAt || b._id);
            return sortOrder === "recent" ? dateB - dateA : dateA - dateB;
        });

    return (
        <Layout>
            <div>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-single banner-single-bg">
                            <div className="block-banner text-center">
                                <h3 className="wow animate__animated animate__fadeInUp">
                                    <span className="job-list-number"> {users.length} </span> candidatos disponíveis
                                </h3>
                                <p className="mt-10 wow animate__animated animate__fadeInUp">Descobre talentos prontos para integrar a sua equipa.</p>
                                <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            className="form-input input-keysearch mr-10"
                                            type="text"
                                            placeholder="Palavras-chave..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-30">
                    <div className="container">
                        <div className="content-page">
                            <div className="box-filters-job">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-5">
                                        <span className="text-small text-showing">
                                            A mostrar <strong>{filteredUsers.length}</strong> de <strong>{users.length}</strong> candidatos
                                        </span>
                                    </div>
                                    <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                        <div className="display-flex2">
                                            <div className="box-border">
                                                <span className="text-sortby">Ordenar por:</span>
                                                <div className="dropdown dropdown-sort">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        id="dropdownSort2"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span>
                                                            {sortOrder === "recent" ? "Mais recente" : "Mais antigo"}
                                                        </span>
                                                        <i className="fi-rr-angle-small-down" />
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownSort2">
                                                        <li>
                                                            <a
                                                                className={`dropdown-item ${sortOrder === "recent" ? "active" : ""}`}
                                                                onClick={() => setSortOrder("recent")}
                                                            >
                                                                Mais recente
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className={`dropdown-item ${sortOrder === "oldest" ? "active" : ""}`}
                                                                onClick={() => setSortOrder("oldest")}
                                                            >
                                                                Mais antigo
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="text-center py-5">
                                    <div 
                                        className="spinner-border text-danger" 
                                        role="status" 
                                    />
                                    <p className="mt-3">A carregar candidatos...</p>
                                </div>
                            ) : filteredUsers.length === 0 ? (
                                <div 
                                    className="py-5"
                                    style={{height: "300px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}
                                >   
                                    <i 
                                        className="fa-solid fa-triangle-exclamation mb-10"
                                        style={{fontSize: "50px"}}
                                    ></i>
                                    <h4>Não existem resultados.</h4>
                                </div>
                            ) : (
                                <Candidates users={filteredUsers} />
                            )}

                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
