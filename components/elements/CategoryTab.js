import React, { useState } from "react";
import Link from "next/link";

const CategoryTab = () => {
    const [active, setActive] = useState(1);

    const handleOnClick = (index) => {
        setActive(index); // remove the curly braces
    };
    return (
        <>
            <div className="list-tabs text-center">
                <ul className="nav nav-tabs" role="tablist">
                    <li>
                        <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg> Desenvolvimento
                        </a>
                    </li>
                    <li>
                        <a className={active === 2 ? "active" : ""} onClick={() => handleOnClick(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg> Redes
                        </a>
                    </li>
                    <li>
                        <a className={active === 3 ? "active" : ""} onClick={() => handleOnClick(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg> Cibersegurança
                        </a>
                    </li>
                    <li>
                        <a className={active === 4 ? "active" : ""} onClick={() => handleOnClick(4)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg> Dados & IA
                        </a>
                    </li>
                    <li>
                        <a className={active === 5 ? "active" : ""} onClick={() => handleOnClick(5)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg> Suporte Técnico
                        </a>
                    </li>
                    <li>
                        <a className={active === 6 ? "active" : ""} onClick={() => handleOnClick(6)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg> Hardware & IoT
                        </a>
                    </li>
                    <li>
                        <a className={active === 7 ? "active" : ""} onClick={() => handleOnClick(7)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg> Cloud
                        </a>
                    </li>
                    <li>
                        <a className={active === 8 ? "active" : ""} onClick={() => handleOnClick(8)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg> Marketing
                        </a>
                    </li>
                    <li>
                        <a className={active === 9 ? "active" : ""} onClick={() => handleOnClick(9)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg> UI & UX
                        </a>
                    </li>
                    <li>
                        <a className={active === 10 ? "active" : ""} onClick={() => handleOnClick(10)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg> Consultoria
                        </a>
                    </li>
                    <li>
                        <a className={active === 11 ? "active" : ""} onClick={() => handleOnClick(11)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg> E-Commerce
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-content mt-30" id="myTabContent-1">
                <div className={`tab-pane fade ${active == 1 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
                                        <div className="row">
                                            <div className="col-lg-7 col-7">
                                                <span className="card-text-price">$500</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                            <div className="col-lg-5 col-5 text-end">
                                                <div className="btn btn-apply-now">
                                                    Apply now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Full Stack Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Part time</span>
                                        <span className="card-time">
                                            5<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">NodeJS</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
                                        <div className="row">
                                            <div className="col-lg-7 col-7">
                                                <span className="card-text-price">$500</span>
                                                <span className="text-muted">/Hour</span>
                                            </div>
                                            <div className="col-lg-5 col-5 text-end">
                                                <div className="btn btn-apply-now">
                                                    Apply now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Full Stack Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Part time</span>
                                        <span className="card-time">
                                            5<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">NodeJS</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                <div className={`tab-pane fade ${active == 2 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Products Manager</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Angular</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Golang</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                <div className={`tab-pane fade ${active == 3 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Angular</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Senior System Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Part time</span>
                                        <span className="card-time">
                                            5<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Android</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Products Manager</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                <div className={`tab-pane fade ${active == 4 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Products Manager</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Golang</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Angular</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 5 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Golang</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Frontend Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Java</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>React Native Web Developer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Angular</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 6 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Lead Quality Control QA</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Golang</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>UI / UX Designer fulltime</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Fulltime</span>
                                        <span className="card-time">
                                            4<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Full Stack Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Part time</span>
                                        <span className="card-time">
                                            5<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">NodeJS</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    
                                    <div className="image-box">
                                        <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
                                            <a>Java Software Engineer</a>
                                        </Link>
                                    </h6>
                                    <div className="mt-5">
                                        <span className="card-briefcase">Full time</span>
                                        <span className="card-time">
                                            6<span> minutes ago</span>
                                        </span>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                    <div className="mt-30">
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Photoshop</a>
                                        </Link>
                                    </div>
                                    <div className="card-2-bottom mt-30">
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
            </div>
        </>
    );
};

export default CategoryTab;
