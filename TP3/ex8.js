 function couleurAleatoire() {
    var couleur = 'rgb(' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ')';
    return couleur;
}


var monLien = document.getElementById('monLien');
monLien.addEventListener('click', function () {
    document.body.style.backgroundColor = couleurAleatoire();
});


var monParagraphe = document.getElementById('monParagraphe');
monParagraphe.addEventListener('mouseover', function () {
    monParagraphe.style.fontSize = '20px';
});


monParagraphe.addEventListener('mouseout', function () {
    monParagraphe.style.fontSize = '16px';
});