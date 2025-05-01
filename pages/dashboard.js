import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Layout>
        <section className="section-box">
            <div className="container dashboard pt-35">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 dashboard-sidebar">
                        <h4 className="mb-10">Geral</h4>
                        <ul className="dashboard-list">
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                        </ul>
                        
                        <hr></hr>

                        <h4 className="mb-10">Empresa</h4>
                        <ul className="dashboard-list">
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                        </ul>
                                                
                        <hr></hr>

                        <h4 className="mb-10">Administrador</h4>
                        <ul className="dashboard-list">
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span>Dados Pessoais</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Conteúdo */}
                    <div className="col-md-9 col-lg-10">
                        <div className="dashboard-body">
                            <h2>Bem-vindo ao teu perfil</h2>
                            <p>Escolhe uma opção do menu à esquerda para começares a editar o teu perfil.</p>
                            {/* Aqui colocas o conteúdo consoante a secção selecionada */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
}