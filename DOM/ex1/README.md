# RA3Ex7 — Activitats Ràpides DOM JS
 
Documentació del script d'activitats ràpides de manipulació del **DOM** amb JavaScript.  
Cada exercici treballa un concepte fonamental de la interacció entre JS i l'estructura HTML de la pàgina.
 
 
## Exercicis
 
### 1. Selecció
 
> Usa `querySelector` per canviar el color d'un `<h1>` quan la pàgina carregui.
 
```javascript
let changeColor = document.querySelector("#titol-principal");
changeColor.style.color = "blue";
```
 
- S'utilitza `document.querySelector("#titol-principal")` per seleccionar l'element `<h1>`.
- Es modifica la propietat `.style.color` amb el valor `"blue"` en el moment de càrrega.
 

 
### 2. Contingut
 
> Fes que un paràgraf `<p>` mostri `"Hola Món"` usant `textContent`.
 
```javascript
let changeParagraf = document.querySelector("#paragraf-hola");
changeParagraf.textContent = "Hola món";
```
 
- `textContent` permet escriure text pla dins d'un element, substituint qualsevol contingut previ.
 

 
### 3. Atributs
 
> Canvia la `src` d'una imatge `<img>` usant `setAttribute`.
 
```javascript
let canviaImatge = document.getElementById("imatge-canviant");
canviaImatge.setAttribute("src", "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg");
```
 
- `getElementById()` selecciona l'element pel seu `id`.
- `setAttribute("src", "url")` substitueix l'atribut `src` de la imatge per una nova URL.
 

 
### 4. Estils
 
> Canvia el color de fons (`backgroundColor`) d'un element en fer-li clic.
 
```javascript
let caixaEstil = document.getElementById("caixa-estil");
 
caixaEstil.addEventListener("click", function() {
    caixaEstil.style.backgroundColor = "lightblue";
});
```
 
- L'esdeveniment `"click"` activa la funció que modifica `.style.backgroundColor`.
- El canvi es produeix únicament quan l'usuari interactua amb l'element.
 

 
### 5. Classes
 
> Crea un botó que afegeixi/tregui la classe `'actiu'` amb `classList.toggle`.
 
```javascript
let botoToggle = document.getElementById("boto-toggle");
let textClasse = document.getElementById("text-classe");
 
botoToggle.addEventListener("click", function() {
    textClasse.classList.toggle("actiu");
});
```
 
- `classList.toggle("actiu")` afegeix la classe si no existeix, i la treu si ja hi és.
- Ideal per alternar estils CSS sense condicions addicionals.
 

 
### 6. Esdeveniments
 
> Afegeix un `addEventListener` a un botó perquè llanci una alerta (`alert`).
 
```javascript
let botoAlerta = document.getElementById("boto-alerta");
 
botoAlerta.addEventListener("click", function() {
    alert("Has fet clic al botó");
});
```
 
- `addEventListener("click", fn)` associa una funció a l'esdeveniment de clic del botó.
- `alert()` mostra un missatge emergent al navegador.
 

 
### 7. Estructura
 
> Crea un nou `<li>` amb `createElement` i afegeix-lo a una `<ul>` amb `appendChild`.
 
```javascript
let botoAfegir = document.getElementById("boto-afegir");
let llista = document.getElementById("llista-compra");
 
botoAfegir.addEventListener("click", function() {
    let nouLi = document.createElement("li");
    nouLi.textContent = "Farina";
    llista.appendChild(nouLi);
});
```
 
- `createElement("li")` crea un nou node `<li>` en memòria.
- `textContent` li assigna el text `"Farina"`.
- `appendChild()` l'insereix com a últim fill de la `<ul>`.
 

 
### 8. Eliminació
 
> Fes que un element desaparegui en fer-li clic usant el mètode `remove()`.
 
```javascript
let eliminarElement = document.getElementById("element-eliminar");
 
eliminarElement.addEventListener("click", function() {
    eliminarElement.remove();
});
```
 
- En fer clic sobre l'element, el mètode `remove()` l'elimina directament del DOM.
 

 
## Mètodes i propietats utilitzats
 
| Mètode / Propietat | Descripció |
|---|---|
| `querySelector()` | Selecciona el primer element que coincideix amb un selector CSS |
| `getElementById()` | Selecciona un element pel seu `id` |
| `textContent` | Llegeix o escriu el contingut de text d'un element |
| `setAttribute()` | Estableix o modifica un atribut HTML |
| `style.color` | Canvia el color del text via JS |
| `style.backgroundColor` | Canvia el color de fons via JS |
| `classList.toggle()` | Afegeix o elimina una classe CSS alternativament |
| `addEventListener()` | Escolta esdeveniments com ara `"click"` |
| `createElement()` | Crea un nou element HTML |
| `appendChild()` | Afegeix un element com a fill d'un altre |
| `remove()` | Elimina un element del DOM |
