function Add(string) {
  console.log(string);
  let sum = 0;

  if (!string.length) {
    return sum;
  }

  let delimiterRegex = /,|\n/;
  let numbersPart = string;
  const negativeNumbers = [];

  if (string.startsWith("//")) {
    const parts = string.split("\n");
    const customDelimiter = parts[0].slice(2);
    delimiterRegex = new RegExp(escapeRegex(customDelimiter));
    numbersPart = parts[1];
  }

  const numbers = numbersPart.split(delimiterRegex);
  
  numbers.forEach((num) => {
    if (num < 0) negativeNumbers.push(num);
  });

  if (negativeNumbers.length > 0) {
    throw new Error("negatives not allowed: " + negativeNumbers.join(", "));
  }
  
  console.log("numbers =>", numbers);
  numbers.forEach((element) => {
    if (element) sum += Number(element);
  });

  return sum;
}

console.log(Add("//;\n1;2;-3"));

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = { Add };
