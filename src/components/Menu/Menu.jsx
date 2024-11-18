import React, { useState } from 'react';
import './Menu.css';
/**/

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(null); // Gère quel menu est actif

    // Dictionnaire de sous-menus pour chaque item
    const subMenus = {
        SAV: ['SUIVI', 'REPRISE', 'Courbe de déclaration'],
        preparation: ['Commande', 'Preparation','Expédition'],  
        parc: ['Option A', 'Option B'],
        analyse: ['Statistiques 1', 'Statistiques 2']
    };

    return (
        <div className="sidebar">
            <ul className="menu">
                {[
                    { name: 'Préparation', key: 'preparation' },  // Texte avec accent
                    { name: 'SAV', key: 'SAV' },
                    { name: 'Parc', key: 'parc' },
                    { name: 'Analyse', key: 'analyse' }
                ].map(item => (
                    <li
                        key={item.key}
                        className="menu-item"
                        onMouseEnter={() => setActiveMenu(item.key)} // Affiche le sous-menu au survol
                        onMouseLeave={() => setActiveMenu(null)} // Masque le sous-menu lorsqu'on sort de l'élément
                    >
                        {item.name}
                        {/* Affiche le sous-menu uniquement si l'élément est actif */}
                        {activeMenu === item.key && (
                            <div className="submenu">
                                {subMenus[item.key].map((subItem, index) => (
                                    <div key={index} className="submenu-item">
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
