import React,{useState} from 'react';
import { Avatar,Button,Paper,Grid,Typography,Container,Icon} from '@material-ui/core';
import {GoogleLogin } from 'react-google-login';


import useStyles from './styles'
import LockoutlinedIcon from '@material-ui/icons/LoopOutlined'
import Input from './Input'



const Auth = ()=>{
    const [showPassword,setShowPassword] = useState(false);
    const classes = useStyles()
    // const isSignup = true;
    const [isSignup, setIsSignup] = useState(false)

    const handleSubmit=()=>{

    }

    const handleChange=()=>{

    }



    const handleShowPassword =()=> setShowPassword((prevShowPassword)=> !prevShowPassword)


    const switchMode=()=> setIsSignup((prevIsSignup)=> !prevIsSignup)

    const googleSuccess =async(res)=>{
        //go to site - console.developers.google.com Oauth consent screen to get own client id
        console.log(res)
    }
    const googleFailure =(error)=>{
        console.log(error)
        console.log("google sign in was unsuccessfull, try again later")
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                   <LockoutlinedIcon/> 
                </Avatar>
                <Typography variant='h5'>{isSignup?'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup&&(
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autofocus  half />
                                <Input name="lastName" label="last Name" handleChange={handleChange}  half />
                                </>
                            )
                        }
                       <Input name="Email;" label="Email Address" handleChange={handleChange}  type="email"/>
                       <Input name="password" label="password" handleChange={handleChange}  type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}></Input>
                       {isSignup && (
                           <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>

                       )}
                    </Grid>
                    <Button type="submit" fullwidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup?"Sign Up":"Sign In"}
                    </Button>
                    <GoogleLogin
                    //go to site - console.developers.google.com Oauth consent screen to get own client id
                    clientId='607655609277-jdhlhml1lsvsndpmmd1fcao7kcq6mbvs.apps.googleusercontent.com'
                    render={(renderProps)=> (
                        <Button className = {classes.googlebutton} color="primary" fullwidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}
                        variant="contained">Googl Sign In</Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent = "flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{isSignup?'Already have an account? Sign In': "Don't have an account? Sign Up"}</Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}

export default Auth;
