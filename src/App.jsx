import './assets/css/main.css'
import { Route, Routes } from "react-router-dom";

/* Pages e components */
import RegisterGame from './components/Games/RegisterGame/RegisterGame'
import Home from './pages/Home/Home';
import Login from "./components/Authentication/Login/Login"
import Register from "./components/Authentication/Register/Register"
import EditRegistrationData from './components/Authentication/EditRegistrationData/EditRegistrationData';
import RegisterCategory from './components/Games/RegisterCategory/RegisterCategory';
import MyAccount from './components/Authentication/MyAccount/MyAccount';
import RatingBrowserGames from "./pages/RatingBrowserGames/RatingBrowserGames"
import ExploreAllGames from './components/Games/ExploreAllGames/ExploreAllGames';
import CategoryManagementPage from './components/Games/CategoryManagementPage/CategoryManagementPage';
import GameManagementPage from './components/Games/GameManagementPage/GameManagementPage';
import GameByCategory from './components/Games/GameByCategory/GameByCategory';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/registergame' element={<RegisterGame/>}></Route>
        <Route path='/editdatamyaccount' element={<EditRegistrationData/>}></Route>
        <Route path='/registercategory' element={<RegisterCategory/>}></Route>
        <Route path='/myaccount' element={<MyAccount/>}></Route>
        <Route path='/ratingbrowsergames/:id' element={<RatingBrowserGames/>}></Route>
        <Route path='/exploreallgames' element={<ExploreAllGames />}></Route>
        <Route path='/categorymanagementpage' element={<CategoryManagementPage />}></Route>
        <Route path='/gamemanagementpage' element={<GameManagementPage />}></Route>
        <Route path='/gamebycategory/:id' element={<GameByCategory />}></Route>
      </Routes>
  )
}

export default App
