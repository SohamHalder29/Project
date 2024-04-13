import { combineReducers } from "@reduxjs/toolkit";
import { taskReducer } from "./task.reducer";
import { projectReducer } from "./project.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
  tasks: taskReducer,
  projects: projectReducer,
  users: userReducer,
});
