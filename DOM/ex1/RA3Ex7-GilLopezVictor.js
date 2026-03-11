//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let changeColor = document.querySelector("#titol-principal");
    changeColor.style.color = "blue";

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let changeParagraf = document.querySelector("#paragraf-hola");
    changeParagraf.textContent = "Hola món";

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let canviaImatge = document.getElementById("imatge-canviant");
    canviaImatge.setAttribute("src", "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg");

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let caixaEstil = document.getElementById("caixa-estil");

caixaEstil.addEventListener("click", function() {
    caixaEstil.style.backgroundColor = "lightblue";
});

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let botoToggle = document.getElementById("boto-toggle");
let textClasse = document.getElementById("text-classe");

botoToggle.addEventListener("click", function() {
    textClasse.classList.toggle("actiu");
});

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
let botoAlerta = document.getElementById("boto-alerta");

botoAlerta.addEventListener("click", function() {
    alert("Has fet clic al botó");
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
let botoAfegir = document.getElementById("boto-afegir");
let llista = document.getElementById("llista-compra");

botoAfegir.addEventListener("click", function() {
    let nouLi = document.createElement("li");
    nouLi.textContent = "Cereals";
    llista.appendChild(nouLi);
});

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let eliminarElement = document.getElementById("element-eliminar");

eliminarElement.addEventListener("click", function() {
    eliminarElement.remove();
});
