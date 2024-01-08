import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
<>
<div style={{backgroundColor:'black', width:'100%',height:'300px'}} 
className='footer mt-5 p-5 d-flex text-light  flex-column align-items-center justify-content-center'>
    <div className='d-flex mt-4 justify-content-around w-100' >
      <div style={{width:'300px'}} className='website'>
        <h1> <i class="fa-brands fa-react mx-3 fa-fade"></i>      
       Project Fair</h1>
       <p className='mt-3' >DEsigned and built with all love in the world by bootsrtap team. code liceaned by MIT </p>
      </div>

      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'}   className='text-light' style={{textDecoration:'none',}}> Landing  Page  </Link> 
        <Link to={'/home'}  className='text-light'  style={{textDecoration:'none', }}> Home </Link> 
        <Link to={'/projects'}  className='text-light'  style={{textDecoration:'none',}}>Projects </Link> 
        <Link to={'/login'}  className='text-light'  style={{textDecoration:'none',}}>user Login </Link> 


      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'/'} className='text-light' style={{textDecoration:'none'}}>React</Link> 
        <Link to={'/home'}  className='text-light' style={{textDecoration:'none', color:'black'}}> Github </Link> 

      </div>

    </div>
    <p className='text-primary' style={{marginTop:'25px'}}>Copyright @2023 Project Fair. Build using React.js</p>
   </div>
</>  )
}

export default Footer