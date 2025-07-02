import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import { getProjectById } from './data/projects';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

  const handleProjectSelect = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const handleBackToPortfolio = () => {
    setSelectedProjectId(null);
  };

  if (selectedProject) {
    return (
      <Router basename="/sara-portfolio">
        <div className="App bg-dark text-white min-h-screen">
          <ProjectPage 
            project={selectedProject} 
            onBack={handleBackToPortfolio}
          />
        </div>
      </Router>
    );
  }

  return (
    <Router basename="/sara-portfolio">
      <div className="App bg-dark text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Portfolio onProjectSelect={handleProjectSelect} />
              <Skills />
              <Recommendations />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
