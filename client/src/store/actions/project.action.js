import { createAction } from "@reduxjs/toolkit";
import {
  ADD_PROJECT,
  EDIT_PROJECT,
  REMOVE_PROJECT,
  VIEW_PROJECT,
  VIEW_PROJECT_LIST,
} from "../type";

export const addProject = createAction(ADD_PROJECT);
export const editProject = createAction(EDIT_PROJECT);
export const removeProject = createAction(REMOVE_PROJECT);
export const viewProject = createAction(VIEW_PROJECT);
export const viewProjectList = createAction(VIEW_PROJECT_LIST);
