import React from 'react';
import './SideBar.css';
import profile from '../images/profile.JPG';

export default function SideBar() {
  return (
    <div className='main-content'>
        <div className='content-wrapper'>
            <div className='sidebar-container'>
                <div className='sidebar-photo'>
                    <img src={profile} alt='profile'/>
                </div>
            <div className='sidebar-links'>
                <ul>
                    <li>Workspaces</li>
                </ul>
            </div>
            </div>
        </div>
      
    </div>
  )
}
