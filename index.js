const render = (g) => {
  for (let i = 0; i < 9; i++) {
    console.log('[' + g[i].join(', ') + ']')
  }
}

const grid = [
  [0, 0, 3, 0, 0, 2, 0, 0, 0],
  [6, 0, 2, 0, 0, 0, 1, 0, 0],
  [7, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 3, 0, 0, 5, 0, 0, 6, 9],
  [0, 7, 6, 4, 2, 0, 0, 0, 0],
  [1, 0, 0, 7, 0, 9, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 3, 0, 1, 0, 0, 4]
]

const possible = (g, y, x, n) => {
  for (let i = 0; i < 9; i++) {
     if (i !== x && g[y][i] === n) {
       return false
     }
  }
  for (let j = 0; j < 9; j++) {
     if (j !== y && g[j][x] === n) {
       return false
     }
  }

  const x0 = Math.floor(x / 3) * 3
  const y0 = Math.floor(y / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (g[y0+i][x0+j] === n) {
        return false
      }
    }
  }

  return true
}

const solve = (g) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (g[i][j] === 0) {
        for (let k = 0; k < 9; k++) {
          if (possible(g, i, j, k + 1)) {
            g[i][j] = k + 1
            if (solve(g)) {
              return true
            } else {
              g[i][j] = 0
            }
          }
        }
        return false
      }
    }
  }
  return true
}

solve(grid)
render(grid)
