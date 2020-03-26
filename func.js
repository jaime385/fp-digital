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
    var activos = [];
    var muertesHoy = [];
    for (item of virus) {
        /*Datos:*/
        let countries = item.country;
        let casese = item.cases;
        let muert = item.deaths;
        let criti = item.critical;
        let act = item.active;
        let xxx = item.todayDeaths;
        contador++;
        t[contador] = countries;
        cas[contador] = casese;
        muertes[contador] = muert;
        criticos[contador] = criti;
        activos[contador] = act;
        muertesHoy[contador] = xxx;
     }
    return {
        paises: t,
        casos: cas,
        muertes: muertes,
        criticos: criticos,
        activos: activos,
        muertosHoy: muertesHoy
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
    //Pacientes actualmente con la enfermedad
    const ac = x.activos;
    //Numero total de muertes hoy
    const mh = x.muertosHoy;
    //Plots
    plotting(datax, cases,'myChart','Número de casos mundialmente:');
    plotting(datax, deaths,'myChart1','Número de muertes mundialmente:');
    plotting(datax, critical,'myChart2','Pacientes en estado crítico mundialmente:');
    plotting(datax, ac,'myChart3','Pacientes activos con la enfermedad:');
    plotting(datax, mh,'myChart4','Muertos el día de hoy:');
}
//Esta funcion plotea los datos.
function plotting(datax, datay,id,title) {
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
                text: `${title}`,
                fontColor: 'yellowgreen',
                fontSize: 14
            },
            /*Problema solucionado gracias a la fuente: https://stackoverflow.com/questions/38304357/is-it-possible-to-add-a-custom-font-to-chart-js*/
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Baloo Da 2'"
        }
    });
}