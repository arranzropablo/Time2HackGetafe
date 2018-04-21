
$(() => {
    $("#searchBtn").on("click", setChachoMap);
});

function loadMap() {
    var madrid = { lat: 40.416775, lng: -3.703790 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: madrid,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        disableDoubleClickZoom: true
    });
    console.log(map);
    initAutocomplete();
}

function setChachoMap(){
    $("#map").hide();
}