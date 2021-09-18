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
//data
const data=[
{
    id:1,
    type:'category 1',
    title:'Photography',
    students:200,
    rating:4.1,
    image:'https://www.eurodiaconia.org/wordpress/wp-content/uploads/2017/08/photography.jpeg'

},
{
    id:2,
    type:'category 1',
    title:'Video Production',
    students:200,
    rating:4.1,
    image:'https://www.breezpost.com/wp-content/uploads/2020/10/Video-Production-Company.jpg'

},
{
    id:3,
    type:'category 2',
    title:'Adobe Lightroom',
    students:200,
    rating:4.1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2MwKnZw8kbS9rmkPVzKeJJOau1EnPKTHUPEk4jXhZR4plJkh-s0obkR9WpIyetJyVA8&usqp=CAU'

},
{
    id:4,
    type:'category 1',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:5,
    type:'category 1',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:6,
    type:'category 1',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:7,
    type:'category 1',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:8,
    type:'category 3',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:9,
    type:'category 1',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:10,
    type:'category 2',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
{
    id:11,
    type:'category 2',
    title:'Video Editing',
    students:200,
    rating:4.1,
    image:'https://cdn.mos.cms.futurecdn.net/iiVac4HpTLWCc8La2iijRL.jpg'

},
]


//styling

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F9F9F9',
        fontFamily:'roboto'
        
    },
    heros: {
        textAlign: 'left',
        fontFamily: 'robotic',
        color: 'black',
        width: '90%',
        padding: 30,
        marginTop:20,
        
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
        gap:'40px'


    },
    cardContainer:{
        width:'100%',
        marginTop:70,
        fontFamily:'roboto'
        
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
        justifyContent:'center'
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
        <Grid container component="main" className={classes.root} style={{ width: '100%' }}>
            <Box component="div" display="inline" className={classes.heros}>
                <h3 style={{ color: '#F3105F', fontFamily:'roboto' }}>Online Quiz Courses Catalogue</h3>
                <p>It is a long established fact that a reader will  distracted by the readable of content of  page when looking at its layout.</p>
                <TextField id="filled-search" label="Search field" type="search"  variant="outlined"  style={{width:'70%',height:'10px'}} />
            </Box>
            <Box component="div" display="inline" className={classes.cardContainer}>
                <h5 style={{ color: '#black' }}>Populer Quiz Courses</h5>
                <Box component="div" display="inline" className={classes.cards}>
                {items.map((value,key)=>(
                    <QCard value={value} />
                ))}
                </Box>
               
            </Box>
            <Box style={{display:"flex",justifyContent:'center',width:'80%',padding:'40px 40px',flexWrap:'wrap',gap:5,margin:'auto'}}>
                <div style={{borderWidth:1,
                    backgroundColor:'gray',
                    width:'50%',height:300,justifyContent:'center',alignItems:'center',display:'flex',color:'#fff'}}>ads</div>
                <div style={{borderWidth:1,backgroundColor:'gray',width:'49%',
                height:300,justifyContent:'center',alignItems:'center',display:'flex',color:'#fff'}}>ads</div>
                </Box>

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
                <div style={{textAlign:'start',paddingLeft:85,fontSize:20,fontWeight:'bold'}} > Blogs</div>
                <Box component="div" display="inline"  className={classes.cards}>
                {items.map((value,key)=>(
                    <BCard value={value} />
                ))}
               </Box>
                </Box>
            <Footer />
                  
        </Grid>
        </>
    )
}

export default Home
