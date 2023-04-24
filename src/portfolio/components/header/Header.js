import React, {useEffect, useState} from 'react';
import './header.scss'
import './navItem/navItem.scss'
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";
import {Button} from "../../commons/button/Button";
import Scrollspy from 'react-scrollspy'

import linkedIn from "../../assets/socialIcon/bx_bxl-linkedin.png";
import instagram from "../../assets/socialIcon/bx_bxl-instagram.png";
import facebook from "../../assets/socialIcon/bx_bxl-facebook.png";
import github from "../../assets/socialIcon/github.png";

import logo from './../../assets/header-footer/logo_3v.png'
import menuitem from './../../assets/header-footer/menu-hamburger.png'
import closeMenuItem from './../../assets/header-footer/close-menu-icon.png'

export const Header = () => {
  const initialSocialIcons = [
    {urlIcon: facebook, urlSocial: "#"},
    {urlIcon: linkedIn, urlSocial: "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%B2%D0%BB%D0%B0%D1%81%D0%BE%D0%B2-a5920b257/"},
    {urlIcon: instagram, urlSocial: "#"},
    {urlIcon: github, urlSocial: "https://serg1177.github.io"},
  ]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 1);
    });
  }, []);

  const fullClassHeader = `header ${isScrolled ? "sticky_header" : ""}`
  const fullClassHeaderWrapper = `header_wrapper  d-flex justify-content-between align-items-center ${isScrolled ? "sticky_wrapper" : ""}`
  const fullClassMenuNav = `main_menu ${isVisible ? " main_menu_open" : " main_menu_close"}`
  const fullClassCloseMenuItem = `close_menu d-block d-lg-none ${isVisible ? "close_menu_open" : "close_menu_close"}`
  const fullClassBurgerMenu = `hamburger_menu d-block d-lg-none ${isVisible ? "hamburger_menu_close" : "hamburger_menu_open"}`
  return (
    <header className={fullClassHeader}>
      <div className={fullClassHeaderWrapper}>
        <div className="header_left d-flex align-items-center">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <nav className="menu_nav">
            <Scrollspy className={fullClassMenuNav} items={['home','about','skills','projects','contacts']} currentClassName="is-current" offset={-200}>
              <li className="nav_item"><a href={"#home"} onClick={() => setIsVisible(false)}>Home</a></li>
              <li className="nav_item"><a href={"#about"} onClick={() => setIsVisible(false)}>About</a></li>
              <li className="nav_item"><a href={"#skills"} onClick={() => setIsVisible(false)}>Skills</a></li>
              <li className="nav_item"><a href={"#projects"} onClick={() => setIsVisible(false)}>Projects</a></li>
              <li className="nav_item"><a href={"#contacts"} onClick={() => setIsVisible(false)}>Contacts</a></li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header_right d-flex justify-content-between align-items-center flex-wrap">
          <ul className="social_inner d-flex justify-content-start align-items-center flex-wrap">
            {
              initialSocialIcons.map(s => <SocialIcon urlIcon={s.urlIcon} urlSocial={s.urlSocial}/> )
            }
          </ul>
          <Button btnName={"Call me"} btnClass={"header_btn"} url={"tel:+381629383472"}/>
          <div className={fullClassBurgerMenu}>
            <div className="menutrigger" onClick={() => {setIsVisible(true)}}>
              <img src={menuitem} alt="menu"/>
            </div>
          </div>
          <div className={fullClassCloseMenuItem}>
            <div className="closeTrigger" onClick={() => {setIsVisible(false)}}>
              <img src={closeMenuItem} alt="close-menu"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};