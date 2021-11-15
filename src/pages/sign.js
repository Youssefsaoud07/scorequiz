import React, { useCallback, useContext,useState,useEffect } from "react";
import CardFooter from "../components/comp/Card/CardFooter.js";
import Button from "../components/comp/CustomButtons/Button.js";
import Hidden from '@material-ui/core/Hidden';
import bg from '../images/logo.png'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import 'firebase/auth';



import styles from "../components/log";

import image from "../images/sign.jpg";
import LoginPage from "../components/loginPage";
import Register from "../components/Register";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SignInSide(props,{history}) {

console.log('his',history)
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{display:'flex'}}>
      
     <div style={{padding:'85px 10px',width:'50%'}}>
       <img src={bg} />
       <div style={{color:'#000',margin:20,marginTop:150,fontWeight:'bold',zIndex:1}} onClick={()=>{setIsLogin(prev => !prev)}}>
        You Don't have account <a href='#' style={{color:'#F3105F',fontWeight:'bold'}}>Click Here To Register Right Now</a> 
      </div>
      
      </div>
      
      <div >
        { isLogin?(<LoginPage history={history} setLogin={setIsLogin} isLogin={isLogin} />):(<Register setLogin={setIsLogin}/>)}
     
    </div>
    {/* <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={()=>{setIsLogin(false)}}>
                      Get started
                    </Button>
                  </CardFooter> */}
        </div>
        
  );
}
