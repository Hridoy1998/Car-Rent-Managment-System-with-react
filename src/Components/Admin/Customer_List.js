import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const CustomerList=()=>{
    const [customer, setCustomer] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/custorans_List")
       .then((result) => {
        console.log(result)
        setCustomer(result.data);
       })
       .catch((error)=>{
        
       });
    },[count]);
    const Bcuser=(id)=>()=>{
        console.log(id);
        axios.get("http://127.0.0.1:8000/api/Block_Users_List/{id}",{params:{id:id}})
        .then(function (response) {
            setCount(count + 1)
            alert("Successfully block...")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }
    const Vcuser=(id)=>()=>{
        alert(id);
    }
    const Ecuser=(id)=>()=>{
        alert(id);
    }
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
                                        <Button variant="primary" onClick={Ecuser(post.id)}> EDIT</Button>
                                        </td>
                                        <td>
                                        <Button variant="danger" onClick={Bcuser(post.id)}> BLOCK</Button>
                                        </td>
                                        <td>
                                        <Button variant="primary" onClick={Vcuser(post.id)}>VIEW</Button>
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