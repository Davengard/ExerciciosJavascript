
/*---------------------------------VARIABLECITAS------------------------------*/

var n1= parseInt(prompt("Cual es el primer número"));
var n2= parseInt(prompt("Cual será el segundo número"));

/*--------------------------------FUNCIONCITAS--------------------------------*/

function suma (n1, n2) {
	sumas=(n1+n2);
    return sumas;
}
function resta (n1, n2) {
	restas=(n1-n2);
    return restas;
}
function multi (n1, n2) {
	multis=(n1*n2);
    return multis;
}

/*--------------------------------ALERTITAS-----------------------------------*/

suma= suma(n1, n2);
alert(suma);

resta= resta(n1, n2);
alert(resta);

multi= multi(n1, n2);
alert(multi);

/*--------------------------------DOCUMENTITOS--------------------------------*/

document.write("El resultado de la suma es..."+suma+"<br>");
document.write("El resultado de la suma es..."+resta+"<br>");
document.write("El resultado de la suma es..."+multi+"<br>");



/*------------------------------BUCLECITOS------------------------------------*/





