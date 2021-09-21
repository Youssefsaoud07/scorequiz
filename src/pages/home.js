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
import { AuthContext } from '../context/Context';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { data } from '../dummy';
//data



//styling

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(248,248,248)',
        fontFamily:'roboto',
        
        
    },
    heros: {
        textAlign: 'left',
        fontFamily: 'roboto',
        color: 'black',
       marginLeft:100,
        
        marginTop:50,
        [theme.breakpoints.down('md')]: {
          marginLeft:20
        },
        
        fontFamily:'roboto'

    },
    cards:{
        display:'flex',
        flexWrap:'wrap',
        display:'flex',
        width:'100%',
        paddingTop:50,
        justifyContent:'center',
        padding:'50px 30px',
        fontFamily:'roboto',
        gap:'45px'


    },
    cardContainer:{
        width:'100%',
        marginTop:70,
        fontFamily:'roboto',
       
        
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
        marginLeft:100,

    },
    adContainer:{
        height:'300px',
        background:'Gray'
    }




}));

const Home = () => {
    
  

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
    let size = 4
    var items = data.slice(0, size)
    
    
   
    
    const show = data.filter(item =>(
        item.type === filtredData.filtered 
    ))
    var items2= show.slice(0, size)
    return (
        <>
        <Auth user={user} />
        <Grid container component="main" className={classes.root}   >
            <Grid item component="div" display="inline" className={classes.heros}xs={12} md={8} lg={10} spacing={4}>
                <h3 style={{ color: '#F3105F', fontFamily:'roboto' }}><Typography variant='h4' fontFamily='roboto'>Online Quiz Courses Catalogue</Typography></h3>
                <Typography fontFamily='roboto' style={{marginBottom:20}}>It is a long established fact that a reader will  distracted by the readable of content of  page when looking at its layout.</Typography>
                <TextField id="filled-search" label="Search field" type="search"  variant="outlined"   sx={{ m: 1 }} style={{width:'70%'}}  />
            </Grid>
            <Box component="div" display="inline" className={classes.cardContainer}>
            <Typography fontFamily='roboto' variant='h6' style={{fontWeight:'bold'}}>Popular Quiz Courses</Typography>
                <Box component="div" display="inline" className={classes.cards}>
                {items.map((value,key)=>(
                    <QCard value={value} />
                ))}
                </Box>
               
            </Box>
            <Grid container spacing={0} style={{gap:1 ,justifyContent:'center'}} >
               <Grid item xs={12} md={6} lg={5} className={classes.adContainer} >ads</Grid>
               <Grid item xs={12} md={6} lg={5} className={classes.adContainer} >ads</Grid>
                </Grid>

                <Box style={{display:'flex',justifyContent:'center',width:'100%',paddingTop:40}}>
                  <button className='button4' onClick={()=>setFlitredData({filtered:'category 1'})}></button>
                  <button className='button4'onClick={()=> setFlitredData({filtered:'category 2'})}></button>
                  <button className='button4' onClick={()=>setFlitredData({filtered:'category 3'})}></button>
                  <button className='button4' onClick={()=>setFlitredData({filtered:'category 4'})}></button>
                  <button className='button4' onClick={()=>setFlitredData({filtered:'category 5'})}></button>
                  <button className='button4' onClick={()=>setFlitredData({filtered:'category 6'})}></button>

                </Box>
                <Box component="div" display="inline" className={classes.cardContainer}>
                
                <Box component="div" display="inline" className={classes.cards}>
                   
                {items2.map((value,key)=>(
                    <QCard value={value} />
                ))}
                </Box>
               
            </Box>
            <Box className={classes.blog}>
                <Typography fontFamily='roboto' variant='h6' style={{textAlign:'start',fontWeight:'bold'}} > Blogs</Typography>
                </Box>
                <Box component="div" display="inline"  className={classes.cards} >
                {items.map((value,key)=>(
                    <BCard value={value} />
                ))}
               </Box>
               
            <Footer />
                  
        </Grid>
        </>
    )
}

export default Home
