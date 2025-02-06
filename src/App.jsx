import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Footer from './components/Footer/footer';
import CloudDevops from './components/Service /CloudDevOps';
import NotFound from './pages/NotFound'
import Work from './pages/Work';
import Team from './components/Team/Team';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/services" element={<Service />} />
          <Route path ="/services/cloudDevops" element={<CloudDevops />} />
          <Route path="/work" element={<Work />} />
          <Route path="/team" element={<Team />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
