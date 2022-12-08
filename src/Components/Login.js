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
                var obj = {email: email, password: password};
                axios.post("http://127.0.0.1:8000/api/login",obj)
                .then(resp=>{
                    if(resp.data == "Block")
                    {
                        alert("The User has been Block !");
                    }
                    var token = resp.data;
                    var user = {userId: token.userid, type:token.type, access_token:token.token};
                    localStorage.setItem('user',JSON.stringify(user));
                    console.log(localStorage.getItem('user'));
                    // navigate.push('/view_car_list');
        
                    if(token.type=="Admin"){
                        alert("login successful..");
                        navigate('/adminprofile');
                    }
                    else if(token.type=="Customer"){
                        alert("login successful..");
                        navigate('/Customer');
                    }
                    else if(token.type=="Renter"){
                        alert("login successful..");
                        navigate('/Renter');
                    }
                    
                }).catch(err=>{
                    console.log(err);
                });
        
        
            }
            
    return(
        <div>
            <HomeNave/>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
            <form>
                <div className="row">
                    Email <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
                    Password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
                </div>
            </form>
            
                <div id="button" className="row">
                    <button onClick={loginSubmit}>Log in</button>
                </div>
            </div>
            <div id="loginform">
            <div id="button" className="row">
                <button onClick={RegGo}>Registration</button>
            </div>
            </div>
        </div>

    )
}
export default Login; 