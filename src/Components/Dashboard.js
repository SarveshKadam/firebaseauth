import React, { useState, useContext } from 'react'
import {AuthContext} from '../context/authContext'
import {Card, Button, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useContext(AuthContext)
    const history = useHistory()
    async function handleLogout(e){
        e.preventDefault();
        try {
            setError('')
            await logout()
            history.push('/login')
        } catch (error) {
            setError('User cannot log out')
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email: {currentUser && currentUser.email}</strong>
                    <Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </div>
    )
}

export default Dashboard
