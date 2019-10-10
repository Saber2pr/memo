import Memo from ".."

// const add = Memo((a, b) => {
//   console.log("exec")
//   return a + b
// })

// console.log(add(1, 2))
// console.log(add(1, 2))
// console.log(add(1, 3))
// console.log(add(1, 2))
// console.log(add(1, 3))

const addAsync = Memo(async (a, b) => {
  console.log("exec")
  return a + b
})

addAsync(1, 2).then(console.log)
addAsync(1, 2).then(console.log)
addAsync(1, 3).then(console.log)
addAsync(1, 2).then(console.log)
addAsync(1, 3).then(console.log)

// const add = Memo((a, b) => {
//   console.log("exec")
//   return a + b
// })

// console.log(add(1, 1))
// console.log(add(1, 1))
// console.log(add(1, 1))
// console.log(add(1, 2))
// console.log(add(1, 3))
// console.log(add(1, 4))
// console.log(add(1, 5))
// console.log(add(1, 6))
// console.log(add(1, 7))
// console.log(add(1, 8))
// console.log(add(1, 9))
// console.log(add(1, 10))
// console.log(add(1, 11))
// console.log(add(1, 12))
// console.log(add(1, 13))
// console.log(add(1, 14))
// console.log(add(1, 15))
// console.log(add(1, 1))
// console.log(add(1, 1))
