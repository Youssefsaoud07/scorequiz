import React from 'react'
import './heros.css'
import background from "../images/bgh.jpg"
import { position } from 'dom-helpers'

const Heros = () => {
    return (
        <div className='heros'>
            <div className='gal' >
                <div className='texto' style={{textAlign:'initial'}}> 
                <h2 style={{color:'#F3105F'}}>
                   Active Learning
                </h2>
               
                <p>Active learning is an approach to instruction that involves actively engaging students with the course material through discussions, problem solving,
                     case studies, role plays and other methods. Active learning approaches place a greater degree of responsibility on the learner than passive approaches such as lectures, 
                     but instructor guidance is still crucial in the active learning classroom.
                      </p>
                    <button class="button button3">Start Now</button>
                </div>
                <div className='description' style={{position:'relative',width:'40%',height:400,borderTopLeftRadius:480, backgroundColor:'#F3105F' }}>
                {/* <img src={background} style={{width:'90%',height:400}} /> */}
                <div style={{zIndex:3,position:'absolute',boxShadow:'1px 3px 18px 4px #F3105F'}}>
                <img src={background} style={{width:290,height:290 }} />
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Heros
