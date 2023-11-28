import React, { useEffect, useState } from 'react'



function Contact() {
  let [count,setcount]=useState(0);

  useEffect(()=>
  {
    console.log("hello")
    return (()=>console.log("useeffect ended"))
  })
 console.log("contact")
 function add()
 {
  setcount(count=count+1)
 }
  return (
    <div>
      Contact is {count}
      <button onClick={add}>add</button>

    </div>
  )
}

export default Contact