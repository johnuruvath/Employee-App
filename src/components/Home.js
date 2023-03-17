import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let history = useNavigate()
  const handleDelete = (id) => {
    //array of ids
    let index = employee.map(item => item.id).indexOf(id)
    employee.splice(index, 1)
    history('/')


  }

  const handleEdit = (id, uname, age, desig, salary) => {
    localStorage.setItem("id", JSON.stringify(id))
    localStorage.setItem("uname", uname)
    localStorage.setItem("age", JSON.stringify(age))
    localStorage.setItem("desig", desig)
    localStorage.setItem("salary", JSON.stringify(salary))

  }

  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3 '>Employee Management System</h1>
      <div className='text-center p-2 fs-5'>
        <p>
          React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
        </p>
        <Link to='/add'>
          <Button className='mt-3' variant="outline-success">Add New Employee  <i class="fa-solid fa-user-plus"></i> </Button>

        </Link>
        <Table striped bordered hover style={{ margin: '7rem', width: "85%" }}>
          <thead>
            <tr>
            <th>Sl.No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employee && employee.length > 0 ?
                employee.map(item => (
                  <tr>
                    <td>{employee.indexOf(item)+1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.desig}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to='/edit'>
                        <Button onClick={() => handleEdit(item.id, item.name, item.age, item.desig, item.salary)} className='ms-2 me-3' variant="info"><i class="fa-solid fa-user-pen"></i></Button>
                      </Link>
                      <Button onClick={() => handleDelete(item.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>
                    </td>
                  </tr>
                ))

                : 'no  table data'
            }

          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Home