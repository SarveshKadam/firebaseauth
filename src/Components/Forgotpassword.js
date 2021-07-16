
import React, { useRef, useContext, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'
import { Link } from 'react-router-dom'

function Login() {
    const emailRef = useRef()
    const { passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [message,setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await passwordReset(emailRef.current.value)
            setMessage('Check your inbox for more details')
        } catch (error) {
            setError('Error in Password Reset')
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-5" type="submit">Reset Password</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Back to login? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Login
