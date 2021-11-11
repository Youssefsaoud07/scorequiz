import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import background from '../images/logo.png'
import Auth from './auth';

const useStyles = makeStyles((theme) => ({
    root: {
        
        fontFamily:'roboto',
        
        
    },
    header:{
        display:'flex',
        justifyContent:'center',
        gap:40,
        flexWrap:'wrap'
    },
    left:{
        width:'40%',
        marginTop:40,
        padding:40,
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            padding:20,
  
          },
    },
    right:{
        width:'50%',
        marginTop:20,
        [theme.breakpoints.down('sm')]: {
            width:'100%',
          
  
          },
    }
   
    
  




}));



const AboutUs = () => {
    const classes = useStyles();
    return (
        <div>
             <Auth />
        <div className={classes.header}>
            <div className={classes.left}>
                <Typography variant='h3'style={{marginBottom:20}}>About Us</Typography>
          <Typography variant='body1' style={{fontWeight:'bold',textAlign:'initial'}}>  A quick dive into a cutting-edge computational method for learning.</Typography>
               <Typography variant='body1'style={{textAlign:'initial'}} > This interactive course dives into the fundamentals of artificial neural networks,
                from the basic frameworks to more modern techniques like adversarial models.

                You’ll answer questions such as how a computer can distinguish between pictures of dogs and cats, and how it can learn to play great chess.
           </Typography>
            </div>
            <div className={classes.right}>

                <img src={background} style={{width:300,height:280}} />

            </div>

        </div>
        </div>
    )
}

export default AboutUs
