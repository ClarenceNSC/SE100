const fetchUser = () => Promise.resolve({ id: 1, name: "Alice" });

// do you need to return a promise in a then()?
const fetchUserPosts = (userId) => Promise.resolve(
  [
    { postId: 101, content: "Hello World" }, 
    { postId: 102, content: "Learning JS" }
  ]
);

fetchUser()
  .then((user) => {
    console.log(`User: ${user.name}`);
    // return fetchUserPosts(user.id);

    // you can simply do this because then() will wrap your return value in a promise automatically 
    return [
        { postId: 101, content: "Hello World" }, 
        { postId: 102, content: "Learning JS" }
      ]
  })
  .then((posts) => {
    const formattedPosts = posts.map((post) => `Post ${post.postId}: ${post.content}`);
    console.log(formattedPosts);
  });
