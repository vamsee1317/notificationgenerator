// // import React, { Component } from "react";

// // class Notifications extends Component{
// //     constructor(){
// //         super();
// //     }

// //     render(){
// //         return(
// //             <div>
// //             </div>
// //         )
// //     }
// // }


// import React from "react"

// function Notifications({type, message, timestamp, isRead}){
//     console.log(type, message, timestamp, isRead);

//     // let bgColor;

//     // if(type == "info"){
//     //     bgColor = "bg-blue-100"
//     // }else if(type == "warning"){
//     //     bgColor = "bg-yellow-100"
//     // }else if(type == "error"){
//     //     bgColor = "bg-red-100"
//     // }else{
//     //     bgColor = "bg-green-100"
//     // }

//     const bgColor = {
//         "info": "bg-blue-100",
//         "warning": "bg-yellow-100",
//         "error": "bg-red-100",
//         "success": "bg-green-500"
//     }[type];



//     return(
//         <div className={`p-4 rounded shadow-sm mb-3 ${bgColor} ${isRead ? 'opacity-50': ''} : `}>
//             <p className="font-semibold">{message}</p>
//             <p className="text-gray-500">{timestamp}</p>
//         </div>
//     )
// }

// export default Notifications



import React from 'react'

export default function Notifications({note}) {
  return (
    <div>
        {
            note.map((item, index) => (
                <div className={`p-4 rounded shadow-sm mb-3`} key={index}>
            <p className="font-semibold">{item.message}</p>
            <p className="text-gray-500">{item.timestamp}</p>
        </div>
            ))        
        }
    </div>
  )
}
