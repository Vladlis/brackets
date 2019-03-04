module.exports = function check(str, bracketsConfig) {
  var stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentElement = str[i];
    const previousElement = stack[stack.length - 1];
    if (configHasRule(previousElement, currentElement, bracketsConfig)) {
      stack.pop();
    } else {
      stack.push(currentElement);
    }
  }
  return stack.length == 0;
}

function configHasRule(openingBracket, closingBracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    const element = bracketsConfig[i];
    if (element[0] == openingBracket && element[1] == closingBracket) {
      return true;
    }
  }
  return false;
}
