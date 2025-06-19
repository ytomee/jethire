/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Company from "../../models/company";
import connectMongoDB from "../../lib/mongodb";

export default function CompanyDetails({ company }) {
    
    if (!company) {
        return (
            <Layout>
                <div className="container pt-50 pb-50 text-center">
                    <h2>Empresa não encontrada</h2>
                    <Link href="/">Voltar à página inicial</Link>
                </div>
            </Layout>
        );
    }

    return (
        <>  
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src={company.banner?.secure_url} />
                            </div>
                            <div className="box-company-profile" style={{padding: 0}}>
                                <div className="row mt-10">
                                    <div className="col-lg-8 col-md-12 d-flex align-items-end">
                                        <div className="company-pfp mr-25">
                                            <img style={{ height: "60px", width: "60px" }} src={company.logo?.secure_url} />
                                        </div>
                                        <div className="mb-5">
                                            {company.name && (
                                                <h5 className="company-label">
                                                    {company.name}
                                                    {(company.city || company.country) && (
                                                    <span className="card-location font-regular">
                                                        <i className="fa-solid fa-map-pin mr-5"></i>
                                                        {[company.city, company.country].filter(Boolean).join(", ")}
                                                    </span>
                                                    )}
                                                </h5>
                                            )}     
                                            {company.slogan && ( <p className="mt-5 font-md color-text-paragraph-2">{company.slogan}</p> )}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 d-flex justify-content-end align-items-center">
                                        {company.contact?.email && (
                                            <a href={`mailto:${company.contact.email}`} className="btn btn-apply" style={{ padding: "18px", fontSize: "16px" }}>
                                                <i className="fa-solid fa-phone mr-10"></i>Contacte-nos
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10" />
                        </div>
                    </section>
                    <section className="section-box mt-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    {company.description && company.description.length > 0 && (
                                        <div className="content-single">
                                            {company.description.map((desc, i) => (
                                                <div key={i} className="mb-30">
                                                    {desc.title && <h4 className="mt-0 mb-20">{desc.title}</h4>}
                                                    {desc.text.split('\n').map((linha, j) => (
                                                        <p key={j}>{linha}</p>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                    <div className="sidebar-border">
                                        <div className="sidebar-heading">
                                            <div className="avatar-sidebar">
                                                <div className="sidebar-info pl-0">
                                                    <span className="sidebar-company">Visão geral</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-list-job">
                                            <ul>
                                                {company.tags?.length > 0 && (
                                                    <li>
                                                        <div className="sidebar-icon-item">
                                                            <i className="fi-rr-briefcase" />
                                                        </div>
                                                        <div className="sidebar-text-info">
                                                            <span className="text-description">Áreas de trabalho</span><br />
                                                            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5px" }}>
                                                                {company.tags.slice(0, 8).map((tag, i, arr) => (
                                                                    <strong
                                                                        key={i}
                                                                        className="small-heading"
                                                                        style={{ fontSize: "12px", whiteSpace: "nowrap" }}
                                                                    >
                                                                        {tag}{i < arr.length - 1 && <span style={{ margin: "0 5px", color: "#E87783" }}>•</span>}
                                                                    </strong>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                                <li>
                                                    <div className="sidebar-icon-item">
                                                        <i className="fi-rr-dollar" />
                                                    </div>
                                                    <div className="sidebar-text-info">
                                                        <span className="text-description">Remote friendly</span>
                                                        <strong className="small-heading">{company.remote == "yes" ? "Sim" : "Não"}</strong>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-icon-item">
                                                        <i className="fi-rr-clock" />
                                                    </div>
                                                    <div className="sidebar-text-info">
                                                        <span className="text-description">Aderiu á Jet Hire em</span>
                                                        <strong className="small-heading">
                                                            {new Date(company.createdAt).toLocaleDateString('pt-PT', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                            })}
                                                        </strong>
                                                    </div>
                                                </li>
                                                {company.foundationYear && (
                                                <li>
                                                    <div className="sidebar-icon-item">
                                                        <i className="fi-rr-time-fast" />
                                                    </div>
                                                    <div className="sidebar-text-info">
                                                        <span className="text-description">Ano de fundação</span>
                                                        <strong className="small-heading">{company.foundationYear}</strong>
                                                    </div>
                                                </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="sidebar-list-job">
                                            <ul>
                                                {company.address && (<li><strong>Morada:</strong> {company.address}</li>)}
                                                {company.contact.phone && (<li><strong>Telefone:</strong> {company.contact.phone}</li>)}
                                                {company.contact.email && (<li><strong>Email:</strong> {company.contact.email}</li>)}
                                            </ul>
                                            <div className="mt-30">
                                                <Link legacyBehavior href="mailto: ">
                                                    <a className="btn btn-send-message">Enviar email</a>
                                                </Link>
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

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        await connectMongoDB();
        const company = await Company.findById(id).select("-team -pending").lean();

        if (!company) {
            return { notFound: true };
        }

        return { props: { company: JSON.parse(JSON.stringify(company)) } };

    } catch (error) {
        console.error(error);
        return { props: { company: null }};
    }
}
