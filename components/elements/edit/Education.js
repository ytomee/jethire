'use client'

import { useState, useEffect } from "react";

export default function Education({ formData, setFormData }) {

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
        course: "",
        institute: "",
        startYear: "",
        endYear: "",
    });

    useEffect(() => {
        if (formData?.profile?.education) {
            setEducations(formData.profile.education);
        }
    }, [formData]); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEducation({ ...newEducation, [name]: value });
    };

    const addEducation = (e) => {
        e.preventDefault();
        const { course, institute, startYear, endYear } = newEducation;

        if (!course || !institute || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        const updatedEducation = {
            course,
            institute,
            start: startYear,
            end: endYear,
        };

        setEducations([...educations, updatedEducation]);

        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                education: [
                    ...(prevFormData.profile?.education || []),
                    updatedEducation,
                ],
            },
        }));

        setNewEducation({ course: "", institute: "", startYear: "", endYear: "" });
    };

    const removeEducation = (index) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);

        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                education: updatedEducations,
            },
        }));
    };

    return (
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
                            <div className="input-style">{edu.course}</div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-style">{edu.institute}</div>
                        </div>
                        <div className="col-lg-1">
                            <div>{edu.start}</div>
                        </div>
                        <div className="col-lg-1">
                            <div>{edu.end}</div>
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
                            name="course"
                            value={newEducation.course}
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
                            name="institute"
                            value={newEducation.institute}
                            placeholder="ex: ISEC"
                            onChange={handleInputChange}
                            type="text"
                        />
                    </div>
                </div>
                <div className="col-lg-1">
                    <h6 className="mb-10">Início</h6>
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
    );
}