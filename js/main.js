function hoursNow() {
	const agora = new Date();
	const minutos = agora.getMinutes();
	const segundos = agora.getSeconds();
	const segundoNumeroMinutos = minutos % 10;

	const resultado = segundoNumeroMinutos * 5 + Math.floor(segundos / 10) + 1;

	console.log(`Resultado: ${resultado}`);
	return resultado;
}

function passVerif() {
	const passNow = hoursNow();
	const pass = document.getElementById('inputPass');

	if (pass.value == 1299) {
		alert(passNow);
		console.log('deu bom');
	} else {
		alert('senha invalida!!');
	}
}

const pass = document.getElementById('inputPass');

pass.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		passVerif();
	}
});
