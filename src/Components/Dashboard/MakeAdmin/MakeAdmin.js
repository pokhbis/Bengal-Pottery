import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {

        const user = { email };
        fetch('https://hidden-mountain-59218.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                    console.log(data)
                }

            })

        e.preventDefault();
    }

    return (
        <div>
            <h3>Assign Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField label="Email"
                    sx={{ width: '50%' }}
                    type="email"
                    onBlur={handleOnBlur} variant="standard" />
                <br />
                <Button sx={{ margin: '10px' }} type="submit" variant="contained">Create Admin</Button>
            </form>
            {
                success && <Alert severity="success"> Congratulations! Admin Created Successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;