import { Grid, Step, Stepper,StepLabel, Typography,Divider, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React,{useContext,useEffect,useState} from 'react'
import Auth from './auth'

import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../context/Context';
import Button from '@restart/ui/esm/Button';
import { boxShadow } from '../components/material-kit-react';
import "./quiz.css"
import app from '../configs/authMethod';
import { useLocation } from 'react-router';
import { EmojiObjects } from '@material-ui/icons';

//styling and design
const useStyles = makeStyles((theme) => ({
    container:{
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
           width:'100%'
   
           },
       
        

    },
    step:{
       
        
         
        backgroundColor:'#FF4260',
        boxShadow:'1px 15px 20px #ff6297ec',
        color:"#fff",
        width:30,
        height:30,
        borderWidth:3,
        borderColor:'#000',
        margin:20,
        
        borderRadius:30,
        fontSize:10,
        [theme.breakpoints.down('sm')]: {
            display:'none',
   
           },
           
         
    },
    stepp:{
       
        
         
        backgroundColor:'#FF4260',
        color:"#fff",
        width:30,
        height:30,
        borderColor:'#fff',
        borderWidth:3,
        margin:10,
        borderRadius:30,
        fontSize:10,
        [theme.breakpoints.down('sm')]: {
            display:'none',
   
           },
           
         
    },
    stepe:{
       
        
         
        backgroundColor:'#fff',
        color:"#fff",
        width:30,
        height:30,
        borderColor:'#fff',
        borderWidth:3,
        margin:10,
        borderRadius:30,
        fontSize:10,
        [theme.breakpoints.down('sm')]: {
            display:'none',
   
           },
           
         
    },

 
    
    question:{
        justifyContent:'center',
        marginBottom:'-10px',
        width:'100%',

        [theme.breakpoints.down('sm')]: {
            marginTop:30,
            width:'90%',
   
           },
       

        
        
    },
    // answers:{
    //     width:700,
    //     height:70,
    //     backgroundColor:'#fff',
        
    //     color:"black",
    //     margin:10,
    //     borderRadius:13,
    //     '&:hover': {
    //     background: "#FF4260",
    //     color:'#fff',}
    
    // },
    answersCorrect:{
        width:'40%',
        height:70,
        backgroundColor:'#02F91B',
        margin:10,
        color:'#fff',
        borderRadius:13,

    },
    answersBox:{
        justifyContent:'center',
        padding:'0px 200px',
        [theme.breakpoints.down('sm')]: {
            padding:20,
   
           },
        
        

    },
    submit:{
        width:'40%',
        height:70,
        backgroundColor:'#FF4260',
        margin:10,
        borderRadius:13,
        [theme.breakpoints.down('sm')]: {
            margin:20,
   
           },
        color:'#fff',
        
    },
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
      selected:{
          fontWeight:'bold',
      },
      notSelected:{
          fontWeight:'normal'
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

const Quiz = ({match}) => {
  
      //getting data from the use location hook
    
    let data = useLocation();
    // corsa is course name
    const [corsa, setCorsa] = useState(data.state.quiz)
   // chaps are an array of chapters
    const [chaps, setChaps] = useState(data.state.chap)
    const [isOpen, setIsOpen] = useState(false)
    console.log('chapsssssssssssssssssssspsoosksjjjdk',corsa)
//getting course data from the fire base
    const  getName = async () => {
       
         
         
      const ref =await app.firestore().collection('chapters').doc(`${corsa}`)
      ref.get().then(doc =>{
        console.log(doc.data())
                  setQuiz(doc.data())
                      
                      

                  })
                  
             
                
               
                
                  setLoading(false)
              
          
          
         
        
         
                }
  
    
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [quiz, setQuiz] = useState(null)
    const [loading, setLoading] = useState(true)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [clientAnswers, setClientAnswers] = useState([])
    // const [courseTitle, setCourseTitle] = useState(quiz.title)
    const {currentUser}= useContext(AuthContext)
    const [Clientsdatastored, setClientsdatastored] = useState([])
    const [selected, setSelected] = useState()
    const [index, setIndex] = useState(0)
    const [submited, setSubmited] = useState(false)
    const uid=currentUser.uid
    const title = 'photo'
    const doc =`${uid}${corsa}`
    const setChapters =(id)=>{
        setCorsa(id)
        setClientsdatastored([])
        setCurrentQuestion(0)
        
    }

    useEffect(() => {
  
       getName()
        app.firestore().collection('ClientAanswers').doc(doc).onSnapshot((snapshot) => {
      
    
       
            const clientresult= snapshot.data()
          
         
          if(clientresult){
           
          const status=[]
          for (let i in clientresult.answers){
            status.push(clientresult.answers[i])
          }
          
        console.log('sthhdhdhdhhhhhhhhhhhhdhdjddj',status)
            
            setClientsdatastored(...Clientsdatastored,clientresult.answers)}
            console.log('hoooooooooooo',Clientsdatastored[currentQuestion])
            if(clientresult?.answers[currentQuestion]){
                setSubmited(true)
            }
        })
            
           
            
           
             
         
        
        
        
       
        
      
        
      }, [corsa,doc])
      
//this function will get a value and will store it on a state text img or both of themm
      const handelCorrectAn= async(value,isCorrect) => {
       
        await value?.text?.length?
        setSelected(value.text[0])
        :setSelected(value?.img?.[0]);
       
      
      
        
    
         
    //     if(isCorrect ){
            
    //          setScore(score+1)
             
            
                
    //    setClientAnswers([... clientAnswers,value.text.length?value.text[0]:value.img[0]])
    //      setClicked(true)
    //      console.log('hedhiiii',selected)
            
    //      }else if(!isCorrect){
             
            
    //         setClientAnswers([... clientAnswers,value.text.length?value.text[0]:value.img[0]])
             setClicked(true)
         
    //     }
        
        
     }
        


     
    const classes = useStyles();
    
    
    //fuction that navigat to the next question and check the length and if clients had already answerded on some question previosly
    
    const handelNextQuestion=()=>{
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeee',clientAnswers)
        if(currentQuestion < quiz?.quizzes?.length-1 ){
            
        if(Clientsdatastored[currentQuestion]){
            setClientAnswers([...clientAnswers, Clientsdatastored[currentQuestion]])
             setClicked(true)
            
    
         }else if (selected){
            setClientAnswers([... clientAnswers,selected])
         }
       
         setCurrentQuestion(currentQuestion+1)
        
        
          setClicked(false)
           if(currentQuestion >Clientsdatastored.length-1){
            
       
        setSubmited(false)
        
           }
           
          
          
               
        } else  {setShowScore(true)
         }
         
          
          
          
       
       
    }

    //fuction that construct an object and save it to the firebase
    useEffect(() => {
        if(currentQuestion >Clientsdatastored.length-1){
      submitScore()
        }
    }, [clicked,])
    const submitScore = ()=>{
       
    
        
        const scoreClient={
            result:score,
            answers:clientAnswers,
            user:currentUser.uid,
            chapter:data.state
        }
        console.log('finaly',scoreClient.answers)
        console.log(Clientsdatastored)
       
       
        // app.database().ref(uid).update(scoreClient)
        app.firestore().collection('ClientAanswers').doc(doc).set(scoreClient).then(()=>{
        setSubmited(false); setLoading(false)})
     

    }
   
   const handelStep =()=>{
    console.log(index)
    if(index< Clientsdatastored.length){ 
        setIndex(index+1)
        return 'right' 
   }
return 'false'
   }


//for answer check
const submitAanswer=()=>{
    setSubmited(true)
}



//this is the tricky part this function will be activated after submiting it will test all possiblities answer coreect or not img text both and will return a classname
    const verfiyAnswer=(a,b)=>{
        console.log('haytoiiuiturifyfuyfufuuduru',Clientsdatastored)
        console.log('imagessdsd',quiz?.quizzes[currentQuestion]?.question_body?.images[0])
       
       
        console.log('baseaswer',a?.text?.[0])

        
         if(Clientsdatastored[currentQuestion]){
            // tb1 ...tb2
             
         
            console.log('uojohii',Clientsdatastored[currentQuestion])

             
            if(a?.text?.length && !a?.img?.length && Clientsdatastored[currentQuestion]== a.text?.[0] && submited && b===true){ 
                
               
                
                return { div:"answerBCorrect",check:'checked'}  
            
           }
           if(a?.text?.length && a?.img?.length && Clientsdatastored[currentQuestion]== a.text?.[0] && submited && b===true){ 
                
               
                
            return { div:"answerDCorrect",check:'checked'}  
        
       }
           else if(a?.img?.length && Clientsdatastored[currentQuestion] == a.img?.[0] && submited && b===true){
               return {div:"answerDCorrect",check:'checked'}
           }
           if(a?.text?.length &&!a.img.length &&   Clientsdatastored[currentQuestion]!==a.text?.[0] && submited && b===true){ 
            
           
                
            return {div:"answerBCorrect",check:'false'}  


       }
       if(a?.text?.length &&a.img.length &&   Clientsdatastored[currentQuestion]!==a.text?.[0] && submited && b===true){ 
            
           
                
        return {div:"answerDCorrect",check:false}  }
       else if( a?.img?.length&& Clientsdatastored[currentQuestion]!==a?.img?.[0] && submited && b===true){
        return {div:"answerDCorrect",check:'false'}  
       }
            if(a?.text?.length &&!a?.img?.length& Clientsdatastored[currentQuestion] == a.text?.[0]&& submited  && b==false){
                console.log('falsiiiiiiiiiiiiiiii',Clientsdatastored[currentQuestion])
               
                return {div:"answerBfalse",check:'checked'}  
             } else if(a?.text?.length &&a?.img?.length && Clientsdatastored[currentQuestion] == a.text?.[0]&& submited  && b==false){
                    console.log('falsiiiiiiiiiiiiiiii',Clientsdatastored[currentQuestion])
                   
                    return {div:"answerDfalse",check:true}  
            }else if(!a?.text?.length && a?.img?.length&& Clientsdatastored[currentQuestion] == a?.img?.[0]&& submited  && b==false){
                return {div:"answerDfalse",check:'checked'}  
            }

        }
         else if(a?.text?.length &&! a?.img?.length && !Clientsdatastored[currentQuestion] &&  selected==a?.text?.[0] && clicked && b===true){
          
          
           
            return    {div: "answerBCorrect",check:'checked'} 
         }
         else if(a?.text?.length && a?.img?.length && !Clientsdatastored[currentQuestion] &&  selected==a?.text?.[0] && clicked && b===true){
          
          
           
            return    {div: "answerDCorrect",check:'checked'} 
         }
         else if(a?.img?.length&& !Clientsdatastored[currentQuestion] &&  selected===a?.img?.[0] && clicked && b===true){
            return    {div: "answerDCorrect",check:'checked'} 
         }
         
          if (a?.text?.length && !a?.img?.length && !Clientsdatastored[currentQuestion] && selected==a?.text?.[0] && clicked && b===false){
            
           
            return    {div: "answerBfalse", check:'checked'} 

         }
         else if(a?.text?.length && a?.img?.length&& !Clientsdatastored[currentQuestion] && selected==a?.text?.[0] && clicked && b===false){
            return    {div: "answerDfalse", check:'checked'} 
         }
         else if(!a?.text?.length && a?.img?.length&& !Clientsdatastored[currentQuestion] && selected==a?.img?.[0] && clicked && b===false){
            return    {div: "answerDfalse", check:'checked'} 
         }
         if (a?.text?.length && !a?.img?.length && !Clientsdatastored[currentQuestion] && selected!==a?.text?.[0]&& a.text?.length &&clicked && b===true){
            
           
            return    {div: "answerBCorrect", check:'false'} 

         }
         else if (a?.text?.length && a?.img?.length && !Clientsdatastored[currentQuestion] && selected!==a?.text?.[0]&& a.text?.length &&clicked && b===true){
            
           
            return    {div: "answerDCorrect", check:'false'} 

         }
         else
         if ( a?.img?.length&& !Clientsdatastored[currentQuestion] && selected!==a?.img?.[0] && clicked && b===true){
            return    {div: "answerDCorrect", check:'false'} 
         }

       
          
        
        else{ 

           if(a?.img?.length){
            return {div:'answerD',check:'false'}
           }else{
             return {div:'answerB',check:'false'}

            }}
        
    //     if(Clientsdatastored[currentQuestion]===a){
    //         setClicked(true)
    //     return true
    // }else{
    //    return false
    // }
}
 console.log('submited',submited)
   

    return (
        <div>
             <Auth user={currentUser} />
            
            
            <div className={classes.root}>
           
         <List className={classes.coursesList}>
             {chaps.map((item,key) =>(
                 <ListItem
                 key={key}
                 
                 className={item.id == corsa ? classes.active : classes.courses}
                
                 >
                 <Typography  onClick={()=>{setChapters(item.id);setSubmited(false);setCurrentQuestion(0);setShowScore(false);setClientAnswers([])}} className={item.id === currentQuestion+1?classes.selected:classes.notSelected}>  {item.id}</Typography>
                 </ListItem>

             ))}
         </List>
         <Divider orientation="vertical" flexItem style={{width:5,color:'#000',boxShadow:'1px 1px 1px 1px'}}  />
        
        <Grid item xs={12} md={12} lg={8} className={classes.page}>
            <Grid container sm={12} md={12}  className={classes.container}>
                
                    {showScore?(<Grid item sm={12} md={12} className={classes.container}>
                        
                        <Typography variant='h6'>congratulations</Typography>
                        <Typography variant='subtitle1'>You have Completed the Chapter</Typography>
                        
                        
                        
                   </Grid> ):(<Grid item sm={12} md={12} className={classes.container}>
                    
               
                
                    {quiz?.quizzes?.map((qustion,key) => (
                         
                            
                          
                            <button className={ key === currentQuestion?classes.step:key<=Clientsdatastored.length?classes.stepp:classes.stepe} 
                            
                            onClick={()=>{setCurrentQuestion(key); setClicked(false)}}
                             ></button>
                        
                    ))}
               
                
                <Grid item className={classes.question} >
                    
                    {/* <Typography variant='body1' style={{textAlign:'center',fontSize:12,padding:'0px 10px'}}>{quiz.metadata.title}</Typography> */}
                   
                    <Typography>{verfiyAnswer(currentQuestion).dot}</Typography>
                 <Typography variant='h6' fontFamily='roboto' style={{width:'100%'}} > {quiz?.quizzes?.[currentQuestion].question_body.question}</Typography>
                  {quiz?.quizzes?.[currentQuestion].question_body?.question_subparts.map((value,key)=>(
                     <Typography style={{textAlign:'center'}}><EmojiObjects style={{margin:'0px 30px',color:'gold'}} />{value}</Typography>
                  ))}
                  {quiz?.quizzes?.[currentQuestion].question_body?.images?.length?<img src={`${quiz?.quizzes?.[currentQuestion]?.question_body?.images[0]}`} style={{width:600,height:300}} />:<div></div>}
                 
                </Grid>
                {loading? <Grid container xs={12} md={12} className={classes.answersBox}> <CircularProgress  color="secondary" /></Grid>:
                <Grid container xs={12} md={12} className={classes.answersBox}>
                {quiz?.quizzes?.[currentQuestion].options.map((answerOption)=>(
                    
                <div className={submited?`${verfiyAnswer(answerOption?.value,answerOption?.is_correct).div}`:answerOption?.value?.img?.length?'answerD':'answerB'}
                onClick={()=> {
                     handelCorrectAn(answerOption.value,answerOption.is_correct)
                  
                    // setSelected(answerOption?.value.text[0]);
                    // setClicked(true)
                }
                }
                
                 > 
               <input name="radio-group1"  type="radio" value={answerOption.value.text} checked={answerOption.value.text==selected} />
                 {answerOption.value?.img.length?<img src={answerOption.value?.img} style={{marginBottom:10, width:190,height:190,borderRadius:12}} />:<div></div>}{answerOption.value.text}</div>
                 
                ))}
                   

                </Grid>}
                {quiz?.quizzes?.[currentQuestion].explanation?.text?.length||quiz?.quizzes?.[currentQuestion].explanation?.img?.length?<Button className={classes.submit}
                onClick={setIsOpen(true)}
                >Show Explanation
                    </Button>:<div></div>}
                    {isOpen?<Grid container xs={12} md={12} className={classes.answersBox}>
                      <Typography>{quiz?.quizzes?.[currentQuestion].explanation?.text}</Typography>
                      <img src={quiz?.quizzes?.[currentQuestion].explanation?.img} style={{marginBottom:10, width:'70%',height:230}} />  </Grid>:<div></div>}
                <Button type='submit' className={classes.submit} 
                onClick={()=>submited
                    ?handelNextQuestion():submitAanswer()}
                disabled= {Clientsdatastored[currentQuestion]!== undefined?false:!clicked} >{submited?'Continue':'Submit' }</Button>
                
                </Grid>
                )}

                </Grid> 
                </Grid>

</div>

            
        </div>
    )
}

export default Quiz
