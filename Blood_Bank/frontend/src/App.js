import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";
import DonorAppointments from "./Pages/Admin/DonorAppointments";
import SeekerRequests from "./Pages/Admin/SeekerRequests";
import RegisteredInstitutions from "./Pages/Admin/RegisteredInstitutions";
import DonorList from "./Pages/Admin/DonorList";
import SeekerList from "./Pages/Admin/SeekerList";

import HomePage from "./Pages/Home-Page/HomePage";

import Doner from "./Pages/Doner/Doner";
import DonerRegister from "./Pages/Doner/LoginRegister/Register";
import DonorProfile from "./Pages/Doner/Profile/Profile";
import DonorEditProfile from "./Pages/Doner/Profile/EditProfile";

import Institution from "./Pages/Institution/InsRegForm";

import Seeker from "./Pages/Seeker/Seeker";
import BloodRequest from "./Pages/Institution/bloodrequest";
import BloodRequestTable from "./Pages/Institution/bloodreqtable";

import SeekerRegister from "./Pages/Seeker/SeekerRegister";
import SeekerProfile from "./Pages/Seeker/SeekerProfile";
import TemporyLogin from "./Pages/Seeker/temporyLogin";
import Header from "./Pages/Home-Page/Header";

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path='/donorregister' element={<DonerRegister/>}/>
        <Route path='/donorprofile' element={<DonorProfile/>}/>
        <Route path='/donoreditprofile' element={<DonorEditProfile/>}/>
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
