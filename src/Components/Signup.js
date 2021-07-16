
import React,{useRef, useContext,useState} from 'react'
import {Form, Card, Button, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {AuthContext} from '../context/authContext'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signUp} = useContext(AuthContext)
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return setError('Password did not match')
        }
        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch (error) {
            setError('could not sign up')
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-5" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Log in</Link>
            </div>
        </div>
    )
}

export default Signup
