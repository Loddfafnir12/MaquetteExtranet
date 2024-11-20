import React, { useState } from "react";
import "./Menu.css";
import logoBearcod from "../../image/logo-bearcod_blanc.png"; // Logo principal
import logoTete from "../../image/logo-tete.png"; // Logo pour petits écrans

const Menu = () => {
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const showSubmenu = (index) => setVisibleSubmenu(index);
  const hideSubmenu = () => setVisibleSubmenu(null);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo principal (affiché par défaut) */}
        <div className="logo-container">
          <img
            src={logoBearcod}
            alt="Logo Bearcod"
            className="logo-bearcod hidden md:block w-full h-auto" // Largeur plus grande et hauteur auto pour garder les proportions
          />
          {/* Logo pour petits écrans */}
          <img
            src={logoTete}
            alt="Logo Tête"
            className="logo-tete md:hidden" // Affiché uniquement pour les écrans petits
          />
        </div>

        {/* Menu */}
        <ul className="menu-list">
          <li
            className="menu-item"
            onMouseEnter={() => showSubmenu(1)} // Affiche le sous-menu pour Préparation
            onMouseLeave={hideSubmenu}
          >
            <a href="#" className="menu-link">
              Préparation
            </a>
            <div
              className={`submenu ${
                visibleSubmenu === 1 ? "submenu-visible" : ""
              }`}
            >
              <a href="#" className="submenu-item">Carrot</a>
              <a href="#" className="submenu-item">Potato</a>
              <a href="#" className="submenu-item">Lettuce</a>
              <a href="#" className="submenu-item">Spinach</a>
              <a href="#" className="submenu-item">Cucumber</a>
            </div>
          </li>

          <li
            className="menu-item"
            onMouseEnter={() => showSubmenu(2)} // Affiche le sous-menu pour Expédition
            onMouseLeave={hideSubmenu}
          >
            <a href="#" className="menu-link">
              Expédition
            </a>
            <div
              className={`submenu ${
                visibleSubmenu === 2 ? "submenu-visible" : ""
              }`}
            >
              <a href="#" className="submenu-item">Carrot</a>
              <a href="#" className="submenu-item">Potato</a>
              <a href="#" className="submenu-item">Lettuce</a>
              <a href="#" className="submenu-item">Spinach</a>
              <a href="#" className="submenu-item">Cucumber</a>
            </div>
          </li>

          <li
            className="menu-item"
            onMouseEnter={() => showSubmenu(3)} // Affiche le sous-menu pour Commandes
            onMouseLeave={hideSubmenu}
          >
            <a href="#" className="menu-link">
              Commandes
            </a>
            <div
              className={`submenu ${
                visibleSubmenu === 3 ? "submenu-visible" : ""
              }`}
            >
              <a href="#" className="submenu-item">Carrot</a>
              <a href="#" className="submenu-item">Potato</a>
              <a href="#" className="submenu-item">Lettuce</a>
              <a href="#" className="submenu-item">Spinach</a>
              <a href="#" className="submenu-item">Cucumber</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
