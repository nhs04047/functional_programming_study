/**
 * 섹션 2. 함수형으로 전환하기
 * 1. 회원 목록, map, filter
 */

type user = {
  id: number,
  name: string,
  age: number
}

export const users: user[] = [
  { id: 1, name: "ID", age: 36},
  { id: 2, name: "DJ", age: 32},
  { id: 3, name: "JM", age: 32},
  { id: 4, name: "PJ", age: 27},
  { id: 5, name: "HA", age: 25},
  { id: 6, name: "JE", age: 26},
  { id: 7, name: "JI", age: 31},
  { id: 8, name: "MP", age: 23},
]

/**_filter */
const _filter = <T, U extends Function>(arr: T[], predi: U) => {
  const new_list: T[] = []
  for(let i = 0; i < arr.length; i++) {
    if(predi(arr[i])){
      new_list.push(arr[i])
    }
  }
  return new_list
}
//응용형 함수, 정용형 함수, 고차 함수 => 함수를 인자로 받거나 함수를 반환하는 함수 


const over_30 = _filter(users, (user:user) => { return user.age >= 30})
console.log(over_30)
/**
 * [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'DJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 7, name: 'JI', age: 31 }
]
 */

const under_30 = _filter(users, (user:user) => { return user.age < 30})
console.log(under_30)
/**
 * [
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 8, name: 'MP', age: 23 }
]
 */
console.log(
  _filter([3,2,134,43,23,12,54,67], (num:number)=>{return num < 30})
)

const _map = <T, U extends Function>(list: T[], mapper:U) => {
  const new_list = []
  for(let i = 0; i < list.length; i++){
    new_list.push(mapper(list[i]))
  }
  return new_list
}

const names = _map(over_30, (user:user) => user.name)
const names2 = _map(_filter(users, (user:user) => user.age >= 30), (user:user) => user.age)

console.log(names) // [ 'ID', 'DJ', 'JM', 'JI' ]

const ages = _map(under_30, (user:user) => user.age)

console.log(ages) // [ 27, 25, 26, 23 ]


