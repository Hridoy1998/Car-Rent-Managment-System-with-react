import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const CustomerList=()=>{
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/custorans_List")
       .then((result) => {
        console.log(result)
        setCustomer(result.data);
       })
       .catch((error)=>{
        
       });
    },[]);
    return(
        <div>
            <Adminnav/>
            <h1>This Is Customer List Page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Profile Pic</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th>NID</th>
                    <th>DL number</th>
                    <th>Position</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
                    <tbody>
                        {
                            customer.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                        <img src={post.pp} />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="ms-3">
                                                    <p >{ post.first_name +" "+ post.last_name}</p>
                                                    <p >{ post.username }</p>
                                                    <p >{  post.email }</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{ post.dob }</p>
                                            <p>{ post.gender}</p>
                                            <p>{ post.phone_number }</p>
                                        </td>
                                        <td>
                                            <p>{ post.address }</p>
                                        </td>
                                        <td>
                                            <p>{ post.nid_number }</p>
                                        </td>
                                        <td>
                                            <span>{  post.dl_number }</span>
                                        </td>
                                        <td>{  post.type }</td>
                                        <td>
                                        <Button variant="primary"> EDIT</Button>
                                        </td>
                                        <td>
                                        <Button variant="danger"> BLOCK</Button>
                                        </td>
                                        <td>
                                        <Button variant="primary">VIEW</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default CustomerList;