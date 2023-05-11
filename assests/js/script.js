function inicializarMapa() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
  
        var map = L.map('mapa').setView([lat, lng], 12);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18
        }).addTo(map);
  
        var marker = L.marker([lat, lng], { draggable: true }).addTo(map);
  
        marker.on('dragend', function(event) {
          var latlng = event.target.getLatLng();
          document.getElementById('ubicacion').value = latlng.lat + ', ' + latlng.lng;
        });
      });
    } else {
      console.log('La geolocalización no es compatible con este navegador.');
    }
  }

  
  //Almacenar información


