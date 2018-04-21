
$(() => {
    $("#map").hide();
    $("#searchBtn").on("click", showHideMap);
    $(".optionBtn").each((index, item)=> {
        $(item).on("click", markSelectedBtn);
    });
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

function showHideMap(){
    if($("#map").is(":hidden"))
        $("#map").show();
    else
        $("#map").hide();
    
}

function markSelectedBtn(event, item){
    $(".optionBtn").each((index, item) => {
        $(item).removeClass("clicked");
    });
    $(event.currentTarget).addClass("clicked");
}