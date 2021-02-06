import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Form from '../components/Form'

export default function Desert(props) {
    const { desert: backgroundColor } = props
    const [state, setstate] = useState(null)
    const [success, setSuccess] = useState(false)
    const liftUserInfo = (data) => {
        setstate(data)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }


    return (
        <div className="page-wrapper" style={{ backgroundColor }}>
            <div className="links"><Link to="/forest/register">Forest</Link> <Link to="/ocean/register">Ocean</Link></div>
            {
                success && <div className="alert-wrapper">
                    <div className="alert">{state && state.STATUS ? `Success, User ${state.STATUS}` : "Success, User registration successful"}</div>
                    <div className="close" onClick={() => setSuccess(false)}>x</div>
                </div>
            }
            {
                state && Object.keys(state).length
                    ? <Card {...state.data} />
                    : <Form liftUserInfo={liftUserInfo} color={backgroundColor} />
            }
        </div>
    )
}
