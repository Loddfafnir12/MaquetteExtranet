import React from 'react'
import Banner from './components/Banner/Banner'
import Menu from "./components/Menu/Menu"
import Tableau from './components/Tableau/Tableau'

 const App = () => {
  return (
     <div className='container'>
       <Banner/>
       <Tableau/>
       <Menu/>
       
     </div>
  )
}

export default App


// export default function App() {
//   return <form className="Fond">
//     <div className="Banner">
//       <label htmlFor="Banniere">Banniere</label>
//        <input type="text" id="Banniere" />
//      </div>
//    </form>
//  }