import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';



function Edit() {

  const [id, setId] = useState(0)
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)


  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse(localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse(localStorage.getItem("salary")))



  }, [])


  var index = employee.map((item) => item.id).indexOf(id)
  let history = useNavigate()


  const handleUpdate = (e) => {
    e.preventDefault()
   
    let emp = employee[index]
    emp.name = uname
    emp.age = age
    emp.desig = desig
    emp.salary = salary

    history('/')
  }




  //console.log(uname);


  return (
    <div>
      <h1 className='text-center text-warning p-3 mt-3 '>Update Details of Employee</h1>
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
                <Form.Control value={uname} type="text" onChange={(e) => setUname(e.target.value)} />

                <Form.Label>Employee age</Form.Label>
                <Form.Control value={age} type="text" onChange={(e) => setAge(e.target.value)} />

                <Form.Label>Employee Designation</Form.Label>
                <Form.Control value={desig} type="text" onChange={(e) => setDesig(e.target.value)} />

                <Form.Label>Employee salary</Form.Label>
                <Form.Control value={salary} type="text" onChange={(e) => setSalary(e.target.value)} />



              </Form.Group>


              <Button onClick={(e) => handleUpdate(e)} variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Edit