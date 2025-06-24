"use client";
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
import { useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("As novas palavras-passe não coincidem.");
      return;
    }

    try {
      const res = await fetch("/api/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erro ao alterar a palavra-passe.");
      } else {
        setSuccess("Palavra-passe alterada com sucesso!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError("Ocorreu um erro. Tenta novamente.");
    }
  };

  return (
    <Layout>
      <section className="pt-90 login-register">
        <div className="container">
          <div className="row login-register-cover">
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
              <div className="text-center">
                <h3 className="mt-10 mb-5 text-brand-1">Alterar Palavra-passe</h3>
                <p className="font-sm text-brand-2 mb-20">Mantenha a sua conta segura</p>
              </div>

              <form className="login-register text-start mt-20" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="current-password">
                    Palavra-passe atual
                  </label>
                  <input
                    className="form-control"
                    id="current-password"
                    type="password"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="new-password">
                    Nova palavra-passe
                  </label>
                  <input
                    className="form-control"
                    id="new-password"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="confirm-password">
                    Confirmar nova palavra-passe
                  </label>
                  <input
                    className="form-control"
                    id="confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                {error && <p className="text-danger mb-10">{error}</p>}
                {success && <p className="text-success mb-10">{success}</p>}

                <div className="form-group">
                  <button className="btn btn-brand-1 hover-up w-100" type="submit">
                    Alterar palavra-passe
                  </button>
                </div>

                <div className="form-group">
                  <a href="/">
                    Voltar atrás
                  </a>
                </div>

              </form>
            </div>

            <div className="img-1 d-none d-lg-block">
              <img className="shape-1" src="assets/imgs/page/login-register/img-4.svg" alt="shape" />
            </div>
            <div className="img-2">
              <img src="assets/imgs/page/login-register/img-3.svg" alt="illustration" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
