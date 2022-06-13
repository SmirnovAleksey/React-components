import React from "react";
import {createRoot} from "react-dom/client";
import './style.css';

const rootElement = document.createElement('div');
document.body.append(rootElement);

const app = createRoot(rootElement);

import Button from "./components/button/index.jsx";
import PlaceForButton from "./components/placeForButton/index.jsx";

app.render(
    <>
    <div className="page-block">
    <div className="page-block__content">
        <div className="footer selectable">
            <div className="footer_container">
                <div className="footer_nav">
                    <div className="footer_nav__logo_container">
                        <a className="footer_nav__logo_link" href="#">
                            <img src="http://placehold.jp/233x65.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="footer_nav__text_container">
                        <div className="footer_nav__text">
                            Copyright 2022 Super-Heroes Shop
                        </div>
                    </div>
                    <div className="footer_nav__social">
                        <a className="footer_nav__social_link" href="#">
                            <div className="footer_nav__inst">
                                <img src="http://placehold.jp/3d4070/ffffff/35x35.png" alt="instagram"/>
                            </div>
                        </a>
                        <a className="footer_nav__social_link" href="#">
                            <div className="footer_nav__twit">
                                <img src="http://placehold.jp/3d4070/ffffff/35x35.png" alt="twitter"/>
                            </div>
                        </a>
                        <a className="footer_nav__social_link" href="#">
                            <div className="footer_nav__fb">
                                <img src="http://placehold.jp/3d4070/ffffff/35x35.png" alt="facebook"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer_menu">
                    <div className="footer_menu__block">
                        <div className="footer_menu__title">Menu</div>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Home</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">News</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Characters</div>
                        </a>
                        <Button
                            text={'Menu button'}
                        />
                    </div>
                    <div className="footer_menu__block">
                        <div className="footer_menu__title">Company</div>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Management</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Our story</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Career</div>
                        </a>
                        <Button />
                    </div>
                    <div className="footer_menu__block">
                        <div className="footer_menu__title">Support</div>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Support Center</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Transaction</div>
                        </a>
                        <a className="footer_menu__section_link" href="#">
                            <div className="footer_menu__section">Contact us</div>
                        </a>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        <PlaceForButton
        title={'place for button'}
        />
    </>
);