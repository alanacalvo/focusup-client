import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const initialDetails = {
  notes: '', 
  postSessionTodos: '', 
  colorRating: '', 
  starRating: ''
}

function PostSessionForm() {
  const { id } = useParams();
  const [postSessionDetails, setPostSessionDetails] = useState(initialDetails)
  const [initialTodos, setInitialTodos] = useState([])

  const fetchOneSession = async () => {
    const { data } = await axios.get(`http://localhost:5000/sessions/${id}`)
    setInitialTodos(data)
  }
  useEffect(() => {
    fetchOneSession()
  }, [])

 const handleChange = (e) => {
    setPostSessionDetails({ ...postSessionDetails, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    axios.post(`http://localhost:5000/sessions/${id}/complete`, {
      postSessionTodos: postSessionDetails.postSessionTodos,
      notes: postSessionDetails.notes,
      colorRating: postSessionDetails.colorRating,
      starRating: postSessionDetails.starRating,
    })
      .then(res => {
        console.log(res.data)
        setPostSessionDetails(initialDetails)
        // navigate OR send to new component ??
      })
  }

  return (
    <Box
    component='form'
    autoComplete="off"
    noValidate
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <Typography>
      How Was Your session.name Session?
    </Typography>

  <Input
    label='Notes'
    placeholder='Add Session Notes'
    color='secondary'
    onChange={handleChange}
    value={postSessionDetails.notes}
    id='notes'
  />
  <br></br>
  {/* <Autocomplete
  id='todos'
  />
  <br></br> */}
  <button
    type="submit"
  >Save Session</button>
</Box>

  )
}

export default PostSessionForm