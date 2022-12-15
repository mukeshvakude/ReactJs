

import Counter from './Component/Counter';
import HelloWorld from './Component/HelloWorld';
import Search from './Component/Serach';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
    
    <Router>
      <div className="main-wrapper">
        
        <Routes>
         
          <Route exact path="/holiday" element={<Search />}/>
          
          <Route exact path="/SRP" element={<HelloWorld />}/>
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;