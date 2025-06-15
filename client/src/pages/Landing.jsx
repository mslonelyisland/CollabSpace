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
          {/* <div className='pricing-container'>
            <h2 className='pricing-title'>Find the plan thats right for you.</h2>
            <h4 className='pricing-title'> Collab, Organize, Communicate -- all in one place.</h4>
            <div className='pricing'>
              <div className='member-pricing'>
              <h2 className='member-title'> Get invited to a workspace </h2>
              <h4> Join a workspace to collaborate with other members.</h4>
              <h4> $0 </h4>
              <button type='submit' className='login' onSubmit={onLogin}> LOGIN </button>
            </div>
              <div className='owner-pricing' onSubmit={onRegister}>
              <h2 > Create Workspaces and manage your team </h2>
              <h4> Join a workspace to collaborate with other members.</h4>
              <h4> $10 </h4>
              <button type='submit' className='register' > BUY NOW </button>
            </div>
            </div>
          </div>  */}
             
        </div>
    </div>
  )
}

