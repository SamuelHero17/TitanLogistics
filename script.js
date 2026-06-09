document
.getElementById("cotizacionForm")
.addEventListener("submit", function(e){

e.preventDefault();

const nombre =
document.getElementById("nombre").value;

const origen =
document.getElementById("origen").value;

const destino =
document.getElementById("destino").value;

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
<p>
${nombre},
tu cotización estimada para la ruta
${origen} → ${destino}
es de:
</p>

<h2>
$${total.toLocaleString("es-MX")} MXN
</h2>
`;

});