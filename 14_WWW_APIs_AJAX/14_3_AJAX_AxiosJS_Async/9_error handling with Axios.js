async function getRandomDog() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);

    const img = document.querySelector('#imgData');
    img.src = res.data.message;
}

getRandomDog();

async function getDogByBreed(breed) {
// How do we handle errors? We use try and catch
try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector('#imgData');
    img.src = res.data.message;
} catch(e) {
    alert("BREED NOT FOUND!");
}

}


