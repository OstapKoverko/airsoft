function initMap() {
  var myLatLng = {lat: 49.687420, lng: 24.270449};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Локація "Піонерський табір"'
  });
}