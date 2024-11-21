import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import config from "./../../config.js";

const Register = () => {

    const [uname, setUname] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();

    let handleSubmit = ( e ) => {
        e.preventDefault();

        async function getData() {
            
            let data = {
                username: uname,
                password: passwd
            }

            let resp = await axios.post(`${config.API_URI}/user/register`, data, { headers: {
                'content-type': 'application/json'
            }});

            if( resp.status == 201 ) {
                window.alert("Successfully Registered");
                navigate("/");
            } else {
                window.alert("Registration Failed");
                setUname("");
                setPasswd("");
            }
        }

        getData();
    }

    return (
        <form className="flex flex-col justify-center items-center border border-slate-200 shadow-sm px-12 py-6 gap-6" onSubmit={handleSubmit}>
            <h3 className="text-3xl font-bold text-slate-800">Register</h3>
            <div className="flex flex-col gap-3">
                <label htmlFor="UserName" className="text-slate-500">UserName</label>
                <input type="text" 
                className="rounded-lg border text-lg focus:border focus:outline-none px-4 py-2" 
                name="UserName" 
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                placeholder="UserName"/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="Password" className="text-slate-500">Password</label>
                <input type="text" 
                className="rounded-lg border text-lg focus:border focus:outline-none px-4 py-2" 
                name="Password" 
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                placeholder="Password"/>
            </div>
            <input type="submit" className="bg-slate-800 text-slate-100 rounded-md px-4 py-2" value="Register"/>
            <Link to="/" className="text-blue-800 hover:underline transition-all duration-150 decoration-blue-800 underline-offset-4 -mt-3">Already have an Account !</Link>
        </form>
    );
}
 
export default Register;