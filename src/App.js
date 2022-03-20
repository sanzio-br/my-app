import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Projects from './components/projects/Projects'
import Services from './components/Service/service'
import Hambuger from './components/Navbar/hambuger'
import Nav from './components/Navbar/nav'
import './index.css'
import { useMediaQuery } from 'react-responsive'
export default function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    return (
        <div>
            {isMobile && <Hambuger />}
            <Home />
            {isLaptop && <Nav />}
            <About />
            <Projects />
            <Services />
            <Contacts />
            <Footer />
        </div>
    )
}