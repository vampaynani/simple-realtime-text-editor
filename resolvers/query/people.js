const axios = require('axios');
const User = require('../../models/user');

module.exports = async (root, args, context) => {
  const { isAuthorized } = context;
  const decodedToken = isAuthorized();
  const isUser = await User.findById(decodedToken.user._id);
  if(!isUser){
    throw 'Unauthorized';
  }
  return await axios.get(`https://swapi.co/api/people/${args.id}`)
  .then(response => {
    return response.data;
  });
}