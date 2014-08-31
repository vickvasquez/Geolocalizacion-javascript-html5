
var elem = '',
	btn  = '',
	mapa = '';

mapa = document.getElementById('Mapa');
btn = document.getElementById('bntMapa');
var _init_ = function() {

	if(navigator.geolocation) {

		navigator.geolocation.getCurrentPosition( mostrar );
		elem = document.getElementById('posicion');
	}
	else {
		elem.innerHTML  = " Su navegador no soporta la geolocalizacion";
	}
}

function mostrar (pos) {
	longi =  pos.coords.longitude;
	lati = pos.coords.latitude;
 	elem.innerHTML  = ' su ubicacion es: '+lati + ", " +longi;
 }
 
btn.addEventListener('click', function() {
	mapa.className = "mostrar"
 	drawMap(lati,longi)
});

 window.addEventListener('load', function() {
 	_init_();
 });