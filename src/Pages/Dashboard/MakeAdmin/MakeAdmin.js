import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnblur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://shielded-island-96351.herokuapp.com/users/admin', {
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
                    console.log(data)
                    setSuccess(true)
                }
            })
               
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width:'50%'}}
                    label="Email"
                    type="email"
                    onBlur={handleOnblur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Admin added  Successfully ???</Alert>}
        </div>
    );
};

export default MakeAdmin;