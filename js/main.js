var mymap;

navigator.geolocation.getCurrentPosition(function(location) {

    console.log(location.coords.latitude);

    console.log(location.coords.longitude);

    console.log(location.coords.accuracy);

    mymap = L.map('mapid').setView([location.coords.latitude, location.coords.longitude], 13);

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
    }).addTo(mymap);

    function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
        var marker = L.marker(e.latlng).addTo(mymap);
    }

    mymap.on('click', onMapClick);

});
