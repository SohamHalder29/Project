import { createAction } from "@reduxjs/toolkit";
import {
    ADD_USER,
    EDIT_USER,
    REMOVE_USER,
    VIEW_USER,
    VIEW_USER_LIST
} from "../type";

export const addUser = createAction(ADD_USER);
export const editUser = createAction(EDIT_USER);
export const removeUser = createAction(REMOVE_USER);
export const viewUser = createAction(VIEW_USER);
export const viewUserList = createAction(VIEW_USER_LIST);
