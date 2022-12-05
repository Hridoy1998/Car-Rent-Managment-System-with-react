import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ()=>{
    const navigate = useHistory("");
    let[token, setToken]= useState("");
    let[token1, setToken1]= useState("");
    let[token2, setToken2]= useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");

    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/login-user",obj)
        .then(resp=>{
           if(resp.data=== "Customer")
            {
                var token = resp.data;
                var user = {userId: token.userid, access_token:token.token};
                localStorage.setItem('user',JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                alert("Login successful....Customer");
                navigate.push('/CustomerList');

            }
            else if(resp.data=== "Renter")
            {
                var token1 = resp.data;
                var user1 = {userId: token1.userid, access_token:token1.token};
                localStorage.setItem('user',JSON.stringify(user1));
                console.log(localStorage.getItem('user'));
                alert("Login successful....for Renter");
                navigate.push('/RenterList');
            }
            else if(resp.data=== "Admin")
            {
            var token2 = resp.data;
            var user2 = {userId: token2.userid, access_token:token2.token};
            localStorage.setItem('user',JSON.stringify(user2));
            console.log(localStorage.getItem('user'));
            alert("Login successful....for Admin");
            navigate.push('/profile');
            }
            else
            {
                alert(resp.data);
            }
        }).catch(err=>{
            console.log(err);
            alert(err.data)
            navigate.push('/Login');
        });


    }
    return(
        <div>
            <form>
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <div class="row">
                    Email <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br />
                    Password <input type="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
                </div>
                <div id="button" class="row">
                    <button onClick={loginSubmit}>Log in</button>
                </div>
            </div>
            </form>
        </div>

    )
}
export default Login; 