let joinList = (array) => {
  let string = "";
  for (let i in array) {
    i < array.length - 1 ? string += array[i] + ", " : string += array[i]
  }
  return string
}

module.exports = joinList

let concepts = joinList(["gists", "types", "operators", "iteration", "problem solving"]);

console.log(`Today I learned about ${concepts}`);
