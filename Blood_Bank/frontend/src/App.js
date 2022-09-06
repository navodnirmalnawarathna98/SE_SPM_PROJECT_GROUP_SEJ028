import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddBloodSamples from "./Pages/Admin/AddBloodSamples";

import HomePage from "./Pages/Home-Page/HomePage";

import Doner from "./Pages/Doner/Doner";

import Institution from "./Pages/Institution/InsRegForm";

import Seeker from "./Pages/Seeker/Seeker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/addbloodsamples' element={<AddBloodSamples/>}/>

        <Route path='/doner' element={<Doner/>}/>

        <Route path='/seeker' element={<Seeker/>}/>

        <Route path='/institution' element={<Institution/>}/>

      </Routes>
    </Router>
  );
}

export default App;
