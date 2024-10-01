function hoursNow() {
	const a = new Date(),
		b = a.getMinutes(),
		c = a.getSeconds(),
		d = 5 * (b % 10) + Math.floor(c / 10) + 1;
	return console.log(`Resultado: ${d}`), d;
}
function passVerif() {
	const a = hoursNow(),
		b = document.getElementById('inputPass');
	1299 == b.value ? alert(a) : alert('senha invalida!!');
}
const pass = document.getElementById('inputPass');
pass.addEventListener('keydown', function (a) {
	'Enter' === a.key && passVerif();
});
