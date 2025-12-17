import './MainLayout.css'
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import {useEffect} from "react";

function MainLayout() {
    useEffect(() => {
        window.history.scrollRestoration = "manual"
    }, []);
  return (
      <div className={'container'} id={'container'}>
          <Header/>
        <div className={'page-content'} id={'page-content'}>
          <Outlet/>
        </div>
      </div>
  )
}

export default MainLayout
