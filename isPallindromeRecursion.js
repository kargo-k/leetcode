// determine if a string is a pallindrome using recursion

let isPal = str => {
  if (str.length === 0 || str.length === 1) return true

  if (str[0] === str.slice(-1)) {
    return isPal(str.slice(1, -1))
  } else {
    return false
  }
}

let ans = isPal("tacocat")
console.log(ans)