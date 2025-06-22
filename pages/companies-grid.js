/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
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
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Filtros avançados
                                                    <Link legacyBehavior href="#">
                                                        <a className="link-reset"><i className="fa-solid fa-rotate-right mr-5"></i> Repor</a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">Indústria</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="1" />
                                                                <span className="text-small">Desenvolvimento</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">1</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="2" />
                                                                <span className="text-small">Redes</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">2</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="3" />
                                                                <span className="text-small">Cibersegurança</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">3</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="4" />
                                                                <span className="text-small">Dados & IA</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">4</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="5" />
                                                                <span className="text-small">Suporte Técnico</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">5</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="6" />
                                                                <span className="text-small">Hardware & IoT</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">6</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="7" />
                                                                <span className="text-small">Cloud</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">7</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="8" />
                                                                <span className="text-small">Marketing</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">8</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="9" />
                                                                <span className="text-small">UI & UX</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">9</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="10" />
                                                                <span className="text-small">Consultoria</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">10</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" value="11" />
                                                                <span className="text-small">E-Commerce</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">11</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Experiência</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small"> {'<'} 1 ano</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">1-2 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">87</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">2-3 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">3-4 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">45</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">4-5 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small"> {'>'} 5 anos </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">89</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Modalidade</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Presencial</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">12</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">Remoto</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Híbrido</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">58</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Oferta publicada</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">All</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">78</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">1 dia</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">7 dias</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">30 dias</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">Tipo de trabalho</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Tempo inteiro</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">25</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">Part-time</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">64</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Trabalhos remotos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">78</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Freelancer</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">97</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
