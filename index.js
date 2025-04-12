function Add(string) {
  console.log(string);
  let sum = 0;

  if (!string.length) {
    return sum;
  }

  let delimiterRegex = /,|\n/;
  let numbersPart = string;

  if (string.startsWith("//")) {
    const parts = string.split("\n");
    const customDelimiter = parts[0].slice(2);
    delimiterRegex = new RegExp(escapeRegex(customDelimiter));
    numbersPart = parts[1];
  }

  const strChunk = numbersPart.split(delimiterRegex);
  console.log("strChunk =>", strChunk);
  strChunk.forEach((element) => {
    if (element) sum += Number(element);
  });

  return sum;
}

console.log(Add("//$\n10$20$30"));

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { Add };
