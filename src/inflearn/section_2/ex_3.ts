/**
 * 섹션 2. 함수형으로 전환하기
 * 4. 커링, currym curryr
 */
import * as ex from "./"

const _curry = <T, U, V extends Function>(fn: V) => {
  return (a: T) => {
    return (b: U) => {
      return fn(a, b)
    }
  }
}

const _curryr = <T, U, V extends Function>(fn: V) => {
  return function(a: T, b: U){
    console.log(a, b)
    return arguments.length == 2 ? fn(a, b) : ((b: T) => fn(b, a))
  }
}

const _add = _curry((a: number,b: number) => {return a + b})

const _add10 = _add(10)
const _add5 = _add(5)
console.log(_add10(5))    // 15
console.log(_add(5)(3))   // 8
console.log(_add(10)(3))  // 13

const _get = _curryr(
  <T, U extends keyof T>(obj:T, key:U) => obj == null ? undefined : obj[key]
)


const user1 = ex.users[0]
console.log(user1.name)                   // ID
console.log(_get(user1, "name"))          // ID

// console.log(users[10].name)             // error
console.log(_get(ex.users[10], 'name'))     // undefined

const getName = _get(user1, 'name')
console.log(getName)