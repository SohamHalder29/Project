const { ref } = require("joi");
const { Schema } = require("mongoose");
const { emailRegex, userRegex } = require("../constants");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      match: userRegex,
    },
    fullName: {
      type: String,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      match: emailRegex,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    userRoll: {
      type: String,
      required: true,
      default: "Client",
      enum: ["Client", "Employee", "Admin", "SuperAdmin"],
    },
    organizationList: [
      {
        type: Schema.Types.ObjectId,
        ref: "organization",
      },
    ],
    projectList: [
      {
        type: Schema.Types.ObjectId,
        ref: "project",
      },
    ],
    taskList: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    resourceList: [
      {
        type: Schema.Types.ObjectId,
        ref: "resource",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "message",
      },
    ],
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = userSchema;
