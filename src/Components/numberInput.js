import React from "react";
import { useState } from "react";
function Number(props){
    const[nums,setNum]= useState()
    var num= props.numbers
    function numFormatter() {
        if(num > 999 && num < 1000000){
           num=(num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
            return setNum(num); 
        }else if(num > 1000000){
            num=(num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
            return setNum(num); 
        }else if(num < 900){
            return setNum(num); // if value < 1000, nothing to do
             
        }
    }
    return(
        <div>
            <button onClick={numFormatter}>Enter</button>
            <alert>{nums}</alert>
        </div>
    )
}
export default Number;