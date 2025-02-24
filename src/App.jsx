import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Footer from './components/Footer/footer';
import CloudDevops from './components/Service /CloudDevOps';
import NotFound from './pages/NotFound'
import Work from './pages/Work';
import Team from './components/Team/Team';
import Article from './components/article/DeploymentGuide'
import Scaling from './components/Scaling/ScalingGuide'
import ConsultingPage from './pages/ConsultingPage';
import Training from './pages/Training';
import Pipelines from './components/Pipelines/Pipelines'
import InfrastructureAsCode from './components/InfrastructureAsCode/InfrastructureAsCode'
import CareerPage from './pages/Career'
import FullStackServicePage from './components/Fullstack/FullStackServicePage'
import Web3ServicePage from './components/Webservice/Web3ServicePage'
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
          <Route path="/fullstack" element={<FullStackServicePage />} />
          <Route path="/web3" element={<Web3ServicePage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/team" element={<Team />} />
          <Route path="/article" element={<Article />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/scaling" element={<Scaling />} />
          <Route path="/pipelines" element={<Pipelines />} />
          <Route path="/infrastructure" element={<InfrastructureAsCode />} />
          <Route path="CareerPage" element={<CareerPage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
