function* g () {
  yield 'a'
  yield "b"
  yield "c"
  return "ending"
}

const gen = g()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())