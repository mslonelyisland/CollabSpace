import {useState} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cover from '../components/Cover';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState ({
        email: '',
        password: ''
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const {email,password} = data
        try {
            const {data} = await axios.post('http://localhost:5000/login',{email,password});
            if (data.error){
                toast.error(data.error);
            }
            else{
                // set the data to an empty object, to reset the form to its default value
                setData({});
                toast.success('Login Successful');
                navigate('/workspace');
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="main-content">
            <div className="content-wrapper">
                <Cover/>
                <form className="form-container" onSubmit={loginUser}>
                    <h2 className="form-title"> Log in to start</h2>
                    <div className="input-content">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email... " value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
                    </div>
                    <div className="input-content">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password... " value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div className="google-btn">
                        <GoogleLogin 
                        onSuccess={(response) => {
                            console.log(response.credential); // JWT token
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />
                    </div>
                </form>
            </div>      
        </div>
    )
};