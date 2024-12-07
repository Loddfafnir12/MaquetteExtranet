import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Appcontainer.css";
import "./Ticketcontainer.css";

const Appcontainer = () => {
  // Etat pour savoir si le contenu caché est visible
  const [isHiddenContentVisible, setIsHiddenContentVisible] = useState(false);

  // Etat pour l'agrandissement du filtre
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value);
};
const handleFilterChange2 = (event) => {
  setSelectedOption2(event.target.value);
};
  // Références pour les éléments
  const contenuRef = useRef(null);
  const filterRef = useRef(null);

  // Fonction pour ajuster la hauteur de Contenu-Contenu
  const adjustContentHeight = () => {
    if (contenuRef.current && filterRef.current) {
      const filterHeight = filterRef.current.offsetHeight; // Hauteur de .filter
      

      if (isHiddenContentVisible) {
        contenuRef.current.style.height = `calc(100% - ${filterHeight}px)`; // Ajuster la hauteur si le contenu caché est visible
      } else {
        contenuRef.current.style.height = `calc(100% - ${filterHeight}px)`; // Hauteur par défaut
      }
    }
  };
  
  

  // Utiliser useEffect pour ajuster la hauteur au chargement et lors du redimensionnement
  useEffect(() => {
    adjustContentHeight();
    contenuRef.current?.classList.add("contenu-contenu"); // Ajoute la classe CSS pour la transition
    window.addEventListener("resize", adjustContentHeight);
    return () => {
      window.removeEventListener("resize", adjustContentHeight); // Nettoyage
    };
  }, [isHiddenContentVisible, isFilterExpanded]);

  // Fonction pour gérer le clic sur le bouton et afficher/masquer le contenu caché
  const toggleContentVisibility = () => {
    setIsHiddenContentVisible(!isHiddenContentVisible);
  };

  // Fonction pour agrandir ou réduire le filtre
  const toggleFilterSize = () => {
    setIsFilterExpanded(!isFilterExpanded); // Alterne l'état d'agrandissement
  };

  return (
    <div className="Contenu">
      <div
        className={`filter ${isFilterExpanded ? "expanded" : ""}`}
        ref={filterRef}
      >
        <div className="filter-box">
            <div className="select-wrapper">
                <select className="select" value={selectedOption} onChange={handleFilterChange}>
                    <option value="">Client</option>
                    <option value="option1">Le caca du cul qui pue</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <div className="filter-box">
            <div className="select-wrapper">
                <select className="select" value={selectedOption2} onChange={handleFilterChange2}>
                    <option value="">Sites en liste</option>
                    <option value="option1">Le caca du cul qui pue</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>

        <button className="filter-button" onClick={toggleContentVisibility}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button onClick={toggleFilterSize}>
          {isFilterExpanded }
        </button>
      </div>

      {/* Zone cachée avec animation conditionnelle */}
      
        <div
          id="hiddenContent"
          className={`hiddenContent ${isHiddenContentVisible ? "visible" : ""}`}
        >
          <p>Contenu supplémentaire révélé ici.</p>
        </div>
      

      {/* Zone principale avec la classe conditionnelle */}
      <div
        ref={contenuRef}
        className="Contenu-Contenu"
      >
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
        <p>Ticket 10000</p>
      </div>
    </div>
  );
};

export default Appcontainer;
