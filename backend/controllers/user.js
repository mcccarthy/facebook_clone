const User = require("../models/User");
const { validateEmail, validateLength, validateUsername } = require("../helpers/validation");
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email'
      });
    }
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

    if (!validateLength(first_name, 3, 32)) {
      return res.status(400).json({
        message: 'First name must be between 3 and 32 characters'
      });
    }
    if (!validateLength(last_name, 3, 32)) {
      return res.status(400).json({
        message: 'Last name must be between 3 and 32 characters'
      });
    }
    if (!validateLength(password, 6, 32)) {
      return res.status(400).json({
        message: 'Password must be between 3 and 32 characters'
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);


    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);


    const user = await new User({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save(); // Create a new user  instance
    return res.json(user);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  };
};
