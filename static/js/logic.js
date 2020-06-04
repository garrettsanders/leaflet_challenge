
function createMap(earthquakes) {
  
  // Create the tile layer that will be the background of our map
var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "pk.eyJ1IjoiZ2FycmV0dHNhbmRlcnMiLCJhIjoiY2thbmF0M29qMW50MDJ3bXNiZ2x2M29jeSJ9.JgToXTR_Ed67feUkgeMkJg"
}).addTo(myMap);

var baseMaps = {
"Light Map": lightmap
};

var overlayMaps = {
  "Earthquakes": earthquakes
};

var myMap = L.map("map", {
  center: [30, 0],
  zoom: 2,
  layers: [lightmap, earthquakes]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

}

function createMarkers(response) {

  var magnitude = response.features.properties;

  var markers = [];

  for (var index = 0; index < properties.length; index++) {
    var property = properties[index];

    var marker = L.marker([features.geometry.coordinates])
    .bindPopup("<h3>" + features.properties + "<h3><h3>Time:" + features.properties.time + "</h3>");
  
  markers.push(marker);

  }
createMap(L.layerGroup(markers));
}


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", createMarkers);



  

  