// App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer className="my-custom-footer" />
      </div>
    </BrowserRouter>
  );
};

export default App;
