const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  favourite: {
    type: Array,
  },

  sentComments: {
    type: Array,
  },
  receivedComments: {
    type: Array,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  collections: {
    type: Array,
  },
  category: {
    type: Array,
  },
  role: {
    type: String,
    default: "user",
    required: true,
  },
});

const dummyData = {
  fullName: "Abdulboriy Malikov",
  gender: "Male",
  email: "malikov.udemy@gmail.com",
  phone: "+998 90 017 42 90",
  sentComments: [
    {
      to: "Abdulboriy",
      body: "This is a comment which I have sent to someone",
    },
  ],
  receivedComments: [
    {
      sender: "Malika",
      body: "This is a comment which I have sent to someone",
    },
  ],
  role: "User",
};

exports.UserSchema = UserSchema;

exports.dummyData = dummyData;

`Fam test date: 04/02/23
Fam test location: Innovative Centre Samarkand 
Number of test takers: 2/10
How long test was taken by Test takers? 1 hour 50 minutes
Have you received any comments from test takers? One candidate told that CDI is more comfortable than PB, she said she liked CDI version  `;
