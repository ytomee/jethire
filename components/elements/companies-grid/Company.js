// pages/company/index.tsx (ou .jsx)
import Link from "next/link";
import connectMongoDB from "../../../lib/mongodb";
import Company from "../../../models/company";
console.log("Modelo Company:", Company);

export default function CompanyPage({ companies = [] }) {

    if (!companies || companies.length === 0) {
        return <p className="text-center py-5">Nenhuma empresa encontrada.</p>;
    }

    return (
        <div className="row">
            {companies.map((company) => (
                <div key={company._id} className="col-md-6 col-sm-12 col-12 mb-4">
                    <div className="card-grid-3 d-flex flex-column h-100">
                        <div className="position-relative">
                            <div className="card-grid-3-image">
                                <Link legacyBehavior href={`/profile/${company._id}`}>
                                    <a>
                                        <figure className="mb-0">
                                            <img
                                                src={company.banner || "/assets/imgs/default/banner.jpg"}
                                                alt="Banner"
                                            />
                                        </figure>
                                    </a>
                                </Link>
                            </div>
                            <div className="card-grid-3-pfp position-absolute">
                                <img
                                    src={company.pfp || "/assets/imgs/default/user.png"}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    alt="Logo"
                                />
                            </div>
                        </div>

                        <div className="card-block-info d-flex flex-column h-100">
                            <div>
                                <h5 className="mb-2 pt-2">
                                    <Link legacyBehavior href={`/profile/${company._id}`}>
                                        <a>{company.name || "Nome não disponível"}</a>
                                    </Link>
                                </h5>
                                <p className="color-text-paragraph font-sm mb-3">
                                    {company.descriptions?.[0]?.description || "Sem descrição disponível."}
                                </p>

                                <div className="skills-wrapper mb-3">
                                    {company.tags?.slice(0, 4).map((tag, i) => (
                                        <Link legacyBehavior key={i} href="/jobs-grid">
                                            <a className="btn btn-tags-sm">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="row mt-auto">
                                <div className="col-7 d-flex align-items-end">
                                    <span className="city-info">
                                        {company.city || "Cidade não definida"}
                                        {company.country && `, ${company.country}`}
                                    </span>
                                </div>
                                <div className="col-5">
                                    <span className="d-flex justify-content-end align-items-center">
                                        <a
                                            className="btn btn-apply-now"
                                            href={`/profile/${company._id}`}
                                            style={{ width: "100%" }}
                                        >
                                            Ver perfil
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
  try {
    await connectMongoDB();
    const companies = await Company.find({})
      .select("-team -pending")
      .lean();

    return {
      props: {
        companies: JSON.parse(JSON.stringify(companies)),
      },
    };
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    return {
      props: {
        companies: [],
      },
    };
  }
}
