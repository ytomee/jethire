import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import countries from "/components/json/countries.json";

export default function CompanyForm({ setShowForm, setShowValidRequest }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/company-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setShowForm(false);
        setShowValidRequest(true);
      } else {
        const data = await res.json();
        alert(data.error || "Erro ao submeter o formulário.");
      }
      
    } catch (error) {
      console.error("Erro ao submeter:", error);
      alert("Erro ao submeter o formulário.");
    }
  };  

  const generateYears = () => {
    const years = [];
    for (let year = 2025; year >= 1800; year--) {
      years.push(year);
    }
    return years;
  };
  const years = generateYears();

  return (
    <AnimatePresence>
      <motion.div
        className="company-form-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="company-form-wrapper">
          <button
            className="company-form-close"
            onClick={() => setShowForm(false)}
          >
            &times;
          </button>

          <form className="company-form" onSubmit={handleSubmit}>
            <div className="company-form-title">Formulário de registo de empresa</div>
            <div className="company-form-desc">Entraremos em contacto consigo o mais rápido possível.</div>

            <div className="row">
              <div className="col-12">
                <h3 className="mb-20"><i className="fa-regular fa-building mr-10"></i>Dados da empresa</h3>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="mb-10">Nome</h5>
                <div className="input-style mb-20">
                  <input
                    name="companyName"
                    value={formData.companyName || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">NIF</h5>
                <div className="input-style mb-20">
                  <input
                    name="nif"
                    value={formData.nif || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">Ano de fundação</h5>
                <div className="select-style mb-20">
                  <select
                    name="foundedYear"
                    value={formData.foundedYear || ""}
                    onChange={handleChange}
                  >
                    <option value="">Selec.</option>
                    {years.map((year) => (
                      <option key={`year-${year}`} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="col-12">
                <h3 className="mt-20 mb-20"><i className="fa-solid fa-map-pin mr-10"></i>Localização</h3>
              </div>
              <div className="col-12 col-md-3">
                <h5 className="mb-10">País</h5>
                <div className="select-style mb-20">
                  <select
                    name="country"
                    value={formData.country || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selec.</option>
                    {countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">Cidade</h5>
                <div className="input-style mb-20">
                  <input
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Morada completa</h5>
                <div className="input-style mb-20">
                  <input
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              
              <div className="col-12">
                <h3 className="mt-20 mb-20"><i className="fa-regular fa-address-book mr-10"></i>Contactos</h3>
              </div>
              <div className="col-12 col-md-3">
                <h5 className="mb-10">Telefone</h5>
                <div className="input-style mb-20">
                  <input
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              
              <div className="col-12 col-md-5">
                <h5 className="mb-10">Email</h5>
                <div className="input-style mb-20">
                  <input
                    name="generalEmail"
                    value={formData.generalEmail || ""}
                    onChange={handleChange}
                    type="email"
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">Website</h5>
                <div className="input-style mb-20">
                  <input
                    name="website"
                    value={formData.website || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              
              <div className="col-12">
                <h3 className="mt-20 mb-20"><i className="fa-solid fa-user-tie mr-10"></i>Responsável pelo registo</h3>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="mb-10">Nome</h5>
                <div className="input-style mb-20">
                  <input
                    name="responsiblePerson"
                    value={formData.responsiblePerson || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">Email</h5>
                <div className="input-style mb-20">
                  <input
                    name="responsibleEmail"
                    value={formData.responsibleEmail || ""}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">Telefone</h5>
                <div className="input-style mb-20">
                  <input
                    name="responsiblePhone"
                    value={formData.responsiblePhone || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="company-form-button mt-4">
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}