document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('user-list');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al obtener usuarios:', error);
        });
});
