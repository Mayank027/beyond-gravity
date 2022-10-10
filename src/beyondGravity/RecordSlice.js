import { createSlice } from "@reduxjs/toolkit";

// handling dispatch and Modifying immutable state with appropriate actions occurs here 

export const RecordSlice = createSlice({
  name: "record",
  initialState: {
    recordObject: [], // Main state which has all objects of records details in it - {id, title, onStep}
    count: 1, // keeps the track of total number of records - get incremented with addTask action
    default: 1, // default onStep value whenever new task gets created - onStep: 1 is default
  },
  reducers: {

    // addTask creates new record in our redux state of recordObject

    addTask: (state, action) => {
      state.recordObject.push({
        id: state.count,
        title: action.payload,
        onStep: state.default,
      });
      state.count += 1;
    },

    // deleteTask deletes specific record based on their unique id

    deleteTask: (state, action) => {
      state.recordObject = state.recordObject.filter(
        (record) => record.id !== action.payload
      );
    },

    // stepUpTask increments onStep value of a specific record based on unique id when right arrow button is clicked
    
    stepUpTask: (state, action) => {
      state.recordObject = state.recordObject.map((record) =>
        record.id === action.payload
          ? { ...record, onStep: record.onStep + 1 }
          : record
      );
    },

    // stepDownTask decrements onStep value of a specific record based on unique id when left arrow button is clicked

    stepDownTask: (state, action) => {
        state.recordObject = state.recordObject.map((record) =>
        record.id === action.payload
          ? { ...record, onStep: record.onStep - 1 }
          : record
      );
    }
  },
});

// exporting all actions from this record reducer

export const { addTask, deleteTask, stepUpTask, stepDownTask } = RecordSlice.actions

// exporting record state from this reducer

export const records = (state) => state.record.recordObject;

export default RecordSlice.reducer;
