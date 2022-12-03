import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Number from './Components/numberInput'
import NavScrollExample from './Components/Admin/nav';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Admin, Route,Switch} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin>
      <NavScrollExample/>
        <Switch>
          <Route exact path={"/"}><Profile/></Route>
          <Route exact path={"/Approvals"}><Approvals/></Route>
          <Route exact path={"/BlockUser"}><BlockUser/></Route>
          <Route exact path={"/CarAddByAdmin"}><CarAddByAdmin/></Route>
          <Route exact path={"/CarList"}><CarList/></Route>
          <Route exact path={"/CustomerList"}><CustomerList/></Route>
          <Route exact path={"/Logout"}><Logout/></Route>
          <Route exact path={"/Messages"}><Messages/></Route>
          <Route exact path={"/NoticeList"}><NoticeList/></Route>
          <Route exact path={"/Notices"}><Notices/></Route>
          <Route exact path={"/PostManage"}><PostManage/></Route>
          <Route exact path={"/RentHistory"}><RentHistory/></Route>
          <Route exact path={"/RenterList"}><RenterList/></Route>
          <Route exact path={"/Reviews"}><Reviews/></Route>
          <Route exact path={"/UserAddByAdmin"}><UserAddByAdmin/></Route> 
        </Switch>
        <Number numbers="1000"/>
      <Footer/>
    </Admin>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
