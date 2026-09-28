import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home';
 
import MainLayout from './Layouts/MainLayout';
import Weather from './Pages/Weather';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
        {
         path: "/weather",
         element: <Weather />
       }
    ]
  },

]);

function Router() {
  return (
     <RouterProvider router={router} />
  )
}

export default Router;
