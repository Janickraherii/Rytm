import React, { useState } from 'react';
import './Menu.css'; // Fichier CSS pour styliser le menu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faQuestion } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes de FontAwesome

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div className={`menu ${isMenuVisible ? '' : 'transparent'}`}>
      <div className="icons">
        <FontAwesomeIcon icon={faBars} className="icon menu-icon" onClick={toggleMenu} />
        {isSearchVisible && <input type="text" className="search-input" placeholder="Rechercher..." />}
        <div className="right-icons">
          <FontAwesomeIcon icon={faSearch} className="icon" onClick={toggleSearch} />
          <FontAwesomeIcon icon={faBell} className="icon" />
          <FontAwesomeIcon icon={faQuestion} className="icon" />
        </div>
      </div>
      <ul>
        <li><a href="#">Tâches</a></li>
        <li><a href="#">Priorités</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Analytics</a></li>
      </ul>
    </div>
  );
}

export default Menu;
