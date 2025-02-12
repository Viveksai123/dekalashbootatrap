// Initialize the map
const position = [36.0677, -80.3230];
// Add scrollWheelZoom: false to disable zoom on scroll
const map = L.map('map', {
  scrollWheelZoom: false,  // Disable scroll wheel zoom
  zoomControl: true        // Keep the zoom controls visible
}).setView(position, 13);

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

// Optional: Add double-click to zoom functionality
map.doubleClickZoom.enable();

// Optional: Add a message to show users how to zoom
const zoomMessage = L.control({position: 'bottomleft'});
zoomMessage.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'zoom-message');
    div.innerHTML = '<small class="bg-white/80 px-2 py-1 rounded-md">Use +/- buttons or double-click to zoom</small>';
    return div;
};
zoomMessage.addTo(map);

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


function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const terms = document.getElementById("terms").checked;
  const marketing = document.getElementById("marketing").checked;
  const support = document.getElementById("support").checked;

  const submitButton = document.getElementById("submitButton");

  // Check if all inputs and checkboxes are filled/checked
  if (firstName && lastName && phoneNumber && email && terms && marketing && support) {
    submitButton.disabled = false;
    submitButton.classList.remove("bg-gray-300", "text-gray-500", "cursor-not-allowed");
    submitButton.classList.add("bg-pink-500", "text-white", "hover:bg-pink-600", "transform", "hover:scale-105");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("bg-gray-300", "text-gray-500", "cursor-not-allowed");
    submitButton.classList.remove("bg-pink-500", "text-white", "hover:bg-pink-600", "transform", "hover:scale-105");
  }
}