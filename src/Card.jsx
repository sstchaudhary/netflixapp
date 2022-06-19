import React from "react";
import "./index.css"
const Card=(props)=>{
    //console.log(props);

return(



<>
     
   <diV className="cards">
    <div className="card">
      <img src={props.imgsrc}alt="mypic" className="card_img"/>
   <div className="card_info">
    <span className="card_category">{props.title}</span>

      <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} target="_blank" >
          <button>Watch Now</button>
        </a>
      
    
   </div>

      
    </div>
   </diV>

   </>



);



};
export default Card;