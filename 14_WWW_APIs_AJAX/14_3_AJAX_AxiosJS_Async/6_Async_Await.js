// regular function
// function getData() {
//     const response = axios.get('https://swapi.dev/api/planets/');
//     console.log("This text prints after the Axios GET")
// }

// async function
async function getData() {
    const response = await axios.get('https://swapi.dev/api/planets/');
    // console.log(response);
    // console.log("This text prints after the Axios GET")

    for(let planet of response.data.results) {
        console.log(planet.name);
    }
}

