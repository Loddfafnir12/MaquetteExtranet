import React, { useState } from "react";
import "./Menu.css";  // Importez votre fichier CSS
import logoBearcod from "../../image/logo-bearcod_blanc.png"; // Logo principal
import logoTete from "../../image/logo-tete.png"; // Logo pour petits écrans
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Icônes pour le menu et la croix

const Menu = ({ toggleMenu, menuOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [subMenuActive, setSubMenuActive] = useState(false); // Etat pour gérer l'animation d'ouverture/fermeture des sous-menus en mobile

  // Affiche ou cache le sous-menu
  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null); // Ferme le sous-menu si déjà ouvert
    } else {
      setActiveSubmenu(index); // Ouvre le sous-menu correspondant
    }
  };

  const handleSubmenuClick = (index) => {
    if (window.innerWidth <= 480) {
      setSubMenuActive(true); // Déclenche l'animation du sous-menu
      setTimeout(() => {
        setActiveSubmenu(null); // Ferme le sous-menu après l'animation
        setSubMenuActive(false); // Réinitialise l'état pour ne pas bloquer les futures interactions
      }, 300); // Doit correspondre à la durée de l'animation CSS
    }
  };

  return (
    <div className="app-container">
      {/* Bouton Burger (affiché uniquement en mode mobile) */}
      <div
        className={`burger-menu md:hidden fixed top-4 left-4 z-20 ${menuOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-white" size="lg" />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""} md:block`}>
        {/* Logo principal (affiché par défaut) */}
        <div className="logo-container">
          <img
            src={logoBearcod}
            alt="Logo Bearcod"
            className="logo-bearcod hidden md:block w-full h-auto"
          />
          {/* Logo pour petits écrans */}
          <img
            src={logoTete}
            alt="Logo Tête"
            className="logo-tete md:hidden"
          />
        </div>

        {/* Menu */}
        <ul className="menu-list">
          {/* Préparation */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu(1)} // Ouvre/ferme le sous-menu pour Préparation
          >
            <a href="#" className="menu-link">
              Préparation
            </a>
            {/* Sous-menu Préparation */}
            <div
              className={`submenu ${activeSubmenu === 1 ? "submenu-visible" : ""}`}
            >
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Éxpedition
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Historique des préparation
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Lettuce
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Spinach
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Cucumber
              </a>
            </div>
          </li>
          <li
            className="menu-item"
            onClick={() => toggleSubmenu(1)} // Ouvre/ferme le sous-menu pour Préparation
          >
            <a href="#" className="menu-link">
              Commande
            </a>
            {/* Sous-menu Préparation */}
            <div
              className={`submenu ${activeSubmenu === 1 ? "submenu-visible" : ""}`}
            >
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Carrot
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Potato
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Lettuce
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Spinach
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Cucumber
              </a>
            </div>
          </li>
          <li
            className="menu-item"
            onClick={() => toggleSubmenu(1)} // Ouvre/ferme le sous-menu pour Préparation
          >
            <a href="#" className="menu-link">
              SAV
            </a>
            {/* Sous-menu Préparation */}
            <div
              className={`submenu ${activeSubmenu === 1 ? "submenu-visible" : ""}`}
            >
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Carrot
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Potato
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Lettuce
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Spinach
              </a>
              <a
                href="#"
                className="submenu-item"
                onClick={() => handleSubmenuClick(1)} // Clic sur un item du sous-menu
              >
                Cucumber
              </a>
            </div>
          </li>

          {/* Autres menus */}
          {/* (Le même code que pour "Préparation") */}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
