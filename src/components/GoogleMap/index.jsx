import React from 'react';
import s from './index.module.css'
const GoogleMap = () => {
    return (
        <div className={s.map_container}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.517204472611!2d13.373966816127368!3d52.50693077981171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e3a0ba9499%3A0x2e22e8f0e432b8b2!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1696351989071!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;