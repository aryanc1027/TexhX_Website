import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBarStyles.css'


const NavBar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <Link to='/'><h1></h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/PassTimes'>Pass Times</Link>
                </li>
                <li>
                    <Link to='/Major'>Major</Link>
                </li>


            </ul>
            <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}


            </div>
        </div>
    )
}

export default NavBar
