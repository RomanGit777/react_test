import './MainLayout.css'
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import {useEffect} from "react";

function MainLayout() {
    useEffect(() => {
        window.history.scrollRestoration = "manual"
    }, []);
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
