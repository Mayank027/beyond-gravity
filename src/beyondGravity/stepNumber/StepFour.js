import { Avatar, Box, CardHeader, Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, records, stepDownTask } from "../RecordSlice";
import { indigo, red } from "@mui/material/colors";

const StepFour = () => {

    const stepOneRecords = useSelector(records); // importing records state from redux-store
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 297, height: 572, backgroundColor: "#E4E7EE", paddingTop:2, borderRadius:2, marginBottom:4 }}>
      <div  style={{fontFamily:'roboto', color:indigo[900]}}>Step 4</div> {/* Step Number 4  */}
      

      {/* Below Grid renders Cards of all records which has stepNumber 4 */}
      
      <Grid container direction="col" justifyContent="center"  sx={{paddingTop:3}}  >
        {stepOneRecords?.map((record) => {
          if (record.onStep === 4) {
            return (
              <Card key={record.id} sx={{ minWidth: 265, minHeight: 120, marginTop:0.9, marginBottom:0.9 }}>
                <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: indigo[300], width:25, height:25, fontSize:14}}>
                        {record.id}
                    </Avatar>
                }

                title={<div style={{color:indigo[900], fontFamily:'roboto'}}>{record.title}</div>}

                action={<IconButton>
                    <DeleteIcon onClick={() => dispatch(deleteTask(record.id))}  sx={{color: red[300]}}   />
                </IconButton>}
                />
                <CardActions style={{justifyContent: 'left'}}>
                  <Button onClick={() => dispatch(stepDownTask(record.id))} startIcon={<ArrowCircleLeftIcon sx={{color: indigo[300], width:25, height:25}} />}></Button>
                </CardActions>
              </Card>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  )
}

export default StepFour