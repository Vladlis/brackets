module.exports = function check(str, bracketsConfig) {
  const map = new Map(bracketsConfig);
  var stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentElement = str[i];
    const previousElement = stack[stack.length - 1];
    if (map.get(previousElement) === currentElement) {
      stack.pop();
    } else {
      stack.push(currentElement);
    }
  }
  return stack.length == 0;
}
