"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ openClass }) => {
  const { status, data: session } = useSession();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    setIsActive((prev) => ({
      status: prev.key !== key,
      key: prev.key === key ? "" : key,
    }));
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div
      className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
    >
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="perfect-scroll" style={{paddingTop: "80px"}}>
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link legacyBehavior href="/offers">
                      <a>Procurar trabalho</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/companies">
                      <a>Empresas</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/candidates">
                      <a>Candidatos</a>
                    </Link>
                  </li>
                  {session && (
                    <li>
                      <Link legacyBehavior href="/jet-ai">
                        <a>
                          Jet <span className="ai">AI</span>
                        </a>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>Sobre nós</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mobile-account mt-20">
              {status === "authenticated" ? (
                <>
                  <h6 className="mb-10">Conta</h6>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link legacyBehavior href={`/profile/${session.user.id}`}>
                        <a>Ver perfil</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/change-pass">
                        <a>Alterar password</a>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          color: "inherit",
                          font: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        Sair
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h6 className="mb-10">Conta</h6>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link legacyBehavior href="/register">
                        <a>Criar conta</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/signin">
                        <a>Login</a>
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <div className="site-copyright mt-30">
              Copyright 2025 © Jet Hire
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
