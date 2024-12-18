import React, { useContext } from "react";
import s from "./index.module.scss";
import GoogleMap from "../GoogleMap";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from "../../ThemeContext";
const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${s.footer} ${theme === 'dark' ? s['footer-dark'] : ''}`}>
      <h2 className={s.contact_title}>Contact</h2>
      <div className={s.contact_container}>
        <div className={s.contact_item}>
          <h3>Phone</h3>
          <div className={s.phone}>
            <Link to="https://wa.me/+499999999999" target="_blank">
              +49 999 999 99 99
            </Link>
          </div>
        </div>
        <div className={s.contact_item}>
          <h3>Socials</h3>
          <div className={s.social_icons}>
            <Link to="https://www.instagram.com" target="_blank">
              <FaInstagram size={40} />
            </Link>
            <Link to="https://wa.me/+499999999999" target="_blank">
              <FaWhatsapp size={40} />
            </Link>
          </div>
        </div>
        <div className={s.contact_item}>
          <h3>Address</h3>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>
        <div className={s.contact_item}>
          <h3>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default Footer;
