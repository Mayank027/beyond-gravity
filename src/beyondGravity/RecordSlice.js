import { createSlice } from "@reduxjs/toolkit";

export const RecordSlice = createSlice({
  name: "record",
  initialState: {
    recordObject: [],
    count: 1,
    default: 1,
  },
  reducers: {
    addTask: (state, action) => {
      state.recordObject.push({
        id: state.count,
        title: action.payload,
        onStep: state.default,
      });
      state.count += 1;
    },
    deleteTask: (state, action) => {
      state.recordObject = state.recordObject.filter(
        (record) => record.id !== action.payload
      );
    },
    stepUpTask: (state, action) => {
      state.recordObject = state.recordObject.map((record) =>
        record.id === action.payload
          ? { ...record, onStep: record.onStep + 1 }
          : record
      );
    },
    stepDownTask: (state, action) => {
        state.recordObject = state.recordObject.map((record) =>
        record.id === action.payload
          ? { ...record, onStep: record.onStep - 1 }
          : record
      );
    }
  },
});

export const { addTask, deleteTask, stepUpTask, stepDownTask } = RecordSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//   export const selectCount = (state) => state.record.value
export const records = (state) => state.record.recordObject;

export default RecordSlice.reducer;
