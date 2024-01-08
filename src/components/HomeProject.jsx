import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import "./Marquee.css"
import Header from './Header'

function HomeProject() {
  return (
<>
<h1 className='text-primary text-center mb-4'>Explore our Projects</h1>
<div className='marquee-container' >
<div className='marquee-content d-flex'>
<Row>
  <Col sm={12} md={6} lg={3}>
    <ProjectCard/>
  </Col>
  <Col sm={12} md={6} lg={3}>
    <ProjectCard/>
  </Col>
  <Col sm={12} md={6} lg={3}>
    <ProjectCard/>
  </Col>
  <Col sm={12} md={6} lg={3}>
    <ProjectCard/>
  </Col>
 
  
</Row>
</div>
</div>
<div className="div text-center justify-content-center">
<Link to={'/projects'} >View More Projects</Link>

</div>
</> 
 )
}

export default HomeProject