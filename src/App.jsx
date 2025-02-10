import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer/footer";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Services"));
const CloudDevops = lazy(() => import("./components/Service /CloudDevOps"));
const Work = lazy(() => import("./pages/Work"));
const Team = lazy(() => import("./components/Team/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/cloudDevops" element={<CloudDevops />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
