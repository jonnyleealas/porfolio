import React from 'react';
import NavBarComponent from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import './App.css';  // Import the CSS file here

const App: React.FC = () => {  
  return (
    <div className="App">
        <NavBarComponent />
      <div className="App-main">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
