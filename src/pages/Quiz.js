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


const useStyles = makeStyles((theme) => ({
    container:{
        justifyContent:'center',
       
        marginTop:20

    },
    step:{
        backgroundColor:'#FF4260',
        color:"#fff",
        width:30,
        height:30,
        borderWidth:3,
        borderRadius:30,
        fontSize:10
    },
    question:{
        justifyContent:'center',
        
        
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
        width:700,
        height:70,
        backgroundColor:'#02F91B',
        margin:10,
        color:'#fff',
        borderRadius:13,

    },
    answersBox:{
        justifyContent:'center',
        display:'flex'

    },
    submit:{
        width:500,
        height:70,
        backgroundColor:'#FF4260',
        margin:10,
        borderRadius:13,
        color:'#fff',
        '&:hover': {
            background: "orange",
            }
    }
    

}))

const Quiz = () => {
  
      
    
    let data = useLocation();
    
    const quiz=data.state.quiz
    
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [clientAnswers, setClientAnswers] = useState([])
    const [courseTitle, setCourseTitle] = useState(quiz.title)
    const {currentUser}= useContext(AuthContext)
    const [Clientsdatastored, setClientsdatastored] = useState([])
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
       if(currentQuestion < quiz.quizzes.length -1){
           if(currentQuestion >Clientsdatastored.length-1){
        submitScore()
           }
          setCurrentQuestion(currentQuestion+1) 
           
          setClicked(false)
          
          
       } else{
           setShowScore(true)
           
       }
       
    }
    const submitScore = ()=>{
       
        
        const scoreClient={
            result:score,
            answers:clientAnswers,
            user:currentUser.uid
        }
        console.log('finaly',scoreClient)
        console.log(Clientsdatastored)
        
       
        app.database().ref(uid).update(scoreClient)

    }
    const verfiyAnswer=(a,b)=>{
         console.log('clicked',clicked)
         
        
         
         if(Clientsdatastored[currentQuestion]){
            console.log('baseaswer',Clientsdatastored[currentQuestion])
             
            if(a.is_correct===true){ 
                return "answerBCorrect"    
           }

         }else if(clicked && a.is_correct===true){
            return "answerBCorrect"    
         }
       
         if ( a.value===Clientsdatastored[currentQuestion]){
            console.log('hello')
            if( a.is_correct===true)
            return "answerBCorrect button:disabled" 
            return "answerBfalse button:disabled"
        }else return "answerB "
        
    //     if(Clientsdatastored[currentQuestion]===a){
    //         setClicked(true)
    //     return true
    // }else{
    //    return false
    // }
}
    
   

    return (
        <div>
            <Grid container sm={12} md={11}  className={classes.container}>
                
                    {showScore?(<Grid item sm={12} md={8} className={classes.container}>
                        
                        <Typography variant='h6'>congratulations</Typography>
                        <Typography variant='subtitle1'>You have Completed the Course</Typography>
                        <Typography variant='subtitle2'>Your Score:</Typography>
                        <Typography variant='h6'>{score} </Typography>
                        
                        
                   </Grid> ):(<Grid item sm={12} md={7} className={classes.container}>
                    
               
                <Stepper activeStep={currentQuestion} alternativeLabel>
                    {quiz.quizzes.map((qustion) => (
                        <Step active key={qustion}>
                            <button className={classes.step}></button>
                        </Step>
                    ))}
                </Stepper>
                
                <Grid item className={classes.question} >
                    <Typography variant='body1' style={{fontWeight:'bold'}}>Question {currentQuestion+1}:</Typography>
                 <Typography variant='body1' fontFamily='roboto' > {quiz.quizzes[currentQuestion].question_body.question}</Typography>
                 
                </Grid>
                <Grid container xs={12} md={8} className={classes.answersBox}>
                {quiz.quizzes[currentQuestion].options.map((answerOption)=>(
                <button className={`${verfiyAnswer(answerOption)}`}
                 onClick={()=>handelCorrectAnswer(answerOption.is_correct,answerOption.value)}
                
                 >{answerOption.value}</button>
                 
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
