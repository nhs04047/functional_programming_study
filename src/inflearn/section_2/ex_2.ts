/**
 * 섹션 2. 함수형으로 전환하기
 * 2. each
 */

export const _each = <T, U extends Function>(list: T[], iter: U) => {
  for(let i = 0; i < list.length; i++){
    iter(list[i])
  }
  return list
}

/**_each를 이용한 filter */
export const _filter = <T, U extends Function>(list: T[], predi: U) => {
  const new_list: T[] = []
  _each(list, (val: T) => { if(predi(val)) new_list.push(val) })
  return new_list
}

/**_each를 이용한 map */
export const _map = <T, U extends Function>(list: T[], mapper: U) => {
  const new_list: T[] = []
  _each(list, (val: T) => { new_list.push(mapper(val)) })
  return new_list
}
/** 중복을 줄이고 좀 더 선언적인 코드 */