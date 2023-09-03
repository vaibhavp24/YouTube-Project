import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const SwitchBetween = ({ setAuth }) => {
    const [showSignin, setShowSignin] = useState(true);

    const toggleForm = () => {
        setShowSignin(!showSignin);
    };

    return (
        <div>

            {showSignin ? <SignInForm setAuth={setAuth} setShowSignin={setShowSignin} /> : <SignUpForm setAuth={setAuth} setShowSignin={setShowSignin} />}

        </div>
    );
};

export default SwitchBetween;