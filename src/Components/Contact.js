import React from 'react';
import './Contact.css'; // Asegúrate de tener el CSS separado o en App.css

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharte!</p>
      <form className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Tu nombre" />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..."></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;



