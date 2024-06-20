// utils/validation.js
exports.validateEmail = (email) => {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(String(email).toLowerCase());
};

exports.validateLength = (str, min, max) => {
  return str.length >= min && str.length <= max;
};

const User = require('../models/User'); // Import User model

exports.validateUsername = async (username) => {
  let originalUsername = username;
  let counter = 1;

  while (true) {
    let user = await User.findOne({ username });
    if (!user) {
      return username; // Return the validated username if it's unique
    } else {
      username = `${originalUsername}${counter}`; // Append a counter to the original username
      counter++;
    }
  }
};




