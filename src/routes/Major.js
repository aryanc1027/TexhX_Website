import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Moon from '../components/Moon'
import MajorCards from '../components/Major'


const Major = () => {
    return (
        <div>
            <NavBar />
            <Moon heading=''  />
            <MajorCards />
            <Footer />
        </div>
    )
}

export default Major