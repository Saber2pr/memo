# @saber2pr/memo

> memorizer.

```bash
# from npm
npm install @saber2pr/memo

# from github
git clone https://github.com/Saber2pr/memo.git
```

# API

```ts
const add = Memo((a, b) => {
  console.log('exec')
  return a + b
})

console.log(add(1, 2)) // exec 3
console.log(add(1, 2)) // 3
```

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
