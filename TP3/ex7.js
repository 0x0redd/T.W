let tableau = document.createElement('table');

document.body.appendChild(tableau);

tableau.style.borderCollapse = "collapse";

for(let i=1;i<10;i++){
    let ligne = document.createElement('tr');
    tableau.appendChild(ligne);
    for(let j=1;j<10;j++){
        let td=document.createElement('td');
        td.textContent= i + "x"+j+"="+i*j;
        ligne.appendChild(td);
        td.style.width="auto";
        td.style.border="2px solid #000";
        td.style.textAlign="center";
        td.style.fontSize="20px";
    
    }
}