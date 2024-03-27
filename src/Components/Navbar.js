import React from 'react'
import './Navbar.css'
import menu_icon from '../Assests/menu.png'
import logo from '../Assests/logo.png'
import search_icon from '../Assests/search.png'
import upload_icon from '../Assests/upload.png'
import more_icon from '../Assests/more.png'
import notification_icon from '../Assests/notification.png'
import profile_icon from '../Assests/dev1.jpg'
import { Link } from 'react-router-dom'



const Navbar = ({ setSidebar }) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={() => { setSidebar(prev => prev === false ? true : false) }} src={menu_icon} alt='not'></img>
                <Link to='/'><img className='logo' src={logo} alt='not'></img></Link>

            </div>
            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>

                    <input type='text' placeholder='Search'></input>
                    <img className='logo' src={search_icon} alt='not'></img>
                </div>

            </div>
            <div className='nav-right flex-div'>
                <img src={upload_icon} alt=''></img>
                <img src={more_icon} alt=''></img>
                <img src={notification_icon} alt=''></img>
                <img src={profile_icon} height='33px' className='user-icon' alt=''></img>

            </div>

        </nav>
    )
}

export default Navbar