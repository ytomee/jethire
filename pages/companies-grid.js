/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/elements/companies-grid/Sidebar";
import Company from "../components/elements/companies-grid/Company";
import CompanyForm from "../components/elements/companies-grid/CompanyForm";
import ValidRequest from "../components/elements/companies-grid/ValidRequest";

export default function CompaniesGrid() {
    const [showForm, setShowForm] = useState(false);
    const [showValidRequest, setShowValidRequest] = useState(false);

    useEffect(() => {
    if (showForm) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
    }, [showForm]);

    return (
        <> 
            <AnimatePresence>
                {showForm && <CompanyForm setShowForm={setShowForm} setShowValidRequest={setShowValidRequest} />}
                {showValidRequest && <ValidRequest setShowValidRequest={setShowValidRequest} />}
            </AnimatePresence>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        <span className="job-list-number"> 4 </span> empresas disponíveis
                                    </h3>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />
                                        atque delectus molestias quis?
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Palavras-chave... " />
                                            <button className="btn btn-default btn-find font-sm">Procurar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        A mostrar <strong>41-60 </strong>de <strong>944 </strong>empresas
                                                    </span>
                                                </div>
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border">
                                                            <span className="text-sortby">Ordenar por:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Qualificação</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Qualificação</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Vagas <i className="fa-solid fa-arrow-up ml-5"></i></a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Vagas <i className="fa-solid fa-arrow-down ml-5"></i></a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Company />
                                    </div>
                                </div>
                                <Sidebar />
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box-newsletter">
                                        <div className="text-md-newsletter text-center">
                                            Quer trabalhar connosco? Registe a sua empresa!
                                        </div>
                                        <div className="box-register-company mt-40">
                                            <div className="form-register-company">
                                                Preencha o formulário com os dados necessários! <i className="fa-solid fa-arrow-right ml-10"></i>
                                            </div>
                                            <div className="form-register-company">
                                                <a onClick={() => setShowForm(true)} style={{ cursor: "pointer" }}>
                                                    <i className="fa-solid fa-clipboard-list mr-10"></i>
                                                    <span>Formulário</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
