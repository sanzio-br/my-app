import './Projects.css'
import Todo from './images/TODO.JPG'
import capture from './images/Capture.JPG'
export default function Projects() {
    const Data = [
        {
            imgUrl:Todo,
            heading:"Personal portfolio example",
            github:"https://github.com/sanzio-br/my-portfolio",
            liveDemo:"https://briansanzio.netlify.app/"
        },
        {
            imgUrl:capture,
            heading:"Personal portfolio example",
            github:"https://github.com/sanzio-br/my-portfolio",
            liveDemo:"https://briansanzio.netlify.app/"
        },
        {
            imgUrl:capture,
            heading:"Personal portfolio example",
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
                    Data.map(({ imgUrl, liveDemo, heading, github }) => {
                        return (
                            <div className='project'>
                                <div className='img'>
                                    <img  src={imgUrl} alt="" />
                                </div>
                                <h3>{heading}</h3>
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