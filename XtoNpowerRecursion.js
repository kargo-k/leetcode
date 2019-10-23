// recursively compute x^n, assuming n is an integer

let xtonth = (x, n) => {
  // base case
  if (x === 0 || n === 0) return 1

  // if n is an even number and positive
  if (n % 2 === 0 && n > 0) {
    let y = xtonth(x, n / 2)
    return y * y
  } else if (n > 0) { // if n is odd number and positive
    return xtonth(x, n - 1) * x
  } else {  // if n is a negative number
    return 1 / xtonth(x, (-1 * n))
  }
}

let ans = xtonth(2, 3)
console.log(ans)
console.log('Correct ans: ', Math.pow(2, 3))

ans = xtonth(3, 4)
console.log(ans)
console.log('Correct ans: ', Math.pow(3, 4))

ans = xtonth(2, -5)
console.log(ans)
console.log('Correct ans: ', Math.pow(2, -5))