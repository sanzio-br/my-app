import React from 'react'
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    return (
        <Router>
            {isMobile && <Hambuger />}
            <Routes>
                <Route index exact path='/' element={<Home />} />
            </Routes>
                {isLaptop && <Nav />}
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            <Footer />
        </Router>
    )
}