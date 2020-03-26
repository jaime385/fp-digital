console.log('Primer linea javascript');

async function getmeme() {
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
    var muertes = [];
    var criticos = [];
    for (item of virus) {/* ------------------------- Codigo por pasar a otra pagina---------------------------------------
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
        */
        let countries = item.country;
        let casese = item.cases;
        let muert = item.deaths;
        let criti = item.critical;
        contador++;
        t[contador] = countries;
        cas[contador] = casese;
        muertes[contador] = muert;
        criticos[contador] = criti;
     }
    return {
        paises: t,
        casos: cas,
        muertes: muertes,
        criticos: criticos
    };
}

//Se invoca la funcion asyncrona.
plot();

//Creacion de graficos con el framework chart.js
async function plot() {
    //Are the next 2 lines a closure example??
    const x = await getmeme();
    //Paises
    const datax = x.paises;
    //Casos grafico 1
    const cases = x.casos;
    //Muertes Grafico 2 
    const deaths = x.muertes;
    //Pacientes en estado critico
    const critical = x.criticos;

    //Plots
    plotting(datax, cases,'myChart');
    plotting(datax, deaths,'myChart1');
    plotting(datax, critical,'myChart2');
}

function plotting(datax, datay,id) {
    var ct = document.getElementById(id).getContext('2d');
    const slicingx = datax.slice(1, 11);
    const slicingy = datay.slice(1,11);
    //console.log(slicingx); ------Debugging------
    //console.log(slicingy);
    var myChart = new Chart(ct, {
        type: 'horizontalBar',
        data: {
            labels: slicingx,
            datasets: [{
                label: 'Cantidad:',
                data: slicingy,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(72, 112, 132, 0.3)',
                    'rgba(167, 162, 235, 0.3)',
                    'rgba(255, 20, 111, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(40, 112, 89, 0.3)',
                    'rgba(20, 145, 255, 0.3)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(72, 112, 132, 1)',
                    'rgba(167, 162, 235, 1)',
                    'rgba(255, 20, 111, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(40, 112, 89, 1)',
                    'rgba(20, 145, 255, 1)'
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 14,
                        fontColor: 'yellowgreen'
                    },
                    barPercentage: 0.9,
                    barThickness: 8,
                    maxBarThickness: 25,
                    minBarLength: 2,
                    minBarThickness: 8
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 14,
                        fontColor: 'yellowgreen',
                        max: datay[0],
                        min: 0,
                        stepSize: 1
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'yellowgreen',
                    fontSize: 14
                },
            },
            title: {
                display: true,
                text: 'Los 10 Paises con mas muertes.',
                fontColor: 'yellowgreen',
                fontSize: 14
            },
            /*Problema solucionado gracias a la fuente: https://stackoverflow.com/questions/38304357/is-it-possible-to-add-a-custom-font-to-chart-js*/
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Baloo Da 2'"
        }
    });
}