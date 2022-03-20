import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/projects/Projects'
import Services from './components/Service/service'
import './index.css'
export default function App(){
    return(
        <div>
        <Home />
        <Navbar />
        <About />
        <Projects />
        <Services />
        <Contacts />
        <Footer />
        </div>
    )
}