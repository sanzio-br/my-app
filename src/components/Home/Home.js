import './home.css';
import Profile from '../../images/profile.png';
import {BsGithub}  from 'react-icons/bs';
import {BsLinkedin}  from 'react-icons/bs';
import {BsTwitter}  from 'react-icons/bs';
export default function Home(){
    return(
        <section id = "home">
            <h4>Welcome to my portfolio</h4>
            <h1>I am brian sanzio</h1>
            <h3>A frontend web developer</h3>
            <img src={Profile} alt="Profile" />
            <a href = "#contacts">scroll down</a>
            <div className = "socials">
                <a href='http://github.com' target="_blank" rel="noreferrer"><BsGithub/></a>
                <a href='http://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
                <a href='http://twitter.com' target="_blank" rel="noreferrer"><BsTwitter/></a>
                
                
            </div>
        </section>
    )
}