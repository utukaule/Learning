
import { LOGO } from '../utilities/constants'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={LOGO} alt="" />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
