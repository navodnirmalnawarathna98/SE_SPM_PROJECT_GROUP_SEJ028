import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";
import DonorAppointments from "./Pages/Admin/DonorAppointments";
import SeekerRequests from "./Pages/Admin/SeekerRequests";
import RegisteredInstitutions from "./Pages/Admin/RegisteredInstitutions";
import BloodSamples from "./Pages/Admin/BloodSamples";
import DonorList from "./Pages/Admin/DonorList";
import SeekerList from "./Pages/Admin/SeekerList";

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
        <Route path='/addbloodsamples' element={<AddBloodSamples/>}/>
        <Route path='/bloodsamples' element={<BloodSamples/>}/>

        <Route path='/donorappointments' element={<DonorAppointments/>}/>
        <Route path='/seekerrequests' element={<SeekerRequests/>}/>
        <Route path='/registeredinstitutions' element={<RegisteredInstitutions/>}/>
        <Route path='/donorlist' element={<DonorList/>}/>
        <Route path='/seekerlist' element={<SeekerList/>}/>

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
