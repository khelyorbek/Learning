// async function
async function getData() {
    // nothing will run until we get the response back because of await
    const response = await axios.get('https://swapi.dev/api/planets/');

    console.log('Response 1: ' + response);

    // destructuring 
    const {next, results} = response.data;
    // outputs a url for next page
    console.log('Next:' + next);

    for(let planet of results) {
        console.log('Response 1 Planet Name: ' + planet.name);
    }
    // creating another GET but this time not form the base url but from the next URL we got
    const response2 = await axios.get(next);
    console.log('Response 2: ' + response2);

    const results2 = response2.data.results
    console.log('Results 2: ' + results2);

    for(let planet2 of results2) {
        console.log('Response 2 Planet Name: ' + planet2.name);
        console.log(planet2.name);
    }
}

getData();
console.log("This text prints after the Axios GET")