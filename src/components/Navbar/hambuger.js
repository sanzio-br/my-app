import React, { useState } from 'react';
import './navbar.css';
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
                    <li onClick={toggle} className={active ? "active" : ""}><a onClick={toggle} className={active ? "active" : ""} href="#home" >HOME</a></li>
                    <li onClick={toggle} className={active ? "active" : ""}><a onClick={toggle} className={active ? "active" : ""} href="#about">about</a></li>
                    <li onClick={toggle} className={active ? "active" : ""}><a onClick={toggle} className={active ? "active" : ""} href="#projects">projects</a></li>
                    <li onClick={toggle} className={active ? "active" : ""}><a onClick={toggle} className={active ? "active" : ""} href="#services">service</a></li>
                    <li onClick={toggle} className={active ? "active" : ""}><a onClick={toggle} className={active ? "active" : ""} href="#contacts">contacts</a></li>
                </ul>
            </div>
        </div>
    )
}