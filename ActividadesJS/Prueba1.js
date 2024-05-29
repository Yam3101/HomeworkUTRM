// biome-ignore lint/style/useConst: <explanation> It's not neccesary cuz is declared once the use of let
let autos = [ferrari, audi];
const añoNacimiento = 2004;
// var autos = [Ferrari, Audi] UNEEDED USE OF VAR, it's better to use the last 2 examples showed

const persona = {
	nombre: "Angel",
	nacionalidad: "mexicano",
	edad: 20,
};

console.log(
	`Hola me llamo ${persona.nombre} y tengo ${persona.edad}, soy oficialmente ${persona.nacionalidad}`,
);
