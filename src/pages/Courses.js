import React,{useState,useEffect,useContext} from 'react'
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
import { Carousel } from 'react-bootstrap';
import { ButtonBase, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { data } from '../dummy';
import { Image } from '@material-ui/icons';
import background from '../assets/img/home.png'
import { height } from 'dom-helpers';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import '../components/heros.css'
import app from '../configs/authMethod';
import { AuthContext } from '../context/Context';
import { createCheckoutSession } from '../Stripe/createCheckoutSession';


//data



//styling

const useStyles = makeStyles((theme) => ({
    root: {
        
        fontFamily:'roboto',
        
        
    },
    heros: {
        textAlign: 'left',
        display:'flex',
        fontFamily: 'roboto',
        color: 'black',
        height:100,
        alignItems:'flex_start',
        paddingTop:40,
        justifyContent:'center',
       
       backgroundColor: 'rgb(248,248,248)',
       
        
        
        [theme.breakpoints.down('sm')]: {
          paddingLeft:20,
          flexWrap:'wrap'

        },
        
        fontFamily:'roboto'

    },
    cards:{
        display:'flex',
        flexWrap:'wrap',
        display:'flex',
        width:'100%',
        padding:'10px 50px',
        
        justifyContent:'center',
        padding:'10px 20px 50px 30px',
        fontFamily:'roboto',
        gap:'100px'


    },
    cardContainer:{
        width:'100%',
        
        fontFamily:'roboto',
        padding:'10px 30px',
        [theme.breakpoints.down('md')]: {
            marginTop:10,
            
        
          },

       
        
    },
    category:{
        width:40,
        height:40,
        backgroundColor:'#FDB2D7',
        borderRadius:30,
        borderWidth:0,
        boxShadow: '1px 1px #888888',
        fontFamily:'roboto'
        
    },
    blog:{
        width:'100%',
        justifyContent:'center',
        
        padding:'30px 70px'

    },
    adContainer:{
        height:'300px',
        background:'Gray'
    },
    slider:{
        padding:'100px 60px',
        height:300,
        fontFamily:'roboto',
        [theme.breakpoints.down('md')]: {
            padding:'30px 5px'
            
        
          },
    },
    background:{
        width:900,
        height:200,
        backgroundSize:'cover',
        [theme.breakpoints.down('sm')]: {
            display:'none'

            
        
          },

    },
    tags:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        padding:'50px 50px',
        backgroundColor: 'rgb(248,248,248)',
        gap:60,
        padding:'10px 300px'
    }
    
  




}));

const Courses = () => {
    
  

    const {currentUser}=useContext(AuthContext)
    
    
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
    
    const [filtredData, setFlitredData] = useState(
        {
            filtered:'category1',
            data:data
        }
    )
    const classes = useStyles();
    let size = 5
    let sizeB=4
    var items = data.slice(0, size)
    var itemsB= data.slice(0, sizeB)
    
    
   
    
    const show = data.filter(item =>(
        item.type === filtredData.filtered 
    ))
    var items2= show.slice(0, size)
    return (
        <>
        <Auth user={user} />
        <Grid container component="main" className={classes.root}   >
          
            <Grid item component="div" display="inline" className={classes.heros}xs={12} md={12} lg={12}>
            <input id="filled-search" placeholder='start your search' style={{width:'70%',paddingLeft:15 ,borderRadius:30,borderWidth:0,offset:4, fontFamily:'roboto' ,height:50,boxShadow:'1px 1px 1px 0px #F3105F'}}  />
                <button className="button searchButton3" style={{marginLeft:'-80px',width:80,height:50,alignItems:'center'}}>search</button>
               
            </Grid>
            <Grid className={classes.tags} xs={12}>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 1</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 2</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 3</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 4</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 5</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 5</button>
                <button className="button searchButton3" style={{width:120,height:50,alignItems:'center'}}>Tag 5</button>
                </Grid>
            <Box component="div" display="inline" className={classes.cardContainer}>
            <Typography fontFamily='roboto' variant='h6' style={{fontWeight:'bold',textAlign:'initial',padding:'5px 30px'}}>Popular Quiz Courses</Typography>
                <Box component="div" display="inline" className={classes.cards}>
                {items.map((value,key)=>(
                    <QCard value={value} />
                ))}
                </Box>
               
            </Box>
            

               
                <Box component="div" display="inline" className={classes.cardContainer}>
                
                
               
            </Box>
            <Box className={classes.blog}>
                <Typography fontFamily='roboto' variant='h6' style={{textAlign:'start',fontWeight:'bold'}} > Group of Courses</Typography>
                </Box>
                <Box component="div" display="inline"  className={classes.cards} >
                {data.map((value,key)=>(
                    <QCard value={value} />
                ))}
               </Box>
               
            <Footer />
                  
        </Grid>
        </>
    )
}

export default Courses
