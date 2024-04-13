import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  editTask,
  removeTask,
  viewTask,
  viewTaskList,
} from "../action";
export const taskReducer = createReducer({ tasks: [] }, (builder) => {
  builder.addCase(addTask, (state, action) => {});
  builder.addCase(editTask, (state, action) => {});
  builder.addCase(removeTask, (state, action) => {});
  builder.addCase(viewTask, (state, action) => {});
  builder.addCase(viewTaskList, (state, action) => {});
});
