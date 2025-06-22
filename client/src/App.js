import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileInformation from './pages/ProfileInformation';
import Workspace from './pages/Workspace';
// Backend port
axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials =true

const clientId = '587967536606-7lm06no1cv9vs3iv5dtu9j7m0sv8jlgt.apps.googleusercontent.com'

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}> 
    <Router>
      <UserContextProvider> 
      <Toaster position="top-right"  reverseOrder={true} toastOptions={{duration: 2000}} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileinformation/:userId" element={<ProfileInformation />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </UserContextProvider>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
