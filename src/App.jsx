import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { LegalNotice } from './pages/LegalNotice';
import { NotFound } from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <Router>
      {/* Lightweight CSS background with dot grid + gradient */}
      <div className="scene-bg" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projet/:id" element={<ProjectDetail />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
