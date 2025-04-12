function Add(string) {
  console.log(string);
  let sum = 0;

  if (!string.length) {
    return sum;
  }

  const strChunk = string.split(/,|\n/);
  console.log("strChunk =>", strChunk)
  strChunk.forEach((element) => {
    if(element)
    sum += Number(element);
  });

  return sum;
}

console.log(Add("1\n2,3"));

module.exports = { Add };
