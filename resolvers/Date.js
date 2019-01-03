module.exports = {
  description: 'My scalar date type',
  parseValue(value){
    //tranform the input value from the client(request)
    return new Date(value);
  },
  serialize(value){
    //transform the output value to the client(response)
    return new Date(value);
  }
}