import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Grid from '@mui/material/Grid';
import StepOne from "./stepNumber/StepOne";
import StepTwo from "./stepNumber/StepTwo";
import StepThree from "./stepNumber/StepThree";
import StepFour from "./stepNumber/StepFour";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, records } from './RecordSlice';
import { indigo } from "@mui/material/colors";



export default function BeyondGravity() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // Below are 3 state and function to handle MODAL when click on Add Task

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const stepOneRecords = useSelector(records); // importing records state from redux-store

  // handleTask() method executed after adding a task in modal to add record in redux-store state

  const handleTask = () => {
    dispatch(addTask(title));
    console.log("Title Entered : ", title);
    handleClose();
  }

  return (
    <Box maxWidth maxHeight sx={{background: indigo[100]}}>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding:5}}
    >

      {/* Below stack renders our search input box */}
      
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={stepOneRecords.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              sx={{color:'white'}}
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>

      {/* Render our MODAL Box to add task */}

      <div>
      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />} sx={{bgcolor: indigo[400]}}>
        Add Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom:3}}>
            Add Task
          </Typography>
          <TextField onChange={e => setTitle(e.target.value)} id="outlined-basic" label="Add Task" variant="outlined" />
          <Button onClick={handleTask} variant="contained" sx={{margin:1, bgcolor:indigo[400]}}>Add Task</Button>
        </Box>
      </Modal>
      </div>
      
    </Grid>
    

    {/* Calling all 4 Step Components individually */}
    <Grid container direction="row" justifyContent='space-around'>
    <StepOne />
    <StepTwo />
    <StepThree />
    <StepFour />
    </Grid>
    </Box>
  );
}

// Custom style for Modal box

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};


