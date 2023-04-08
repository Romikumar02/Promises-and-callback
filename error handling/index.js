const API_URL = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // do something with the data
  })
  .catch(error => {
    console.error('Error:', error);
    // display error message on webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error: ' + error.message;
    document.body.appendChild(errorMessage);
  });
