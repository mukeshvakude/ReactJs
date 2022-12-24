



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TcHoliday from './thomascook/TcHoliday';
function App() {
  return (
    <>   
    <Router>
      <div className="main-wrapper">
        
        <Routes>
          <Route exact path="/holiday" element={<TcHoliday />}/>
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
