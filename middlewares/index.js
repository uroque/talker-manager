const handleError = require('./handleError');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');

const validateLogin = [validateEmail, validatePassword];

module.exports({
  validateLogin,
  handleError,
});
