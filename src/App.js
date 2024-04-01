import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import CrimeMap from "./pages/crime";
import AboutUs from "./pages/about";
import NewsEvents from "./pages/news";
import SignUp from "./pages/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crime-map" element={<CrimeMap />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/join-us" element={<SignUp />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
