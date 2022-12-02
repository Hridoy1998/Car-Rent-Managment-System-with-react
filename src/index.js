import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Number from './Components/numberInput'
import Nav from './Components/Admin/nav';
import Approvals from './Components/Admin/Approvals';
import BlockUser from './Components/Admin/Block_User';
import CarAddByAdmin from './Components/Admin/Car_Add_By_Admin';
import CarList from './Components/Admin/Car_List';
import CustomerList from './Components/Admin/Customer_List';
import Logout from './Components/Admin/Logout';
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
import { BrowserRouter as Admin, Route,Switch} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin>
      <Nav/>
        <Switch>
          <Route path={"/Profile"}><Profile/></Route>
          <Route path={"/Approvals"}><Approvals/></Route>
          <Route path={"/BlockUser"}><BlockUser/></Route>
          <Route path={"/CarAddByAdmin"}><CarAddByAdmin/></Route>
          <Route path={"/CarList"}><CarList/></Route>
          <Route path={"/CustomerList"}><CustomerList/></Route>
          <Route path={"/Logout"}><Logout/></Route>
          <Route path={"/Messages"}><Messages/></Route>
          <Route path={"/NoticeList"}><NoticeList/></Route>
          <Route path={"/Notices"}><Notices/></Route>
          <Route path={"/PostManage"}><PostManage/></Route>
          <Route path={"/RentHistory"}><RentHistory/></Route>
          <Route path={"/RenterList"}><RenterList/></Route>
          <Route path={"/Reviews"}><Reviews/></Route>
          <Route path={"/UserAddByAdmin"}><UserAddByAdmin/></Route> 
        </Switch>
        <Number numbers="187678905"/>
      <Footer/>
    </Admin>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
