import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PassTimesCards from '../components/PassTimes'


const PassTimes = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='PASS TIMES'  />
            <PassTimesCards />
            <Footer />
        </div>
    )
}

export default PassTimes