/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import CandidatesSlider from "../components/sliders/Candidates";
import CategoryTab from "../components/elements/CategoryTab";
import CategorySlider from "../components/sliders/Category";

export default function Index5() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box mb-70">
                        <div className="banner-hero hero-1 banner-homepage5">
                            <div className="banner-inner">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-12">
                                        <div className="block-banner">
                                            <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                                                Procura <span>emprego</span>,
                                                <br className="d-lg-block" />
                                                contrata <span>talentos</span>.
                                            </h1>
                                            <div className="banner-description mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                                A tua próxima oportunidade está a apenas um clique. Simplificamos o processo para que te concentres no que importa: encontrar o trabalho certo.
                                            </div>
                                            <div className="mt-30 d-flex">
                                                <a href="#comofunciona" className="btn btn-default mr-15">Começar<i className="fa-solid fa-caret-down ml-10"></i></a>
                                                <a className="btn btn-border-brand-2">Saber mais</a>
                                            </div>
                                            <div className="mt-50">
                                                <div className="form-find mt-40 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                    <form>
                                                        <input className="form-input input-keysearch mr-10 style-2" type="text" placeholder="Palavras-chave... " />
                                                        <button className="btn btn-default font-sm"><i className="fa-solid fa-magnifying-glass mr-10"></i>Procurar</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-12 d-none d-xl-block col-md-6">
                                        <div className="banner-imgs">
                                            <div className="banner-1 shape-1">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner1.png" />
                                            </div>
                                            <div className="banner-2 shape-2">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner2.png" />
                                            </div>
                                            <div className="banner-3 shape-3">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner3.png" />
                                            </div>
                                            <div className="banner-4 shape-3">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner4.png" />
                                            </div>
                                            <div className="banner-5 shape-2">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner5.png" />
                                            </div>
                                            <div className="banner-6 shape-1">
                                                <img className="img-responsive" alt="jobBox" src="assets/imgs/page/homepage5/banner6.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="section-box wow animate__animated animate__fadeIn">
                            <div className="container">
                                <div>
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Procurar por categoria</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Encontra o trabalho ideal para ti. Está atento/a a todas as oportunidades!</p>
                                </div>
                                <div className="box-swiper mt-50">
                                    <CategorySlider/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="comofunciona" className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Como funciona</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Com apenas alguns passos, vais encontrar o trabalho ideal para ti!</p>
                            </div>
                            <div className="mt-70">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box-step step-1">
                                            <h1 className="number-element">1</h1>
                                            <h4 className="mb-20">
                                                Cria uma conta
                                                <br/>
                                                 para começar
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2 px-5">
                                                Regista-te rapidamente e junta-te a nós na tua busca por uma nova oportunidade.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step step-2">
                                            <h1 className="number-element">2</h1>
                                            <h4 className="mb-20">
                                                Observa as várias
                                                <br/>
                                                ofertas de trabalho
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2 px-5">
                                                Encontra oportunidades à tua medida, ao alcance de um clique.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step">
                                            <h1 className="number-element">3</h1>
                                            <h4 className="mb-20">
                                                Encontra a que
                                                <br/>
                                                mais te agrada!
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2 px-5">
                                                Escolhe a oportunidade que combina contigo e prepara-te para dar o próximo passo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-30 text-center d-flex justify-content-center">
                                <a href="page-register" className="btn btn-default"><i className="fa-solid fa-clipboard-user mr-10"></i>Começar</a>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-90">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-title wow animate__animated animate__fadeInUp">Ofertas mais recentes</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Encontra as ofertas de trabalho mais recentes. </p>
                            </div>
                            <div className="mt-30">
                                <CategoryTab />
                            </div>
                        </div>
                    </section>
                    <section className="section-box overflow-visible mt-150 mb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="box-image-job">
                                        {/* <img className="img-job-1" alt="jobBox" src="assets/imgs/page/homepage1/img-chart.png" />
                                        <img className="img-job-2" alt="jobBox" src="assets/imgs/page/homepage1/controlcard.png" /> */}
                                        <figure className="wow animate__animated animate__fadeIn">
                                            <img alt="jobBox" src="assets/imgs/page/homepage1/img1.png" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="content-job-inner">
                                        <span className="color-text-mutted text-32">Muita oferta. </span>
                                        <h2 className="text-52 wow animate__animated animate__fadeInUp">
                                            Encontra o trabalho <span className="color-brand-2">Certo</span> para ti.
                                        </h2>
                                        <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Descobre todas as oportunidades à tua espera. Explora as ofertas disponíveis. Aprende mais sobre o mundo do trabalho, desenvolve-te e conquista o teu futuro. Tudo isto, de forma simples e acessível, na <span>JetHire</span>.</div>
                                        <div className="mt-40 d-flex">
                                            <div className="wow animate__animated animate__fadeInUp">
                                                <Link legacyBehavior href="/jobs-grid">
                                                    <a href="jobs-list" className="btn btn-default"><i className="fa-solid fa-user mr-10"></i>Procurar trabalho</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Candidatos recentes</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Vê aqui alguns dos nossos candidatos mais recentes!</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <CandidatesSlider />
                                </div>
                                <div className="text-center">
                                    <Link legacyBehavior href="/candidates-grid">
                                        <a className="btn btn-brand-1 hover-up"><i className="fa-brands fa-blogger-b mr-10"></i>Ver mais candidatos</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80 mb-30 bg-border-3 pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="bdrd-10" src="assets/imgs/page/homepage5/img-profile.png" alt="jobBox" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-30">
                                        <h5 className="color-brand-2 mb-15 mt-15">Não percas esta oportunidade</h5>
                                        <h1 className="color-brand-1 mt-0 mb-15">Cria já o teu perfil</h1>
                                        <p className="font-lg color-text-paragraph-2">Ao partilhares as tuas habilidades, experiências e aspirações, estarás um passo mais próximo de encontrar a oportunidade de trabalho ideal para ti. Não deixes para amanhã o que podes fazer hoje!</p>
                                        <div className="mt-20 d-flex">
                                            <a href="page-register" className="btn btn-default"><i className="fa-solid fa-feather mr-10"></i>Criar conta</a>
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
