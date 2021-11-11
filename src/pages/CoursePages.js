import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import background from '../images/logo.png'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Auth from './auth';
import app from "../configs/authMethod";

import 'firebase/firestore'
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


const CoursePages = ({match}) => {
    const courseData = [{key:1,value:'Support Vector Machine'},
       {key:2,value:'Support Vector Machine'}]
  var req= match.params.id
   const [loading, setLoading] = useState(true)
   const [filtred, setFiltred] = useState([])
const [chapters, setChapters] = useState(null)
    const classes = useStyles();
    const data =useLocation()
    console.log('dat   ada',data.state)

    const  getName = async () => {
        var replaced = match.params.id.replace('%', ' '); 
        console.log('replace',replaced)
         
         
      const ref =await app.firestore().collection('courses').doc(`${data.state}`)
      ref.get().then(doc =>{
        console.log(doc.data())
                  setChapters(doc.data())
                      
                      

                  })
                  
             
                
               
                
                  setLoading(false)
              
          
          
         
        
         
                }
        
    useEffect(() => {
        getName()
      
    }, [])
   
//   const filtred = chapters[].filter(chap=>chap.Course==match.params.id)
//   console.log('filtred',filtred)
    
    return (
    <>
    <Auth />
        <div className={classes.header}>
            <div className={classes.left}>
                <Typography variant='h3'style={{marginBottom:20}}>Artificial Neural Network </Typography>
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
        <hr />
        <div style={{gap:10,display:'flex',justifyContent:'center',flexWrap:'wrap',padding:10}}>
        {chapters?.chapters?.map((course, key) => (
          <Link style={{ color:'#000',textDecoration:'none', fontFamily: 'roboto' }} to={{
            pathname: "/courses",
            state:  {quiz:course.id,chap:chapters?.chapters }
        }}>
          <div style={{width:300,height:200,backgroundColor:'#DBB8B8',display:'flex',justifyContent:'center',alignItems:'flex-start',paddingTop:40}}>
                <Typography variant='body1'>{course.id}</Typography>

            </div>
            </Link>
         ))}
         </div>
        </>
    )
}

export default CoursePages
