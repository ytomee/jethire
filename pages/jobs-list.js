/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function JobList() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        <span className="job-list-number"> 22 </span> trabalhos disponíveis
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
                                                        A mostrar <strong>41-60 </strong>de <strong>944 </strong>resultados
                                                    </span>
                                                </div>
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border">
                                                            <span className="text-sortby">Ordenar por:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Publicações recentes</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Publicações recentes</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Publicações antigas</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Mais visto</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row display-list">
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">LinkedIn</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>UI / UX Designer fulltime</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                <span>4</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$500</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Adobe Ilustrator</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Full Stack Engineer</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Part time</span>
                                                            <span className="card-time">
                                                                <span>5</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$800</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Bing Search</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Java Software Engineer</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Dailymotion</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Frontend Developer</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Linkedin</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>React Native Web Developer</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                <span>4</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$500</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Quora JSC</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Senior System Engineer</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Part time</span>
                                                            <span className="card-time">
                                                                <span>5</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$800</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Nintendo</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Products Manager</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <span className="flash" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card-grid-2-image-left">
                                                                <div className="image-box">
                                                                    <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                                </div>
                                                                <div className="right-info">
                                                                    <Link legacyBehavior href="#">
                                                                        <a className="name-job">Periscope</a>
                                                                    </Link>
                                                                    <span className="location-small">New York, US</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                            <div className="pl-15 mb-15 mt-30">
                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                                </Link>

                                                                <Link legacyBehavior href="#">
                                                                    <a className="btn btn-grey-small mr-5">Figma</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h4>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>Lead Quality Control QA</a>
                                                            </Link>
                                                        </h4>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Full time</span>
                                                            <span className="card-time">
                                                                <span>6</span>
                                                                <span> mins ago</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">$250</span>
                                                                    <span className="text-muted">/Hour</span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Apply now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginations">
                                        <ul className="pager">
                                            <li>
                                                <a className="pager-prev" href="#" />
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number active">1</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">2</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">3</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">4</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">5</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">6</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">7</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="pager-next" href="#" />
                                            </li>
                                        </ul>
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
                                                <h5 className="medium-heading mb-15">Área</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Desenvolvimento</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">12</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Redes</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">23</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Cibersegurança</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">43</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Dados & IA</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Suporte Técnico</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Hardware & IoT</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Cloud</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Marketing</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">UI & UX</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Consultoria</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">E-Commerce</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-25">Salário</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$0k - $20k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$20k - $40k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">37</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$40k - $60k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">75</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$60k - $80k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">98</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$80k - $100k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">14</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$100k - $200k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">25</span>
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
                                                                <span className="text-small">Estágio</span>
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
                </div>
            </Layout>
        </>
    );
}
