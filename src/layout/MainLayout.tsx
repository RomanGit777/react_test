import './MainLayout.css'
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";

function MainLayout() {

  return (
      <>
          <Header/>
        <div className={'page-content'}>
          <Outlet/>
        </div>
      </>
  )
}

export default MainLayout
