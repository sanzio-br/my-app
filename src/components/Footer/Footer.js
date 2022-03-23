import React from 'react'
import "./footer.css"
export default function Footer(){
    return (
        <footer >
            <div className="icons">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div className="details">
                <p>BtechSolutions</p>
                <p>All rights reserved © 2021 </p>
            </div>
        </footer>
    )
}
