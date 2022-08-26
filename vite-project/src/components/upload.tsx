import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



function Upload() {



  return (
   <div className="uploadcont">
    
    <input type="file" className="form-control" placeholder="File"/><br />
    <input type="text" className="form-control" placeholder="Name"/><br />
    <button className="uploadbtn">Submit</button><NavLink to="/home">OR Go Back</NavLink>





   </div>
  )
}

export default Upload