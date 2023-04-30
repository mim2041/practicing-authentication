import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import app from '../../../firebase/Firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login1 = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('User login successful');
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handleResetPassword = event => {
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            alert("Please provide your email address to reset password");
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then( () => {
            alert('Please check your email')
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message);
        })
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <FormGroup className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <FormControl type="email" name='email' ref={emailRef} placeholder="Enter email" required/>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <FormControl type="password" name='password' placeholder="Enter password" required/>
                </FormGroup>
                <Button variant="primary" type="submit" block>Login</Button>
            </Form>
            <p><small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? please <Link to="/registerBS">Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login1;