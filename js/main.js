var mymap;
var baseLayers;
var Overlays;
navigator.geolocation.getCurrentPosition(function(location) {

    console.log(location.coords.latitude);

    console.log(location.coords.longitude);

    console.log(location.coords.accuracy);



    baseLayers = {

        "Strassenkarte": L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

        })
    };

    Overlays = {
        "Regen": L.tileLayer('http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=2d3c8b0f8243563d61a2c6628a873f59', {
            attribution: ' © <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a> © <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a> <strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>Improve this map</a></strong>',

        }),
        "Wind":L.tileLayer('http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=2d3c8b0f8243563d61a2c6628a873f59', {
            attribution: ' © <a href=\'https://www.mapbox.com/about/maps/\'>Mapbox</a> © <a href=\'http://www.openstreetmap.org/copyright\'>OpenStreetMap</a> <strong><a href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>Improve this map</a></strong>',

        }),
    };

    mymap = L.map('mapid',{layers:[baseLayers.Strassenkarte]}).setView([location.coords.latitude, location.coords.longitude], 13);

    L.control.layers(baseLayers, Overlays).addTo(mymap);
    //L.control.layers(Overlays, {}).addTo(mymap);

    function onMapClick(e) {
//    alert("You clicked the map at " + e.latlng);
        var marker1 = L.marker1(e.latlng).addTo(mymap);
    }

    mymap.on('click', onMapClick);

});
