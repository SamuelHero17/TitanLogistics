document
.getElementById("cotizacionForm")
.addEventListener("submit", function(e){

e.preventDefault();

const km =
Number(
document.getElementById("kilometros").value
);

const tarifa =
Number(
document.getElementById("unidad").value
);

const total = km * tarifa;

document.getElementById("resultado").innerHTML =
`
Cotización estimada:

$${total.toLocaleString()} MXN
`;

});