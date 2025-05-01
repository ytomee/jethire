/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
    
        if (result?.error) {
            setError("Email ou palavra-passe incorretos.");
        } else {
            window.location.href = "/";
        }
    };

    return (
        <>
            <Layout>
                <section className="pt-90 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <h1 className="mt-10 mb-5 text-brand-1">Login</h1>
                                    <p className="font-sm text-brand-2 mb-20">Bem-vindo, outra vez! </p>
                                    <div className="social-icons-group">
                                        <button onClick={() => signIn("google")}
                                            className="btn social-login hover-up mb-20">
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
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">
                                            Email
                                        </label>
                                        <input
                                            className="form-control"
                                            id="input-1"
                                            type="email"
                                            required
                                            name="email"
                                            placeholder="jethire@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">Palavra-passe</label>
                                        <input
                                            className="form-control"
                                            id="input-4"
                                            type="password"
                                            required
                                            name="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {error && <p className="text-danger mb-10">{error}</p>}
                                    {/* <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                        />
                                            <span className="text-small">Lembrar-me</span>
                                            <span className="checkmark" />
                                        </label>
                                        <Link legacyBehavior href="/page-contact">
                                            <a className="text-muted">Esqueci-me da password</a>
                                        </Link>
                                    </div> */}
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit">
                                            Login
                                        </button>
                                    </div>
                                    <div className="text-mutted-2 text-center">
                                        Ainda não tem conta?
                                        <Link legacyBehavior href="/page-register">
                                            <a> Criar conta</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-4.svg"/>
                            </div>
                            <div className="img-2">
                                <img src="assets/imgs/page/login-register/img-3.svg"/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}