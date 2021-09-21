import React,{useContext,useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import QCard from '../components/quizCard'
import '../components/heros.css'
import BCard from '../components/cardsBottom';
import Footer from '../components/footer';
import Auth from './auth';
import { AuthContext } from '../context/Context';
import { Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { data } from '../dummy';
const useStyles = makeStyles((theme) => ({
    root: {
        padding:98,
        [theme.breakpoints.down('sm')]: {
            padding:5
          },
        
        backgroundColor: 'rgb(248, 248, 248, 0.8)',
    },
    title:{
        textAlign:'initial',
        margin:30
    },
    orange:{
        background:'#F3105F',
        color:'#fff',
        width:90,
        height:90
      },
      info:{
          display:'flex',
          flexWrap:'wrap',
          boxShadow: '2px 1px 5px 0px ',
          height:200,
          borderRadius:10,
          [theme.breakpoints.down('sm')]: {
            height:300
          }
          
      },
      cards:{
        display:'flex',
        flexWrap:'wrap',
        display:'flex',
        width:'100%',
        paddingTop:50,
        justifyContent:'center',
        padding:'50px 0px',
        fontFamily:'roboto',
        gap:'165px'
      },
      blogs:{
        display:'flex',
        flexWrap:'wrap',
        display:'flex',
        width:'100%',
        
        justifyContent:'center',
        padding:'50px 0px',
        fontFamily:'roboto',
        gap:'61px'

      }

}))
const Course = () => {
    const {currentUser}=useContext(AuthContext)
    const classes = useStyles();
    const [user, setUser] = useState(currentUser);
    console.log('fireuser',user)
   
   
    //fetch user

    useEffect(() => {
         
          if (currentUser) {
            var uid = currentUser.uid;
            console.log(`User has signed in with UID: ${uid}`)
            setUser(currentUser)
            
          } else {
            // User is signed out
            console.log('User is not signed in.')
            setUser(null)
          }
        
      }, [])
      //fetching  course data

      const [filtredData, setFlitredData] = useState(
        {
            filtered:'category1',
            data:data
        }
    )
    let size = 4
    var items = data.slice(0, size)
    return (
        <div>
            <Auth user={user}/>
            <Grid container justifyContent='center' className={classes.root}>
            <Grid item xs={12} md={12} lg={12} spacing={6}>
                <Typography fontFamily='roboto' variant='h4'className={classes.title} > Welcome</Typography>
            </Grid>
            <Grid item xs={11} md={8} lg={8} spacing={2}className={classes.info}>
                <div style={{padding:5}}>
            <Avatar round className={classes.orange} src='../images/user.png'  />
            </div>
            <div style={{padding:20,textAlign:'initial'}}>
                <Typography fontFamily='roboto' variant='body1' >Name:  {user.displayName} </Typography>
                <Typography fontFamily='roboto' variant='body1' >E-mail:  {user.email} </Typography>
                <Typography fontFamily='roboto' variant='body1' >Stauts: verified </Typography>
                <Typography fontFamily='roboto' variant='body1' >Premium: none </Typography>
            </div>
            </Grid>
            <hr style={{marginTop:50,width:'80%',boxShadow:'2px 1px 5px 1px '}}/>
            <Grid item xs={12} >
              <Typography  variant='h6' fontFamily='roboto' style={{textAlign:'initial'}}>Recommanded Topics</Typography>
              <Divider variant="fullWidth" style={{color:'black'}}/>
              <Box component="div" display="inline" className={classes.cards}>
              {items.map((value,key)=>(
                    <QCard value={value} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} >
              <Typography  variant='h6' fontFamily='roboto' style={{textAlign:'initial'}}>Popular Topics</Typography>
              <Divider variant="fullWidth" style={{color:'black'}}/>
              <Box component="div" display="inline" className={classes.cards}>
              {items.map((value,key)=>(
                    <QCard value={value} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} >
              <Typography  variant='h6' fontFamily='roboto' style={{textAlign:'initial'}}>Blogs</Typography>
              <Divider variant="fullWidth" style={{color:'black'}}/>
              <Box component="div" display="inline" className={classes.blogs}>
              {items.map((value,key)=>(
                    <BCard value={value} />
                ))}
              </Box>
            </Grid>

            </Grid>
            <Footer />
            
            
        </div>
    )
}

export default Course
