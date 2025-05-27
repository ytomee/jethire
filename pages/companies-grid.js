/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/elements/companies-grid/Sidebar";
import CompanyForm from "../components/elements/companies-grid/CompanyForm";
import ValidRequest from "../components/elements/companies-grid/ValidRequest";
import CompanyList from "../components/elements/companies-grid/CompanyList";

import connectMongoDB from "/lib/mongodb";
import Company from "/models/company";

export default function CompaniesGrid({ companies }) {
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
                                        <span className="job-list-number">{companies?.length || 0}</span> empresas disponíveis
                                    </h3>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Explore empresas registadas na nossa plataforma.
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Palavras-chave..." />
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
                                                        A mostrar <strong>1-{companies.length}</strong> de <strong>{companies.length}</strong> empresas
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <CompanyList companies={companies} />

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

export async function getServerSideProps() {
    try {
        await connectMongoDB();
        const companies = await Company.find().select("-team -pending").lean();
        return {
            props: {
                companies: JSON.parse(JSON.stringify(companies)),
            },
        };
    } catch (error) {
        console.error("Erro ao buscar empresas:", error);
        return {
            props: {
                companies: [],
            },
        };
    }
}
