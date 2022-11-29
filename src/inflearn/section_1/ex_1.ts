/**
 * 섹션 1. 함수형 프로그래밍 개요
 * 1. 함수형 프로그래밍 정의, 순수함수
 */

/**순수 함수 */
export function add(a:number, b:number) {
  return a + b
}

/**
 * 순수 한수는 부수 효과를 만들지 않는 함수
 * 항상 동일한 인자를 받으면 항상 동일한 값을 반환
 */

var c = 10
/**비 수수 함수 예제 1 */
function add2(a: number, b: number) {
  return a+b+c
}

console.log(add2(10, 30)) // 50
c = 20
console.log(add2(10, 30)) // 60

/**
 * 위 사례는 순수 함수가 아님
 * 만약 c의 값이 바뀐다면 함수의 결과 값도 바뀜
 */
/**비 수수 함수 예제 2 */
function add3(a: number, b:number){
  c = b
  return a + b
}

console.log(c) // 20
console.log(add3(10, 30)) // 40
console.log(c) // 30

/**
 * add3은 들어오는 값이 동일하면 반환 값도 항상 같지만
 * 함수 밖의 값에 영향을 주기에(부수 효과) 순수 함수가 아님 
 */

/**
 * 순수 함수는 평가 시점에서 자유로움
 *  -> 외부 환경에 영향을 받지 않기 떄문
 */
