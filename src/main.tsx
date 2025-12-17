import './styles/global.css'
import './styles/style-0-480.css';
import './styles/style-481-768.css'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)