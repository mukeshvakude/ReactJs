



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




import TcHoliday from './thomascook/TcHoliday';
import DynamicPackage from './thomascook/DynamicPackage';
import ErrorPage from './thomascook/ErrorPage';
import HplusPackage from './thomascook/HplusPackage';
import SrpPage from './thomascook/SrpPage';
function App() {
  return (
    <>
      <Router>
        <div className="main-wrapper">

          <Routes>
            <Route exact path="/holiday" element={<TcHoliday />} />
            <Route exact path="/holiday/packages/customized/:packagename/pkgId/:packageid" element={<DynamicPackage />} />
            <Route exact path="/holiday/international-tour-packages/:packagename/holidayBudget/:budget/holidayMonth/:month" element={<SrpPage />} />
            <Route exact path="/holiday/packages/:hpluspackage/pkgId/:hpluspkgid/destination/:pkgidandpkgname" element={<HplusPackage />} />
           
            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
