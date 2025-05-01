"use client";

import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Register() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      setErrorMessage("As palavras-passe não coincidem.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao registar.");
      }

      alert("Registo efetuado com sucesso!");
      router.push("/page-signin");
      setFormData({ fullname: "", email: "", password: "", rePassword: "" });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (  
    <Layout>
      <section className="pt-20 login-register">
        <div className="container">
          <div className="row login-register-cover">
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
              <div className="text-center">
                <p className="font-sm text-brand-2">Registe-se </p>
                <h2 className="mt-10 mb-5 text-brand-1">Bem-Vindo!</h2>
                <p className="font-sm text-mutted-2 mb-30">
                  Acesso a todas as funcionalidades. <br /> Sem necessidade de cartão de crédito.
                </p>
                <div className="social-icons-group">
                  <button onClick={() => signIn("google")} className="btn social-login hover-up mb-20">
                    <img src="assets/imgs/template/icons/icon-google.svg" />
                    <strong>Google</strong>
                  </button>
                  <button className="btn social-login hover-up mb-20">
                    <img src="assets/imgs/template/icons/linkedin.svg" />
                    <strong>LinkedIn</strong>
                  </button>
                  <button className="btn social-login hover-up mb-20">
                    <img src="assets/imgs/template/icons/github-mark.svg" />
                    <strong>GitHub</strong>
                  </button>
                </div>
                <div className="divider-text-center">
                  <span>ou continuar com</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="login-register text-start mt-20">
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="form-group">
                  <label className="form-label" htmlFor="fullname">
                    Nome Completo *
                  </label>
                  <input
                    className="form-control"
                    id="fullname"
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    placeholder="Jet Hire"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jethire@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Palavra-passe *
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rePassword">
                    Repita a palavra-passe *
                  </label>
                  <input
                    className="form-control"
                    id="rePassword"
                    type="password"
                    name="rePassword"
                    value={formData.rePassword}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-brand-1 hover-up w-100" type="submit">
                    Registar
                  </button>
                </div>
                <div className="text-mutted-2 text-center">
                  Já tem uma conta?
                  <Link legacyBehavior href="/page-signin">
                    <a href="page-signin"> Entrar</a>
                  </Link>
                </div>
              </form>
            </div>
            <div className="img-1 d-none d-lg-block">
              <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="JobBox" />
            </div>
            <div className="img-2">
              <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}