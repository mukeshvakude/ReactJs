



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




import TcHoliday from './thomascook/TcHoliday';
import DynamicPackage from './thomascook/DynamicPackage';
import ErrorPage from './thomascook/ErrorPage';
import HplusPackage from './thomascook/HplusPackage';
import SrpPage from './thomascook/SrpPage';
import PdpPageHplus from './thomascook/PdpPageHplus';
import 
{PATH_ROOT,INDIA_TOUR_PACKAGES,INTERNATIONAL_TOUR_PACKAGES
  ,INDIA_TOUR_PACKAGES_WITH_TOUR,INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR,
  INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH,INDIA_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH,
  DYNA_PDP ,HPLUS_PDP,HPLUS_PDP_INTERNATIONAL, HPLUS_PDP_INDIA
} from './thomascook/Constants/RouteConstants';
function App() {
  console.log(INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH ,"value")
  return (
    <>
      <Router>
        <div className="main-wrapper">

          <Routes>
            <Route exact path={PATH_ROOT} element={<TcHoliday />} />
            <Route exact path={INDIA_TOUR_PACKAGES} element={<TcHoliday />} />
            <Route exact path={INTERNATIONAL_TOUR_PACKAGES} element={<TcHoliday />} />
            <Route exact path={INDIA_TOUR_PACKAGES_WITH_TOUR} element={<SrpPage />} />
            <Route exact path={INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR} element={<SrpPage />} />
            <Route exact path={INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH} element={<SrpPage />} />
            <Route exact path={INDIA_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH} element={<SrpPage />} />
            <Route exact path={DYNA_PDP} element={<DynamicPackage />} /> 
            <Route exact path={HPLUS_PDP} element={<HplusPackage />} />
            <Route exact path={HPLUS_PDP_INTERNATIONAL} element={<PdpPageHplus />} />    
            <Route exact path={HPLUS_PDP_INDIA} element={<PdpPageHplus />} />           
            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
