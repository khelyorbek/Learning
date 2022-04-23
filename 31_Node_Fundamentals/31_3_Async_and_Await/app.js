async function getStarWarsFilms() {
    console.log("STARTING!")
    // If await is not there, everything will run at the same time
    const res = await axios.get("https://swapi.dev/api/films")
    console.log("ENDING!")
    console.log(res)
}