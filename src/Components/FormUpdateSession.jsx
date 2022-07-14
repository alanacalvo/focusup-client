import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'


// two form states

// try without material ui


function FormUpdateSession() {
  const { id } = useParams();
  const [initialDetails, setInitialDetails] = useState('');
  const [updateDetails, setUpdateDetails] = useState({todos: '', notes: ''});

  const fetchOneSession = async () => {
    const { data } = await axios.get(`http://localhost:5000/${id}`)
    setInitialDetails(data)
    // console.log(data)
  }
  useEffect(() => {
    fetchOneSession()
    // console.log(initialDetails)
    // console.log('hello')
  }, [])

  const handleChange = (e) => {
    setUpdateDetails({ ...updateDetails, [e.target.id]: e.target.value })
    console.log(updateDetails)
  }

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   console.log(updateDetails.todos)

  //   axios.put(`http://localhost:5000/finish/${id}`, 
  //   JSON.stringify({
  //     todos: ['hello'],
  //     notes: 'hiiiii',
  //   }),
  //     {
  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //     // .then(body => JSON.stringify(body))
  //     .then(res => { console.log(res) })
  //     .catch(console.error)
  // }
  const handleSubmit = async (e) => {
    console.log(e)
    let body = {
         todos: [updateDetails.todos],
         notes: updateDetails.notes,
    }
    await fetch(`http://localhost:5000/finish/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}

return (
  <div>
    <Box
      component='form'
      autoComplete="off"
      noValidate
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >

      <Input
        required
        // className={classes.field}
        id='notes'
        label='Session Notes'
        placeholder='Session Notes'
        color='secondary'
        onChange={handleChange}
      value={updateDetails.notes}
      />
      <Input
        required
        // className={classes.field}
        id='todos'
        label='To Do List'
        placeholder='To Do List'
        color='secondary'
        onChange={handleChange}
      value={updateDetails.todos}
      />
      <button type='submit'>Update</button>
    </Box>
  </div>

)
}

export default FormUpdateSession