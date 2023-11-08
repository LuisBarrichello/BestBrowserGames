/* 

import RatingBrowserGames from './components/Games/RatingBrowserGames/AvaliacaoBrowserGames';
import EditRegistrationData from './components/Authentication/EditRegistrationData/EditRegistrationData';
*/
import RegisterGame from './components/Games/RegisterGame/RegisterGame'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./components/Authentication/Login/Login"
import Register from "./components/Authentication/Register/Register"
import './assets/css/main.css'


function App() {

  return (
      <Routes>
       {/*  <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route> */}
        <Route path='/registergame' element={<RegisterGame/>}></Route>
      </Routes>
  )
}

export default App
