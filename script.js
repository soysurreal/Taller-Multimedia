console.log("Antonia es mi profesora de Multimedia")

const galleta = document.getElementById ("galleta");
let estadoOriginal=true

console.log (galleta)

galleta.addEventListener("click", () => {
galleta.innerText = "tabú, fuego y dolor";
galleta.style.color = "red";


if (estadoOriginal === true) {
galleta.innerText= "tabú, fuego y dolor";
galleta.style.color= "red";
}
else {
galleta.innerText ="Cerca del nuevo fin";
galleta.style.color = "black";
}
estadoOriginal = !estadoOriginal;
});



