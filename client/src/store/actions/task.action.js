import { createAction } from "@reduxjs/toolkit";
import {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    VIEW_TASK,
    VIEW_TASK_LIST
} from "../type";

export const addTask = createAction(ADD_TASK);
export const editTask = createAction(EDIT_TASK);
export const removeTask = createAction(REMOVE_TASK);
export const viewTask = createAction(VIEW_TASK);
export const viewTaskList = createAction(VIEW_TASK_LIST);
