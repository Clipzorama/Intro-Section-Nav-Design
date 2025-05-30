import { useState } from 'react';

import '../styles/Nav.css';

// Importing all important pictures for the nav and the dropdown for everything
import Logo from '../assets/images/logo.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ToDo from '../assets/images/icon-todo.svg';
import Calendar from '../assets/images/icon-calendar.svg'
import Reminder from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'

import Hamburger from '../assets/images/icon-menu.svg';
import Close from '../assets/images/icon-close-menu.svg'





function Nav() {

    // setting to null here and depending on the feature im hovering ill change the state to abide the dropdown.
    const [openDropDown, setDropDown] = useState(null);

    const [mobileView, setMobileView] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const toggleDown = (name) => {
        setMobileDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <div className="nav-container">
            <img src={Logo} alt="Logo Symbol" className="logo" />
            {/* I make the button disappear when i use the hidden class for this img element.*/}
            <img className={`hamburger-menu ${mobileView ? 'hidden' : ''}`}
             onClick={() => setMobileView(true)}
              src={Hamburger} 
              alt="Hamburger Menu" />
            <div className="mobile-nav">
                <div className="nav-left">
                    <ul className="nav-links">
                        {/* Putting the whole feature dropDown in this one li element */}
                        <li className='dropdown-parent'
                            // user hovers their mouse over the <li> element. This changes the value of 'features' to enable the logic for it.
                            onMouseEnter={() => setDropDown('features')}
                            // Negation of this
                            onMouseLeave={() => setDropDown(null)}>
                            <span className="dropdown-toggle">
                                Features <img src={openDropDown === 'features' ? ArrowUp : ArrowDown} alt="Arrow Icon for Dropdown" />
                            </span>
                            {/* A nice way to add dropdown menus instead of adding an ::after pseudo element */}
                            {openDropDown === 'features' && (
                                <div className="dropdown-menu">
                                    <div><img src={ToDo} alt="Todo Symbol" />Todo List</div>
                                    <div><img src={Calendar} alt="Calendar Symbol" />Calendar</div>
                                    <div><img src={Reminder} alt="Reminder Symbol" />Reminders</div>
                                    <div><img src={Planning} alt="Planning Symbol" />Planning</div>
                                </div>
                            )}
                        </li>
                        <li
                            className="dropdown-parent"
                            onMouseEnter={() => setDropDown('company')}
                            onMouseLeave={() => setDropDown(null)}>
                            <span className="dropdown-toggle">
                                Company <img src={openDropDown === 'company' ? ArrowUp : ArrowDown} alt="Arrow Icon for Dropdown" />
                            </span>
                            {openDropDown === 'company' && (
                                <div className="dropdown-menu">
                                    <div>History</div>
                                    <div>Our Team</div>
                                    <div>Blog</div>
                                </div>
                            )}
                        </li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                </div>
            </div>

            {/* mobile nav panel */}
            {mobileView && (
                <div className="mobile-menu">
                    <img src={Close} alt="" 
                    className="close-btn" 
                    onClick={() => setMobileView(false)} />

                </div>
            )}



        </div>
    );
}


export default Nav