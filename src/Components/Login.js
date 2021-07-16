
import React, { useRef, useContext, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
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
                    <h2 className="text-center mb-4">Log In</h2>
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
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <Button disabled={loading} className="w-100 mt-5" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}

export default Login
