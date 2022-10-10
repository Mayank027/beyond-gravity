import { Avatar, Box, CardHeader, Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, records, stepUpTask } from "../RecordSlice";
import { indigo, red } from "@mui/material/colors";

const StepOne = () => {
  const stepOneRecords = useSelector(records);
  const dispatch = useDispatch();


  return (
    <Box sx={{ width: 297, height: 572, backgroundColor: "#E4E7EE", paddingTop:2, borderRadius:2, marginBottom:4 }}>
      <div style={{fontFamily:'roboto', color:indigo[900]}}>Step 1</div>
      <Grid container direction="col" justifyContent="center" sx={{paddingTop:3}}>
        {stepOneRecords?.map((record) => {
          if (record.onStep === 1) {
            return (
              <Card key={record.id} sx={{ minWidth: 265, minHeight: 120, marginTop:0.9, marginBottom:0.9 }}>
                <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: indigo[300], width:23, height:23, fontSize:12}}>
                        {record.id}
                    </Avatar>
                }

                title={<div style={{color:indigo[900], fontFamily:'roboto'}}>{record.title}</div>}

                action={<IconButton>
                    <DeleteIcon onClick={() => dispatch(deleteTask(record.id))}  sx={{color: red[300]}} />
                </IconButton>}
                />
                
                <CardActions style={{justifyContent: 'right'}}>
                    {/* <ArrowCircleRightIcon onClick={() => dispatch(stepUpTask(record.id))} /> */}
                  <Button onClick={() => dispatch(stepUpTask(record.id))} startIcon={<ArrowCircleRightIcon sx={{color: indigo[300], width:25, height:25}} />}></Button>
                </CardActions>
              </Card>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
};

export default StepOne;
