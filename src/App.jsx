import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Footer from './components/Footer/footer';
import CloudDevops from './components/Service /CloudDevOps';
import NotFound from './pages/NotFound'
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
