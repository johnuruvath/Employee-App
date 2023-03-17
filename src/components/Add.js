import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import employee from './Employee';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';




function Add() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)


  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    // console.log(ids);
    let uniqueid=ids.slice(0,8)

    employee.push(
      {
        id:uniqueid,
        name:uname ,
        age:age,
        desig:desig,
        salary:salary
      }
    )
    history('/')
  }

  return (
    <div>
      <h1 className='text-center text-warning p-3 mt-3 '>Add Details of Employee</h1>
      <div className='text-center p-2 fs-5'>
        <p>
          React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
        </p>
      </div>
      <Container>
        <Row>
          <Col md={4}>
            <img className='w-100 m-auto'
              src='https://p.kindpng.com/picc/s/21-211210_free-for-commercial-use-high-resolution-personal-icon.png' />
          </Col>
          <Col md={8}>
            <Form className='border p-5'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Employee name</Form.Label>
                <Form.Control type="text" required
                  onChange={(e) => setUname(e.target.value)}
                />

                <Form.Label>Employee age</Form.Label>
                <Form.Control type="text" required
                  onChange={(e) => setAge(e.target.value)}
                />

                <Form.Label>Employee Designation</Form.Label>
                <Form.Control type="text" required
                  onChange={(e) => setDesig(e.target.value)}
                />

                <Form.Label>Employee salary</Form.Label>
                <Form.Control type="text" required
                  onChange={(e) => setSalary(e.target.value)}
                />



              </Form.Group>


              <Button onClick={(e) => handleAdd(e)} variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Add