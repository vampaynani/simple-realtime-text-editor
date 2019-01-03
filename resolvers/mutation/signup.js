const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (root, args) => {
  const {email, password} = args;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({email, password: hashedPassword});
  if(!user){
    throw 'User was not created!!!';
  }
  return jwt.sign({user}, '12345');
}