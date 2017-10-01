var mymap;
var baseLayers;
var Overlays;
var lat;
var lon;
navigator.geolocation.getCurrentPosition(function(location) {

    console.log(location.coords.latitude);
    lat = location.coords.latitude;
    console.log(location.coords.longitude);
    lon = location.coords.longitude;
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

$("#helpMarker").click(function(e) {
    e.preventDefault();

    var needHelpMarker = L.icon({
        iconUrl: 'img/003-location.png',
        iconSize: [32, 32], // size of the icon
    });
    L.marker([lat, lon],{icon: needHelpMarker}).addTo(mymap);
});
    $("#mayHelp").click(function (e) {
        e.preventDefault();

        var mayHelpMarker = L.icon({
            iconUrl: 'img/002-location-1.png',
            iconSize: [32, 32], // size of the icon
        });

        L.marker([lat, lon],{icon: mayHelpMarker}).addTo(mymap);
    });

    $("#Medic").click(function (e) {
        e.preventDefault();

        var MedicMarker = L.icon({
            iconUrl: 'img/medicicon.png',
            iconSize: [32, 32], // size of the icon
        });

        L.marker([lat, lon],{icon: MedicMarker, draggable: true}).addTo(mymap);
    });

    $("#Equipment").click(function (e) {
        e.preventDefault();

        var EquipmentMarker = L.icon({
            iconUrl: 'img/schraubschlüss.png',
            iconSize: [32, 32], // size of the icon
        });

        L.marker([lat, lon],{icon: EquipmentMarker, draggable: true}).addTo(mymap);
    });

    $("#Assemblypoint").click(function (e) {
        e.preventDefault();

        var AssemblypointMarker = L.icon({
            iconUrl: 'img/FAHNEATTEMPT2.png',
            iconSize: [48, 48], // size of the icon
        });

        L.marker([lat, lon],{icon: AssemblypointMarker, draggable: true}).addTo(mymap);
    });

    $("#Food").click(function (e) {
        e.preventDefault();

        var FoodMarker = L.icon({
            iconUrl: 'img/dinner.png',
            iconSize: [32, 32], // size of the icon
        });

        L.marker([lat, lon],{icon: FoodMarker, draggable: true}).addTo(mymap);
    });

