import React from 'react'
import './MajorStyles.css'
import {Link} from 'react-router-dom'

const PassTimes = () => {
    return (
        <div className='passtimes'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Computer Science </h3>
                    <span className='bar'></span>
                    <p className = 'btc'>#1</p>

                </div>
                 <div className='card'>
                     <h3> Applied Mathematics </h3>
                     <span className='bar'></span>
                     <p className = 'btc'>#2</p>

                 </div>
                  <div className='card'>
                       <h3> Minor: Data Science </h3>
                       <span className='bar'></span>
                       <p className = 'btc'>#3</p>

                  </div>
            </div>
        </div>
    )
}

export default PassTimes