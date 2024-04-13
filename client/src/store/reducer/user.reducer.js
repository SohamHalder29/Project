import { createReducer } from "@reduxjs/toolkit";
import {
  addUser,
  editUser,
  removeUser,
  viewUser,
  viewUserList,
} from "../action";
export const userReducer = createReducer({ tasks: [] }, (builder) => {
  builder.addCase(addUser, (state, action) => {});
  builder.addCase(editUser, (state, action) => {});
  builder.addCase(removeUser, (state, action) => {});
  builder.addCase(viewUser, (state, action) => {});
  builder.addCase(viewUserList, (state, action) => {});
});
