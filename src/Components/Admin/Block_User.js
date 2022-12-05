import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const BlockUser=()=>{
    const [blockUser, setBlockUser] = useState([]);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Block_Users_List")
       .then((result) => {
        console.log(result)
        setBlockUser(result.data);
       })
       .catch((error)=>{
        
       });
    },[]);
    return(
        <div>
            <h1>This Is Block User Page</h1>
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
                            blockUser.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                        <img src={post.pp} />
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="ms-3">
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
                                        <Button> UNBLOCK</Button>
                                        </td>
                                        <td>
                                        <Button>VIEW</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default BlockUser;