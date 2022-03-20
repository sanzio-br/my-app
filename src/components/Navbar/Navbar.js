import './navbar.css';
import {AiFillHome} from 'react-icons/ai';
import {AiFillContacts} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {FaHandsHelping} from 'react-icons/fa';
import {GrProjects} from 'react-icons/gr';
import { useState } from 'react';
const Navbar= ()=>{
        const [activeNav, setActiveNav] = useState("#home")
        const renderNavbar = ()=>{
            var w = window.innerWidth;
            if (w <= 450) {
                return(
                )
            }
            return(

            )
        }
        
        return (
            )
}
export default Navbar;