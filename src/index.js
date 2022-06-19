import reactDom from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";

// function ncard(val){
//   return(
//   <Card 
//     sname={val.sname}
//     imgsrc={val.imgsrc} 
//     title={val.title}
//     link={val.link}
//    />);
  
// }

reactDom.render(
  <>
        <h1 className="heading_style">List of top 3 Netflix Series in 2020</h1>


         {Sdata.map((val)=>{
          return(<Card 
              sname={val.sname}
              imgsrc={val.imgsrc} 
              title={val.title}
              link={val.link}
               />   );
          
               
        })} 

        {/* {Sdata.map(function ncard(val){
             
          return(
            <Card 
              sname={val.sname}
              imgsrc={val.imgsrc} 
              title={val.title}
              link={val.link}
               /> 
          );
        })} */}
        {/* {Sdata.map(ncard)} */}
       {/* <Card 
        sname={Sdata[0].sname}
        imgsrc={Sdata[0].imgsrc} 
        title={Sdata[0].title}
        link={Sdata[0].link}
       />
       <Card 
        sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc} 
        title={Sdata[1].title}
        link={Sdata[1].link}
       />
       <Card 
        sname={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc} 
        title={Sdata[2].title}
        link={Sdata[2].link} 
       />*/}

        {/* <Card 
        sname='extra curricular'
        imgsrc="https://wallpapercave.com/wp/wp7418473.jpg" alt="mypic" className="card_img" 
        title="A Netflix Orignal Series"
        link="https://www.netflix.com/in/title/80990668?source=35"
       />
        <Card 
        sname='Stranger Things'
        imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" alt="mypic" className="card_img" 
        title="A Netflix Orignal Series"
        link="https://www.netflix.com/in/title/80057281?source=35"
       />  */}
       </>
   ,document.getElementById('root')


);
