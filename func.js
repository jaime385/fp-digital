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
    //console.log(virus);
    //Titulo para el contenido covid-19
    const titulo = await fetch('https://coronavirus-19-api.herokuapp.com/all'); // this is a string so we want to convert it to json format.
    const cvt = await titulo.json();
    //console.log(cvt);
    //Presentacion de los datos:
    const titroot = document.createElement('Div');
    //Div para cantidad de muerter global
    const mg = document.createElement('Div');
    //Div para cantidad de casos globales
    const cg = document.createElement('Div');
    //Div para cantidad de recuperados global
    const rg = document.createElement('Div');
    titroot.append(mg, cg, rg);
    //Cantidad de muerter total:
    mg.textContent = `Total de muertes: ${cvt.deaths}`;
    //Cantidad de casos total:
    cg.textContent = `Total de casos: ${cvt.cases}`;
    //Cantidad de recuperados
    rg.textContent = `Recuperados: ${cvt.recovered}`;
    const cvtt = document.getElementById('cv');
    //Enpaquetado de todo en el div padre de todos.
    cvtt.append(titroot);
    document.getElementById("cont a2").appendChild(cvtt);
    //Presentacion de datos por pais.
    contador = 0;
    var t = [];
    var cas = [];
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

        root.append(geo, tdeaths, casosn, mtotal, recup, acti, criti, cpm, mpm);

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

        let countries = item.country;
        let casese = item.cases;
        //console.log(countries);
        contador++;
        //console.log(contador);
        t[contador] = countries;
        cas[contador] = casese;

    }
    //console.log(t);
    return {
        paises: t,
        casos: cas
    };
}

/* Returns a random number between min (inclusive) and max (inclusive)*/
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

//Se invocan funcion es asyncronas.
plot();

//Creacion de graficos con el framework chart.js
async function plot() {
    //Are the next 2 lines a closure example??
    const x = await getmeme();
    console.log(x.paises);
    var ctx = document.getElementById('myChart').getContext('2d');
    const datax = x.paises;
    const datay = x.casos;
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: datax,
            datasets: [{
                label: '# of Cases',
                data: datay,
                backgroundColor: [
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 1
                    }
                }]
            }
        }
    });
}
//Prueba efecto parallax en paraffo.
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
