import {useState} from "react";
import axios from 'axios'
import './Register.css';
import {toast} from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import Cover from "../components/Cover";
import { GoogleLogin } from "@react-oauth/google";


export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name:'',
        email: '',
        password: ''
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const {name, email, password} = data
        try {
            // where you are sending and what you are sending
            const {data} = await axios.post('http://localhost:5000/register',{name,email,password} );
            if (data.error){
                toast.error(data.error);
            }
            else {
                // set the data to an empty object, to reset the form to its default value
                setData({});
                toast.success('Register successful');
                navigate(`/profileinformation/${data.userId}`);
            }
        } 
        catch (error) {
          console.log(error);
          toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="main-content">
            <div className="content-wrapper">
                <Cover/>
                <form className="form-container" onSubmit={registerUser}>
                    <h2 className="form-title"> Register to start</h2>
                    <div className="input-content">
                        <label>Email </label>
                        <input type='text' placeholder="Enter your email..."value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    </div>
                    <div className="input-content">
                        <label>Password </label>
                        <input type='password' placeholder="Enter your password..."value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </div>
                    <button type="submit" className="register-btn"> {loading ? 'Registering...' : 'Register'} </button>
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
}
