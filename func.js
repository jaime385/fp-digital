console.log('Primer linea javascript');
/* La funcion get meme y between simplemente realizan un api call obteniendo una base para meme.*/
async function getmeme() {
    const response = await fetch('https://api.imgflip.com/get_memes'); // this is a string so we want to convert it to json format.
    const data = await response.json();
    //console.log(data);
    const ramdom = between(0, 99); // La api call contiene 100 memes.
    //console.log(ramdom);
    const meme = data.data.memes[ramdom].url;
    document.getElementById('meme').src = meme;
    //Corona virus data
    const corona = await fetch('https://coronavirus-19-api.herokuapp.com/countries'); // this is a string so we want to convert it to json format.
    const virus = await corona.json();
    console.log(virus);
    for (item of virus) {
        //Div padre de todos.
        const root = document.createElement('Div');
        //Div de cantidad de casos por pais.
        const geo = document.createElement('Div');
        //Div de muertes por pais diarias.
        const tdeaths = document.createElement('Div');
        //Div de nuevos casos
        const casosn = document.createElement('Div');
        //Div de muertes totales
        const mtotal = document.createElement('Div');
        //Div de recuperados
        const recup = document.createElement('Div');
        //Casos activos
        const acti = document.createElement('Div');
        //Casos en estado critico
        const criti = document.createElement('Div');
        //Casos por millon de habitantes
        const cpm = document.createElement('Div');
        //Muertes por millon de habitantes
        const mpm = document.createElement('Div');
         
        root.append(geo,tdeaths,casosn,mtotal,recup,acti,criti,cpm,mpm);

        //Cantidad de casos por pais:
        geo.textContent = `${item.country}: ${item.cases}`;
        //Cantidad de muertes por pais diarias:
        tdeaths.textContent = `Muertos hoy: ${item.todayDeaths}`;
        //Cantidad de casos nuevos:
        casosn.textContent = `Casos nuevos hoy: ${item.todayCases}`;
        //Cantidad de muertes totales:
        mtotal.textContent = `Cantidad de muertos total: ${item.deaths}`;
        //Cantidad de recuperados:
        recup.textContent = `Cantidad de recuperados: ${item.recovered}`;
        //Cantidad de casos activos
        acti.textContent = `Cantidad de casos activos: ${item.active}`;
        //Cantidad de casos en estado critico
        criti.textContent = `Cantidad de casos en estado critico: ${item.critical}`;
        //Cantidad de casos por millon:
        cpm.textContent = `Casos por millon de habitantes: ${item.casesPerOneMillion}`
        //Cantidad de meurtes por millon
        mpm.textContent = `Muertes por millon de habitantes: ${item.deathsPerOneMillion}`;

        const covid = document.getElementById('div1');
        //Enpaquetado de todo en el div padre de todos.
        covid.append(root);
        document.getElementById("cont a2").appendChild(covid);
    }
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