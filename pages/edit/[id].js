/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

//REACT
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";

//JSON
import countries from "../../components/json/countries.json"
import educationLevels from "../../components/json/education.json"
import yearsExperienceJson from "../../components/json/years.json"

//COMPONENTS
import Languages from "../../components/elements/edit/Languages";
import PFP from "../../components/elements/edit/PFP";
import Banner from "../../components/elements/edit/Banner";
import AboutMe from "../../components/elements/edit/AboutMe";
import AboutMeShort from "../../components/elements/edit/AboutMeShort";
import Education from "../../components/elements/edit/Education";
import Experience from "../../components/elements/edit/Experience";
import Skills from "../../components/elements/edit/Skills";
import CV from "../../components/elements/edit/CV";
import Portfolio from "../../components/elements/edit/Portfolio";

//DATABASE & SESSION
import connectMongoDB from "../../lib/mongodb";
import User from "../../models/user";
import { getSession } from "next-auth/react";

export default function EditProfile({ user }) {

    const [formData, setFormData] = useState(user);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true); 
            const res = await fetch("/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                window.location.href = `/profile/${formData._id}`;
            } else {
                setError(data.message || "Erro ao atualizar perfil.");
            }
        } catch (err) {
            setError("Erro de comunicação com o servidor.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDebug = (e) => {
        e.preventDefault();
        console.log("Dados a enviar:", JSON.stringify(formData, null, 2));
    };    

    return (
        <>
            {isLoading && (
                <div className="loading">
                    <div 
                        className="spinner-border text-danger" 
                        role="status" 
                    />
                    <h3>A carregar...</h3>
                </div>
            )}
            <Layout>
                <section>
                    <div className="container">
                        <div>
                            <span className="font-md color-brand-2 mt-20 d-inline-block">Criação de perfil</span>
                            <h2 className="mt-5 mb-10">Olá, vamos melhorar o seu perfil!</h2>
                            <p className="font-md color-text-paragraph-2">
                                Para se dar a conhecer melhor, e encontrar mais eficazmente a sua oportunidade de trabalho, preencha os seguintes dados.
                            </p>
                            <form 
                                className="contact-form-style mt-30" 
                                id="profile-form" 
                                action="#" 
                                method="POST"
                                onSubmit={handleSubmit}
                                //onSubmit={handleDebug}
                            >
                                <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-5 mb-10">
                                                <h4 className="mb-10">Cidade</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="city"
                                                        placeholder="ex: Cantanhede" 
                                                        type="text" 
                                                        onChange={handleChange}
                                                        value={formData?.profile?.city || ""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 mb-10">
                                                <h4 className="mb-10">País</h4>
                                                <div className="select-style mb-20">
                                                    <select
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        >
                                                        {formData?.profile?.country && (
                                                            <option key={formData?.profile?.country} value={formData?.profile?.country}>
                                                            {formData?.profile?.country}
                                                            </option>
                                                        )}
                                                        {countries.map((country) => (
                                                            <option key={country.name} value={country.name}>
                                                            {country.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 mb-10">
                                                <h4 className="mb-10">Telemóvel</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="phone"
                                                        placeholder="ex: 918273878" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.phone || ""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-10">
                                                <h4 className="mb-10">Profissão atual</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="role" 
                                                        placeholder="(Se aplicável)" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.role || ""} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-10">
                                                <h4 className="mb-10">Email de contactos</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="contactEmail" 
                                                        placeholder="(Deixar vazio se quiser manter o da conta)" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.contactEmail || ""} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <h4 className="mb-10">Foto de perfil</h4>
                                        <PFP setFormData={setFormData} formData={formData}></PFP>
                                    </div>
                                    <div className="col-lg-12">
                                        <h4 className="mb-10">Foto de fundo</h4>
                                        <Banner setFormData={setFormData} formData={formData}></Banner>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <h4 className="mb-10">Sobre mim</h4>
                                        <AboutMe setFormData={setFormData} formData={formData}></AboutMe>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <h4 className="mb-10">Agora resuma em poucas palavras</h4>
                                        <AboutMeShort setFormData={setFormData} formData={formData}></AboutMeShort>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-10">
                                        <h4 className="mb-10">Nível de educação</h4>
                                        <div className="select-style mb-20">
                                            <select
                                                name="educationLevel"
                                                value={formData.educationLevel}
                                                onChange={handleChange}
                                            >
                                            {formData?.profile?.educationLevel && (
                                                <option key={formData?.profile?.educationLevel} value={formData?.profile?.educationLevel}>
                                                    {formData?.profile?.educationLevel}
                                                </option>
                                            )}
                                            {educationLevels.map((education) => (
                                                <option key={education.name} value={education.name}>
                                                {education.name}
                                                </option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-10">
                                        <h4 className="mb-10">Anos de experiência</h4>
                                        <div className="select-style mb-20">
                                            <select
                                                name="yearsExperience"
                                                value={formData.yearsExperience}
                                                onChange={handleChange}
                                            >
                                            {formData?.profile?.yearsExperience && (
                                                <option key={formData?.profile?.yearsExperience} value={formData?.profile?.yearsExperience}>
                                                    {formData?.profile?.yearsExperience}
                                                </option>
                                            )}
                                            {yearsExperienceJson.map((year) => (
                                                <option key={year.name} value={year.name}>
                                                {year.name}
                                                </option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-10">
                                        <h4 className="mb-10">Línguas</h4>
                                        <Languages setFormData={setFormData} formData={formData}></Languages>
                                    </div>
                                    
                                    <div className="mb-30">
                                        <h4 className="mb-10">Competências profissionais</h4>
                                        <Skills setFormData={setFormData} formData={formData}></Skills>
                                    </div>
                                    
                                    <Education setFormData={setFormData} formData={formData}></Education>

                                    <Experience setFormData={setFormData} formData={formData}></Experience>

                                    <Portfolio setFormData={setFormData} formData={formData}></Portfolio>

                                    <div className="col-lg-3 mb-20">
                                        <h4 className="mb-10">Site pessoal</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="site" 
                                                placeholder="jethire.pt" 
                                                type="text"
                                                onChange={handleChange}
                                                value={formData?.profile?.site || ""}  
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">GitHub</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="github"
                                                placeholder="www.github.com" 
                                                type="text" 
                                                onChange={handleChange}
                                                value={formData?.profile?.github || ""} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">LinkedIn</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="linkedin" 
                                                placeholder="www.linkedin.com" 
                                                type="text" 
                                                onChange={handleChange}
                                                value={formData?.profile?.linkedin || ""} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">Curriculum Vitae</h4>
                                        <CV setFormData={setFormData} formData={formData}></CV>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button 
                                            className="btn-submit btn" 
                                            type="submit"
                                        >
                                            Confirmar
                                        </button>
                                        <label className="ml-20">
                                            <input required className="float-start mr-5 mt-6" type="checkbox" /> Ao confirmar esta caixa, está a concordar com os nossos <a className="terms-conditions">Termos & Condições</a>.
                                        </label>
                                    </div>
                                    {error && <p>{error}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );

}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const session = await getSession({ req: context.req });

    if (!session || !session.user || session.user.id !== id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    try {
        await connectMongoDB();
        const user = await User.findById(id).lean();

        if (!user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        return {
            props: {
                user: JSON.parse(JSON.stringify(user)),
                session,
            },
        };
    } catch (error) {
        console.error(error);
        return { props: { user: null } };
    }
}
