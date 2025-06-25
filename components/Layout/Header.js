/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { signOut , useSession } from 'next-auth/react';

const Header = ({handleOpen,handleRemove,openClass}) => {
    const {status, data: session} = useSession();
    const [showConfirmLogout, setShowConfirmLogout] = useState(false);

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };
    
    return (
        <>
            <AnimatePresence>
                {showConfirmLogout && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="logout-confirm-overlay"
                    >
                        <div className="logout-confirm-box">
                            <p>Encerrar sessão</p>
                            <h6>Tem a certeza que pretende sair?</h6>
                            <div className="buttons">
                                <button onClick={handleSignOut} className="btn btn-danger">Sim, sair</button>
                                <button onClick={() => setShowConfirmLogout(false)} className="btn btn-secondary">Cancelar</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                            <Link legacyBehavior href="/"><a className="d-flex"><img src="/assets/imgs/template/logo.svg"/></a></Link>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li>
                                        <Link legacyBehavior href="/offers"><a>Procurar trabalho</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/companies"><a>Empresas</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/candidates"><a>Candidatos</a></Link>
                                    </li>
                                    {session && (
                                        <li>
                                            <Link legacyBehavior href="/jet-ai"><a>Jet <span className="ai">AI</span></a></Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link legacyBehavior href="/about"><a>Sobre nós</a></Link>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                className={`burger-icon burger-icon-white ${openClass && 'burger-close'}`}
                                onClick={() => {
                                    handleOpen();
                                    handleRemove();
                                }}
                            >
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                {status === 'authenticated' ? (
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <a>
                                                <span className="mr-10 navbar-name">{session?.user?.name}</span>
                                                {session?.user?.image && (
                                                    <img
                                                        src={session.user.image}
                                                        height={30}
                                                        width={30}
                                                        style={{ borderRadius: '50%', marginRight: "5px", objectFit: "cover" }}
                                                        alt="User Image"
                                                    />
                                                )}
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href={`/profile/${session.user.id}`}>
                                                        <button>
                                                            <i className="fa-solid fa-user mr-5"></i>Ver perfil
                                                        </button>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button>
                                                        <i className="fa-solid fa-gear mr-5"></i><a style={{all: "unset"}} href="change-pass">Alterar password</a>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button onClick={() => setShowConfirmLogout(true)}>
                                                        <i className="fa-solid fa-person-running mr-5"></i>Sair
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                ) : (
                                    <>
                                        <Link legacyBehavior href="/register">
                                            <a className="">Criar conta</a>
                                        </Link>

                                        <Link legacyBehavior href="/signin">
                                            <a className="btn btn-default btn-shadow ml-40">Login</a>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;