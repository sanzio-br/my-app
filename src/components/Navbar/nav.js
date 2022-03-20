
import {AiFillHome} from 'react-icons/ai';
import {AiFillContacts} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';
import {GrProjects} from 'react-icons/gr';
import { useState } from 'react';
import './navbar.css';
const Nav= ()=>{
        const [activeNav, setActiveNav] = useState("#home")
        return (
            <nav>
                <a href="#home" onClick = {()=>setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><AiFillHome /></a>
                <a href="#about" onClick = {()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUser /></a>
                <a href="#projects" onClick = {()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""} id="project-icon"><GrProjects /></a>
                <a href="#services" onClick = {()=>setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><FaHandsHelping /></a>
                <a href="#contacts" onClick = {()=>setActiveNav("#contacts")} className={activeNav === "#contacts" ? "active" : ""}><AiFillContacts /></a>
            </nav>
            )
}
export default Nav;