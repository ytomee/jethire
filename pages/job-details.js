/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import FeaturedSlider from "./../components/sliders/Featured";

export default function JobDetails() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src="assets/imgs/page/job-single/thumb.png" alt="jobBox" />
                            </div>
                            <div className="row mt-10">
                                <div className="col-12">
                                    <h3>Senior Full Stack Engineer</h3>
                                    <div className="mt-5 mb-15">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">3 mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="job-overview" style={{ paddingBottom: 0 }}>
                                        <h5 className="border-bottom pb-15 mb-30">Informação geral</h5>
                                        <div className="row">
                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/industry.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job industry-icon d-block mb-1">Área</span>
                                                    <strong className="small-heading-job">Mechanical / Auto / Automotive / Civil / Construction</strong>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/experience.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job d-block mb-1">Experiência</span>
                                                    <strong className="small-heading-job">1 - 2 years</strong>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/salary.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job salary-icon d-block mb-1">Salário</span>
                                                    <strong className="small-heading-job">$800 - $1000</strong>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/job-level.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job joblevel-icon d-block mb-1">Tipo</span>
                                                    <strong className="small-heading-job">Experienced (Non - Manager)</strong>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/deadline.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job d-block mb-1">Modalidade</span>
                                                    <strong className="small-heading-job">10/08/2022</strong>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex align-items-start mb-4">
                                                <div className="sidebar-icon-item">
                                                    <img src="assets/imgs/page/job-single/job-type.svg" alt="jobBox" />
                                                </div>
                                                <div className="sidebar-text-info" style={{ marginLeft: "10px" }}>
                                                    <span className="text-description-job d-block mb-1">Publicado</span>
                                                    <strong className="small-heading-job">10 de junho de 2025</strong>
                                                </div>
                                            </div>
                                            

                                        </div>
                                    </div>
                                    <div className="content-single">
                                        <h4>Welcome to AliStudio Team</h4>
                                        <p>The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                                        <p>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
                                        <h4>Product Designer</h4>
                                        <p>
                                            <strong>Product knowledge:</strong> Deeply understand the technology and features of the product area to which you are assigned.
                                        </p>
                                        <p>
                                            <strong>Research:</strong> Provide human and business impact and insights for products.
                                        </p>
                                        <p>
                                            <strong>Deliverables:</strong> Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.
                                        </p>
                                        <p>
                                            <strong>Communication:</strong> Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.
                                        </p>
                                    </div>
                                    <div className="author-single">
                                        <span>AliThemes</span>
                                    </div>
                                    <div className="single-apply-jobs">
                                        <div className="row align-items-center">
                                            <div className="col-md-5" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-default" style={{ flexShrink: 0 }}>Candidatar-me</a>
                                                </Link>

                                                <Link legacyBehavior href="#">
                                                    <a className="btn btn-border-brand-2" style={{ flexShrink: 0 }}> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> Favorito</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    <div className="sidebar-border">
                                        <div className="sidebar-heading">
                                            <div className="avatar-sidebar" style={{ display: "flex", alignItems: "end", gap: "10px" }}>
                                                <figure>
                                                    <img alt="jobBox" src="assets/imgs/page/job-single/avatar.png" />
                                                </figure>
                                                <div className="sidebar-info" style={{ paddingLeft: 0, paddingBottom: "5px" }}>
                                                    <span className="sidebar-company" style={{ fontSize: "22px", marginBottom: "5px" }}>AliThemes</span>
                                                    <span className="card-location" style={{padding: 0}}>New York, US</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-list-job">
                                            <ul className="ul-disc">
                                                <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                                <li>Phone: (123) 456-7890</li>
                                                <li>Email: contact@Evara.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-border">
                                        <h6 className="f-18 mb-20">Tags</h6>
                                        <div className="skills-wrapper">
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                            <a className="btn btn-tags-sm">Desenvolvimento</a>
                                        </div>
                                    </div>
                                    <div className="sidebar-border">
                                        <h6 className="f-18">Ofertas semelhantes</h6>
                                        <div className="sidebar-list-job">
                                            <ul>
                                                <li>
                                                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                                                        <div className="image">
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>
                                                                    <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="info-text">
                                                            <h5 className="font-md font-bold color-brand-1">
                                                                <Link legacyBehavior href="/job-details">
                                                                    <a>UI / UX Designer fulltime</a>
                                                                </Link>
                                                            </h5>
                                                            <div className="mt-0">
                                                                <span className="card-briefcase">Fulltime</span>
                                                                <span className="card-time">
                                                                    <span>3</span>
                                                                    <span> mins ago</span>
                                                                </span>
                                                            </div>
                                                            <div className="mt-5">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <h6 className="card-price">
                                                                            $250<span>/Hour</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="col-6 text-end">
                                                                        <span className="card-briefcase">New York, US</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="section-box mt-50 mb-50">
                        <div className="container">
                            <div className="text-left">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Featured Jobs</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
                            </div>
                            <div className="mt-50">
                                <div className="box-swiper style-nav-top">
                                    <FeaturedSlider />
                                </div>
                                <div className="text-center">
                                    <Link legacyBehavior href="#">
                                        <a className="btn btn-grey">Load more posts</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    );
}
