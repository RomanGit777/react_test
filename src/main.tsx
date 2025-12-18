import './styles/global.css'
import './styles/style-0-480.css';
import './styles/style-481-768.css'
import './styles/style-769-1279.css'
import './styles/style-1280+.css'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}/>
    </QueryClientProvider>
)