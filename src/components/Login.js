import React, { useCallback, useContext,useState,useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../configs/authMethod.js";
import { AuthContext } from "../context/Context";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {SocialIcon} from 'react-social-icons';
import firebase from "firebase/app";
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60px',
  },
  image: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/2314950.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  paper: {
    margin: theme.spacing(12, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input:{
    
    
  }
}));

const Login = ({ history }) => {
    console.clear()
    const classes = useStyles();
    const provider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const [user, setUser] = useState(null);
    console.log("start")
    const signInWithGooglePopUp=()=> {
      app.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log('##################',result)
       app.firestore().collection("users").doc(result.user.uid).set({
         uid:result.user.uid,
         email:result.user.email,
         name:result.user.displayName,
         provider:result.user.providerData[0].providerId,
         
       }).then((res)=>{
         console.log('**********',res)
       })
        console.log('User has signed in.',result.user)
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
      });
  
    }
    //facebook login 

    const signInWithFacebookPopUp=()=> {
      app.auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        console.log('##################',result)
       app.firestore().collection("users").doc(result.user.uid).set({
         uid:result.user.uid,
         email:result.user.email,
         name:result.user.displayName,
         provider:result.user.providerData[0].providerId,
         
       }).then((res)=>{
         console.log('**********',res)
       })
        console.log('User has signed in.',result.user)
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
      });
  
    }

    //github login 

    const signInWithGithubPopUp=()=> {
      app.auth()
      .signInWithPopup(githubProvider)
      .then((result) => {
        console.log('##################',result)
       app.firestore().collection("users").doc(result.user.uid).set({
         uid:result.user.uid,
         email:result.user.email,
         name:result.user.displayName,
         provider:result.user.providerData[0].providerId,
         
       }).then((res)=>{
         console.log('**********',res)
       })
        console.log('User has signed in.',result.user)
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
      });
  
    }
    //.....
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return(
      
           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
         
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="small"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.input}
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.input}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body1" style={{color:'black'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
            <Box mt={2} style={{display:'flex' ,justifyContent:'space-evenly'}}>
              {/* <Copyright /> */}
              
              <SocialIcon network={'google'} bgColor={'red'} onClick={() => {signInWithGooglePopUp() }}/>
              <SocialIcon network={'facebook'} bgColor={'blue'} onClick={() => {signInWithFacebookPopUp()}}/>
              <SocialIcon network={'github'} bgColor={'black'} onClick={() => {signInWithGithubPopUp()}}/>
              
            </Box>
          </form>
        </div>
      </Grid>
      
  )
}

  export default withRouter(Login)