import React from 'react'
import Banner from './components/Banner/Banner'
import Menu from "./components/Menu/Menu"
import Tableau from './components/Tableau/Tableau'
import './style.css'


 const App = () => {
  return (
    <div className="App">
      
      <Menu />
      <Banner />
    </div>
  )
}

export default App
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