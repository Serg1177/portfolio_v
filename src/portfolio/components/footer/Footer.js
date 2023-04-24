import React from 'react';
import './footer.scss'
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";

import facebook from './../../assets/socialIcon/bx_bxl-facebook.png'
import linkedIn from './../../assets/socialIcon/bx_bxl-linkedin.png'
import instagram from './../../assets/socialIcon/bx_bxl-instagram.png'
import github from "../../assets/socialIcon/github.png";

import logo from './../../assets/header-footer/logo_3v.png'

export const Footer = () => {

  const initialSocialIcons = [
    {urlIcon: facebook, urlSocial: "#"},
    {urlIcon: linkedIn, urlSocial: "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%B2%D0%BB%D0%B0%D1%81%D0%BE%D0%B2-a5920b257/"},
    {urlIcon: instagram, urlSocial: "#"},
    {urlIcon: github, urlSocial: "https://serg1177.github.io"},
  ]

  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Logo"/>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <ul className="social_share d-flex justify-content-center">
              {
                initialSocialIcons.map(s => <SocialIcon urlIcon={s.urlIcon} urlSocial={s.urlSocial}/> )
              }
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="text">
              <p>
                Sergey Vlasov
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};