//function taskSyncFunction(callback) {
 // console.log("첫 번째 작업");
  //console.log("두 번째 작업");
  //callback();
//}

//taskSyncFunction(() => {
 // console.log("콜백 함수 실행");
//});


//콜백 함수 : 다른 함수의 인자로 넘겨진 함수로 해당 함수의 작업이 처리된 후에 해당 함수에서 다시 호출이 되어지는 함수 
//다시 불려진다고 해서 콜백 함수라고 말함



//콜백함수는 내부적으로 동기프로그래밍을 했냐 비동기프로그래밍을 했냐에 따라서 동기로 작동할 때가 있고 비동기로 작동할 때가 있다.
//현재는 동기 프로그램밍이라 콜백 함수 실행이 끝난 후에 실행 완료가 출력됨


function taskAsyncFunction(callback) {
  console.log("start")
  setTimeout(() => {
    console.log("첫 번째 작업");
    console.log("두 번째 작업");
    callback();
  },2000)
  console.log("end")
}

taskAsyncFunction(() => {
  console.log("콜백 함수 실행");
});

console.log("실행 완료")


//taskAsyncFunction(function() {
///  console.log("콜백 함수 실행");
//});
//function() { ... }은 화살표 함수 () => { ... }를 대신하는 ES5 문법입니다.
//taskAsyncFunction 함수 호출에 익명 함수를 콜백으로 전달합니다.





//프로그램이 시작되면 taskAsyncFunction가 선언됨 -> taskAsyncFunction 실행됨 -> callback로는 taskAsyncFunction있는걸로 넘어가서  start가 출력됨 -> setTimeout을 만나는데 setTimeout은 비동기 함수라
//바로 실행을 기다리지 않고 넘어감 그러면 end가 출력 -> end가 출력된 뒤 함수가 끝났으니 함수 블럭을 빠져나와서 실행완료가 출력됨
// 이 때 2초가 지났다면 setTimeout에 넘겨진 callback함수를 실행함

//start -> end -> 실행 완료 -> 첫 번째 작업 -> 두 번째 작업 -> callback이 실행되서 콜백 함수 실행순으로 최종적으로 출력됨

//callback함수는 다른 함수의 인자로 넘겨지는 함수로 해당 함수의 작업이 처리된 후에 해당 함수에서 다시 호출이 되어지는 함수를 말한다.


