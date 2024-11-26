import React, { useState, useEffect } from "react";
import "./Menu.css";
import logoBearcod from "../../image/logo-bearcod_blanc.png";
import logoTete from "../../image/logo-tete.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ toggleMenu, menuOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Gère quel sous-menu est ouvert
  const [isMobile, setIsMobile] = useState(false); // Détecte si l'on est sur mobile

  // Gère le changement de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // Vérifie la taille à l'initialisation
    window.addEventListener("resize", handleResize); // Ajoute l'écouteur d'événement

    return () => window.removeEventListener("resize", handleResize); // Nettoyage de l'écouteur
  }, []);

  const toggleSubmenu = (index) => {
    if (isMobile) {
      // En mode mobile, on affiche ou cache le sous-menu au clic
      setActiveSubmenu(activeSubmenu === index ? null : index); // Active le sous-menu ou le cache
    }
  };

  const menuData = [
    { id: 1, title: "Préparation", items: ["Expédition", "Historique des préparations", "Lettuce"] },
    { id: 2, title: "Expédition", items: ["Carrot", "Potato", "Spinach"] },
    { id: 3, title: "Commande", items: ["Lettuce", "Spinach", "Cucumber"] },
    { id: 4, title: "SAV", items: ["Suivi", "Reprise", "Déclaration"] },
  ];

  return (
    <div className="app-container">
      {/* Bouton burger */}
      <div
        className={`burger-menu fixed top-4 left-4 z-20 ${menuOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-white" size="lg" />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className="logo-container">
          <img src={logoBearcod} alt="Logo Bearcod" className="logo-bearcod hidden md:block w-full h-auto" />
          <img src={logoTete} alt="Logo Tête" className="logo-tete md:hidden" />
        </div>

        {/* Menu principal */}
        <ul className="menu-list">
          {menuData.map((menu) => (
            <li
              key={menu.id}
              className={`menu-item ${activeSubmenu === menu.id ? 'active' : ''}`}
              onClick={() => toggleSubmenu(menu.id)} // Gère le clic sur le menu
            >
              <div className="menu-link">
                {menu.title}
                {/* Affichage de l'icône pour l'élément actif */}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="menu-icon"
                />
              </div>
              {/* Sous-menu */}
              <ul className={`submenu ${isMobile && activeSubmenu === menu.id ? 'submenu-visible' : ''}`}>
                {menu.items.map((item, index) => (
                  <li key={index} className="submenu-item">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;