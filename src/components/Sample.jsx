import React, { useState } from 'react'
import InnerSample from "./InnerSample"

function Sample() {


const [arr, setArr] = useState(["football", "cricket", "rugby"]);


const deleteHandler = (e)=>{
  let newArr = arr.filter((value, index)=>{
      return index !== e
  })
 setArr(newArr)
}




  return (
    <>
      <ul>
        {arr.map((curValue,index)=>{
            return <InnerSample key={index} value = {curValue} deleteHandler = {deleteHandler} id ={index}/>
        })}

      </ul>
    </>
  )
}

export default Sample
