function initMap() {
	console.log('connected');
	const coordinates = {lat: 59.939492, lng: 30.329900};

  map = new google.maps.Map(document.querySelector('.js-map'), {
      center: coordinates,
      zoom: 16,
      disableDefaultUI: true
  });

  marker = new google.maps.Marker({
  	position: {lat: 59.938649, lng: 30.322708},
  	icon: 'img/marker.svg',
  	map: map
  })
}