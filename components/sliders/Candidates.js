import { useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const CandidatesSlider = () => {
    const [users, setUsers] = useState([]);

    const calculatePercentage = (profile) => {
        if (!profile) return 0;
    
        const data = [
            profile.aboutMeShort,
            profile.skills?.length > 0,
            profile.pfp,
            profile.banner,
            profile.city,
            profile.country
        ];
    
        const filled = data.filter(Boolean).length;
        return (filled / data.length) * 100;
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/candidates');
                const data = await response.json();
    
                const filteredUsers = data.filter(user => {
                    const percentage = calculatePercentage(user.profile);
                    return percentage >= 85;
                });
    
                setUsers(filteredUsers.slice(0, 10));
            } catch (error) {
                console.error("Erro ao carregar utilizadores:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            <div className="swiper-container swiper-group-3 swiper">
                <Swiper
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper pb-50 pt-5"
                    breakpoints={{
                        768: {
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
                >
                    {users.map((user, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide">
                                <div className="card-grid-3 d-flex flex-column h-100">
                                    <div className="position-relative">
                                        <div className="card-grid-3-image">
                                            <Link legacyBehavior href={`/profile/${user._id}`}>
                                                <a>
                                                    <figure className="mb-0"> 
                                                        <img alt={user.name} src={user.profile.banner || "/assets/imgs/default/banner.jpg"} />
                                                    </figure>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="card-grid-3-pfp position-absolute">
                                            <img
                                                src={user.profile.pfp || "/assets/imgs/default/user.png"}
                                                alt={`${user.name} pfp`}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="card-block-info">
                                        <div>
                                            <h5 className="mb-2 pt-2">
                                                <Link legacyBehavior href={`/profile/${user._id}`}>
                                                    <a>{user.name}</a>
                                                </Link>
                                            </h5>
                                            <p className="color-text-paragraph font-sm mb-3">
                                                {user.profile.aboutMeShort || "Sem descrição disponível."}
                                            </p>

                                            {user.profile.skills?.length > 0 && (
                                                <div className="skills-wrapper mb-3">
                                                    {user.profile.skills
                                                        .sort((a, b) => b.value - a.value)
                                                        .slice(0, 4)
                                                        .map((skill, index) => (
                                                            <Link legacyBehavior href="/jobs-grid" key={index}>
                                                                <a className="btn btn-tags-sm">{skill.name}</a>
                                                            </Link>
                                                        ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="row mt-auto">
                                            {user.profile.city ? (
                                                <>
                                                    <div className="col-7 d-flex align-items-end">
                                                        <span className="city-info">
                                                            {user.profile.city}
                                                            {user.profile.country && `, ${user.profile.country}`}
                                                        </span>
                                                    </div>
                                                    <div className="col-5">
                                                        <span className="d-flex justify-content-end align-items-center">
                                                            <a
                                                                className="btn btn-apply-now"
                                                                href={`profile/${user._id}`}
                                                                style={{ width: "100%" }}
                                                            >
                                                                Ver perfil
                                                            </a>
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="col-12">
                                                    <span className="d-flex justify-content-end align-items-center">
                                                        <a
                                                            className="btn btn-apply-now"
                                                            href={`profile/${user._id}`}
                                                            style={{ width: "100%" }}
                                                        >
                                                            Ver perfil
                                                        </a>
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
        </>
    );
};

export default CandidatesSlider;