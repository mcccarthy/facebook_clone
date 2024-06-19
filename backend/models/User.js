const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    text: true,
    max: 32,
  },
  last_name: {
    type: String,
    required: [true, 'Please enter your last name'],
    trim: true,
    text: true,
    max: 32,
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: true,
    text: true,
    unique: true,
    max: 32,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    text: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],

  },
  picture: {
    type: String,
    trim: true,
    default: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044379/avatars/default_pic_jeaybr.png',
  },
  cover: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: [true, 'Please select'],
    trim: true,
  },
  bYear: {
    type: Number,
    required: [true, 'Please select'],
    trim: true,
  },
  bMonth: {
    type: Number,
    required: [true, 'Please select'],
    trim: true,
  },
  bDay: {
    type: Number,
    required: [true, 'Please select'],
    trim: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  search: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
      },
    },
  ],
  details: {
    bio: {
      type: String,
      max: 200,
    },
    otherName: {
      type: String,
      max: 200,
    },
    job: {
      type: String,
      max: 200,
    },
    workplace: {
      type: String,
      max: 200,
    },
    highschool: {
      type: String,
      max: 200,
    },
    college: {
      type: String,
      max: 200,
    },
    currentCity: {
      type: String,
      max: 200,
    },
    hometown: {
      type: String,
      max: 200,
    },
    realationship: {
      type: String,
      enum: ['Single', 'In a relationship', 'Engaged', 'Married', 'It\'s complicated', 'In an open relationship', 'Widowed', 'Separated', 'Divorced', 'In a civil union', 'In a domestic partnership', 'Completly FUCKED'],
    },
    instgram: {
      type: String,
    },

  },
  savedPosts: [
    {
      post: {
        type: ObjectId,
        ref: "Post",
      },
      savedAt: {
        type: Date,
        default: new Date(),
      }
    }
  ]


}, {
  timestamps: true,
});

module.exports = mongoose.model('User', user.Schema)