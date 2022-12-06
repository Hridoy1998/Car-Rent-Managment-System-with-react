import Button from 'react-bootstrap/Button'
import React from "react";
import { useEffect,useState } from "react";
import axios  from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminnav from './nav';
const Approvals=()=>{
    return(
        <div>
            <Adminnav/>
            <h1>This Is Approval Page</h1>
        </div>
    )
}
export default Approvals;