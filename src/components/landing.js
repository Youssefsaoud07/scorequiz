import React from 'react'
import background from "../images/back1.jpg"
import i from "../images/i1.jpg"
import b from "../images/i2.jpg"
import c from "../images/i3.jpg"


const Landing = () => {
    return (
        <div style={{paddingBottom:90}}>
        <div style={{ backgroundImage: `url(${background})`,height:350,position:'relative',paddingLeft:10 }}>
           <div style={{position:'absolute',marginTop:100,padding:10,justifyContent:'flex-start',textAlign:'initial',width:'70%'}}>
              <h1> Power your 
                  education empire</h1>
                  <div style={{fontSize:18,color:'#fff'}}>it's a long established fact that a reader will be distracted <br/> by the readable content of a page when looking at it's layout</div>
                  
           </div>
           </div>

           <div>
               <h4 style={{position:'center',margin:20}}>Join over 1,000 entrepreneur,coaches,and influancers like you</h4>
               <div style={{ display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}}>
                   <img src={i}  style={{width:200,height:200 ,margin:5}}/>
                   <img src={b} style={{width:200,height:200 ,margin:5}} />
                   <img src={c} style={{width:200,height:200,margin:5}} />

               </div>


           </div>
                

                
           
        </div>
    )
}

export default Landing
