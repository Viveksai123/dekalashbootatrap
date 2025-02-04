// Initialize the map
const position = [36.0677, -80.3230];
const map = L.map('map').setView(position, 13);

// Add the OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Add a marker with popup
const marker = L.marker(position, { icon: customIcon }).addTo(map);
marker.bindPopup(`
  <div class="popup-content">
    <div class="flex items-center mb-2">
      <i class="fas fa-map-marker-alt"></i>
      <b>Deka Lash Winston-Salem</b>
    </div>
    <p>1247 Creekshire Way Suite 12, Winston-Salem, NC 27103</p>
    <img src="/api/placeholder/150/150" alt="Deka Lash Location" class="rounded-lg mt-2 shadow-md" />
  </div>
`);

document.getElementById('offerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('offerForm').classList.add('hidden');
  document.getElementById('thankYouMessage').classList.remove('hidden');
});

function resetForm() {
  document.getElementById('offerForm').classList.remove('hidden');
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('offerForm').reset();
}
