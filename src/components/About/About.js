import React from 'react'
import "./about.css"
import Profile from '../../images/profile.png';
import Resume from "./CURRICULUM VITAE.pdf";
import {GoVerified} from "react-icons/go";
export default function About(){
    return(
        <section id="about">
            <div className="heading">
                <h1 className="pageheading">about me</h1>
            </div>
            <div className="top">
                <div className="about-img">
                    <img src={Profile} alt="" />
                </div>
                <div className="paragraph" >
                    <p>
                        Freelance software developer with strong analytical skills and proficiency in development. seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills. I have vast knowledge in technologies such as ;-
                    </p>
                    <div className ="skills">
                        <ul>
                            <li><GoVerified /> HTML5</li>
                            <li><GoVerified /> CSS3</li>
                            <li><GoVerified /> JavaScript ES6</li>
                            <li><GoVerified /> React JS</li>
                            <li><GoVerified /> Next JS</li>
                            <li><GoVerified /> Angular JS</li>
                            <li><GoVerified /> MongoDB</li>
                            <li><GoVerified /> MySQL</li>
                        </ul>
                    </div>
                    <div className= "btns">
                    <a href={Resume} className="button" download>Download resume</a>
                    <a href="#contacts" className="button">let's talk</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <ion-icon name="logo-html5"></ion-icon>
                <ion-icon name="logo-css3"></ion-icon>
                <ion-icon name="logo-javascript"></ion-icon>
                <ion-icon name="logo-python"></ion-icon>
                <ion-icon name="logo-react"></ion-icon>
            </div>
        </section>
    )
}
