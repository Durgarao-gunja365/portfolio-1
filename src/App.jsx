import About from './components/About';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import CreativeNavbar from './components/CreativeNavbar';
import ExperienceTimeline from './components/ExperienceTimeline';
import Home from './components/Home';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import StatsSection from './components/StatsSection';


function App() {
  return (
    <>
     <CreativeNavbar/>
      
      <div className="h-screen bg-gradient-to-br from-black to-gray-900 text-white pt-20">
        {/* Add your Hero/About/Projects here */}
        <Home/>
        <About/>
        <SkillsSection/>
        <ProjectsSection/>
        <CertificationsSection/>
        <ExperienceTimeline/>
        <StatsSection/>
        <ContactSection/>
      </div>
    
    </>
  );
}

export default App;
