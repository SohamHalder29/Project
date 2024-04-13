import { createReducer } from "@reduxjs/toolkit";
import {
  addProject,
  editProject,
  removeProject,
  viewProject,
  viewProjectList,
} from "../action";
export const projectReducer = createReducer({ tasks: [] }, (builder) => {
  builder.addCase(addProject, (state, action) => {});
  builder.addCase(editProject, (state, action) => {});
  builder.addCase(removeProject, (state, action) => {});
  builder.addCase(viewProject, (state, action) => {});
  builder.addCase(viewProjectList, (state, action) => {});
});
