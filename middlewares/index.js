const handleError = require('./handleError');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');

const validateToken = require('./validateToken');
const { 
  validateAge,
  validateName,
  validateTalk,
  validateTalkRate,
  validateWatchedAt,
} = require('./validateNewTalker');

const postNewTalker = require('./postNewTalker');

const validateNewTalker = [
  validateAge,
  validateName,
  validateTalk,
  validateTalkRate,
  validateWatchedAt,
];

const validateLogin = [validateEmail, validatePassword];

module.exports = ({
  handleError,
  validateLogin,
  validateToken,
  validateNewTalker,
  postNewTalker,
});
