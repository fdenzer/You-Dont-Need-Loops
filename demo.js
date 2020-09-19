const first =
  xs => xs[0]

const rest =
  xs => xs.slice(1)

const para =
  (f, acc, xs) =>
    xs.length === 0
      ? acc
      : para(f, f(acc, first(xs), xs), rest(xs))

const _sum =
  (accumulated, y, ys) => accumulated + y

const _multiply =
  (product, z, zs) => product * z

//console.log(para(sum, 0, [1, 2, 4, 8]))
const sum = summands => para(_sum, 0, summands)
console.log(sum([1, 2, 4, 8]))

//console.log(para(multiply, 1, [1, 2, 4, 8]))
const multiply = factors => para(_multiply, 1, factors)
console.log(multiply([1, 2, 4, 8]))


//export {sum, multiply}