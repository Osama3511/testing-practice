function capitalize(string) {
  if (Number.isInteger(+string.charAt(0))) return null;

  
  const arr = string.split("");
  arr[0] = arr[0].toUpperCase();

  return arr.join("");
}

module.exports = { capitalize };