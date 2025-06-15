import React, { useState } from 'react'
import {toast} from "react-hot-toast";
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom';
import './ProfileInformation.css';



export default function ProfileInformation() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { userId } = useParams();
    const [data, setData] = useState({
        userRole: '',
        firstName: '',
        lastName: '',
        image:''
    });

    const profileInformation = async (e) => {
        e.preventDefault(); // to prevent form from refreshing the page

        const formData = new FormData();
        formData.append('userRole', data.userRole);
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('image', data.image);

        try {
        const res = await axios.post(`http://localhost:5000/profileinformation/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

            if (data.error){
                toast.error(data.error);
            }
            else{
                setData({});
                toast.success('Registration Complete!')
                navigate('/workspace')
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
        }
    };

    const [preview, setPreview] = useState(null);

    const handleimageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData({ ...data, image: file});
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };
    
    
    return (
    <div className='main-content'>
        <div className='content-wrapper'>
            <form className='profile-wrapper' onSubmit={ profileInformation}>
                <div className='user-role'>
                    <h3> What type of user are you? </h3>
                    <label>Choose one</label>
                    <div className='radio-wrapper'>
                        <div className='radio-input'>
                        <label><input type='radio' value='member' checked={data.userRole === 'member'} onChange={(e) => setData({...data, userRole: e.target.value})}/>Member</label>
                    </div>
                    <div className='radio-input'>
                        <label> <input type='radio' value={'owner'} checked={data.userRole === 'owner'} onChange={(e) => setData({...data, userRole: e.target.value})}/>Owner</label>
                    </div>
                    </div>
                </div>

                {/* conditional statement */}
                {data.userRole &&(
                    <>
                    <h2 className='title'> Profile Information </h2>
                    <div className='input-content'>
                    <label> Choose Image</label>
                    <input type='file' accept='image/*' onChange={handleimageChange}></input>
                    {preview && (
                        <img src={preview} alt='Preview' className='preview'/>
                    )}
                    </div>

                    <div className='input-content'>
                    <label>First Name </label>
                    <input type='text' placeholder='Enter your name' value={data.firstName} onChange={(e => setData({...data, firstName: e.target.value}))}></input>
                    </div>

                    <div className='input-content'>
                    <label>Last Name </label>
                    <input type='text' placeholder='Enter your name' value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})} ></input>
                    </div>
                    <button type='submit' className='finish-btn'> {loading ? 'Finishing...': 'Finish' } </button>
                    </>
                )}
            </form>
        </div>
      
    </div>
  )
}
