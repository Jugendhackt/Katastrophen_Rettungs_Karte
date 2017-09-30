var mymap;
var baseLayers;

navigator.geolocation.getCurrentPosition(function(location) {

    console.log(location.coords.latitude);

    console.log(location.coords.longitude);

    console.log(location.coords.accuracy);

    mymap = L.map('mapid').setView([location.coords.latitude, location.coords.longitude], 13);

    baseLayers = {
        "Wetterkarte": L.tileLayer('http://{s}.tiles.mapbox.com/v3/openstreetmap.map-4wvf9l0l/{z}/{x}/{y}.png', {
            attribution: ' © <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a> © <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a> <strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>Improve this map</a></strong>',
            maxZoom: 18,
        }),
        "Straßenkarte": L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
        }).addTo(mymap)
    };
    L.control.layers(baseLayers, {}).addTo(mymap);

    function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
        var marker = L.marker(e.latlng).addTo(mymap);
    }

    mymap.on('click', onMapClick);

});
