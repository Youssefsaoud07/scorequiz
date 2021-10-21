import { Grid, Step, Stepper,StepLabel, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React,{useContext,useEffect,useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../context/Context';
import Button from '@restart/ui/esm/Button';
import { boxShadow } from '../components/material-kit-react';
import "./quiz.css"
import app from '../configs/authMethod';
import { useLocation } from 'react-router';
import { EmojiObjects } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    container:{
        justifyContent:'center',
       
        

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
        marginBottom:'20px',

        
        
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
        

    },
    submit:{
        width:'80%',
        height:70,
        backgroundColor:'#FF4260',
        margin:10,
        borderRadius:13,
        [theme.breakpoints.down('sm')]: {
            margin:20,
   
           },
        color:'#fff',
        '&:hover': {
            background: "orange",
            }
    },
    
    

}))

const Quiz = () => {
  
      
    
    let data = useLocation();
    
    const quiz=data.state.quiz
    console.log('currentalinte',data.state)
    console.log('dataquiz',quiz)
    
    const [currentQuestion, setCurrentQuestion] = useState(data.state.course-1)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [clientAnswers, setClientAnswers] = useState([])
    const [courseTitle, setCourseTitle] = useState(quiz.title)
    const {currentUser}= useContext(AuthContext)
    const [Clientsdatastored, setClientsdatastored] = useState([])
    const [Selected, setSelected] = useState('')
    const [index, setIndex] = useState(0)
    const uid=currentUser.uid
    const title = 'photo'

    useEffect(() => {
  

        const QuizRefByTitle= app.database().ref(uid)
      
    
        QuizRefByTitle.on('value',(response)=>{
          var clientresult= response.val()
         
          if(clientresult){
          const status=[]
          for (let i in clientresult.result){
            status.push({i,...clientresult[i]})
          }
          
        
            console.log('statuts',clientresult.answers)
            setClientsdatastored(...Clientsdatastored,clientresult.answers)}
            
         
        })
        
      
        
      }, [])


     
    const classes = useStyles();
    
    
    
    const handelCorrectAnswer= (isCorrect,value) => {
        setSelected(value)
        console.log('hedhiiii',Clientsdatastored)
        if(Clientsdatastored[currentQuestion]){
            
            
            setClicked(true)
            
            setClientAnswers(Clientsdatastored)
        } else if(isCorrect){
            setScore(score+1)
            setClicked(true)
        setClientAnswers([... clientAnswers,value])
        }else{
            setClicked(true)
            setClientAnswers([... clientAnswers,value])
        }
        
    }
    const handelNextQuestion=()=>{
        
        if(Clientsdatastored[currentQuestion]){
             setClicked(true)
             
             setClientAnswers(Clientsdatastored)
             
             

         }
         
         console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&',currentQuestion)
         
         console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&',quiz.quizzes.length )
       if(currentQuestion < quiz.quizzes.length ){
           if(currentQuestion >Clientsdatastored.length-1){
        submitScore()
           }
           if(currentQuestion < quiz.quizzes.length-1)
          setCurrentQuestion(currentQuestion+1) 
         else  setShowScore(true)
           
          setClicked(false)
          
          
       } else{
           console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&')
           setShowScore(true)
           
       }
       
    }
    const submitScore = ()=>{
       
        
        const scoreClient={
            result:score,
            answers:clientAnswers,
            user:currentUser.uid
        }
        console.log('finaly',scoreClient.answers)
        console.log(Clientsdatastored)
        
       
        app.database().ref(uid).update(scoreClient)

    }
   
   const handelStep =()=>{
    console.log(index)
    if(index< Clientsdatastored.length){ 
        setIndex(index+1)
        return 'right' 
   }
return 'false'
   }








    const verfiyAnswer=(a,b)=>{
        console.log('*********************',Selected)
         if(Clientsdatastored[currentQuestion]){
            console.log('baseaswer',Clientsdatastored[currentQuestion])
             
            if(Clientsdatastored[currentQuestion]===a.value && a.is_correct===true){ 
                
                return {div:"answerBCorrect",check:true}  
           }
           if(Clientsdatastored[currentQuestion]!==a.value && a.is_correct===true){ 
                
            return {div:"answerBCorrect",check:false}  
       }
            if(Clientsdatastored[currentQuestion]===a.value && a.is_correct===false){
                return {div:"answerBfalse",check:true} 
            }

         }else if(!Clientsdatastored[currentQuestion] &&  Selected===a.value && clicked && a.is_correct===true){
           
            return    {div: "answerBCorrect",check:true} 
         } if (!Clientsdatastored[currentQuestion] && Selected===a.value && clicked && a.is_correct===false){
            return    {div: "answerBfalse", check:true} 

         }
         if (!Clientsdatastored[currentQuestion] && Selected!==a.value && clicked && a.is_correct===true){
            return    {div: "answerBCorrect", check:false} 

         }

       
            
        
        else{ 
           
             return {div:'answerB',check:false}

            }
        
    //     if(Clientsdatastored[currentQuestion]===a){
    //         setClicked(true)
    //     return true
    // }else{
    //    return false
    // }
}
    
   

    return (
        <div>
            <Grid container sm={12} md={12}  className={classes.container}>
                
                    {showScore?(<Grid item sm={12} md={12} className={classes.container}>
                        
                        <Typography variant='h6'>congratulations</Typography>
                        <Typography variant='subtitle1'>You have Completed the Course</Typography>
                        <Typography variant='subtitle2'>Your Score:</Typography>
                        <Typography variant='h6'>{score} </Typography>
                        
                        
                   </Grid> ):(<Grid item sm={12} md={12} className={classes.container}>
                    
               
                
                    {quiz.quizzes.map((qustion,key) => (
                         
                            
                          
                            <button className={ key === currentQuestion?classes.step:key<=Clientsdatastored.length?classes.stepp:classes.stepe} 
                            
                            onClick={()=>{setCurrentQuestion(key); setClicked(false)}}
                             ></button>
                        
                    ))}
               
                
                <Grid item className={classes.question} >
                    
                    <Typography variant='body1' style={{textAlign:'initial',fontSize:12,padding:'0px 10px'}}>{quiz.metadata.title}</Typography>
                    <Typography variant='body1' style={{fontWeight:'bold',fontSize:12}}>Question {currentQuestion+1}:</Typography>
                    <Typography>{verfiyAnswer(currentQuestion).dot}</Typography>
                 <Typography variant='body1' fontFamily='roboto' > {quiz.quizzes[currentQuestion].question_body.question}</Typography>
                  {quiz.quizzes[currentQuestion].question_body?.question_subparts.map((value,key)=>(
                     <Typography style={{textAlign:'start'}}><EmojiObjects style={{margin:'0px 30px',color:'gold'}} />{value}</Typography>
                  ))}
                 
                </Grid>
                <Grid container xs={12} md={8} className={classes.answersBox}>
                {quiz.quizzes[currentQuestion].question_body.options.map((answerOption)=>(
                <div className={`${verfiyAnswer(answerOption).div}`}
                 onClick={()=>handelCorrectAnswer(answerOption.is_correct,answerOption.value)}
                
                 > {verfiyAnswer(answerOption).check?
                 <input type="radio"  checked="checked"  name="radio" />:<input type="radio"  name="radio" />}
                 {answerOption.value.text}<img src={answerOption.value?.img} style={{width:50,height:50,borderRadius:35}} /></div>
                 
                ))}
                   

                </Grid>
                <Button className={classes.submit} 
                onClick={()=>handelNextQuestion()}
                disabled= {Clientsdatastored[currentQuestion]!== undefined?false:!clicked} >Submit</Button>
                
                </Grid>
                )}

                </Grid> 

            
        </div>
    )
}

export default Quiz
