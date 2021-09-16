import React, { useCallback, useContext,useState,useEffect } from "react";
import CardFooter from "../components/comp/Card/CardFooter.js";
import Button from "../components/comp/CustomButtons/Button.js";
import Hidden from '@material-ui/core/Hidden';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import 'firebase/auth';



import styles from "../components/log";

import image from "../images/sign.jpg";
import LoginPage from "../components/loginPage";
import Register from "../components/Register";

const useStyles = makeStyles(styles);

export default function SignInSide(props,{history}) {

console.log('his',history)
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{display:'flex'}}>
      <Hidden smDown>
      <div style={{position:'absolute',width:'50%',color:'#fff',margin:50,marginTop:150,fontWeight:'bold',zIndex:1}} onClick={()=>{setIsLogin(prev => !prev)}}>
        You Don't have account You can Register Right Now
      </div>
      
     
      
        <div className={classes.imgContainer}  style={{backgroundColor:'red',width:'90%',marginLeft:'50px',height:530,marginTop:60,borderRadius:7
     , backgroundImage: `url(${image})`
      }}>
        </div>
        </Hidden>
        { isLogin?(<LoginPage history={history} />):(<Register/>)}
     
    
    {/* <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={()=>{setIsLogin(false)}}>
                      Get started
                    </Button>
                  </CardFooter> */}
        </div>
        
  );
}
