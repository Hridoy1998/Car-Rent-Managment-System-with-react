import React from 'react';
import CustomerNavbar from './CustomerNavbar';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
const DashboardCustomer=()=>
{
    const [ffile, setProfile] = useState([]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        var obj = {id:user.userId};
        axios.post("http://localhost:8000/api/dashboard_customer",obj)
        .then((result) => {
         console.log(result)
         setProfile(result.data);
        })
        .catch((error)=>{
            console.log(error);
        });
     },[]);
    return(
        <div>
            <CustomerNavbar/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Profile Pic</th>
                        <th>User Details</th>
                        <th>Information</th>
                        <th>Address</th>
                        <th>NID</th>
                        <th>DL number</th>
                        <th>Position</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        
                                    <tr key={ffile.id}>
                                        <td>
                                        <img src={ffile.pp} />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={ffile.pp}
                                                    alt=""
                                                    className="rounded-circle"
                                                    />
                                                <div className="ms-3">
                                                    <p >{ ffile.first_name +" "+ ffile.last_name}</p>
                                                    <p >{ ffile.username }</p>
                                                    <p >{  ffile.email }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{ ffile.dob }</p>
                                            <p>{ ffile.gender}</p>
                                            <p>{ ffile.phone_number }</p>
                                        </td>
                                        <td>
                                            <p>{ ffile.address }</p>
                                        </td>
                                        <td>
                                            <p>{ ffile.nid_number }</p>
                                        </td>
                                        <td>
                                            <span>{  ffile.dl_number }</span>
                                        </td>
                                        <td>{  ffile.type }</td>
                                    </tr>
                           
                        
                    </tbody>
            </Table>
        </div>
    )
}
export default DashboardCustomer;