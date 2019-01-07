module.exports = {
  subscribe: (root, args, context) => {
    return context.pubsub.asyncIterator('TYPING_CODE');
  }
}