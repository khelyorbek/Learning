// using the whole length URL
// async function getJoke(first,last) {
//     let res = await axios.get(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);

//     console.log(res.data.value.joke);
// }

// getJoke('Big','Birtha');

// using an object and using base URL
async function getJoke(firstName,lastName) {
    let res = await axios.get(`http://api.icndb.com/jokes/random`, {params: {firstName, lastName}});

    console.log(res.data.value.joke);
}

getJoke('Big','Birtha');