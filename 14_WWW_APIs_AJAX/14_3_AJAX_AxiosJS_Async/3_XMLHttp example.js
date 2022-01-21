// Making an object
const firstReq = new XMLHttpRequest();

// Adding event listener when page loads
firstReq.addEventListener('load', function() {
    // will run this callback if request is successful
    // console.log(this.responseText);

    // converting JSON to an object
    const data = JSON.parse(this.responseText);
    console.log(data);

    // Looping over the results array
    for(let planet of data.results) {
        // And printing out the name of Planet
        console.log(planet.name);
    }
});

// Adding event listener in case of error
firstReq.addEventListener('error',() =>{
    // if error, will run this callback
    console.log('ERROR!!!!!');
});

// No request has been sent till now

// Configuring first request to GET and adding URL
firstReq.open('GET','https://swapi.dev/api/planets/');

// Have to call this
firstReq.send();

// Requests take time so JS hands of the requests to the browser. So this message below will print out first because everything above this is passed to the browser.
console.log('Sending request........!');

