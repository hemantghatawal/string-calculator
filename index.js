function Add(string) {
  console.log(string);
  let sum = 0;

  if (!string.length) {
    return sum;
  }

  const strChunk = string.split(",");
  strChunk.forEach((element) => {
    if(element)
    sum += Number(element);
  });

  return sum;
}

console.log(Add("1,2,3,4,5,6,7,8,9,10"));

module.exports = { Add };
