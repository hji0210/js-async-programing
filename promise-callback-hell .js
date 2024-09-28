// 사용자의 정보를 가져오는 함수입니다.
// userId를 받아서 1초 후에 사용자 정보를 콜백 함수로 전달합니다.
function getUser(userId) {
 return new Promise((resolve, reject) =>{
   setTimeout(() => {
    try{
      const user = { id: userId, name: 'GYMCODING'};
   //callback(user)
   resolve(user) //   resolve함수를 통해 user 객체를 넘겨줄 수 있다.
    }catch (error) {
      
    reject(error)
    }
   },1000)
  });
   }



// 사용자가 작성한 게시물을 가져오는 함수입니다.
// userId를 받아서 2초 후에 게시물 목록을 콜백 함수로 전달합니다.
function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      /// 게시물 객체 배열을 생성합니다.
      const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ];
      // 생성된 게시물 배열을 콜백 함수로 전달합니다.
      //callback(posts);
      resolve(posts)
    }, 1000); // 2초 지연 후 실행됩니다.

  })
 
}

// 게시물의 댓글을 가져오는 함수입니다.
// postId를 받아서 1.5초 후에 댓글 목록을 콜백 함수로 전달합니다.
function getComments(postId, callback)  {
  return new Promise((resolve, reject) => {
    setTimeout(( )=>{
      // 댓글 객체 배열을 생성합니다.
      const comments = [
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
        { id: 3, text: "Comment 3" }
      ];
      // 생성된 댓글 배열을 콜백 함수로 전달합니다.
      resolve(comments);
    }, 1000); // 1.5초 지연 후 실행됩니다.
  })
}


// 사용자의 정보를 가져옵니다.
//
//getUser(1, function(user) {
  //console.log("user:", user); // 가져온 사용자 정보를 출력합니다.

  // 사용자의 게시물을 가져옵니다.
  //getPosts(user.id, function(posts) {
    //console.log("posts:", posts); // 가져온 게시물 목록을 출력합니다.

    // 첫 번째 게시물의 댓글을 가져옵니다.
    //getComments(posts[0].id, function(comments) {
     // console.log("comments:", comments); // 가져온 댓글 목록을 출력합니다.
    //});
  //});
//});
//callback-hell은 callback함수가  중첩적으로 사용되서 가독성이 떨어지는 문제를 말함

getUser(1)
.then((user) => {
  console.log("user:", user);
  return getPosts(user.id);
})
.then((posts) => {
  console.log("posts:", posts);
  return  getComments(posts[0].id)
})

.then((comments) =>{
  console.log("comments:", comments); 


} )
.catch(err => console.log('err: ', err))
.finally(()=>  console.log('### finally ###') )

//promise-chaning을 통해 callback-hell의 문제를 개선한 것 
//기존에는 중첩된 callback문을 통해서 가독성이 떨어지는 코드 였다면 promise-chaning을 통해  중첩된 caLL-back 함수를 피함