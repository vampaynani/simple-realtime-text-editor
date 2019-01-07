module.exports = (root, args, context) => {
 const { code } = args; 
 context.pubsub.publish('TYPING_CODE', {typingCode: code});
 return code;
}