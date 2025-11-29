import './MainLayout.css'
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";

function MainLayout() {

  return (
    <div className={'container'}>
      <Header/>
      <MoviesPage/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
