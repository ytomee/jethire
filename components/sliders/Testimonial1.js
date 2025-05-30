import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSlider1 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                >
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">
                                    Graças à plataforma, conseguimos recrutar dois programadores em tempo recorde.
                                    A experiência foi simples, eficaz e muito intuitiva.
                                </p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="/assets/imgs/page/about/user1.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Rita Almeida</h6>
                                    <span>Gestora de RH, TechNova</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">
                                    O processo de candidatura foi super rápido! Submeti o meu perfil e em menos de uma semana já tinha entrevista marcada.
                                </p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="/assets/imgs/page/about/user2.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>Tiago Correia</h6>
                                    <span>Frontend Developer, candidato</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="card-grid-6 hover-up">
                            <div className="card-text-desc mt-10">
                                <p className="font-md color-text-paragraph">
                                    A interface da plataforma é clara e muito bem pensada. Facilitou-nos imenso o processo de triagem de candidatos.
                                </p>
                            </div>
                            <div className="card-image">
                                <div className="image">
                                    <figure>
                                        <img alt="jobBox" src="/assets/imgs/page/about/user3.png" />
                                    </figure>
                                </div>
                                <div className="card-profile">
                                    <h6>João Fernandes</h6>
                                    <span>CEO, BrightPath Solutions</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-pagination swiper-pagination3" />
        </>
    );
};

export default TestimonialSlider1;
