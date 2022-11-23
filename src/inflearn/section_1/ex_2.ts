/**
 * 섹션 1. 함수형 프로그래밍 개요
 * 2. 일급함수, add_maker, 함수로 함수 실행하기
 */

/*일급 함수 */
/**특징1: 함수를 변수로 다룰 수 있다는 것*/
const f1 = (a:number)=>{return a*a}
console.log(f1)   //[Function: f1]

type returnNumber = () => number
/**특징2: 함수가 함수를 인자로 받을 수 있음*/
function f3(f:returnNumber){
  return f()
}

console.log(f3(function() {return 10;}))  // 10
/**
 * 함수를 함수 내부에서 평가
 */

/**add_maker 일급함수와 클로저를 함께 보여주는 예제*/
function add_maker(a: number){
  return function(b: number){
    return a + b
  }
}

const add10 = add_maker(10)
console.log(add10(20))    // 30

const add5 = add_maker(5)
console.log(add5(20))     // 25


type sqrt = (x:number) => number
/**함수가 함수를 반환 
* 내부 함수는 a의 값을 기역 클로저로서 add10에 포함
*/
function f4(f1:returnNumber, f2:returnNumber, f3:sqrt){
  return f3(f1() + f2())
}

console.log(f4(
  function(){return 2},
  function(){return 1},
  function(a:number){return a*a}
))    // 9


 
