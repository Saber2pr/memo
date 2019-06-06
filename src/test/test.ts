import Memo from '..'

const add = Memo((a, b) => {
  console.log('exec')
  return a + b
})

console.log(add(1, 2))
console.log(add(1, 2))
console.log(add(1, 3))
console.log(add(1, 2))
console.log(add(1, 3))

console.log(add(1, 2))
console.log(add(1, 2))
console.log(add(1, 3))
console.log(add(1, 2))
console.log(add(1, 3))
