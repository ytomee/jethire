/* eslint-disable @next/next/no-img-element */
import mongoose from "mongoose";
import Layout from "../../components/Layout/Layout";
import connectMongoDB from "../../lib/mongodb";
import Offer from "../../models/offer";
import FavoriteButton from "../../components/elements/offers/favourite";

export default function JobDetails({ offer }) {
    return (
        <Layout>
            <div>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single">
                            <img src={offer.company.banner?.secure_url} alt="Banner da empresa" />
                        </div>
                        <div className="row mt-10">
                            <div className="col-12">
                                <h3 className="capitalize">{offer.level} {offer.role}</h3>
                                <div className="mt-5 mb-15">
                                    <span className="card-briefcase">
                                        {{ parttime: "Part-Time", fulltime: "Tempo inteiro" }[offer.type]}
                                    </span>
                                    <span className="card-time">
                                        {(() => {
                                            const created = new Date(offer.createdAt);
                                            const now = new Date();
                                            const diffMs = now - created;
                                            const diffMin = Math.floor(diffMs / 60000);
                                            const diffHr = Math.floor(diffMin / 60);
                                            const diffDays = Math.floor(diffHr / 24);

                                            if (diffMin < 1) return "Publicado agora mesmo";
                                            if (diffMin < 60) return `Publicado há ${diffMin} minuto${diffMin === 1 ? "" : "s"}`;
                                            if (diffHr < 24) return `Publicado há ${diffHr} hora${diffHr === 1 ? "" : "s"}`;
                                            return `Publicado há ${diffDays} dia${diffDays === 1 ? "" : "s"}`;
                                        })()}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="job-overview" style={{ paddingBottom: 0 }}>
                                    <h5 className="border-bottom pb-15 mb-30">Informação geral</h5>
                                    <div className="row">
                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/industry.svg" alt="Área" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Área</span>
                                                <strong className="small-heading-job">{offer.tags?.join(", ") || "Não definida"}</strong>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/experience.svg" alt="Experiência" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Experiência</span>
                                                <strong className="small-heading-job">
                                                    {{
                                                        less_than_1: "< 1 ano",
                                                        "1_to_2": "1 a 2 anos",
                                                        "2_to_3": "2 a 3 anos",
                                                        "3_to_4": "3 a 4 anos",
                                                        "4_to_5": "4 a 5 anos",
                                                        more_than_5: "> 5 anos"
                                                    }[offer.experience] || "Não definida"}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/salary.svg" alt="Salário" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Salário</span>
                                                <strong className="small-heading-job">
                                                    {offer.salaryMin || offer.salaryMax
                                                        ? `${offer.salaryMin || "?"}€ - ${offer.salaryMax || "?"}€`
                                                        : "Não definido"}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/job-level.svg" alt="Nível" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Nível</span>
                                                <strong className="small-heading-job">{offer.level}</strong>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/deadline.svg" alt="Modalidade" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Modalidade</span>
                                                <strong className="small-heading-job">
                                                    {{
                                                        presencial: "Presencial",
                                                        remote: "Remoto",
                                                        hybrid: "Híbrido"
                                                    }[offer.remote] || "Não definida"}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex align-items-start mb-4">
                                            <div className="sidebar-icon-item">
                                                <img src="/assets/imgs/page/job-single/job-type.svg" alt="Data" />
                                            </div>
                                            <div className="sidebar-text-info ml-10">
                                                <span className="text-description-job mb-1">Publicado</span>
                                                <strong className="small-heading-job">
                                                    {new Date(offer.createdAt).toLocaleDateString("pt-PT")}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-single">
                                    {Array.isArray(offer.description) && offer.description.length > 0 ? (
                                        offer.description.map((item, index) => (
                                            <div key={index} className="mb-30">
                                                <h4 className="mb-15">{item.title}</h4>
                                                <p dangerouslySetInnerHTML={{ __html: item.text.replace(/\n/g, "<br />") }} />
                                            </div>
                                        ))
                                    ) : (
                                        <p>Sem descrição disponível.</p>
                                    )}
                                </div>

                                <FavoriteButton offerId={offer._id} />
                                            
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <div className="sidebar-heading">
                                        <div className="avatar-sidebar" style={{ display: "flex", alignItems: "end", gap: "10px" }}>
                                            <figure>
                                                <img src={offer.company.logo?.secure_url} style={{ width: "60px", height: "60px", objectFit: "cover" }}/>
                                            </figure>
                                            <div className="sidebar-info" style={{ paddingLeft: 0, paddingBottom: "5px" }}>
                                                <span className="sidebar-company" style={{ fontSize: "22px", marginBottom: "5px" }}>{offer.company.name}</span>
                                                <span className="card-location" style={{padding: 0}}>{offer.company.city}, {offer.company.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-list-job">
                                        <ul className="ul-disc">
                                            {offer.company.address && <li><strong>Morada: </strong>{offer.company.address}</li>}
                                            {offer.company.phone && <li><strong>Telefone: </strong>{offer.company.phone}</li>}
                                            {offer.company.email && <li><strong>Email: </strong>{offer.company.email}</li>}
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-border mt-20">
                                    <h6 className="f-18 mb-20">Tags</h6>
                                    <div className="skills-wrapper">
                                        {offer.tags.map((tag, i) => (
                                            <a key={i} className="btn btn-tags-sm">{tag}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { notFound: true };
        }

        await connectMongoDB();
        const offer = await Offer.findById(id)
            .populate("company", "-team -pending")
            .lean();

        if (!offer) return { notFound: true };

        return {
            props: { offer: JSON.parse(JSON.stringify(offer)) }
        };

    } catch (error) {
        console.error(error);
        return { props: { offer: null } };
    }
}
