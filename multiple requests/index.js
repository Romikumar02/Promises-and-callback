async function fetchData() {
    const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await todoResponse.json();
  
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await postResponse.json();
  
    const result = {
      todo: todo,
      post: post
    };
  
    console.log(result);
  }
  
  fetchData();
  