import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import CrimePrevention  from "./pages/crime";
import AboutUs from "./pages/about";
import NewsEvents from "./pages/news";
import { Routes, Route, NavLink } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <HomePage/>,
      errorElement:<div>404 Not Found</div>
    },
    {
      path:'/crime-prevention',
      element: <CrimePrevention/>
    },
    {
      path:'/about-us',
      element: <AboutUs/>
    },
    {
      path:'/news-events',
      element: <NewsEvents/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
