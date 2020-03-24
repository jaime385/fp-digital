console.log('Primer linea javascript');
/* La funcion get meme y between simplemente realizan un api call obteniendo una base para meme.*/
async function getmeme() {
    const response = await fetch('https://api.imgflip.com/get_memes'); // this is a string so we want to convert it to json format.
    const data = await response.json();
    const ramdom = between(0, 99); // La api call contiene 100 memes.
    const meme = data.data.memes[ramdom].url;
    document.getElementById('meme').src = meme;
}
/* Returns a random number between min (inclusive) and max (inclusive)*/
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
getmeme();

/*const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellowgreen';
ctx.fillRect(10, 10, 150, 100);*/

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);