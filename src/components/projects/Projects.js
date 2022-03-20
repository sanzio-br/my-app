import './Projects.css'
import Portfolio from './project images/portfolio.png'
import Tenzies from './project images/tenzies.png'
import Notes from './project images/Notes.png'
import { nanoid } from 'nanoid'
export default function Projects() {
    const Data = [
        {
            id:nanoid(),
            imgUrl:Portfolio,
            heading:"Personal Portfolio Practice",
            description:"This is an example of a begginner portfolio i created after i started lernig javascript. its a god practice of HTML5, CSS3 and vanilar javascript.",
            github:"https://github.com/sanzio-br/my-portfolio",
            liveDemo:"https://briansanzio.netlify.app/"
        },
        {
            id:nanoid(),
            imgUrl:Tenzies,
            heading:"Tenzies Game",
            description:"One of my projects as i was learning react Course. It involves playing dice and holding like dice till all are the same.",
            github:"https://github.com/sanzio-br/my-portfolio",
            liveDemo:"https://briansanzio.netlify.app/"
        },
        {
            id:nanoid(),
            imgUrl:Notes,
            heading:"Notes App",
            description:"in this app you are able to Write, Delete and also Save on your local storage. it is also one of the projects I worked on while learning react.",
            github:"https://github.com/sanzio-br/my-portfolio",
            liveDemo:"https://briansanzio.netlify.app/"
        },
    ]
    return (
        <section className='projects' id ="projects">
            <div className="heading">
                <h1 className="pageheading">Projects</h1>
            </div>
            <div className='project-cards'>
                {
                    Data.map(({ id,imgUrl,description, liveDemo, heading, github }) => {
                        return (
                            <div className='project' key ={id}>
                                <div className='img'>
                                    <img  src={imgUrl} alt="" />
                                </div>
                                <h3>{heading}</h3>
                                <p>{description}</p>
                                <div className='buttons'>
                                    <a href={github} className='button'>Github</a>
                                    <a href={liveDemo} className='button'>Live Demo</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}