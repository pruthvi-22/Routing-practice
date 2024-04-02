import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <div className="container2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="image"
        alt="Wave"
      />
      <p className="para">Raj</p>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
