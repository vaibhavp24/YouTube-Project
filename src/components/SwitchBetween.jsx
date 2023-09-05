import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { Box } from '@mui/material';

const SwitchBetween = ({ setAuth }) => {
    const [showSignin, setShowSignin] = useState(true);

    const toggleForm = () => {
        setShowSignin(!showSignin);
    };

    return (
        <Box>

            {showSignin ? <SignInForm setAuth={setAuth} setShowSignin={setShowSignin} /> : <SignUpForm setAuth={setAuth} setShowSignin={setShowSignin} />}

        </Box>
    );
};

export default SwitchBetween;