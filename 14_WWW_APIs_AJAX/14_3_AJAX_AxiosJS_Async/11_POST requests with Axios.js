async function getUsers() {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res)
}

async function createUser() {
    const res = await axios.post('https://reqres.in/api/users', {username: 'ButtersTheChicken', email: "butters@gmail.com", age: 1});
    console.log(res)
}

getUsers();
createUser();