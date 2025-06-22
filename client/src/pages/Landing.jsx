import Navbar from '../components/NavBar';
import './Landing.css';
import cover from '../images/landing.png';


export default function Landing() {

  return (
    <div className='main-container'>
        <Navbar/>
        <div className='content-wrapper'>
          <div className='cover-container'>
            <img src={cover} alt='landing-cover' className='cover'></img>
            <div className='gradient-overlay'></div>
            <div className='title-container'>
              <h1>CollabSpace.</h1>
              <p>All in one comfort</p>
            </div>
          </div>  
             
        </div>
    </div>
  )
}

