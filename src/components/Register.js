import React, { useCallback, useContext,useState,useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../context/Context";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import {SocialIcon} from 'react-social-icons';
// core components

import GridContainer from "./comp/Grid/GridContainer.js";
import GridItem from "./comp/Grid/GridItem.js";
import Button from "./comp/CustomButtons/Button.js";
import Card from "./comp/Card/Card.js";
import CardBody from "./comp/Card/CardBody.js";
import CardHeader from "./comp/Card/CardHeader.js";
import CardFooter from "./comp/Card/CardFooter.js";
import CustomInput from "./comp/CustomInput/CustomInput.js";
//firebase
import firebase from "firebase/app";
import 'firebase/auth';
import app from "../configs/authMethod.js";


import styles from "./log.js";

import image from "../images/sign.jpg";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function LoginPage(props,) {
  let history=useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  //logic code
  const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const signInWithGooglePopUp= async()=> {
      try{
        await  app.auth()
      .signInWithPopup(provider)
       {
        history.push("/");
      }}
      
      catch(error){
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`)
      }  
       
      
  
    }
    
    
    const handleSignUp = async()=>{

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password).then((result) =>
          {history.push('/')})
          console.log('hello',email,password)
        
      } catch (error) {
        alert(error);
      }
    }

  const { currentUser } = useContext(AuthContext);
  
  console.log(email,password)
  return (
    
     
      
       
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem >
              <Card className={classes[cardAnimaton]}>
                
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Register</h4>
                    <div className={classes.socialLine}>
                     
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <form onSubmit={handleSignUp}>
                  <CardBody>
                 
                   
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      name='email'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        name:'email',
                        onChange : (e) => setEmail(e.target.value),
                        defaultValue:email,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                      
                     
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      name='password'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name:'password',
                        type: "password",
                        onChange : (e) => setPassword(e.target.value),
                        defaultValue:password,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                        
                      }}
                      name='password'
                      
                    />
                     <CardFooter className={classes.cardFooter}>
                    <Button  simple color="primary" size="lg" onClick={()=> handleSignUp()}>
                      Get started
                    </Button>
                  </CardFooter>
                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                     <SocialIcon network={'google'} bgColor={'red'} onClick={() => {signInWithGooglePopUp() }}/>
                     <SocialIcon network={'facebook'} bgColor={'blue'} onClick={() => {signInWithGooglePopUp()}}/>
                     <SocialIcon network={'github'} bgColor={'black'} onClick={() => {signInWithGooglePopUp()}}/>
                     </div>
                  </CardBody>
                 </form>
               
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
    
  );
}
