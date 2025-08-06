// Coordenadas Plaza de Bolívar, Bogotá
const centroBogota = [4.5981, -74.0758];

// Inicializar mapa
const map = L.map('map').setView(centroBogota, 15);

// Capa base OSM
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cargar ruta GPX (archivo ruta.gpx debe estar en la misma carpeta)
new L.GPX('ruta.gpx', {
    async: true,
    marker_options: {
        startIconUrl: 'https://cdn.rawgit.com/mpetazzoni/leaflet-gpx/master/pin-icon-start.png',
        endIconUrl: 'https://cdn.rawgit.com/mpetazzoni/leaflet-gpx/master/pin-icon-end.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
    }
}).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);
