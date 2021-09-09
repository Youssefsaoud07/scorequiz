import React from 'react'
import './heros.css'
import background from "../images/coach.png"
import { position } from 'dom-helpers'

const Gardians = () => {
    return (
        <div className='heros'>
            <div className='gal' >
                <div className='texto' style={{textAlign:'initial'}}> 
                <h2 style={{color:'#F3105F'}}>
                    Feature 3
                </h2>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <button class="button button3">Red</button>
                </div>
                <div className='description' style={{position:'relative',width:'50%',height:400,borderTopLeftRadius:200,borderBottomLeftRadius:200, backgroundColor:'#F3105F' }}>
                {/* <img src={background} style={{width:'90%',height:400}} /> */}
                <div style={{zIndex:3,position:'absolute',top:30,paddingRight:10}}>
                <img src={background} style={{width:340,height:290 }} />
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Gardians
