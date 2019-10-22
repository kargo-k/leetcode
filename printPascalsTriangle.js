// print pascal's triangle given the number of levels

let printPascals = levels => {
  let triangle = []

  for (let j = 0; j < levels; j++) {
    let level = []
    for (let i = 0; i <= j; i++) {
      if (i === 0 || i === j) {
        level.push(1)
      } else {
        level.push(triangle[j - 1][i - 1] + triangle[j - 1][i])
      }
    }
    triangle.push(level)
  }

  return triangle
}

let result = printPascals(9)
console.log(result)