import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const CarList=()=>{
    const [carList, serCarList] = useState([]);
    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/Cars_List")
       .then((result) => {
        console.log(result)
        serCarList(result.data);
       })
       .catch((error)=>{
        alert(error)
       });
    },[]);
    return(
        <div>
            <Adminnav/>
            <h1>This Is Car List Page</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Car Pic</th>
                    <th>Car Name</th>
                    <th>Car Model</th>
                    <th>Car Type</th>
                    <th>Sit Number</th>
                    <th>Car Color</th>
                    <th>Car Buy Date</th>
                    <th>Car Details</th>
                    <th>Car Number</th>
                    <th>Rent Price</th>
                    <th>Car Owner Name</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
                    <tbody>
                        {
                            carList.map(post=>(
                                    <tr key={post.id}>
                                        <td>
                                        <img src={post.pp} />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="ms-3">
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            
                                        </td>
                                        <td></td>
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
export default CarList;