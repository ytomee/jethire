import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="sidebar-shadow none-shadow mb-30">
                <div className="sidebar-filters">
                    <div className="filter-block head-border mb-30">
                        <h5>
                            Filtros avançados
                            <Link legacyBehavior href="#">
                                <a className="link-reset"><i className="fa-solid fa-rotate-right mr-5"></i> Repor</a>
                            </Link>
                        </h5>
                    </div>
                    <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-15">Indústria</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="1" />
                                        <span className="text-small">Desenvolvimento</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">1</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="2" />
                                        <span className="text-small">Redes</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">2</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="3" />
                                        <span className="text-small">Cibersegurança</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">3</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="4" />
                                        <span className="text-small">Dados & IA</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">4</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="5" />
                                        <span className="text-small">Suporte Técnico</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">5</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="6" />
                                        <span className="text-small">Hardware & IoT</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">6</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="7" />
                                        <span className="text-small">Cloud</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">7</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="8" />
                                        <span className="text-small">Marketing</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">8</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="9" />
                                        <span className="text-small">UI & UX</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">9</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="10" />
                                        <span className="text-small">Consultoria</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">10</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" value="11" />
                                        <span className="text-small">E-Commerce</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">11</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Experiência</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small"> {'<'} 1 ano</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">56</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">1-2 anos</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">87</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="text-small">2-3 anos</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">24</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">3-4 anos</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">45</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">4-5 anos</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">76</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small"> {'>'} 5 anos </span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">89</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Modalidade</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Presencial</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">12</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="text-small">Remoto</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">65</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Híbrido</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">58</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Oferta publicada</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="text-small">All</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">78</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">1 dia</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">65</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">7 dias</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">24</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">30 dias</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">56</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-15">Tipo de trabalho</h5>
                        <div className="form-group">
                            <ul className="list-checkbox">
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Tempo inteiro</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">25</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="text-small">Part-time</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">64</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Trabalhos remotos</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">78</span>
                                </li>
                                <li>
                                    <label className="cb-container">
                                        <input type="checkbox" />
                                        <span className="text-small">Freelancer</span>
                                        <span className="checkmark" />
                                    </label>
                                    <span className="number-item">97</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}