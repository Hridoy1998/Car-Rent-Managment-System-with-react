import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Logout=()=>
{
    const navigate = useNavigate();
    const [data, setData] = useState("");

    useEffect(()=>{
        axios.put("http://localhost:8000/api/logout")
        .then((response)=>
        {
            setData(response.data);
            alert=("woring....!")
            navigate('/RenterList');
        },[])
        .catch((err)=>{
            console.log(err);
            alert=("woring....!")
        });
        
    });
    
    localStorage.removeItem('user');
    // navigate.push('/RenterList');
}
export default Logout;