import React from 'react';
import NavBarComponent from './Header/NavBar';
import Home from './Home/Home';
import Footer from './Footer/Footer';



const App: React.FC = () => {  
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{flex: 1}}>

      <NavBarComponent />
      <Home />
       
   
    </div>
      <Footer />
  </div>
  );
}

export default App;
