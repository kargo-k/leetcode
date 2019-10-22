// reverse a string using recursion

let revStr = str => {
  if (!str.length) return "Error: Empty String."
  if (str.length === 1) return str

  let firstChar = str.slice(0, 1)
  let remainder = str.slice(1)
  return revStr(remainder).concat(firstChar)
}

let output = ["karen", "", "this is a semi long string that needs to be reversed"]

output.forEach(str => console.log(revStr(str)))