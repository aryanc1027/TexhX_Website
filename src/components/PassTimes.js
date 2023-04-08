import React from 'react'
import './PassTimesStyles.css'
import {Link} from 'react-router-dom'

const PassTimes = () => {
    return (
        <div className='passtimes'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Swimming </h3>
                    <span className='bar'></span>
                    <p className = 'btc'>#1</p>
                    <p> Swam All Throughout High School </p>
                </div>
                 <div className='card'>
                     <h3> Cooking </h3>
                     <span className='bar'></span>
                     <p className = 'btc'>#2</p>
                     <p> Chefing things up </p>
                 </div>
                  <div className='card'>
                       <h3> Working Out </h3>
                       <span className='bar'></span>
                       <p className = 'btc'>#3</p>
                       <p> Heavy weights  =  Love </p>
                  </div>
            </div>
        </div>
    )
}

export default PassTimes