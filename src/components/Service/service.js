import React from "react";
import "./service.css";
import {MdDone} from "react-icons/md";
import {nanoid} from 'nanoid'
export default function Services(){
    const cards = [
        {
            id: nanoid(),
            header:"Web Development",
            lists:["Website Design", "Website Development", "Website Hosting", "Website Maintainance", "Latency Reduction"],
            price: 150
        },
        {
            id: nanoid(),
            header:"General Services",
            lists:["Database Development", "Database Maintainance", "Database upgrade","Bulk SMS","M-pesa Intergration"],
            price:50
        },
        {
            id: nanoid(),
            header:"Data Entry",
            lists:[" PDF to Word","Web Search","Data Capturing from Websites","Mailing List Creation","Manually typing Data"],
            price: "10/hr"
        },
    ]
    return(
        <section id= "services">
        <div className="heading">
          <h1 className="pageheading">services</h1>
        </div>
            <div className="cardSection">
                {
                    cards.map(({ id, header, lists, price }) => {
                        return (
                            <div key={id} className="card">
                                <h3>{header}</h3>
                                <div className="card-bottom">
                                    <ul>
                                        {lists.map(item => {
                                            return (
                                                <li key ={lists.length}><MdDone /> {item}.</li>
                                            )
                                        })}
                                    </ul>
                                    <p>prices start from <br /><span>{price}</span></p> </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}