import React, { useState, useEffect } from "react";
import "./Menu.css";
import logoBearcod from "../../image/logo-bearcod_blanc.png";
import logoTete from "../../image/logo-tete.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ toggleMenu, menuOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const toggleSubmenu = (index) => {
    if (isMobile) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  const menuData = [
    { id: 1, title: "Préparation", items: ["Expédition", "Historique des préparations", "Lettuce"] },
    { id: 2, title: "Expédition", items: ["Carrot", "Potato", "Spinach"] },
    { id: 3, title: "Commande", items: ["Lettuce", "Spinach", "Cucumber"] },
    { id: 4, title: "SAV", items: ["Suivi", "Reprise", "Déclaration"] },
    { id: 5, title: "Parc", items: ["Suivi", "Reprise", "Déclaration"] },
    { id: 6, title: "Analyse", items: ["Suivi", "Reprise", "Déclaration"] },
    { id: 7, title: "Client", items: ["Suivi", "Reprise", "Déclaration"] },
    { id: 8, title: "Administration", items: ["Analyse", "Constructeurs", "Matériel", "Transporteur"] },
  ];

  return (
    <div className="app-container">
      <div className={`burger-menu fixed top-4 left-4 z-20 ${menuOpen ? "rotate" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-white" size="lg" />
      </div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logoBearcod} alt="Logo Bearcod" className="logo-bearcod hidden md:block w-full h-auto" />
          <img src={logoTete} alt="Logo Tête" className="logo-tete md:hidden" />
        </div>

        <ul className="menu-list">
          {menuData.map((menu, index) => (
            <React.Fragment key={menu.id}>
              <li className={`menu-item ${activeSubmenu === menu.id ? 'active' : ''}`} onClick={() => toggleSubmenu(menu.id)}>
                <div className="menu-link" style={{ fontSize: isMobile && activeSubmenu === menu.id ? '0.8rem' : '1.25rem' }}>
                  {menu.title}
                  <FontAwesomeIcon icon={faArrowRight} className="menu-icon" />
                </div>
                <ul className={`submenu ${isMobile && activeSubmenu === menu.id ? 'submenu-visible' : ''}`}>
                  {menu.items.map((item, index) => (
                    <li key={index} className="submenu-item">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
              {menu.id === 3 && <div className="menu-spacing"></div>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;