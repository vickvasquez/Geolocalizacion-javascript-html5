var map,
	mark ;
function drawMap(lati,longi) {
	'use strict';
	var mapOption = {
		zoom:15,
		center :  new google.maps.LatLng(lati,longi),
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}
	debugger;
	map =  new google.maps.Map(mapa,mapOption);
	mark = new google.maps.Marker({
		position:map.getCenter(),
		title:'Aqui estas tu',
		map:map
	})
}

		// center: Contiene las coordenadas en las que se centrará el mapa.
		// El primer valor es la latitud y el siguie'nte la longitud.
		// Se expresan usando números decimales separados por coma, no grados sexagesimales como es habitual en los mapas.
		// En caso de solo tener la ubicación en grados decimales es necesario convertirla.
		// Por ejemplo 23° 45' 30'' corresponde a 23.758333 en decimal.
		// No es necesario usar varios decimales, 2 bastan para centrar un país, 3 para una ciudad, 4 para detalles, el máximo es 6.
		// Usa la siguiente herramienta en nuestro sitio: Convertir grados, minutos y segundos a decimales
		// zoom: El nivel de zoom o resolución inicial. Un número entre el 1 y el 23.
		// mapTypeId: El tipo de mapa, puede escogerse entre cuatro valores diferentes:
		// ROADMAP - Callejero o de carreteras, el predeterminado de Google Maps.
		// SATELLITE - Se compone de fotos de satélite.
		// HYBRID - Una combinación de los dos anteriores.
		// TERRAIN – Muestra el relieve físico, elevaciones del terreno y corrientes de agu