/*____________PRODUCTOS_________________*/

alert('Batatas,Azucar,Sal,huevos,harina');
var Batatas;
var Azucar;
var Sal;
var Huevos;
var harina;
/*_________________VAR_________________*/

var Batatas=prompt("cuanto cuestan las Batatas?");
var Azucar=prompt("cuanto cuesta el Azucar?");
var Sal=prompt("cuanto cuesta la Sal?");
var Huevos=rompt("cuanto cuestan los huevos?");
var harina=prompt("cuanto cuesta la Harina?");


/*_________________LOGO_________________*/

document.write('<img src="../logo.png>');
document.write('<h1>SUPERMERCADOS FROIZ</h1>');

/*__________________PRECIO___________________*/


document.write('Batatas................. '+parseInt(Batatas)+'<br>');
document.write('Azucar................. '+parseInt(Azucar)+'<br>');
document.write('Sal................. '+parseInt(Sal)+'<br>');
document.write('Huevos................. '+parseInt(huevos9+'<br>');
document.write('harina................. '+parseInt(harina)+'<br>');

/*________________SUMA SIN IVA________________*/


totalsin=parseInt(Batatas)+parseInt(Azucar)+parseInt(Sal)+parseInt(Harina)+parseInt(Huevos);
document.write('TOTAL sin IVA................. '+totalsin+'<br>');

/*______________IVA__________________________*/

iba=(totalsin*0.21);

document.write('IVA................. '+iba+'<br>');

/*______________SUMA CON IVA______________________*/

totaliba=(totalsin*1.21);
document.write('TOTAL con IVA................. '+totaliba+'<br>');









/*_________________________________

var pro1=prompt("¿Que 1º producto vas a comprar?");
var pro2=prompt("¿Que 2º producto vas a comprar?");
var pro3=prompt("¿Que 3º producto vas a comprar?");

document.write("El primer producto es..."+)


*/















