const first =
  xs => xs[0]

const rest =
  xs => xs.slice(1)

const para =
  (f, acc, xs) =>
    xs.length === 0
      ? acc
      : para(f, f(acc, first(xs), xs), rest(xs))

const sum =
  (accumulated, y, ys) => accumulated + y

const multiply =
  (product, z, zs) => product * z

console.log(para(sum, 0, [1, 2, 4, 8]))
console.log(para(multiply, 1, [1, 2, 4, 8]))

//export {sum, multiply}