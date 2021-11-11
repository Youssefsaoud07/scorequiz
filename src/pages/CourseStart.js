import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { mergeClasses } from '@material-ui/styles';
import React,{useContext,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Auth from './auth'
import { useHistory, useLocation } from 'react-router';
import Quiz from './Quiz';
import { AuthContext } from '../context/Context';
const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        marginTop:'20px'
        
    },
    drawerPaper: {
        width: 220,
       
        paddingTop:80
    },
    active: {
        background: '#f4f4f4',
        fontWeight:'bold'
       
      },
      corses:{
        

      },
      coursesList:{
          marginTop:50,
          width:260,
          paddingLeft:20,
          
          [theme.breakpoints.down('sm')]: {
           
           display:'none'
  
          },
          
      }
}))
const ChappitreMenu = [
    {
        id:1,
        text:'Support Vector Machine',
        path:'courses/ch1',
    },
    {
        id:2,
        text:'Support Vector Machine',
        path:'courses/ch2',
    },
  

];
const drawerWidth = 240;
const CourseStart = ({ children }) => {
    const{currentUser}=useContext(AuthContext)
    const classes=useStyles()
    const history=useHistory()
    const location = useLocation()
    console.log("loc",location)


   

    


   
    return (
        <div>
            <Auth user={currentUser} />
            
            
            <div className={classes.root}>
           
         <List className={classes.coursesList}>
             {ChappitreMenu.map(item =>(
                 <ListItem
                 key={item.id}
                 
                 className={location.state.course.key == item.id ? classes.active : classes.courses}
                 >
                 <ListItemText primary={item.text}/>
                 </ListItem>

             ))}
         </List>
         <Divider orientation="vertical" flexItem style={{width:5,color:'#000',boxShadow:'1px 1px 1px 1px'}}  />
        
        <Grid item xs={12} md={12} lg={8} className={classes.page}>
        
        <Quiz />
        </Grid>

        </div>
        </div>
    )
}

export default CourseStart
