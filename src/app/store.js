import { configureStore } from '@reduxjs/toolkit';
import RecordReducer from '../beyondGravity/RecordSlice';


export default configureStore({
    reducer: {
      record: RecordReducer,
    },
  });
  