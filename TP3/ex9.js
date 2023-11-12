var p0 = document.getElementById('p0');
var p1 = document.getElementById('p1');
var p3 = document.getElementById('p3');
var etu = document.getElementById('etu');
var comp = document.getElementById('comp');
p0.onclick = function(){
    etu.style.visibility = "visible";
    etu.style.position = "absolute";
    etu.style.top = "45px";
    etu.style.left = "9px";
    comp.style.visibility = "hidden";
}
p1.onclick = function(){
    
    comp.style.visibility = "visible";
    etu.style.visibility = "hidden";
}
p2.onclick = function () {
    comp.style.visibility = "hidden";
    etu.style.visibility = "hidden";
}