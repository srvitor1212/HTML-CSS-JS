//Utiliza no F12 na WEBPAGE
var geos = document.querySelectorAll("tr td label");
for (var i=0; i<geos.length; i++){
    console.log(geos[i].innerHTML);
    geos[i].innerHTML = "teste";
}
