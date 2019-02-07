/*________________FUNCTION___________________________*/

function kilometro(km) {
	metros=km*1000;
	return metros;
}


function tamanno(gb) {
	gigab=gb*1024;
	return gigab;
}

function dineros(dolar) {
	diner=dolar*0.87;
	return diner;
}

function tiempo(horas) {
	conv=horas*3600;
	return conv;
}

/*________________VARIABLES__________________________*/

var km=parseInt(prompt('Cuantos km andaste?'));

var kilom=kilometro(km);

document.write('Andaste '+kilom+' metros... WOW!'+'<br>');
/*----------*/

var gb=parseInt(prompt('Cuantos gb tienes ocupados?'));

var giga=tamanno(gb);

document.write('Tienes '+giga+' megabytes ocupados... borra cosas mejor!'+'<br>');
/*-----------*/

var dolar=parseInt(prompt('Cuantos dolares tienes para darte cambio?'));

var euro=dineros(dolar);

document.write('Tienes '+euro+' eurillos para comprar lo que quieras'+'<br>');
/*-----------*/

var horas=parseInt(prompt('Cuantas horas estudiaste??'));

var segundos=dineros(horas);

document.write('Wow, eso son '+segundos+' segundos, visto asi, parece media vida');










