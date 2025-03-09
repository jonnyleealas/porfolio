import React from 'react';
import NavBarComponent from './Header/NavBar';

// You can define types for props or state if you use them
const App: React.FC = () => {  // React.FC (Function Component) is an optional type annotation for functional components.
  return (
    <div className="App">
      <NavBarComponent />
    </div>
  );
}

export default App;
