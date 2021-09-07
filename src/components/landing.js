import React from 'react'
import background from "../images/back1.jpg"
import i from "../images/i1.jpg"
import b from "../images/i2.jpg"
import c from "../images/i3.jpg"


const Landing = () => {
    return (
        <div>
        <div style={{ backgroundImage: `url(${background})`,height:350,position:'relative' }}>
           <div style={{position:'absolute',marginTop:100,padding:50,justifyContent:'flex-start',textAlign:'initial',marginLeft:50}}>
              <h1> Power your 
                  education empire</h1>
                  <div style={{fontSize:18,color:'#fff'}}>it's a long established fact that a reader will be distracted <br/> by the readable content of a page when looking at it's layout</div>
                  <input placeholder="Hello there" style={{width: "370px",marginTop:20,borderRadius:5,padding:5,border:'none'}}/>
           </div>
           </div>

           <div>
               <h4 style={{position:'center',margin:20}}>Join over 1,000 entrepreneur,coaches,and influancers like you</h4>
               <div style={{ display:'flex', justifyContent:'space-evenly'}}>
                   <img src={i}  style={{width:200,height:200}}/>
                   <img src={b} style={{width:200,height:200}} />
                   <img src={c} style={{width:200,height:200}} />

               </div>


           </div>
                

                
           
        </div>
    )
}

export default Landing
