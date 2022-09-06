import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import HomePage from "./Pages/Home-Page/HomePage";
import Doner from "./Pages/Doner/Doner";
import Institution from "./Pages/Institution/InsRegForm";
import Seeker from "./Pages/Seeker/Seeker";
import BloodRequest from "./Pages/Institution/bloodrequest";
import BloodRequestTable from "./Pages/Institution/bloodreqtable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/doner' element={<Doner/>}/>
        <Route path='/seeker' element={<Seeker/>}/>
        <Route path='/institution' element={<Institution/>}/>
        <Route path='/bloodreq' element={<BloodRequest/>}/>
        <Route path='/reqtable' element={<BloodRequestTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
