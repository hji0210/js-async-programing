function getUser(userId) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
     try{
       const user = userId  === 1 ?
       { id: userId, name: 'GYMCODING'} : null;
    //callback(user)
    resolve(user) //   resolve함수를 통해 user 객체를 넘겨줄 수 있다.
     }catch (error) {
       
     reject(error)
     }
    },1000)
   });
    }
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
    

    function runPromise(){
      getUser(1)
      .then(user =>{

        if(user){
          console.log('user:', user)
        } else{
          console.log('유저가 없어요!')
        }   

      })
      .catch( err => console.log(err))
    }

    //promise를 통해서 하기 떄문에 then을 통해 받을 수 있음


    async function runAsyncAwait() {
      try{
        const user = await getUser(1);
        const posts = await getPosts(user.id);
        const comments = await getComments([posts[0].id]);
        console.log('user: ', user)
        console.log('posts: ', posts)
        console.log('comments: ', comments)
        return user;

      } catch (error){
        console.log('error: ' ,error)
      }
    }



     //await라는 함수는 async함수 내부에서 비동기작업의 결과를 기다림


  //async, await를 사용하면 코드를 더 쉽게 읽을 수 있다.
    console.log('start')  
   // runPromise();
   //console.log(runAsyncAwait());
   runAsyncAwait().then(user => console.log('user: ', user))

   console.log('end')