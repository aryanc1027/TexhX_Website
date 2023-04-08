import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'




const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
        <div className='content'>
            <h1>Aryan Choudhary</h1>
            <p>UNC Chapel Hill</p>

        <div>
            <Link to='/PassTimes' className='btn'>Pass Times</Link>
            <Link to='/major' className='btn btn-light'>Major</Link>
        </div>
        </div>
        </div>
    )
}

export default Video
