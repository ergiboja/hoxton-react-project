import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



function Upload() {
const[file, setFile]=useState('')
console.log(file)
const [name, setName]=useState('')
const dataToSubmit = {
    file,
    name,
}
const handleForm = (event)=>{
    event.preventDefault();
    fetch('http://localhost:4001/products',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json: charset=UTF-8',
            
        },
        body: JSON.stringify(dataToSubmit)

    })
    .then(res=> res.json())
    .then(res =>{
        console.log(res)
    })
}


  return (
   <div className="uploadcont">
    <form id="uploadform" onSubmit={handleForm}>
    <input type="file" className="form-control" value={file} onChange={(event)=> setFile(event.target.value)

    } placeholder="File"/><br />
    <input type="text" value={name} className="form-control"onChange={(event)=> setName(event.target.value)

} placeholder="Name"/><br />
    <button className="uploadbtn">Submit</button><NavLink to="/home">OR Go Back</NavLink>
    </form>





   </div>
  )
}

export default Upload