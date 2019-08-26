document.querySelector("#btn").addEventListener("click", entradaSalida);

function entradaSalida() {
    var horasEntrada = document.querySelector("#horasEntrada").value;
    var minutosEntrada = document.querySelector("#minutosEntrada").value;
    var segundosEntrada = document.querySelector("#segundosEntrada").value;
    var horasSalida = document.querySelector("#horasSalida").value;
    var minutosSalida = document.querySelector("#minutosSalida").value;
    var segundosSalida = document.querySelector("#segundosSalida").value;
    
    var entrada = new Date(0,0,0,horasEntrada,minutosEntrada,segundosEntrada,0);
	var salida = new Date(0,0,0,horasSalida,minutosSalida,segundosSalida,0);

    document.querySelector("#texto").innerText = sumaResta(entrada, salida);
}

function sumaResta(entrada, salida) {
    var Segundos = (salida-entrada)/1000;
	if (Segundos <= 0) {
		return "La hora de salida debe ser despues de la hora de entrada";
	}

	var Horas = Math.trunc(Segundos/3600);
	Segundos = Segundos % 3600;

	var Minutos = Math.trunc(Segundos/60);
	Segundos = Segundos%60;

	return "Horas Trabajadas: "+Horas+", Minutos Trabajados: "+Minutos+", Segundos Trabajados: "+Segundos;

}