import React,{useEffect,useState} from "react"
const ValidCustomer =({alert,handleClick}) =>{
  
return(<>
    <div className="toast toast-top toast-center">
    <div role="alert" className={`alert ${alert.type}`} >
    
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-white h-6 w-6 shrink-0 ">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span className="text-white font-semibold body-1">{alert.message}</span>
  <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost text-white right-2 top-2" onClick={handleClick}>✕</button>
    </form>
</div>
</div>
    
</>
)}
export default ValidCustomer