console.log('Primer linea javascript');
/* La funcion get meme y between simplemente realizan un api call obteniendo una base para meme.*/
async function getmeme() {
    const response = await fetch('https://api.imgflip.com/get_memes'); // this is a string so we want to convert it to json format.
    const data = await response.json();
    const meme = data.data.memes[between(1, 99)].url;
    document.getElementById('meme').src = meme;
}
/* Returns a random number between min (inclusive) and max (inclusive)*/
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
getmeme();