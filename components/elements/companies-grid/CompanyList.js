import Link from "next/link";
import { motion } from "framer-motion";

export default function CompanyList({ companies }) {
    return (
        <div className="row">
            {companies.map((company, index) => (
                <motion.div
                    key={company._id}
                    className="col-md-6 col-sm-12 col-12 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                >
                    <div className="card-grid-3 d-flex flex-column h-100">
                        <div className="position-relative">
                            <div className="card-grid-3-image">
                                <Link legacyBehavior href={`/profile/${company._id}`}>
                                    <a>
                                        <figure className="mb-0">
                                            <img
                                                src={company.banner?.secure_url || "/assets/imgs/default/banner.jpg"}
                                                alt="Banner"
                                            />
                                        </figure>
                                    </a>
                                </Link>
                            </div>
                            <div className="card-grid-3-pfp position-absolute">
                                <img
                                    src={company.logo?.secure_url || "/assets/imgs/default/user.png"}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", padding: "15px", backgroundColor: "#fff" }}
                                    alt="Logo"
                                />
                            </div>
                        </div>

                        <div className="card-block-info d-flex flex-column h-100">
                            <div>
                                <h5 className="mb-2 pt-2">
                                    <Link legacyBehavior href={`/profile/${company._id}`}>
                                        <a>{company.name || "Nome não disponível"}</a>
                                    </Link>
                                </h5>

                                <div className="skills-wrapper mb-3">
                                    {company.tags?.slice(0, 4).map((tag, i) => (
                                        <Link legacyBehavior key={i} href="/offers">
                                            <a className="btn btn-tags-sm">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="row mt-auto">
                                <div className="col-7 d-flex align-items-end">
                                    <span className="city-info">
                                        {company.city || "Cidade não definida"}
                                        {company.country && `, ${company.country}`}
                                    </span>
                                </div>
                                <div className="col-5">
                                    <span className="d-flex justify-content-end align-items-center">
                                        <a
                                            className="btn btn-apply-now"
                                            href={`/company/${company._id}`}
                                            style={{ width: "100%" }}
                                        >
                                            Ver perfil
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
