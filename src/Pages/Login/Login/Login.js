import React, { useState } from 'react';
import {Alert, Button, CircularProgress, Container ,Grid, TextField, Typography} from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    
    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        // console.log(filed , value)
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        setLoginData(newLoginData)


        
    }
    const handleSubmitLogin = e => {
        loginUser(loginData.email, loginData.password ,location , history);
        e.preventDefault()
    }
    const handleGoogleSignIn = ()=>{
        signInWithGoogle(location , history);

    }
    return (
<Container>
    <Grid container spacing={2}>
        <Grid item sx={{mt:10,boxShadow: 3}} xs={12} md={6}>
        <Typography sx={{color:'info.main',mt:6}} variant="body1" gutterBottom>
         LOGIN 
      </Typography>
           <form  onSubmit={handleSubmitLogin}>
                        <TextField
                            sx={{width:'75%',m:2}}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                              type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{width:'75%',m:2}}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button variant="contained" sx={{ width: '75%', m: 2 }}
                            type="submit">
                                Login</Button>

                         <NavLink 
                        style={{textDecoration:'none'}}
                         to="/register">
                            <Button sx={{color:'info.main'}} variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success"> User Login Successfully ???</Alert>}
                        {authError && <Alert severity="error"> {authError}</Alert>}

                    </form>
                    <p>-------------------------------</p>
                     <Button onClick={ handleGoogleSignIn } variant="contained">Google SignIn</Button>

                
        </Grid>
          
        <Grid item xs={12} md={6}>
        <img style={{width:"100%"}} src={login} alt="" />
         
        </Grid>
      </Grid>
    </Container>

    );
};

export default Login;