async function getUsers(token) {
    // gives an error if a token is not provided
    const res = axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {params: {token}})
}

async function signUp(username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user: {name,username, password}});
    console.log(res);
}

// registration
// signUp('ghost','password','ghost the dev');

async function login(username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user: {username, password}});
    console.log(res);
    return res.data.token;
}

async function getUsersWithAuth() {
    //logging in and saving the token
    const token = await login('ghost','password');
    console.log('Token: ' + token);

    getUsers(token);
}

async function createStory() {
    const token = await login('ghost','password');
    const newStory = {
        token,
        story: {
            author: "Ghost",
            title: "Boo!",
            url: 'https://google.com'
        }
    };
    const res  = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res);
}
