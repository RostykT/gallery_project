import {
    Grid,
    Paper,
    TextField, 
    Button, 
    Typography, 
    Link 
    } from '@mui/material';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';


const LoginForm=({userAdmin, authUser})=>{
    const [ user, setUser ] = useState({ email:'',password: '' })
    const [error, setError ] = useState(false)
    const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault()
        if (user.email === userAdmin.email && user.password === userAdmin.password) {
            authUser(true)
            history.push('/films')
        } else {
            setError(true)
        }
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    label='Email'
                    placeholder='Enter email'
                    type='email'
                    fullWidth
                    required
                    margin="normal"
                    error={error}
                    helperText={ error && "Incorrect password or email."}
                    onChange={e => setUser({...user, email: e.target.value})}
                />
                <TextField
                label='Password'
                    placeholder='Enter password'
                    type='password'
                    fullWidth
                    required
                    margin="normal"
                    error={error}
                    helperText={ error && "Incorrect password or email."}
                    onChange={e => setUser({...user, password: e.target.value})}
                />
                
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={submitHandler}
                >
                    Sign in
                </Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginForm;