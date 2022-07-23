import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { TimerContext, useTimer } from '../../Context/TimerContext';
// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const initialDetails = {
  notes: '',
  postSessionTodos: '',
  colorRating: '',
  starRating: ''
}

function PostSessionForm({ session, currentSessionId }) {
  const { openPostSessionForm, setOpenPostSessionForm } = useTimer(TimerContext);

  const { id } = useParams();
  const [postSessionDetails, setPostSessionDetails] = useState(initialDetails)
  const [initialTodos, setInitialTodos] = useState([])
  const [color, setColor] = useState([])

  const fetchOneSession = async () => {
    console.log(currentSessionId)
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/sessions/${currentSessionId}`)
    console.log(data)
  }
  useEffect(() => {
    fetchOneSession()
  }, [])

  const handleChange = (e) => {
    setPostSessionDetails({ ...postSessionDetails, [e.target.id]: e.target.value })
  }

  const handleSubmit = async () => {
    await axios.put(`${process.env.REACT_APP_BASE_URL}/sessions/${currentSessionId}`, {
      postSessionTodos: postSessionDetails.postSessionTodos,
      notes: postSessionDetails.notes,
      colorRating: postSessionDetails.colorRating,
      starRating: postSessionDetails.starRating,
    })
      .then(res => {
        console.log(res.data)
        // setPostSessionDetails(initialDetails)
        setOpenPostSessionForm(false)
      })
  }
  const ratings = [
    'green', 'yellow', 'red'
    // {
    //   label: 'Fantastic',
    //   color: 'green'
    // },
    // {
    //   label: 'Good',
    //   color: 'yellow'
    // },
    // {
    //   label: 'Bad',
    //   color: 'red'
    // }
  ]
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setColor(value);
  };
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
        How Was Your {session.name} Session?
      </Typography>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Rate Your Session</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={color}
          onChange={handleSelectChange}
          input={<OutlinedInput label="Rate Session" />}
        >
          {ratings.map((rating) => (
            <MenuItem
              key={rating}
              value={rating}
            // style={getStyles(rating)}
            >
              {rating}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
        onClick={(e) => {
          setOpenPostSessionForm(true)
        }}
        type="submit"
      >Save Session</button>
    </Box>

  )
}

export default PostSessionForm