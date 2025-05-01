'use client'

import { useState, useEffect } from "react";

export default function Experience({ formData, setFormData }) {

    const generateYears = () => {
        const years = [];
        for (let year = 2025; year >= 1950; year--) {
            years.push(year);
        }
        return years;
    };

    const years = generateYears();

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        role: "",
        institute: "",
        startYear: "",
        endYear: "",
    });

    useEffect(() => {
        if (formData?.profile?.workExperience) {
            setExperiences(formData.profile.workExperience);
        }
    }, [formData]); 

    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value });
    };

    const addExperience = (e) => {
        e.preventDefault();
        const { role, institute, startYear, endYear } = newExperience;

        if (!role || !institute || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        const updatedExperience = {
            role,
            institute,
            start: startYear,
            end: endYear,
        };

        setExperiences([...experiences, updatedExperience]);

        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                workExperience: [
                    ...(prevFormData.profile?.workExperience || []),
                    updatedExperience,
                ],
            },
        }));

        setNewExperience({ role: "", institute: "", startYear: "", endYear: "" });
    };

    const removeExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);

        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                workExperience: updatedExperiences,
            },
        }));
    };

    return (
        <div className="col-lg-12">
            <h4 className="mb-10">Experiência</h4>
            <div className="row">
                <div className="col-lg-6">
                    <h6 className="mb-5">Função</h6>
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
                            <div className="input-style">{exp.institute}</div>
                        </div>
                        <div className="col-lg-1">
                            <div>{exp.start}</div>
                        </div>
                        <div className="col-lg-1">
                            <div>{exp.end}</div>
                        </div>
                        <div className="col-lg-1">
                            <button
                                className="remove-button-profile"
                                onClick={() => removeExperience(index)}
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
                    <h6 className="mb-10">Instituto</h6>
                    <div className="input-style mb-20">
                        <input
                            className="font-sm color-text-paragraph-2"
                            name="institute"
                            value={newExperience.institute}
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
    );
}