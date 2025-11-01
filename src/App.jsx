import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/Fungsi";
import Recommendation from "./components/Recommendation";
import Tentang from "./pages/Tentang";
import Profil from "./pages/Profil";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Recommendation />
              <HowItWorks />
            </>
          }
        />

        <Route path="/tentang" element={<Tentang />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
