/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import TestimonialSlider1 from "./../components/sliders/Testimonial1";

export default function Contact() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover bg-img-about">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2 className="mb-10">Sobre nós</h2>
                                        <p className="font-lg color-text-paragraph-2">Conheça a nossa equipa e dê-nos o seu feedback.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mb-40">
                                    <span className="font-md color-brand-2 mt-20 d-inline-block">Contacte-nos</span>
                                    <h2 className="mt-5 mb-10">Entre em contacto</h2>
                                    <p className="font-md color-text-paragraph-2">
                                        O movimento certo no momento certo faz toda a diferença. Viva o sonho de expandir o seu negócio.
                                    </p>
                                    <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                        <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="name" placeholder="Introduza o seu nome" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="company" placeholder="Empresa (opcional)" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="email" placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Nº de telemóvel" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Diga-nos o que se passa." defaultValue={""} />
                                                </div>
                                                <button className="submit btn btn-send-message" type="submit">
                                                    Enviar mensagem
                                                </button>
                                                <label className="ml-20">
                                                    <input className="float-start mr-5 mt-6" type="checkbox" /> Ao clicar está a concordar com os <a className="color-brand-1">Termos & Condições</a>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <img src="assets/imgs/page/contact/img.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80">
                        <div className="container">
                            <div className="text-center">
                                <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Meet Our Team</h2>
                                <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.</p>
                            </div>
                            <div className="mt-7">
                                <div className="card-grid-4 hover-up wow animate__animated animate__fadeInUp">
                                    Teste
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Our Happy Customer</h2>
                            <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">
                                When it comes to choosing the right web hosting provider, we know how easy it
                                <br className="d-none d-lg-block" /> is to get overwhelmed with the number.
                            </div>
                            <div className="row mt-50">
                                <div className="box-swiper">
                                    <TestimonialSlider1 />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
