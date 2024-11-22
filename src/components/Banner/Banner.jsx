import React, { useState, useEffect } from 'react';
import './Banner.css';
import logo from '/src/image/logo-bearcod_blanc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Banner = ({ menuOpen }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Suivi de la largeur de la fenêtre
  const [menuActive, setMenuActive] = useState(false); // Suivi de l'état du menu burger

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

  // Mise à jour de l'état du menu burger (ouverture/fermeture)
  useEffect(() => {
    setMenuActive(menuOpen);
  }, [menuOpen]);

  // Fonction de déconnexion
  const handleLogout = () => {
    alert('Déconnexion !');
  };

  return (
    <div className="banner">
      <div className="banner-container">
        {/* Afficher le nom d'utilisateur uniquement si le menu burger est fermé et en mode mobile */}
        <p className={`user-name ${windowWidth <= 480 && menuActive ? 'hidden' : ''}`}>
          VINCENT VANDERHOEVEN
        </p>

        <p className="app-title">SAV - Suivi</p>

        <div className="datetime">
          <p className="time">
            {dateTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </p>
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
        {windowWidth <= 1200 ? (
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
