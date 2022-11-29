/**
 * 섹션 2. 함수형으로 전환하기
 * 5. reduce
 */
import {add} from '../section_1'
import {_each} from './'

export const _reduce = <T, U extends Function>(list: T[], iter: U, memo: number ) => {
  _each(list, (val: number) => { memo = iter(memo, val) })
  return memo
}

console.log( _reduce([1, 2, 3, 4], add, 0) ) //10

