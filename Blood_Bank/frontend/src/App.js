import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HomePage
import HomePage from "./Pages/Home-Page/HomePage";

//  {/* ADMIN */}
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";
import DonorAppointments from "./Pages/Admin/DonorAppointments";
import SeekerRequests from "./Pages/Admin/SeekerRequests";
import RegisteredInstitutions from "./Pages/Admin/RegisteredInstitutions";
import BloodSamples from "./Pages/Admin/BloodSamples";
import BloodSamplesEdit from "./Pages/Admin/BloodSamplesEdit";
import DonorList from "./Pages/Admin/DonorList";
import SeekerList from "./Pages/Admin/SeekerList";

// Doner
import Doner from "./Pages/Doner/Doner";
import DonerRegister from "./Pages/Doner/LoginRegister/Register";
import DonorProfile from "./Pages/Doner/Profile/Profile";
import DonorEditProfile from "./Pages/Doner/Profile/EditProfile";

// Seeker
import Seeker from "./Pages/Seeker/Seeker";

// Institution
import Institution from "./Pages/Institution/InsRegForm";
import BloodRequest from "./Pages/Institution/bloodrequest";
import BloodRequestTable from "./Pages/Institution/bloodreqtable";
import EditBloodRequest from "./Pages/Institution/editbloodrequest";
import BloodReport from "./Pages/Institution/bloodreport";

//seeeker related imported files
import SeekerRegister from "./Pages/Seeker/SeekerRegister";
import SeekerProfile from "./Pages/Seeker/SeekerProfile";
import TemporyLogin from "./Pages/Seeker/temporyLogin";
import SeekerProfileUpdate from "./Pages/Seeker/SeekerProfileUpdate";
import SeekerCreateBloodRequest from "./Pages/Seeker/SeekerCreateBloodRequest";
import SeekerSearchForDonor from "./Pages/Seeker/SeekerSearchForDonor";
import Header from "./Pages/Home-Page/Header";

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage */}

        <Route path='/' element={<HomePage />} />

        {/* ADMIN */}
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/addbloodsamples' element={<AddBloodSamples />} />
        <Route path='/bloodsamples' element={<BloodSamples />} />
        <Route path='/donorappointments' element={<DonorAppointments />} />
        <Route path='/seekerrequests' element={<SeekerRequests />} />
        <Route path='/registeredinstitutions' element={<RegisteredInstitutions />} />
        <Route path='/donorlist' element={<DonorList />} />
        <Route path='/seekerlist' element={<SeekerList />} />

        {/* Doner */}
        <Route path='/doner' element={<Doner />} />

        {/* Seeker */}
        <Route path='/seeker' element={<Seeker />} />

        {/* Institution */}
        <Route path='/institution' element={<Institution />} />
        <Route path='/reqtable' element={<BloodRequestTable />} />
        <Route path='/bloodreq' element={<BloodRequest />} />
        <Route path='/editbloodreq/:id' element={<EditBloodRequest />} />
        <Route path='/bloodreport/:id' element={<BloodReport />} />

        <Route path="/" element={<HomePage />} />

        {/* ADMIN */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/addbloodsamples" element={<AddBloodSamples />} />
        <Route path="/bloodsamples" element={<BloodSamples />} />
        <Route path="/donorappointments" element={<DonorAppointments />} />
        <Route path="/seekerrequests" element={<SeekerRequests />} />
        <Route
          path="/registeredinstitutions"
          element={<RegisteredInstitutions />}
        />
        <Route path="/donorlist" element={<DonorList />} />
        <Route path="/seekerlist" element={<SeekerList />} />
        <Route path="/bloodsamplesedit/:id" element={<BloodSamplesEdit />} />

        {/* Doner */}
        <Route path="/doner" element={<Doner />} />

        {/* Seeker */}
        <Route path="/seeker" element={<Seeker />} />

        {/* Institution */}

        <Route path='/institution' element={<Institution/>}/>
        <Route path='/reqtable' element={<BloodRequestTable/>}/>
        <Route path='/bloodreq' element={<BloodRequest/>}/>
        <Route path='/editbloodreq/:id' element={<EditBloodRequest/>}/>
        <Route path='/bloodreport/:id' element={<BloodReport/>}/>





        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/addbloodsamples" element={<AddBloodSamples />} />

        <Route path="/donorappointments" element={<DonorAppointments />} />
        <Route path="/seekerrequests" element={<SeekerRequests />} />

        <Route path="/registeredinstitutions" element={<RegisteredInstitutions />} />

        <Route
          path="/registeredinstitutions"
          element={<RegisteredInstitutions />}
        />

        <Route path="/donorlist" element={<DonorList />} />
        <Route path="/seekerlist" element={<SeekerList />} />

        <Route path="/doner" element={<Doner />} />

        <Route path='/donorregister' element={<DonerRegister />} />
        <Route path='/donorprofile' element={<DonorProfile />} />
        <Route path='/donoreditprofile' element={<DonorEditProfile />} />

        <Route path="/donorregister" element={<DonerRegister />} />
        <Route path="/donorprofile" element={<DonorProfile />} />
        <Route path="/donoreditprofile" element={<DonorEditProfile />} />

        <Route path="/seeker" element={<Seeker />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/bloodreq" element={<BloodRequest />} />
        <Route path="/reqtable" element={<BloodRequestTable />} />

        {/* Setting paths for seeker components*/}
        <Route path="/seekerRegister" element={<SeekerRegister />} />
        <Route path="/seekerProfile" element={<SeekerProfile />} />
        <Route path="/tempLogin" element={<TemporyLogin />} />
        <Route path="/seekerProfileUpdate" element={<SeekerProfileUpdate />} />
        <Route
          path="/seekerCreateBloodRequest"
          element={<SeekerCreateBloodRequest />}
        />
        <Route
          path="/seekersearchfordonor"
          element={<SeekerSearchForDonor />}
        />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
