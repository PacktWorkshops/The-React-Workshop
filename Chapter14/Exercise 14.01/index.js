const xhr = new XMLHttpRequest();

// assign json
xhr.responseType = 'json';
// initialize the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

// send request to the server
xhr.send();

// receive data
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
