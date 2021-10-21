// import app from "../configs/authMethod";
// import getStripe from "./initializeStripe";
 
// export async function createCheckoutSession(uid){
//     const firestore = app.firestore()
//     //create new checkout session
//     const checkoutSessionRef=await firestore
//     .collection('users').doc(uid).collection('checkout_sessions').add({
//         price:"price_1JhFJ3Lev35dWdL1xLb8Cg3Y",
//         success_url:window.location.origin,
//         cancel_url:window.location.origin,
//     })
//     checkoutSessionRef.onSnapshot(async(snap)=>{
//         const {sessionId}= snap.data()
//         if(sessionId){
//             //we have sessionId redirecting to stripe checkout
//             const stripe = await getStripe()
//             stripe.redirectToCheckout({sessionId})

//         }

//     }
//     )
// }