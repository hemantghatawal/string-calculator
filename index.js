function Add(string) {
  console.log(string);
  let sum = 0;

  if (!string.length) {
    return sum;
  }

  const strChunk = string.split(",");
  strChunk.forEach((element) => {
    sum += Number(element);
  });

  return sum;
}

console.log(Add(""));

module.exports = { Add };
