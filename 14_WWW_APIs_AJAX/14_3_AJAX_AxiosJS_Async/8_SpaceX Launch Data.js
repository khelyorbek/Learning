async function getLaunches() {
    const res = await axios.get('https://api.spacexdata.com/v5/launches/upcoming');
    const display = document.getElementById('ulData');

    console.log(res.data);

    for(let launch of res.data) {
        const newLI = document.createElement('li');
        newLI.innerText = "Launch Name: " + launch.name;

        const flight = document.createElement('strong');
        flight.innerText = '\nFlight #' + launch.flight_number + '\n';

        const launchDate = document.createElement('u');
        //slice at 10 because it had UTC data 
        launchDate.innerText = ' Launch Date: ' + launch.date_local.slice(0,10);
        
        flight.append(launchDate);
        newLI.append(flight);
        display.append(newLI);
    }
}

getLaunches();