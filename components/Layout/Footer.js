/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer mt-50">
            <div className="container">
                {/* <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        <Link legacyBehavior href="/"><a><img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg" /></a></Link>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</div>
                        <div className="footer-social">
                            <a className="icon-socials icon-facebook" href="#" />
                            <a className="icon-socials icon-twitter" href="#" />
                            <a className="icon-socials icon-linkedin" href="#" /></div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">About us</a></li>
                            <li>
                                <a href="#">Our Team</a></li>
                            <li>
                                <a href="#">Products</a></li>
                            <li>
                                <a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-3 col-md-2 col-xs-6">
                        <h6 className="mb-20">Community</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Feature</a></li>
                            <li>
                                <a href="#">Pricing</a></li>
                            <li>
                                <a href="#">Credit</a></li>
                            <li>
                                <a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-md-2 col-xs-6">
                        <h6 className="mb-20">Quick links</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">iOS</a></li>
                            <li>
                                <a href="#">Android</a></li>
                            <li>
                                <a href="#">Microsoft</a></li>
                            <li>
                                <a href="#">Desktop</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-5 col-md-2 col-xs-6">
                        <h6 className="mb-20">More</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Privacy</a></li>
                            <li>
                                <a href="#">Help</a></li>
                            <li>
                                <a href="#">Terms</a></li>
                            <li>
                                <a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6"><span className="font-xs color-text-paragraph">Copyright © 2025. Desenvolvido por <a target='blank' href="https://github.com/ytomee">Tomé Almeida</a> </span></div>
                        <div className="col-md-6 text-md-end text-start">
                            <div className="footer-social">
                                <a className="font-xs color-text-paragraph" href="privacy-policy">Política de privacidade</a>
                                <a className="font-xs color-text-paragraph mr-30 ml-30" href="terms-conditions">Termos &amp; Condições</a>
                                <a className="font-xs color-text-paragraph" href="cookies">Política de cookies</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;