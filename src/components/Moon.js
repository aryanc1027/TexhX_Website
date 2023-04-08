import React, { Component } from 'react'
import './MajorStyles.css'

class Moon extends Component {
    render() {
        return (
            <div className='moon-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Moon