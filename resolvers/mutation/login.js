const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async(root, args) => {
  const {email, password} = args;
  const user = await User.findOne({email});
  if(!user){
    throw "Authentication Error: Invalid credentials";
  }
  const isAllowed = await bcrypt.compare(password, user.password);
  if(!isAllowed){
    throw "Authentication Error: Invalid credentials";
  }
  return jwt.sign({user}, '12345');
}