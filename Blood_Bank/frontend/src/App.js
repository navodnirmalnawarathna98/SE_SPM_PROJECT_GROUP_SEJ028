import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HomePage
import HomePage from "./Pages/Home-Page/HomePage";

//  {/* ADMIN */}
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";
import DonorAppointments from "./Pages/Admin/DonorAppointments";
import SeekerRequests from "./Pages/Admin/SeekerRequests";
import RegisteredInstitutions from "./Pages/Admin/RegisteredInstitutions";
import DonorList from "./Pages/Admin/DonorList";
import SeekerList from "./Pages/Admin/SeekerList";

// Doner
import Doner from "./Pages/Doner/Doner";

// Seeker
import Seeker from "./Pages/Seeker/Seeker";

// Institution
import Institution from "./Pages/Institution/InsRegForm";
import BloodRequest from "./Pages/Institution/bloodrequest";
import BloodRequestTable from "./Pages/Institution/bloodreqtable";
import EditBloodRequest from "./Pages/Institution/editbloodrequest";

import SeekerRegister from "./Pages/Seeker/SeekerRegister";
import SeekerProfile from "./Pages/Seeker/SeekerProfile";
import TemporyLogin from "./Pages/Seeker/temporyLogin";
import Header from "./Pages/Home-Page/Header";

function App() {
  return (
    <Router>
      <Routes>


        {/* HomePage */}
        <Route path='/' element={<HomePage/>}/>

        {/* ADMIN */}
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/addbloodsamples' element={<AddBloodSamples/>}/>

        {/* Doner */}
        <Route path='/doner' element={<Doner/>}/>

        {/* Seeker */}
        <Route path='/seeker' element={<Seeker/>}/>

        {/* Institution */}
        <Route path='/institution' element={<Institution/>}/>
        <Route path='/reqtable' element={<BloodRequestTable/>}/>
        <Route path='/bloodreq' element={<BloodRequest/>}/>
        <Route path='/editbloodreq/:id' element={<EditBloodRequest/>}/>



        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/addbloodsamples" element={<AddBloodSamples />} />

        <Route path="/donorappointments" element={<DonorAppointments />} />
        <Route path="/seekerrequests" element={<SeekerRequests />} />
        <Route
          path="/registeredinstitutions"
          element={<RegisteredInstitutions />}
        />
        <Route path="/donorlist" element={<DonorList />} />
        <Route path="/seekerlist" element={<SeekerList />} />

        <Route path="/doner" element={<Doner />} />
        <Route path="/seeker" element={<Seeker />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/bloodreq" element={<BloodRequest />} />
        <Route path="/reqtable" element={<BloodRequestTable />} />

        <Route path="/seekerRegister" element={<SeekerRegister />} />
        <Route path="/seekerProfile" element={<SeekerProfile />} />
        <Route path="/tempLogin" element={<TemporyLogin />} />
        <Route path="/header" element={<Header />} />

      </Routes>
    </Router>
  );
}

export default App;
