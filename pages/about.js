/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import TestimonialSlider1 from "../components/sliders/Testimonial1";

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
                                        <h2 className="mb-10">Fale connosco</h2>
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
                                    <form
                                        className="contact-form-style mt-30"
                                        id="contact-form"
                                        onSubmit={async (e) => {
                                            e.preventDefault();

                                            const formData = {
                                                name: e.target.name.value,
                                                company: e.target.company.value,
                                                email: e.target.email.value,
                                                phone: e.target.phone.value,
                                                message: e.target.message.value,
                                            };

                                            try {
                                                const res = await fetch("/api/contact", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                    },
                                                    body: JSON.stringify(formData),
                                                });

                                                if (res.ok) {
                                                    alert("Mensagem enviada com sucesso!");
                                                    e.target.reset();
                                                } else {
                                                    alert("Erro ao enviar mensagem.");
                                                }
                                            } catch (err) {
                                                console.error("Erro:", err);
                                                alert("Erro ao enviar mensagem.");
                                            }
                                        }}
                                    >
                                        <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" required name="name" placeholder="Introduza o seu nome" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="company" placeholder="Empresa (opcional)" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" required name="email" placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Nº de telemóvel" type="tel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea className="font-sm color-text-paragraph-2" required name="message" placeholder="Diga-nos o que se passa." defaultValue={""} />
                                                </div>
                                                <button className="submit btn btn-send-message" type="submit">
                                                    Enviar mensagem
                                                </button>
                                                <label className="ml-20">
                                                    <input className="float-start mr-5 mt-6" required type="checkbox" /> Ao clicar está a concordar com os <a href="terms-conditions" target="_blank" className="color-brand-1">Termos & Condições</a>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                                <div className="col-lg-4 text-center d-none d-lg-block">
                                    <img src="/assets/imgs/page/contact/img.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-80">
                        <div className="container">
                            <div className="text-center">
                                <h6 className="f-18 color-text-mutted text-uppercase">Jet Hire</h6>
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Conheça a nossa equipa</h2>
                                <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">Acreditamos no poder da tecnologia para aproximar pessoas e oportunidades. A nossa missão é criar uma plataforma que facilite a ligação entre candidatos e empresas, de forma justa, rápida e eficaz. Conhece quem está por trás desta ideia.</p>
                            </div>
                            <div className="mt-40">
                                <div className="card-grid-4 hover-up wow animate__animated animate__fadeInUp">
                                    <div className="card-grid-4-header">
                                        <div className="card-grid-4-info">
                                            <img src="/assets/imgs/avatar/tome.jpg" />
                                            <div>
                                                <p className="card-grid-4-title">Tomé Almeida</p>
                                                <p className="card-grid-4-role">Full-Stack Developer</p>
                                            </div>
                                        </div>
                                        <div className="card-grid-4-socials">
                                            <a href="https://www.instagram.com/tome.almeida/" target="_blank" rel="noopener noreferrer" className="card-grid-4-social-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://x.com/001Tome41381" target="_blank" rel="noopener noreferrer" className="card-grid-4-social-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://wa.me/965360269/" target="_blank" rel="noopener noreferrer" className="card-grid-4-social-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                                                </svg>
                                            </a>
                                        </div>      
                                    </div>
                                    <div className="card-grid-4-description">
                                        <p>
                                        Sou estudante e desde que comecei a explorar o mundo programação, apaixonei-me por <strong>web development</strong>. 
                                        Gosto especialmente de trabalhar com <strong>Next.js</strong>. Sinto que com esta ferramenta consigo construir coisas rápidas, agradáveis e à minha maneira. 
                                        Passo horas a <strong>testar</strong>, a <strong>ajustar</strong>, e a <strong>aprender</strong> mais. Quando não estou a programar, gosto de estar perto de motas ou a jogar uns jogos no computador com os amigos — são duas formas diferentes de desligar e relaxar. 
                                        O <strong>web development</strong> começou como um interesse, mas hoje já vejo isto como o caminho que quero seguir a sério.
                                        </p>
                                    </div>
                                    <div className="card-grid-4-buttons">
                                        <a href="mailto: rltomealmeida@gmail.com" target="_blank" rel="noopener noreferrer" className="card-grid-4-contact">Contactar</a>
                                        <a href="https://github.com/ytomee" target="_blank" rel="noopener noreferrer" className="card-grid-4-github">
                                            Ver perfil no
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container">
                            <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Os nossos clientes</h2>
                            <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">
                                Confiança constrói-se com experiências reais.
                                <br className="d-none d-lg-block" /> Lê o que os nossos utilizadores têm a dizer.
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
