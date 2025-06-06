// App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import cardsData from './Projects/projectData';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects cardsData={cardsData} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer className="my-custom-footer" />
      </div>
    </BrowserRouter>
  );
};

export default App;
