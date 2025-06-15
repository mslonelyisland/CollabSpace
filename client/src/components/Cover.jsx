import '../pages/Landing.css';
import Navbar from '../components/NavBar';
import cover from '../images/landing.png';

export default function Cover() {

  return (
    
    <div className='main-container'>
       <Navbar/>
        <div className='content-wrapper'>
          <div className='cover-container'>
            <img src={cover} alt='landing-cover' className='cover'></img>
            <div className='gradient-overlay'></div>
          </div>
        </div>
    </div>
  )
}

