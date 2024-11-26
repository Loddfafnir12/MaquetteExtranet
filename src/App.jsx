import React, { useState } from 'react';  // Ajoutez useState ici
import Banner from './components/Banner/Banner'
import Menu from "./components/Menu/Menu"
import Appcontainer from "./components/Appcontainer/Appcontainer"
import Tableau from './components/Tableau/Tableau'
import './style.css'



const App = () => {
  // État pour savoir si le menu est ouvert ou fermé
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Passer l'état du menu et la fonction de bascule */}
      <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Banner menuOpen={menuOpen} />
      <Appcontainer></Appcontainer>
    </div>
  );
};

export default App;
//<Banner/>
   //    <Tableau/>
   //    <Menu/>

// export default function App() {
//   return <form className="Fond">
//     <div className="Banner">
//       <label htmlFor="Banniere">Banniere</label>
//        <input type="text" id="Banniere" />
//      </div>
//    </form>
//  }