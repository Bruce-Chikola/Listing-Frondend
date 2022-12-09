import React, { useEffect, useState } from 'react'
import Container from '../../../shared/Container'
import '../../../css/auth/index.css'
import Dots from '../components/Dots'
import Button from '../../../shared/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { basicSchema } from '../../../schemas'
import Login from '../../../api/Login'
export default function SignIn() {
    const navigate = useNavigate()
    const [usernameState, setusernameState] = useState('')
    const [passwordState, setpasswordState] = useState('')
    const [signText, setSignText] = useState('Sign In')
    useEffect(() => {
        if (localStorage.getItem('listing-auth-token')) {
            navigate('/home', { replace: true })
        }
    }, [])
    const onSubmit = (values, actions) => {
        setSignText('Signing in please wait')
        Login({ user: values.username, password: values.password }).then(resolve => {
            if (resolve.status && resolve.status == 200) {
                let token = resolve.config.headers['X-CSRFTOKEN']
                localStorage.setItem('listing-auth-token', token)
                navigate('/home', { replace: true })
            }
            else if (resolve.response.status == 502) {
                setusernameState("Invalid Credentials")
                setpasswordState("Invalid Credentials")
                setSignText("Sign In")
                setTimeout(() => {
                    setusernameState("")
                    setpasswordState("")
                }, 3000);
            }
        })
    }
    const { values, isSubmitting, touched, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        // validationSchema: basicSchema,
        onSubmit
    })
    return (
        <div className='w-full h-full flex items-center justify-center' style={{ height: '100vh' }}>
            <Container className="sign-in-float z-3 overflow-hidden w-full h-full border-0 p-0 rounded-0 grid grid-cols-2" style={{ height: '70%', width: '70%' }}>
                <div className='left-cover w-full h-full flex justify-center items-center flex-col text-white relative'>
                    <div className='absolute right-5 top-5'>
                        <Dots totalDots={29} />
                    </div>
                    <div className='absolute left-5 bottom-5'>
                        <Dots totalDots={29} />
                    </div>
                    <img style={{ width: '50%' }} src="img/others/cover.svg" />
                    <h1 className='mt-10' style={{ fontSize: 30, fontWeight: 900 }}>
                        Task 2 (React & Django)
                    </h1>
                    <small>Login then list </small>
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div className='w-3/5 mb-5'>
                        <h1 className='welcome-title'>Hello!  Welcome Back</h1>
                        <div className='mt-3'>
                            Provide your credentials below to be logged in to your account
                        </div>
                        <form onSubmit={handleSubmit} className='mt-10 flex flex-col'>

                            <small className="text-gray-500">Username</small>
                            <input
                                value={values.username}
                                onChange={handleChange}
                                id="username" type="username"
                                placeholder='Enter username'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                            <small className='text-red-500 mb-5'>{errors.username ? errors.username : usernameState}</small>
                            <small className="text-gray-500">Password</small>
                            <input
                                autoComplete='true'
                                value={values.password}
                                onChange={handleChange}
                                id="password" type="password"
                                placeholder='enter password'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                            />
                            <small className='text-red-500'>{errors.password ? errors.password : passwordState}</small>
                            <Button className="w-full mt-7 r-10" type="submit" style={{ height: 45, fontSize: 15 }}>{signText}</Button>

                        </form>
                        <div className='mt-10 w-full flex items-center justify-center relative'>
                            <div className='sign-in-line w-full'></div>
                            <div className='bg-white absolute px-5'>Or</div>
                        </div>
                        <div>
                            <Button className="w-full mt-7 r-10 bg-gray-200" style={{ height: 45, fontSize: 15, background: '#F5F5F5', color: 'var(--textcolor)' }}> Sign Up Now</Button>
                        </div>
                        <div className='mt-10 w-full flex items-center justify-center'>
                            <Link to='/'><small>Forgot your password?</small></Link>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='circle-bottom absolute'></div>
            <div className='circle-top absolute'></div>
            <div className='circle-center absolute'></div>
            <div className='circle-big absolute'></div>
        </div>
    )
}
