
//1] Promiseresolve()
//어떤 비동기 작업을 수행하고 그 결과를 promise로 다루고 싶을 떄 유용하게 사용


//const myPromise = Promise.resolve(100);

//console.log(myPromise)
//myPromise
//.then(value=> value / 2)
//.then(value=> value / 10)
//.then(console.log)


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

//4)Promise.any()
//여러 개의 Promise를 동시에 실행하고 그 중에 하나라도 이행하면 해당 Promise의 값을 반환하는 역할을 함



const promise1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(3000)
  },3000)
})

const promise2= new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(500)//500을 리턴하는 값
  },500) //500미리새컨
})

const promise3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1000)
  },1000)
})



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

Promise.race([promise1,promise2,promise3])
.then(console.log)
.catch(console.error)
//promise2가 가장 빨리 처리되어서 이행이 되었던 거부가 되었던 이 promise의 거부 이유가 출력이 되는 것