const alumno = {
	nombre: "Luzmila",
	carrera: "diseño gráfico",
};

const promedioMaterias = {
	algebra: 7,
	diseño: 10,
	dibujo: 9,
	ingles: 8,
	deportes: 8,
};

function calcularPromedio() {
	promedioFinal =
		(promedioMaterias.algebra +
			promedioMaterias.deportes +
			promedioMaterias.dibujo +
			promedioMaterias.diseño +
			promedioMaterias.ingles) /
		5;

	if (promedioFinal === 10 || promedioFinal >= 9 || promedioFinal >= 8) {
		console.log(
			`el alumno ${alumno.nombre} de la carrera ${alumno.carrera} con un promedio de ${promedioFinal} ha aprobado!`,
		);
	} else {
		console.log(
			`el alumno ${alumno.nombre} de la carrera ${alumno.carrera} con un promedio de ${promedioFinal} ha reprobado!`,
		);
	}
}

calcularPromedio();
