import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Appcontainer.css";
import "./Ticketcontainer.css";

const Appcontainer = () => {
  // Etats existants
  const [isHiddenContentVisible, setIsHiddenContentVisible] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  // Nouvel état pour l'ouverture/fermeture des `select-wrapper`
  const [openSelectIndex, setOpenSelectIndex] = useState(null);

  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFilterChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleFilterChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  // Références
  const contenuRef = useRef(null);
  const filterRef = useRef(null);

  // Ajustement de la hauteur
  const adjustContentHeight = () => {
    if (contenuRef.current && filterRef.current) {
      const filterHeight = filterRef.current.offsetHeight;

      if (isHiddenContentVisible) {
        contenuRef.current.style.height = `calc(100% - ${filterHeight}px)`;
      } else {
        contenuRef.current.style.height = `calc(100% - ${filterHeight}px)`;
      }
    }
  };

  useEffect(() => {
    adjustContentHeight();
    contenuRef.current?.classList.add("contenu-contenu");
    window.addEventListener("resize", adjustContentHeight);
    return () => {
      window.removeEventListener("resize", adjustContentHeight);
    };
  }, [isHiddenContentVisible, isFilterExpanded]);

  // Gestion visibilité contenu
  const toggleContentVisibility = () => {
    setIsHiddenContentVisible(!isHiddenContentVisible);
  };

  // Gestion taille filtre
  const toggleFilterSize = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  // Gestion ouverture des `select-wrapper`
  const toggleSelectWrapper = (index) => {
    setOpenSelectIndex(openSelectIndex === index ? null : index);
  };

  return (
    <div className="Contenu">
      <div
        className={`filter ${isFilterExpanded ? "expanded" : ""}`}
        ref={filterRef}
      >
        <div className="filter-box">
          <div
            className={`select-wrapper ${
              openSelectIndex === 0 ? "open" : "closed"
            }`}
            onClick={() => toggleSelectWrapper(0)}
          >
            <select
              className="select"
              value={selectedOption}
              onChange={handleFilterChange}
            >
              <option value="">Client</option>
              <option value="option1">Le caca du cul qui pue</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div
            className={`select-wrapper ${
              openSelectIndex === 1 ? "open" : "closed"
            }`}
            onClick={() => toggleSelectWrapper(1)}
          >
            <select
              className="select"
              value={selectedOption2}
              onChange={handleFilterChange2}
            >
              <option value="">Sites en liste</option>
              <option value="option1">Le caca du cul qui pue</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div
            className={`select-wrapper ${
              openSelectIndex === 2 ? "open" : "closed"
            }`}
            onClick={() => toggleSelectWrapper(2)}
          >
            <select
              className="select"
              value={selectedOption3}
              onChange={handleFilterChange3}
            >
              <option value="">Matériel</option>
              <option value="option1">Le caca du cul qui pue</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        <button className="filter-button" onClick={toggleContentVisibility}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
        <button onClick={toggleFilterSize}>{isFilterExpanded}</button>
      </div>

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
