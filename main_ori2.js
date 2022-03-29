const axios = require('axios');

function fetchData() {
  // you might need the next line, depending on your API provider.
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.get('https://jsonplaceholder.typicode.com/posts', {})
  .then((response) => {
    // Here you can handle the API response
    // Maybe you want to add to your HTML via JavaScript?
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}


// call the function to start executing it when the page loads inside Electron.
fetchData();