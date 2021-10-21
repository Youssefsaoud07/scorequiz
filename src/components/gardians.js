import React from 'react'
import './heros.css'
import background from "../images/bgg.jpg"
import { position } from 'dom-helpers'

const Gardians = () => {
    return (
        <div className='heros'>
            <div className='gal' >
                <div className='texto' style={{textAlign:'initial'}}> 
                <h2 style={{color:'#F3105F'}}>
                    Recommonder Systems
                </h2>
                
                <p>Recommender systems are the systems that are designed to recommend things to the user based on many different factors. These systems predict the most likely courses that the users are most likely to understand and are of interest to. </p>
                    <button class="button button3">Start Now</button>
                </div>
                <div className='description' style={{position:'relative',width:'40%',height:400,borderTopLeftRadius:200,borderBottomLeftRadius:200, backgroundColor:'#F3105F' }}>
                {/* <img src={background} style={{width:'90%',height:400}} /> */}
                <div style={{zIndex:3,position:'absolute',boxShadow:'1px 3px 18px 4px #F3105F'}}>
                <img src={background} style={{width:340,height:290 }} />
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Gardians
