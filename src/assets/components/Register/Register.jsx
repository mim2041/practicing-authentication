import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleEmailChange = event => {
        const form = event.target;
        const email = form.email.value;
        setEmail(email);
    }

    const handlePasswordOnBlur = event => {
        // const password = form.password.value;
        console.log(event.target.value);
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Your email' id="email"/>
                <br />
                <input type="password" name="password" placeholder='Your password' id="password"/>
                <br />
                <input type="submit" value="Register"/>
                <p><small>Already have an account? <Link to="/login1">Login</Link></small></p>
            </form>
        </div>
    );
};

export default Register;