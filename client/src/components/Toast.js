import React from "react";
import '../App.css';

export default function Toast(props){
        console.log(props)
        let toastBox = document.getElementById("toastBox");
        let toast = document.createElement("div");
        toast.classList.add("toast");
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = `<i class="fa-solid fa-circle-check"></i>`+ props;
        toastBox.appendChild(toast);
        toast.appendChild(span);
        let bar = document.createElement("div");
        bar.classList.add("bar");
        toast.appendChild(bar);
    
        if(props.includes("Deleted user : ")){
          bar.classList.add("err");
          span.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>` + props;
      }
        setTimeout(()=>{
            toast.remove();
        },5000);
    
    return(
        <div></div>
    );
}