import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import sinon from 'sinon'
export default function Hambuger() {
    const [active, setActive] = useState(false)
    function toggle() {
        setActive(prevState => !prevState)
    }
    return (
        <div className='header'>
            <div className="nav-list">
                <div onClick={toggle} className={active ? "active" : ""} id='hambuger'><div className="bar"></div></div>
                <ul onClick={toggle} className={active ? "active" : ""}>
                    <Link to='/'>
                        <li
                            onClick={toggle} className={active ? "active" : ""}>
                            <a onClick={toggle} className={active ? "active" : ""} href="#home" >HOME</a>
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li
                            onClick={toggle}
                            className={active ? "active" : ""}>
                            <a onClick={toggle} className={active ? "active" : ""}>
                                about
                            </a>
                        </li>
                    </Link>
                    <Link to='/projects'>
                        <li
                            onClick={toggle} className={active ? "active" : ""}>
                            <a onClick={toggle}
                                className={active ? "active" : ""}>
                                projects
                            </a>
                        </li>
                    </Link>
                    <Link to='/services'>
                        <li onClick={toggle}
                            className={active ? "active" : ""}>
                            <a onClick={toggle} className={active ? "active" : ""}>
                                service
                            </a>
                        </li>
                    </Link>
                    <Link to='/contacts'>
                        <li
                            onClick={toggle} className={active ? "active" : ""}>
                            <a onClick={toggle}
                                className={active ? "active" : ""}>
                                contacts
                            </a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}