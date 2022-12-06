import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeNave from "./HomeNave";

const Login = ()=>{
    const navigate = useNavigate();
    let[token, setToken]= useState("");
    let[email, setEmail] = useState();
    let[password, setPassword] =useState();

    const RegGo=()=>{

        navigate("/Registration");
    }

    const loginSubmit= ()=>{
        const obj = {email: email, password: password};
        // console.log(obj);
        axios.post("http://127.0.0.1:8000/api/LoginUser",obj)
        // .then(resp=>{
        //      alert (resp.data);
        //     // var token = resp.data;
        //     // console.log(token);
        //     // var user = {userId: token.userid, access_token:token.token,type:token.type};
        //     // localStorage.setItem('user',JSON.stringify(user));
        //     // console.log(localStorage.getItem('user'));
        //         navigate("/")
            
        // }).catch(err=>{
        //     console.log(err);
        // });

        .then(resp=>{

                var token = resp.data;
                var user = {userId: token.userid, access_token:token.token,type:token.type};
                localStorage.setItem('user',JSON.stringify(user));
                if(user.type == "Customer"){
                    console.log(localStorage.getItem('user'));
                    alert("Login successful....Customer");
                    navigate("/CustomerList");

                }
                else if(user.type == "Renter")
                {
                    console.log(localStorage.getItem('user'));
                    alert("Login successful....for Renter");
                    navigate("/RenterList");
                }
                else if(user.type == "Admin"){
                
                    console.log(localStorage.getItem('user'));
                    navigate("/");
                }
                
                 else
                {
                    alert(resp.data);
                }

        })
        .catch(err=>{
            console.log(err);
            alert(err.data)
            navigate("/Login");
        });


    }
    return(
        <div>
            <HomeNave/>
            <form>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <div className="row">
                    Email <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
                    Password <input type="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
                </div>
                <div id="button" className="row">
                    <button onClick={loginSubmit}>Log in</button>
                </div>
            </div>
            </form>
            <div id="loginform">
            <div id="button" className="row">
                <button onClick={RegGo}>Registration</button>
            </div>
            </div>
        </div>

    )
}
export default Login; 