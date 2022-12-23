


import HelloWorld from './Component/HelloWorld';
// import Search from './Component/Serach';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TcHoliday from './thomascook/TcHoliday';
function App() {
  return (
    <>
    
    <Router>
      <div className="main-wrapper">
        
        <Routes>
         
          <Route exact path="/holiday" element={<TcHoliday />}/>
          <Route exact path="/holiday/SRP" element={<HelloWorld />}/>
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
