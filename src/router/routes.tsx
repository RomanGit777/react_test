import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>}
])