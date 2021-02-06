import React from 'react'
import './style.css'

export default function Card(props) {
    const { picture, first_name, last_name, phone, email } = props
    return (
        <div className="extra-wrapper">
            <div className="card-wrapper">
                <div className="img-wrapper">
                    <img src={picture} alt={picture} />
                </div>
                <div className="content-wrapper">
                    <p><span>{first_name}</span> <span>{last_name}</span></p>
                    <p>{email}</p>
                    <p>{phone}</p>

                </div>
            </div>
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
        </div>
    )
}
