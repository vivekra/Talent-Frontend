import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./Slice/homeSlice";

export default configureStore({
  reducer: {
    index: homeReducer,
  },
});
