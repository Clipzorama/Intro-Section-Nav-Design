import { useState } from 'react';


// Importing all important pictures for the nav and the dropdown for everything
import Logo from '../assets/images/logo.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ToDo from '../assets/images/icon-todo.svg';
import Calendar from '../assets/images/icon-calendar.svg'
import Reminder from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'
import '../styles/Nav.css';




function Nav() {

    // setting to null here and depending on the feature im hovering ill change the state to abide the dropdown.
    const [openDropDown, setDropDown] = useState(null);

    return (
        <div className="nav-container">
            <img src={Logo} alt="Logo Symbol" />
            <ul className="nav-links">
                {/* Putting the whole feature dropDown in this one li element */}
                <li className='dropdown-parent'
                    // user hovers their mouse over the <li> element
                    onMouseEnter={() => setDropDown('features')}
                    // Negation of this
                    onMouseLeave={() => setDropDown(null)}>
                    <span className="dropdown-toggle">
                        Features <img src={openDropDown === 'features' ? ArrowDown : ArrowUp} alt="Arrow Icon for Dropdown" />
                    </span>
                    {openDropDown === 'features' && (
                        <div className="dropdown-menu">
                            <div><img src={ToDo} alt="Todo Symbol" />Todo List</div>
                            <div><img src={Calendar} alt="Todo Symbol" />Todo List</div>
                            <div><img src={Reminder} alt="Todo Symbol" />Todo List</div>
                            <div><img src={Planning} alt="Todo Symbol" />Todo List</div>
                        </div>
                    )}
                </li>
                <li 
                className="dropdown-parent"
                onMouseEnter={() => setDropDown('company')}
                onMouseLeave={() => setDropDown(null)}>
                    <span className="dropdown-toggle">
                        Company <img src={openDropDown === 'company' ? ArrowDown : ArrowUp} alt="Arrow Icon for Dropdown"/>
                    </span>
                    {openDropDown === 'company' && (
                        <div className="dropdown-menu">
                            <div>History</div>
                            <div>Our Team</div>
                            <div>Blog</div>
                        </div>
                    )}

                </li>
            </ul>
        </div>

    );
}


export default Nav