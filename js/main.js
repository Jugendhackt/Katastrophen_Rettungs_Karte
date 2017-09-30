var mymap = L.map('mapid').setView([51.505, -0.09], 13);


L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
    var marker = L.marker(e.latlng).addTo(mymap);
}

mymap.on('click', onMapClick);
