//https://github.com/axios/axios

//Promise based HTTP client for the browser and node.js

axios.get('https://api.github.com/users/leojobz')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error)
    })