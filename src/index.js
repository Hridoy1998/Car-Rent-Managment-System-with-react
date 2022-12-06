import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Approvals from './Components/Admin/Approvals';
import BlockUser from './Components/Admin/Block_User';
import CarAddByAdmin from './Components/Admin/Car_Add_By_Admin';
import CarList from './Components/Admin/Car_List';
import CustomerList from './Components/Admin/Customer_List';
import Messages from './Components/Admin/Messages';
import NoticeList from './Components/Admin/Notice_List';
import Notices from './Components/Admin/Notices';
import PostManage from './Components/Admin/Post_Manage';
import Profile from './Components/Admin/profile';
import RentHistory from './Components/Admin/Rent_History';
import RenterList from './Components/Admin/Renter_List';
import Reviews from './Components/Admin/Reviews';
import UserAddByAdmin from './Components/Admin/User_Add_By_Admin';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Registration from './Components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Admin, Route,Routes} from 'react-router-dom';
import { BrowserRouter as Customer} from 'react-router-dom';
import { BrowserRouter as Renter} from 'react-router-dom';
import { BrowserRouter as Main} from 'react-router-dom';
import Home from './Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Main>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Login" element={<Login/>}/>
    
       {/* <Admin> */}
          {/* <Routes/> */}
          {/* <Adminnav/> */}
            <Route exact path="/profile"element={<Profile/>}/>
            <Route exact path="/Approvals" element={<Approvals/>}/>
            <Route exact path="/BlockUser" element={<BlockUser/>}/>
            <Route exact path="/CarAddByAdmin" element={<CarAddByAdmin/>}/>
            <Route exact path="/CarList" element={<CarList/>}/>
            <Route exact path="/CustomerList" element={<CustomerList/>}/>
            <Route exact path="/Logout" element={<Logout/>}/>
            <Route exact path="/Messages" element={<Messages/>}/>
            <Route exact path="/NoticeList" element={<NoticeList/>}/>
            <Route exact path="/Notices" element={<Notices/>}/>
            <Route exact path="/PostManage" element={<PostManage/>}/>
            <Route exact path="/RentHistory" element={<RentHistory/>}/>
            <Route exact path="/RenterList" element={<RenterList/>}/>
            <Route exact path="/Reviews" element={<Reviews/>}/>
            <Route exact path="/UserAddByAdmin" element={<UserAddByAdmin/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Registration" element={<Registration/>}/>
          {/* </Routes> */}
          
      {/* </Admin> */}

      {/*<Customer>
          <Routes>
            Customer Route.
          </Routes>
      </Customer>

      <Renter>
          <Routes>
            renter Route.
          </Routes>
      </Renter>  */}

      </Routes>
      <Footer/>
    </Main>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
