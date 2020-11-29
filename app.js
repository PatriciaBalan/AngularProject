// alert('ok')
var users = [
    // {
    //     id:1,
    //     name: 'User 1'
    // },
    // {
    //     id:2,
    //     name: 'User 2'
    // },
    // {
    //     id:3,
    //     name: 'User 3'
    // }
];

var url = 'https://jsonplaceholder.typicode.com/users'

fetch(url).then(function (response) {
    return response.json();
}).then(function (server_users) {
    users = server_users;
    renderUserHTML();
})


