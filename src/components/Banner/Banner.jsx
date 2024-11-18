import React, { useState, useEffect } from 'react';
import './Banner.css';
import logo from '/src/image/logo-bearcod.webp'; // Chemin vers votre logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Suivi de la largeur de la fenêtre

  // Mise à jour de la date/heure toutes les minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60000); // Mise à jour toutes les minutes
    return () => clearInterval(interval);
  }, []);

  // Mise à jour de la largeur de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    alert('Déconnexion !');
  };

  return (
    <div className="header">
      <img src={logo} alt="BEARCOD Logo" className="logo" />
      <p className="user-name">VINCENT VANDERHOEVEN</p>
      <p className="app-title">SAV - Suivi</p>
      <div className="datetime">
        <p className="time">{dateTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</p>
        <div className="date">
          <p className="weekday">
            {dateTime.toLocaleDateString('fr-FR', { weekday: 'long' })}
          </p>
          <p className="day">
            {dateTime.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </p>
        </div>
      </div>
      {/* Afficher soit le texte, soit l'icône en fonction de la taille de la fenêtre */}
      {windowWidth <= 768 ? (
        <button className="logout-button" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} /> {/* Icône de déconnexion */}
        </button>
      ) : (
        <button className="logout-button" onClick={handleLogout}>
          Déconnexion {/* Texte "Déconnexion" */}
        </button>
      )}
    </div>
  );
};

export default Banner;
