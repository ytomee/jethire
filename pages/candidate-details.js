import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function CandidateDetails() {
    
    const { data: session } = useSession();
    console.log("Sessão atual:", session);

    return (
        <>
            <Layout>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single">
                            <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                        </div>
                        <div className="box-company-profile">
                            <div className="image-company">
                                <img src="assets/imgs/page/candidates/candidate-profile.jpg" alt="jobbox" />
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <h3>
                                        Tomé Almeida <span className="card-location font-regular"><i className="fa-solid fa-location-dot mr-5"></i>Cantanhede, PT</span>
                                    </h3>
                                    <p className="mt-5 font-md color-text-paragraph">Full-Stack Developer</p>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                                    <Link legacyBehavior href="page-contact">
                                        <a className="btn btn-apply-big"><i className="fa-solid fa-link mr-5"></i>Curriculum Vitae</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom pt-10 pb-10" />
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <div>
                                            <h4 className="mt-0 mb-20">Sobre mim</h4>
                                            <p>Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                                            <h4 className="mt-40">Competências profissionais</h4>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    {/* <h6 className="color-text-paragraph">Programming</h6> */}
                                                    <div className="box-progress-bar">
                                                        <p className="font-xs color-text-paragraph mb-10">HTML &amp; CSS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "78%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>78%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">Javascript</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-brand-2" role="progressbar" style={{ width: "88%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>88%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">Database</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "62%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>62%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">React JS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "92%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>92%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    {/* <h6 className="color-text-paragraph">Design</h6> */}
                                                    <div className="box-progress-bar">
                                                        <p className="font-xs color-text-paragraph mb-10">Photoshop</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "29%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>29%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">Figma</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "20%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">Illustrator</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "65%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>65%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph mb-10 mt-30">Sketch</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "82%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>82%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p />
                                            <h4 className="mt-50">Experiência</h4>
                                            <ul className="profile-list">
                                                <li>
                                                    <div className="institute"><i className="fa-solid fa-house-crack mr-10"></i>Critical Software</div>
                                                    <div className="role"><i className="fa-solid fa-briefcase mr-10"></i>Junior Developer</div>
                                                    <div className="timeframe"><i className="fa-regular fa-clock mr-10"></i>2012 - Present</div>
                                                </li>
                                            </ul>
                                            <h4 className="mt-40">Educação</h4>
                                            <ul className="profile-list">
                                                <li>
                                                    <div className="institute"><i className="fa-solid fa-house-crack mr-10"></i>Escola Técnico Profissional de Cantanhede</div>
                                                    <div className="role"><i className="fa-solid fa-briefcase mr-10"></i>Técnico de Gestão e Programação de Sistemas Informáticos</div>
                                                    <div className="timeframe"><i className="fa-regular fa-clock mr-10"></i>2012 - 2020</div>
                                                </li>
                                            </ul>
                                            <h4 className="mt-40">Portfólio</h4>
                                            <div className="row">
                                                <div className="col-6 mb-20 mt-10">
                                                    <div className="portfolio-square">
                                                        Teste de portfolio
                                                    </div>
                                                </div>
                                                <div className="col-6 mt-10">
                                                    <div className="portfolio-square">
                                                        Teste de portfolio
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="portfolio-square">
                                                        Teste de portfolio
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="portfolio-square">
                                                        Teste de portfolio
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <h5 className="f-18">Visão geral</h5>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-solid fa-user-clock"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Experiência</span>
                                                    <strong className="small-heading">Sem experiência</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-solid fa-earth-americas"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Línguas</span>
                                                    <strong className="small-heading">Português, Inglês</strong>
                                                </div>
                                            </li>
                                            <li className="pb-15">
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-solid fa-graduation-cap"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Nível de educação</span>
                                                    <strong className="small-heading">Ensino Profissional</strong>
                                                </div>
                                            </li>
                                            <li className="pb-10">
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-solid fa-link"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="socials"><a>Site pessoal</a></span>
                                                </div>
                                            </li>
                                            <li className="pb-10">
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-brands fa-github"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="socials"><a>GitHub</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="socials"><a>LinkedIn</a></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li><strong>Localização:</strong> Cantanhede, Coimbra, PT</li>
                                            <li><strong>Telemóvel:</strong> 965 360 269</li>
                                            <li><strong>Email: </strong>tomealmeida@gmail.com</li>
                                        </ul>
                                        <div className="mt-30">
                                            <Link legacyBehavior href="page-contact">
                                                <a className="btn btn-send-message">Entrar em contacto</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
