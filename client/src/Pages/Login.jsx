import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleRadioChange = (event) => {
        setIsLogin(event.target.value === 'Login');
    };

    return (
        <div className='form mt-8 w-screen flex flex-col justify-center items-center '>
            <div className="radio-button mt-8 flex justify-center items-center gap-6">
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="login-radio-buttons-group-label"
                        name="login-radio-buttons-group"
                        value={isLogin ? 'Login' : 'Register'}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Login" control={<Radio />} label="Login" />
                        <FormControlLabel value="Register" control={<Radio />} label="Register" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="form-block bg-slate-300 p-8 w-screen h-screen flex justify-center items-center gap-1">
                {isLogin ? (
                    <div className="login-form">
                        <Box component="form" noValidate autoComplete="off">
                            <TextField fullWidth id="email" type="email" label="Email" variant="outlined" />
                            <TextField fullWidth id="password" type='password' label="Password" variant="outlined" />
                            <Button variant='contained' sx={{ textAlign: 'center' }}>Submit</Button>
                        </Box>
                    </div>
                ) : (
                    <div className="register-form">
                        <Box component="form" noValidate autoComplete="off">
                            <TextField fullWidth id="username" type="text" label="Username" variant="outlined" />
                            <TextField fullWidth id="email" type="email" label="Email" variant="outlined" />
                            <TextField fullWidth id="password" type='password' label="Password" variant="outlined" />
                            <Button variant='contained'>Submit</Button>
                        </Box>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Login