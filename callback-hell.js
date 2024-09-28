// 사용자의 정보를 가져오는 함수입니다.
// userId를 받아서 1초 후에 사용자 정보를 콜백 함수로 전달합니다.
function getUser(userId, callback) {
  setTimeout(function() {
    // userId와 이름을 포함한 사용자 객체를 생성합니다.
    const user = { id: userId, name: "GYMCODING" };
    // 생성된 사용자 객체를 콜백 함수로 전달합니다.
    callback(user);
  }, 1000); // 1초 지연 후 실행됩니다.
}

// 사용자가 작성한 게시물을 가져오는 함수입니다.
// userId를 받아서 2초 후에 게시물 목록을 콜백 함수로 전달합니다.
function getPosts(userId, callback) {
  setTimeout(function() {
    /// 게시물 객체 배열을 생성합니다.
    const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" }
    ];
    // 생성된 게시물 배열을 콜백 함수로 전달합니다.
    callback(posts);
  }, 2000); // 2초 지연 후 실행됩니다.
}

// 게시물의 댓글을 가져오는 함수입니다.
// postId를 받아서 1.5초 후에 댓글 목록을 콜백 함수로 전달합니다.
function getComments(postId, callback) {
  setTimeout(function() {
    // 댓글 객체 배열을 생성합니다.
    const comments = [
      { id: 1, text: "Comment 1" },
      { id: 2, text: "Comment 2" }
    ];
    // 생성된 댓글 배열을 콜백 함수로 전달합니다.
    callback(comments);
  }, 1500); // 1.5초 지연 후 실행됩니다.
}

// 사용자의 정보를 가져옵니다.
getUser(1, function(user) {
  console.log("user:", user); // 가져온 사용자 정보를 출력합니다.

  // 사용자의 게시물을 가져옵니다.
  getPosts(user.id, function(posts) {
    console.log("posts:", posts); // 가져온 게시물 목록을 출력합니다.

    // 첫 번째 게시물의 댓글을 가져옵니다.
    getComments(posts[0].id, function(comments) {
      console.log("comments:", comments); // 가져온 댓글 목록을 출력합니다.
    });
  });
});
