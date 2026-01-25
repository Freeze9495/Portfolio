import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { LegalNotice } from './pages/LegalNotice';
import { NotFound } from './pages/NotFound';
import DarkVeilBackground from './components/DarkVeilBackground';
import './styles/global.css';

function App() {
  return (
    <Router>
      <DarkVeilBackground />
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
