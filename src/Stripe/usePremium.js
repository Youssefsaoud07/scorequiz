// import { useState,useEffect } from "react";
// import app from "../configs/authMethod";
// import isUserPremium from "./isUserPremium";
// export default function usePremiumStatus(user){
//     const [premiumStatus, setPremiumStatus] = useState(false)
//     useEffect(() => {
//       if(user){
//           const checkPremiumStatus=async ()=>{
//               setPremiumStatus(await isUserPremium())
//           }
//           checkPremiumStatus()
//       }
//     }, [user])
//     return premiumStatus

// }