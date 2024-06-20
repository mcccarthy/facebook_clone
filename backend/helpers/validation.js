// utils/validation.js
exports.validateEmail = (email) => {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(String(email).toLowerCase());
};

exports.validateLength = (str, min, max) => {
  return str.length >= min && str.length <= max;
};