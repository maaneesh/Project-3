import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt/>Login

                </h1>
                <p>Sign-in to see your reservations</p>

            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange} />

                    </div>
                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Create a password'
                            onChange={onChange} />

                    </div>

                    <div className="form-group">
                        <buton type="submit" className="btn btn-block">Submit</buton>
                    </div>

                </form>

            </section>


        </>
    )
}

export default Login