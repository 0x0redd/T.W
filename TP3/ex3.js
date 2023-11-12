var a = prompt("donner la valeur de a");
var b = prompt("donner la valeur de b");

var n1 = parseFloat(a);
var n2 = parseFloat(b);

var somme = n1 + n2 ;
var prod = n1 * n2 ;

document.write("<p> la somme de "+ a +"+" + b + "est = " +somme);
document.write("<p> le prod de "+ a +"**" + b + "est = " +prod);