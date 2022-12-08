import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios  from "axios";
import Adminnav from "./nav";
const NoticeList=()=>{
    const navigation = useNavigate();
    const [notice, serRenter] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Admin_Notice_list")
       .then((result) => {
        console.log(result)
        serRenter(result.data);
       })
       .catch((error)=>{
        alert(error)
       });
    },[count]);

    const dNotice=(id)=>()=>{
        setCount(count + 1)
        console.log(id);
        axios.get("http://127.0.0.1:8000/api/Unblock_Users/{id}",{params:{id:id}})
        .then(function (response) {
            alert("Successfully Unblock...")
            console.log(response)
        })
        .catch(function (error) {
            alert(error)
        })
    }

    const vNotice=(id)=>()=>{
        console.log(id);
        alert(id);
        axios.get("http://127.0.0.1:8000/api/BlockUser_Details/{id}",{params:{id}})
        .then(function (res) {
            alert("View... ;-P")
        })
        .catch(function (err) {
            alert("something Worng...!")
        })
    }
    return(
        <div>
            <Adminnav/>
            <h1>This Is Notice List Page</h1>
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
                            notice.map(post=>(
                                    <tr key={post.id}>
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
                                        <Button onClick={dNotice(post.id)}> DELETE</Button>
                                        </td>
                                        <td>
                                        <Button onClick={vNotice(post.id)} >VIEW</Button>
                                        </td>
                                    </tr>
                                    ))
                        }
                    </tbody>
            </Table>
        </div>
    )
}
export default NoticeList;