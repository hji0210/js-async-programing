
//1] Promise.resolve()
//어떤 비동기 작업을 수행하고 그 결과를 promise로 다루고 싶을 떄 유용하게 사용


// 즉시 성공하는 Promise를 생성하고 그 결과 값은 100이 됩니다.
//const myPromise = Promise.resolve(100);

// myPromise는 성공 상태의 Promise이므로 "Promise { 100 }" 이 출력됩니다.
// 즉, 이 시점에서 myPromise는 100을 반환할 준비가 된 상태의 Promise입니다.
//console.log(myPromise); 

// 첫 번째 then에서는 myPromise가 반환한 값(100)을 받아서 2로 나눕니다.
// 여기서는 value가 100이므로 100 / 2 = 50이 됩니다.
//myPromise
 // .then(value => value / 2) // 100을 2로 나눠서 50을 반환합니다.

  // 두 번째 then에서는 이전 then에서 반환된 값(50)을 받아서 10으로 나눕니다.
  // value는 50이므로 50 / 10 = 5가 됩니다.
  //.then(value => value / 10) // 50을 10으로 나눠서 5를 반환합니다.

  // 세 번째 then에서는 앞의 결과(5)를 출력합니다.
  //.then(console.log); // 최종 결과인 5가 출력됩니다.


//2] Promise.reject()
//주어진 값을 가지고 거부된 상태의 promise 객체를 생성할 때 사용
//const myPromise = Promise.reject('error message');
//myPromise
 //    .catch(console.log)

//function fetchData(){
 // return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //.then(response=> response.json())
  //.then(data => {
   // if( data.length === 5){
    //  return Promise.reject('데이터가 없습니다.')
   // }
   // return data;
  //})
//}
//fetchData()
//.then(console.log)
//.catch(error => console.log('### error: ',  error))
//여러개의 프로미스를 동시에 실행할 때 사용하는 메서드
//모든 프로미스가 성공적으로 이행되면 그 결과값을 배열로 반환
//하나라도 거부되면 그 거부된 이유를 반환




//3)Promise.all()
//모든 promise를 병렬로 처리하고 싶은데 하나라도 거부가 나면 error로 처리하고 싶을 때 활용
//Promise.all()은 배열 내의 모든 Promise가 성공적으로 이행될 때만 그 결과를 반환합니다.
//const promise1 = Promise.resolve(1000);
//const promise2 = new promise((resolve)=>{
 //   setTimeout(() => {
 //    resolve(3000)
  //  }, 3000)
//})
//const promise3 = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_delay=2000')
//.then(response => response.json())  
//const promise4 = Promise.reject('Fail!')
//Promise.all([promise1,promise2,promise3,promise4])
//.then(console.log)
//.catch(console.error)



//4)Promise.allSettled
//여러 개의 Promise를 동시에 실행하고 모든 Promise가 이행되거나 거부될 때 까지 기다리는 역할을 함
//여러 개의 Promise를 동시에 실행하는건 Promise all과 비슷

//Promise.allSettled([promise1,promise2,promise3,promise4])
//.then(console.log)
//promise하나가 거부된 상태임에도 불구하고 then으로 잘 출력됨

//Promise.all: 모든 Promise가 성공적으로 이행되어야만 결과를 반환합니다. 하나라도 거부되면 즉시 거부된 상태로 이동합니다.
//Promise.allSettled: 모든 Promise가 이행되거나 거부될 때까지 기다린 후, 각 Promise의 결과를 배열로 반환합니다. 이 배열의 각 요소는 Promise의 상태와 결과를 포함합니다


//5)Promise.any()
//여러 개의 Promise를 동시에 실행하고 그 중에 하나라도 이행하면 해당 Promise의 값을 반환하는 역할을 함
// promise1은 3초 후에 3000을 이행하는 Promise입니다.
//const promise1 = new Promise((resolve, reject) => {
 // setTimeout(() => {
  //  resolve(3000); // 3초 후에 3000 반환
  //}, 3000);
//});

// promise2는 0.5초 후에 500을 이행하는 Promise입니다.
//const promise2 = new Promise((resolve, reject) => {
 // setTimeout(() => {
  //  resolve(500); // 0.5초 후에 500 반환
  //}, 500);
//});

// promise3은 1초 후에 1000을 이행하는 Promise입니다.
//const promise3 = new Promise((resolve, reject) => {
 // setTimeout(() => {
  //  resolve(1000); // 1초 후에 1000 반환
  //}, 1000);
//});

// Promise.any()를 사용하여 가장 빨리 이행된 Promise의 값을 출력합니다.
//Promise.any([promise1, promise2, promise3])
  //.then(console.log) // 가장 빨리 이행된 값 (promise2의 500을 출력)
  //.catch(console.error); // 모든 Promise가 거부된 경우에만 실행



//Promise.any([promise1,promise2,promise3])
//.then(console.log)
//.catch(console.error)
//any = > promise들 중에 하나라도 성공하면 그 결과값을 반환하는 메서드 
//모든 Promise들 중에 가장 빨리 이행된 값을 retrurn하는 것
//거부가 되었다고 하더라도 가장 빨리 이행된 경우가 promise2이기 때문에 500을 반환함
//만약 모든 promise가 실패한 경우 catch 절로 떨어짐


//6)Promise.race()
//promise의 값을 반환하는 메소드
//가장 빨리 처리된 promise가 이행이 되든 거부가 되든 그 값을 반환
//주어진 promise들 중에 가장 빨리 처리된 값이 출력
//그게 이행되었다면 then에서 출력, 거부가 되었다면 catch에서 출력
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
      resolve('Promise 1');
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('Error from Promise 2');
  }, 500);
});

Promise.race([promise1, promise2])
  .then(console.log) // 'Error from Promise 2' 출력
  .catch(console.error);

//promise2가 가장 빨리 처리되어서 이행이 되었던 거부가 되었던 이 promise의 거부 이유가 출력이 되는 것



//Promise.any()는 하나라도 성공해야 하고, 모든 Promise가 실패할 때만 에러를 발생시킵니다.
//Promise.race()는 가장 먼저 완료된 Promise의 결과를 반환하며, 이행이나 거부에 상관없이 가장 먼저 완료된 것을 기준으로 합니다.