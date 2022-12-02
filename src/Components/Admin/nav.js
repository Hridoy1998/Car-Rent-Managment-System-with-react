import React from "react";
import { Link } from "react-router-dom";
const Nav=()=>{
    return(
        <div>
            <Link to="/Profile">Profile</Link>&nbsp;&nbsp;
            <Link to="/BlockUser">Block Users List</Link>&nbsp;&nbsp;
            <Link to="/UserAddByAdmin">Users Add By Admin</Link>&nbsp;&nbsp;
            <Link to="/RenterList">Renter List</Link>&nbsp;&nbsp;
            <Link to="/CustomerList">Customers List</Link>&nbsp;&nbsp;
            <Link to="/CarAddByAdmin">Add Car By Admin</Link>&nbsp;&nbsp;
            <Link to="/CarList">Car List</Link>&nbsp;&nbsp;
            <Link to="/Approvals">Approval</Link>&nbsp;&nbsp;
            <Link to="/RentHistory">Rent History</Link>&nbsp;&nbsp;
            <Link to="/Notices">Notice</Link>&nbsp;&nbsp;
            <Link to="/NoticeList">Notice List</Link>&nbsp;&nbsp;
            <Link to="/Messages">Messages</Link>&nbsp;&nbsp;
            <Link to="/PostManage">Post Manage</Link>&nbsp;&nbsp;
            <Link to="/Reviews">Reviews Manage</Link>&nbsp;&nbsp;
            <Link to="/Logout">Logout</Link>&nbsp;&nbsp;
        </div>
    )
}
export default Nav;