import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import React from "react";
import User from "../../models/user";
import connectMongoDB from "../../lib/mongodb";
import { useSession } from "next-auth/react";

export default function Profile({ user, profileComplete, profilePercentage, mainPercentage, sidebarPercentage }) {

    const { data: session } = useSession();

    if (!user) {
        return <div>404</div>;
    }

    return (
        <>
            <Layout>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single">
                            {user.profile.banner ? (
                                <img src={user.profile.banner} alt="banner" />
                            ) : (
                                <img src="/assets/imgs/default/banner.jpg" alt="banner" />
                            )}
                        </div>
                        <div className="box-company-profile">
                            <div className="image-company">
                                {user.profile.pfp ? (
                                    <img src={user.profile.pfp} alt="pfp" />
                                ) : (
                                    <img src="/assets/imgs/default/user.png" alt="pfp" />
                                )}
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <h3>
                                        <span style={{ textTransform: "capitalize" }}>{user.name}</span>
                                        {user.profile.city && (
                                            <span className="card-location font-regular">
                                                <i className="fa-solid fa-location-dot mr-5"></i>
                                                {user.profile.city}
                                                {user.profile.country && `, ${user.profile.country}`}
                                            </span>
                                        )}
                                    </h3>
                                    {user.profile.role ? (
                                        <p className="mt-5 font-md color-text-paragraph">{user.profile.role}</p>
                                    ) : (
                                        <p className="mt-5 font-md color-text-paragraph">À procura de emprego</p>
                                    )}
                                </div>
                                {user.profile.cv && (
                                    <div className="col-lg-4 col-md-12 text-lg-end">
                                        <Link legacyBehavior href="page-contact">
                                            <a 
                                                className="btn btn-apply-big"
                                                href={user.profile.cv}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            ><i className="fa-solid fa-link mr-5"></i>Curriculum Vitae</a>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="border-bottom pt-10 pb-10" />
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className={sidebarPercentage == 0 
                                ? "col-lg-12 col-md-12 col-sm-12 col-12" 
                                : "col-lg-8 col-md-12 col-sm-12 col-12"
                            }>
                                <div className="content-single">
                                    <div className="tab-content">
                                        {mainPercentage != 0 ? (
                                            <div>
                                                {user.profile.aboutMe && user.profile.aboutMe.length > 0 && (
                                                    <>
                                                        <h4 className="mt-0 mb-20">Sobre mim</h4>
                                                        {user.profile.aboutMe.split('\n').map((linha, i) => (
                                                            <p key={i}>{linha}</p>
                                                        ))}
                                                    </>
                                                )}

                                                {user.profile.skills && user.profile.skills.length > 0 && (
                                                    <>
                                                        <h4 className="mt-40">Competências profissionais</h4>
                                                        <div className="row">
                                                            {user.profile.skills.map((skill, index) => (
                                                                <div key={index} className="col-lg-6 mt-3">
                                                                    <div className="box-progress-bar">
                                                                        <p className="font-xs color-text-paragraph mb-10 main-color">{skill.name}</p>
                                                                        <div className="progress">
                                                                            <div className="progress-bar bg-paragraph-2" 
                                                                                role="progressbar" 
                                                                                style={{ width: `${skill.value}%` }}
                                                                                aria-valuenow={25} 
                                                                                aria-valuemin={0} 
                                                                                aria-valuemax={100}>
                                                                                <span>{skill.value}%</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                                
                                                {user.profile.workExperience && user.profile.workExperience.length > 0 && (
                                                    <>
                                                        <h4 className="mt-50">Experiência</h4>
                                                        {user.profile.workExperience.map((experience, index) => (
                                                            <ul key={index} className="profile-list">
                                                                <li>
                                                                    <div className="institute"><i className="fa-solid fa-house-crack mr-10"></i>{experience.institute}</div>
                                                                    <div className="role"><i className="fa-solid fa-briefcase mr-10"></i>{experience.role}</div>
                                                                    <div className="timeframe"><i className="fa-regular fa-clock mr-10"></i>{experience.start} - {experience.end}</div>
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </>
                                                )}

                                                {user.profile.education && user.profile.education.length > 0 && (
                                                    <>
                                                        <h4 className="mt-50">Educação</h4>
                                                        {user.profile.education.map((education, index) => (
                                                            <ul key={index} className="profile-list">
                                                                <li>
                                                                    <div className="institute"><i className="fa-solid fa-house-crack mr-10"></i>{education.institute}</div>
                                                                    <div className="role"><i className="fa-solid fa-briefcase mr-10"></i>{education.course}</div>
                                                                    <div className="timeframe"><i className="fa-regular fa-clock mr-10"></i>{education.start} - {education.end}</div>
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </>
                                                )}

                                                {user.profile.portfolio && user.profile.portfolio.length > 0 && (
                                                    <>
                                                        <h4 className="mt-40">Os meus projetos</h4>
                                                        <div className="row mt-10">
                                                            {user.profile.portfolio.map((portfolio, index) => (
                                                                <div key={index} className="col-6">
                                                                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                                                                        <div className="portfolio-square" style={{ backgroundImage: `url(${portfolio.image.url})` }}>
                                                                            <div className="portfolio-overlay">
                                                                                <span className="portfolio-text">{portfolio.label}</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="profile-noresults">
                                                <i className="fa-solid fa-heart-crack"></i>
                                                <h5>Parece que este utilizador ainda não configurou o seu perfil...</h5>

                                                {session?.user?.id === user._id && (
                                                    <div className="text-center mt-20">
                                                        <a href={`/edit/${user._id}`} className="btn btn-default">Editar perfil</a>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {sidebarPercentage != 0 && (
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    {session?.user?.id === user._id && (
                                        <div className="sidebar-border">
                                            {!profileComplete ? (
                                                <>
                                                    <h5 className="f-14">Parece que ainda não completou o seu perfil.</h5>
                                                    <p>Vamos mudar isso!</p>
                                                    <h5 className="f-14 mt-5">{profilePercentage}% completo</h5>
                                                </>
                                            ) : (
                                                <>
                                                    <h5 className="f-14">O seu perfil está completo!</h5>
                                                    <p>Se quiser fazer alguma alteração, ainda pode.</p>
                                                </>
                                            )}
                                            <a href={`/edit/${user._id}`} className="btn btn-default mt-10">Editar perfil</a>
                                        </div>
                                    )}

                                    <div className="sidebar-border">
                                        <h5 className="f-18">Visão geral</h5>
                                        <div className="sidebar-list-job">
                                            <ul>
                                                {user.profile.yearsExperience && (
                                                    <li>
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-solid fa-user-clock"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="text-description">Experiência</span>
                                                            <strong className="small-heading">{user.profile.yearsExperience}</strong>
                                                        </div>
                                                    </li>
                                                )}
                                                {user.profile.languages && user.profile.languages.length > 0 && (
                                                    <li>
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-solid fa-earth-americas"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="text-description">Línguas</span>
                                                            <strong className="small-heading">
                                                                {user.profile.languages.join(", ")}
                                                            </strong>
                                                        </div>
                                                    </li>
                                                )}
                                                {user.profile.educationLevel && (
                                                    <li className="pb-15">
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-solid fa-graduation-cap"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="text-description">Nível de educação</span>
                                                            <strong className="small-heading">{user.profile.educationLevel}</strong>
                                                        </div>
                                                    </li>
                                                )}
                                                {user.profile.site && (
                                                    <li className="pb-10">
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-solid fa-link"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="socials">
                                                                <a
                                                                    href={user.profile.site.startsWith("http") 
                                                                        ? user.profile.site 
                                                                        : `https://${user.profile.site}`
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Site pessoal
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                )}
                                                {user.profile.github && (
                                                    <li>
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-brands fa-github"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="socials">
                                                                <a
                                                                    href={user.profile.github.startsWith("http") 
                                                                        ? user.profile.github 
                                                                        : `https://${user.profile.github}`
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    GitHub
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                )}
                                                {user.profile.linkedin && (
                                                    <li>
                                                        <div className="sidebar-icon-item">
                                                            <i className="fa-brands fa-linkedin"></i>
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="socials">
                                                                <a
                                                                    href={user.profile.linkedin.startsWith("http") 
                                                                        ? user.profile.linkedin 
                                                                        : `https://${user.profile.linkedin}`
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    LinkedIn
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        <div className="sidebar-list-job">
                                            <ul>
                                                {user.profile.city && (
                                                    <li>
                                                        <strong>Localização: </strong>
                                                        {user.profile.city}
                                                        {user.profile.country && `, ${user.profile.country}`}
                                                    </li>
                                                )}
                                                {user.profile.phone && (
                                                    <li><strong>Telemóvel: </strong>{user.profile.phone}</li>
                                                )}
                                                <li>
                                                    <strong>Email: </strong>
                                                    {!user.profile.contactEmail ? user.email : user.profile.contactEmail}
                                                </li>
                                            </ul>
                                            <div className="mt-30">
                                                <a className="btn btn-submit" style={{ width: "100%" }}>
                                                    <i className="fa-solid fa-paper-plane mr-10"></i>
                                                    Entrar em contacto
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

function checkProfileCompletion(profile) {
    if (!profile) return { complete: false, percentage: 0 };

    const requiredFields = [
        "city",
        "country",
        "aboutMe",
        "yearsExperience",
        "languages",
        "educationLevel",
        "phone",
        "skills",
        "pfp", 
        "banner",
        "cv"
    ];

    let filledCount = 0;

    requiredFields.forEach((field) => {
        if (Array.isArray(profile[field])) {
            if (profile[field].length > 0) filledCount++;
        } else if (profile[field]) {
            filledCount++;
        }
    });

    const percentage = Math.round((filledCount / requiredFields.length) * 100);

    return {
        complete: percentage === 100,
        percentage,
    };
}

function checkMainProfile(profile) {
    if (!profile) return { complete: false, percentage: 0 };

    const requiredFields = [
        "aboutMe",
        "skills",
        "workExperience",
        "education"
    ];

    let filledCount = 0;

    requiredFields.forEach((field) => {
        if (Array.isArray(profile[field])) {
            if (profile[field].length > 0) filledCount++;
        } else if (profile[field]) {
            filledCount++;
        }
    });

    const percentage = Math.round((filledCount / requiredFields.length) * 100);

    return {
        complete: percentage === 100,
        percentage,
    };
}

function checkSidebarProfile(profile) {
    if (!profile) return { complete: false, percentage: 0 };

    const requiredFields = [
        "yearsExperience",
        "languages",
        "educationLevel",
        "site",
        "github",
        "linkedin",
        "city",
        "country",
        "phone",
        "contactEmail"
    ];

    let filledCount = 0;

    requiredFields.forEach((field) => {
        if (Array.isArray(profile[field])) {
            if (profile[field].length > 0) filledCount++;
        } else if (profile[field]) {
            filledCount++;
        }
    });

    const percentage = Math.round((filledCount / requiredFields.length) * 100);

    return {
        complete: percentage === 100,
        percentage,
    };
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        await connectMongoDB();
        const user = await User.findById(id).lean();

        if (!user) {
            return { notFound: true };
        }

        const verificationResult = checkProfileCompletion(user.profile);
        const verificationMainResult = checkMainProfile(user.profile);
        const verificationSidebarResult = checkSidebarProfile(user.profile);

        return {
            props: {
                user: JSON.parse(JSON.stringify(user)),
                profileComplete: verificationResult.complete,
                profilePercentage: verificationResult.percentage,
                mainPercentage: verificationMainResult.percentage,
                sidebarPercentage: verificationSidebarResult.percentage,
            },
        };
    } catch (error) {
        console.error(error);
        return { props: { user: null, 
                          profileComplete: false, 
                          profilePercentage: 0,
                          mainPercentage: 0,
                          sidebarPercentage: 0 
               }        };
    }
}
