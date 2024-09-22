function getUser(userId, callback) {
  setTimeout(function() {
    const user = { id: userId, name: "GYMCODING" };
    callback(user);
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(function() {
    const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" }
    ];
    callback(posts);
  }, 2000);
}

function getComments(postId, callback) {
  setTimeout(function() {
    const comments = [
      { id: 1, text: "Comment 1" },
      { id: 2, text: "Comment 2" }
    ];
    callback(comments);
  }, 1500);
}

getUser(1, function(user) {
  console.log("user:", user);
  getPosts(user.id, function(posts) {
    console.log("posts:", posts);
    getComments(posts[0].id, function(comments) {
      console.log("comments:", comments);
    });
  });
});
