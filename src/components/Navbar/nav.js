
import { AiFillHome } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaHandsHelping } from 'react-icons/fa';
import { GoFileSubmodule } from 'react-icons/go';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
const Nav = () => {
    const [activeNav, setActiveNav] = useState("home")
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li
                        id='link'
                        onClick={() => setActiveNav("home")}
                        className={activeNav === "home" ? "active" : ""}><AiFillHome />
                    </li>
                </Link>
                <Link to='/about'>
                    <li
                        id='link'
                        onClick={() => setActiveNav("about")}
                        className={activeNav === "about" ? "active" : ""}>
                        <BiUser />
                    </li>
                </Link>
                <Link to='/projects'>
                    <li
                        id='link'
                        onClick={() => setActiveNav("projects")}
                        className={activeNav === "projects" ? "active" : ""}>
                        <GoFileSubmodule />
                    </li>
                </Link>
                <Link to='/services'>
                    <li
                        id='link'
                        onClick={() => setActiveNav("services")}
                        className={activeNav === "services" ? "active" : ""}>
                        <FaHandsHelping />
                    </li>
                </Link>
                <Link to='/contacts'>
                    <li
                        id='link'
                        onClick={() => setActiveNav("contacts")}
                        className={activeNav === "contacts" ? "active" : ""}>
                        <AiFillContacts />
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;