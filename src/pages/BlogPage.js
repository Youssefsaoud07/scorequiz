import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { useLocation } from 'react-router';
import Auth from './auth';
import background from '../images/logo.png'
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
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

const BlogPage = () => {
    const classes = useStyles();
   const data= useLocation()
   console.log('data',data.state.image)
   const img=data.state.image
    return (
        <div >
            <Auth />
            <div style={{width:'100%',height:400,backgroundImage:`url(${img})`,backgroundSize: ' 100% 500px',backgroundRepeat: 'no-repeat',position:'relative'}}>
               <Typography variant='h3' style={{color:'#fff',bottom:160,boxShadow:'1px 1px 1px 1px #FFF',left:'35%',position:'absolute'}}>{data.state.title}</Typography>
            </div>
            <div className={classes.header}>
            <div className={classes.left}>
                <Typography variant='h3' style={{textAlign:'initial'}}>{data.state.title}</Typography>
                <Typography  style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</Typography>
            </div>
            <div className={classes.right}>
                <img src={background} style={{width:300,height:300}} />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage
