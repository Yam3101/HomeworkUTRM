const horasTrabajo = prompt("¿Cuántas horas trabajaste?");
const pagoHora = prompt("¿Cuánto te pagan por hora?");
const diasTrabajo = prompt("¿Cuántos días trabajaste?");

function calcularSueldo() {
	const pagofinal = horasTrabajo * pagoHora * diasTrabajo;
	console.log(
		`Usted ha ganado durante estos ${diasTrabajo} días un total de: $${pagofinal}MXN`,
	);
}

calcularSueldo();
