import React from 'react'
import './heros.css'
import background from "../images/business.png"
import backgrounda from "../images/business2.png"
import { position } from 'dom-helpers'

const Champs = () => {
    return (
        <div className='heros'>
            <div className='gal' >
                
                <div className='description' style={{position:'relative',width:'50%',height:400,borderTopLeftRadius:280,borderBottomRightRadius:230, backgroundColor:'#F3105F' }}>
                {/* <img src={background} style={{width:'90%',height:400}} /> */}
                <div style={{zIndex:3,position:'absolute',bottom:160,paddingRight:10,display:'flex',flexWrap:'wrap'}}>
                <img src={background} style={{width:290,height:290 }} />
                <div style={{top:300,left:200,position:'absolute'}}>
                <img src={backgrounda} style={{width:200,height:200 }} />
                </div>
                </div>
                   
                </div>
                <div className='texto' style={{textAlign:'initial'}}> 
                <h2 style={{color:'#F3105F'}}>
                    Feature 2
                </h2>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <button class="button button3">Red</button>
                </div> 
            </div>
        </div>
    )
}

export default Champs