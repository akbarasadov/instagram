fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => reload(json))
