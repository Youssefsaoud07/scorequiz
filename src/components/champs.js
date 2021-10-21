import React from 'react'
import './heros.css'
import background from "../images/champ1.jpg"
import backgrounda from "../images/champ2.jpg"
import { position } from 'dom-helpers'
import { boxShadow } from './material-kit-react'

const Champs = () => {
    return (
        <div className='heros'>
            <div className='gal' >
                
                <div className='description' style={{position:'relative',width:'40%',height:400,borderTopLeftRadius:280,borderBottomRightRadius:230, backgroundColor:'#F3105F' }}>
                {/* <img src={background} style={{width:'90%',height:400}} /> */}
                <div style={{zIndex:3,position:'absolute',bottom:160,paddingRight:10,display:'flex',flexWrap:'wrap',boxShadow:'1px 3px 18px 4px #F3105F'}}>
                <img src={background} style={{width:290,height:290  }} />
                <div style={{top:300,left:200,position:'absolute',boxShadow:'1px 3px 18px 4px #F3105F'}}>
                <img src={backgrounda} style={{width:200,height:200 }} />
                </div>
                </div>
                   
                </div>
                <div className='texto' style={{textAlign:'initial'}}> 
                <h2 style={{color:'#F3105F'}}>
                Own Your Mistakes
                </h2>
                
                <p>You can't learn anything from a mistake until you admit that you've made it. So, take a deep breath and admit to yours,
                     and then take ownership of it.
                     Inform those who need to know, apologize , and tell them that you're working on a solution. </p>
                    <button class="button button3">Start Now</button>
                </div> 
            </div>
        </div>
    )
}

export default Champs