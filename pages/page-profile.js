/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useState , useEffect } from "react";

export default function RegistProfile() {

    const [charCount, setCharCount] = useState(0);

    //FORM CODE

    const handleTextChange = (e) => {
        setCharCount(e.target.value.length);
    };

    const generateYears = () => {
        const years = [];
        for (let year = 2025; year >= 1950; year--) {
            years.push(year);
        }
        return years;
    };

    const years = generateYears();

    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState({
        role: "",
        company: "",
        startYear: "",
        endYear: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEducation({ ...newEducation, [name]: value });
    };

    const addEducation = (e) => {
        e.preventDefault();
        const { role, company, startYear, endYear } = newEducation;

        if (!role || !company || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        setEducations([...educations, newEducation]);
        setNewEducation({ role: "", company: "", startYear: "", endYear: "" });
    };

    const removeEducation = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        role: "",
        company: "",
        startYear: "",
        endYear: "",
    });

    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value });
    };

    const addExperience = (e) => {
        e.preventDefault();
        const { role, company, startYear, endYear } = newExperience;

        if (!role || !company || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        setExperiences([...experiences, newExperience]);
        setNewExperience({ role: "", company: "", startYear: "", endYear: "" });
    };

    const removeExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    

    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                    <div>
                        <span className="font-md color-brand-2 mt-20 d-inline-block">Criação de perfil</span>
                        <h2 className="mt-5 mb-10">Olá, vamos criar a sua conta!</h2>
                        <p className="font-md color-text-paragraph-2">
                            Para se dar a conhecer melhor, e encontrar mais eficazmente a sua oportunidade de trabalho, preencha os seguintes dados.
                        </p>
                        <form className="contact-form-style mt-30" id="profile-form" action="#" method="POST">
                            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <div className="col-lg-10">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 mb-10">
                                            <h4 className="mb-10">Cidade</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="city" placeholder="ex: Cantanhede" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 mb-10">
                                            <h4 className="mb-10">Distrito</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="district" placeholder="ex: Coimbra" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-10">
                                            <h4 className="mb-10">Telemóvel</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="phone" placeholder="ex: 918273878" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-10">
                                            <h4 className="mb-10">Profissão atual</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="job" placeholder="(Se aplicável)" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-10">
                                            <h4 className="mb-10">Empresa</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="company" placeholder="(Se aplicável)" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-10">
                                            <h4 className="mb-10">Anos de experiência</h4>
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="yearsExperience" placeholder="ex: 4" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <h4 className="mb-10">Foto de perfil</h4>
                                    <div className="input-style mb-20">
                                        <input 
                                            id="pfp-upload" 
                                            className="file-input" 
                                            name="pfp" 
                                            type="file" 
                                            style={{ display: "none" }} 
                                        />
                                        <label 
                                            htmlFor="pfp-upload" 
                                            className="upload-label-pfp font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
                                        >
                                            <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <h4 className="mb-10">Foto de fundo</h4>
                                    <div className="input-style mb-20">
                                        <input 
                                            id="banner-upload" 
                                            className="file-input" 
                                            name="banner" 
                                            type="file" 
                                            style={{ display: "none" }} 
                                        />
                                        <label 
                                            htmlFor="banner-upload" 
                                            className="upload-label-pfp font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
                                        >
                                            <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="mb-10">Sobre mim</h4>
                                    <div className="textarea-style">
                                        <textarea className="font-sm color-text-paragraph-2" 
                                                  name="aboutMe" 
                                                  placeholder="Conte-nos um pouco sobre si." 
                                                  maxLength="3000"
                                                  onChange={handleTextChange}
                                                  defaultValue={""} 
                                        />
                                    </div>
                                    <p className="char-number">{charCount}/3000</p>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-10">
                                    <h4 className="mb-10">Nível de educação</h4>
                                    <div className="input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="educationLevel" placeholder="(Se aplicável)" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-10">
                                    <h4 className="mb-10">Línguas</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="lang1" placeholder="ex: Português" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="lang2" placeholder="ex: Francês" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-style mb-20">
                                                <input className="font-sm color-text-paragraph-2" name="lang3" placeholder="ex: Inglês" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="mb-10">Educação</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h6 className="mb-5">Curso</h6>
                                        </div>
                                        <div className="col-lg-3">
                                            <h6 className="mb-5">Instituto</h6>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-5">Início</h6>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-5">Fim</h6>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                    {educations.length === 0 ? (
                                        <div className="mb-20">Sem nenhum registo.</div>
                                    ) : (
                                        educations.map((edu, index) => (
                                            <div className="row mb-10" key={index}>
                                                <div className="col-lg-6">
                                                    <div className="input-style">{edu.role}</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="input-style">{edu.company}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div>{edu.startYear}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div>{edu.endYear}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button
                                                        className="remove-button-profile"
                                                        onClick={() => removeEducation(index)}
                                                        type="button"
                                                    >
                                                        <strong>Remover</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h6 className="mb-10">Curso</h6>
                                            <div className="input-style mb-20">
                                                <input
                                                    className="font-sm color-text-paragraph-2"
                                                    name="role"
                                                    value={newEducation.role}
                                                    placeholder="ex: Engenheiro Informático"
                                                    onChange={handleInputChange}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <h6 className="mb-10">Instituto</h6>
                                            <div className="input-style mb-20">
                                                <input
                                                    className="font-sm color-text-paragraph-2"
                                                    name="company"
                                                    value={newEducation.company}
                                                    placeholder="ex: ISEC"
                                                    onChange={handleInputChange}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-10">Ínicio</h6>
                                            <div className="select-style mb-20">
                                                <select name="startYear" value={newEducation.startYear} onChange={handleInputChange}>
                                                    <option>Selec.</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-10">Fim</h6>
                                            <div className="select-style mb-20">
                                                <select name="endYear" value={newEducation.endYear} onChange={handleInputChange}>
                                                    <option>Selec.</option>
                                                    <option value="Atual">Atual</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 mb-20">
                                            <h6 className="mb-10">Adicionar</h6>
                                            <div className="mb-20">
                                                <button className="btn-submit-register-form" onClick={addEducation}>
                                                 <i className="fa-solid fa-plus mr-5"></i> Adic.
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <h4 className="mb-10">Experiência</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h6 className="mb-5">Curso</h6>
                                        </div>
                                        <div className="col-lg-3">
                                            <h6 className="mb-5">Instituto</h6>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-5">Início</h6>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-5">Fim</h6>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>
                                    {experiences.length === 0 ? (
                                        <div className="mb-20">Sem nenhum registo.</div>
                                    ) : (
                                        experiences.map((exp, index) => (
                                            <div className="row mb-10" key={index}>
                                                <div className="col-lg-6">
                                                    <div className="input-style">{exp.role}</div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="input-style">{exp.company}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div>{exp.startYear}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <div>{exp.endYear}</div>
                                                </div>
                                                <div className="col-lg-1">
                                                    <button
                                                        className="remove-button-profile"
                                                        onClick={() => removeExperience(index)}
                                                        type="button"
                                                    >
                                                       Remover
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h6 className="mb-10">Função</h6>
                                            <div className="input-style mb-20">
                                                <input
                                                    className="font-sm color-text-paragraph-2"
                                                    name="role"
                                                    value={newExperience.role}
                                                    placeholder="ex: Desenvolvedor Front-End"
                                                    onChange={handleExperienceChange}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <h6 className="mb-10">Empresa</h6>
                                            <div className="input-style mb-20">
                                                <input
                                                    className="font-sm color-text-paragraph-2"
                                                    name="company"
                                                    value={newExperience.company}
                                                    placeholder="ex: Jet Hire"
                                                    onChange={handleExperienceChange}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-10">Ínicio</h6>
                                            <div className="select-style mb-20">
                                                <select name="startYear" value={newExperience.startYear} onChange={handleExperienceChange}>
                                                    <option>Selec.</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <h6 className="mb-10">Fim</h6>
                                            <div className="select-style mb-20">
                                                <select name="endYear" value={newExperience.endYear} onChange={handleExperienceChange}>
                                                    <option>Selec.</option>
                                                    <option value="Atual">Atual</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 mb-20">
                                            <h6 className="mb-10">Adicionar</h6>
                                            <div className="mb-20">
                                                <button className="btn-submit-register-form" onClick={addExperience}>
                                                    <i className="fa-solid fa-plus mr-5"></i> Adic.
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-20">
                                    <h4 className="mb-10">Site pessoal</h4>
                                    <div className="input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="site" placeholder="jethire.pt" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="mb-10">GitHub</h4>
                                    <div className="input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="github" placeholder="www.github.com" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="mb-10">LinkedIn</h4>
                                    <div className="input-style mb-20">
                                        <input className="font-sm color-text-paragraph-2" name="linkedin" placeholder="www.linkedin.com" type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h4 className="mb-10">Curriculum Vitae</h4>
                                    <div className="input-style mb-20">
                                        <input 
                                            id="cv-upload" 
                                            className="file-input" 
                                            name="cv" 
                                            type="file" 
                                            style={{ display: "none" }} 
                                        />
                                        <label 
                                            htmlFor="cv-upload" 
                                            className="upload-label font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
                                        >
                                            <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button className="btn-submit btn" type="submit">
                                        Terminar o registo
                                    </button>
                                    <label className="ml-20">
                                        <input required className="float-start mr-5 mt-6" type="checkbox" /> Ao confirmar esta caixa, está a concordar com os nossos <a className="terms-conditions">Termos & Condições</a>.
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
