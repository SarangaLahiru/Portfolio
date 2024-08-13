import { createBrowserRouter } from "react-router-dom";
import CardGallery from "./Components/CardGalleryComponent/CardGallery";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blog from "./Components/HomeComponent/Blog/Blog";
import Guest from "./Layout/Guest";
import Home from "./Pages/Home";
import PortF from "./Pages/portF";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Guest />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/products',
                element: <CardGallery />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/details',
                element: <PortF />
            },
        ]
    }
])
export default router;