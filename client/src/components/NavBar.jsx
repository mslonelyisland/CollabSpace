import './NavBar.css';
import {Link} from 'react-router-dom'

export default function NavBar (){
    return (
        <div> 
            <div className='navbar'>
                <Link to='/login' className='nav-links'> Login</Link>
                <Link to='/register' className='nav-links' > Register </Link>
            </div>
        </div>

    )
}