import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

// HomePage
import HomePage from "./Pages/Home-Page/HomePage";

//  {/* ADMIN */}
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";

// Doner
import Doner from "./Pages/Doner/Doner";

// Seeker
import Seeker from "./Pages/Seeker/Seeker";

// Institution
import Institution from "./Pages/Institution/InsRegForm";
import BloodRequest from "./Pages/Institution/bloodrequest";
import BloodRequestTable from "./Pages/Institution/bloodreqtable";
import EditBloodRequest from "./Pages/Institution/editbloodrequest";

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


      </Routes>
    </Router>
  );
}

export default App;
