import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import HomePage from "./Pages/Home-Page/HomePage";
import Doner from "./Pages/Doner/Doner";
import Institution from "./Pages/Institution/InsRegForm";
import Seeker from "./Pages/Seeker/Seeker";
import SideNavbar from "./Pages/Institution/sidenavbar"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/doner' element={<Doner/>}/>
        <Route path='/seeker' element={<Seeker/>}/>
        <Route path='/institution' element={<Institution/>}/>
        <Route path='/sidenavbar' element={<SideNavbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
