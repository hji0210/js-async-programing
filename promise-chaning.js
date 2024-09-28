//fetch api를 통해 네트워크에서 어떠한 자원을 요청, fetch api는 비동기로 작동하는 api

//http 통신을 할 때 사용하는 api로 response로 promise 객체를 반환 -> 서버로부터 자원을 달라고 약속하고 그 약속을 반환하는 것 


fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//5개의 todo를 달라고 약속하는 것
.then(response => {
   //console.log('response: ', response)
    return response.json()//promise-chaning을 통해 넘김
})
.then(data => {
   console.log('data: ', data)
   return data.filter(obj => obj.id > 3)//obj id가 3이상인걸 return
})
.then(result => {
  console.log('result: ', result)
})
.catch(err =>{
  console.log('err: ', err)
})

.finally(err =>{
  console.log('### finally ###')
})


//promise-chaning은 promise 객체 메소드를 연속적으로 호출하는 것(여러개의 promise를 연속적으로 연결해서 작업을 순차적으로 실행하고 결과를 다루는 것 )