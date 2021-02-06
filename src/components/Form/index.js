import React, { useState } from 'react'
import validator from 'validator';
import './style.css'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedInProfile: '',
}
const errors = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    linkedInProfile: false,
    basic: false
}
const validatefirstName = (firstName) => {

}

export default function Form(props) {
    const [state, setstate] = useState(initialState)
    const [error, setError] = useState(errors)
    const [loading, setLoading] = useState(false)
    const { color } = props
    const inputChangeHandle = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        console.log(state)
        if (validateForm(state)) return
        const stateData = { ...state }
        // delete stateData.firstName
        // delete stateData.lastName
        stateData["first_name"] = state.firstName
        stateData["last_name"] = state.lastName
        setLoading(true)
        const data = await postForm(stateData)
        props.liftUserInfo(data)
        setLoading(false)
    }
    const postForm = async (stateData) => {
        const response = await fetch('http://13.235.55.43/test/api/create_user', {
            method: "POST",
            body: JSON.stringify(stateData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
    const validateForm = (formData) => {
        const { firstName, lastName, email, phone, linkedInProfile } = formData
        const errors = {}
        let e = false
        if (!firstName.length || !lastName.length || !email.length || !phone.length || !linkedInProfile.length) {
            errors.basic = "All fields are required."
            e = true
        }
        if (!validator.isEmail(email)) { errors.email = "Please enter a valid email"; e = true }
        if (!Number.isFinite(Number(phone)) || phone.length !== 10) { errors.phoneNumber = "Please enter a valid phone number"; e = true }
        if (!validator.isURL(linkedInProfile)) { errors.linkedInProfile = "Please enter a linked profile url"; e = true }
        setError(errors)
        console.log("----> ", errors)
        return e
    }
    return (
        <div className="form-container">
            <form autoComplete={false} onSubmit={onFormSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="#firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={inputChangeHandle} />
                    {
                        error.firstName && <p className="error">{error.firstName}</p>
                    }

                </div>
                <div className="input-wrapper">
                    <label htmlFor="#lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={inputChangeHandle} />
                    {
                        error.lastName && <p className="error">{error.lastName}</p>
                    }

                </div>
                <div className="input-wrapper">
                    <label htmlFor="#email">Email</label>
                    <input type="text" name="email" id="email" onChange={inputChangeHandle} />
                    {
                        error.email && <p className="error">{error.email}</p>
                    }
                </div>
                <div className="input-wrapper">
                    <label htmlFor="#phoneNumber">Phone</label>
                    <input type="text" name="phone" id="phoneNumber" onChange={inputChangeHandle} />
                    {
                        error.phoneNumber && <p className="error">{error.phoneNumber}</p>
                    }

                </div>
                <div className="input-wrapper">
                    <label htmlFor="#linkedInProfile">LinkedIn Profile</label>
                    <input type="text" name="linkedInProfile" id="linkedInProfile" onChange={inputChangeHandle} />
                    {
                        error.linkedInProfile && <p className="error">{error.linkedInProfile}</p>
                    }

                </div>
                {
                    error.basic && <p className="error">{error.basic}</p>
                }
                <div className="input-wrapper button-wrapper">
                    <button type="submit" onClick={onFormSubmit} style={{ color, borderColor: color }}>{loading ? 'Submitting...' : 'Register'}</button>
                </div>
            </form>
        </div>
    )
}
