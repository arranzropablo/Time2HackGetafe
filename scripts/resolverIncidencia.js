"use strict";

let copy;
let firstTime = true;
function searchTeam(){
    let buscarIncidencia =  String($('#incidencia').prop('value').toLowerCase());
    let encontrados = [];
    $("#listaIncidencias li").each(function(index) {
        let aviso = String($(this).text()).replace('Resolver','').replace('Detalles','').toLowerCase();
        let contains = aviso.includes(buscarIncidencia);
        if(contains && buscarIncidencia !== ''){           
            let aux = $(this);
            encontrados.push(aux);
        }

    });
    $("#listaIncidencias").empty();
    $("#listaIncidencias").append(encontrados);
};

function copia(){
    if(firstTime){
        copy = $("#listaIncidencias li");
        firstTime = false;
    }
    if($('#incidencia').prop('value') === ''){
        $("#listaIncidencias").append(copy);
    }
    else{
        searchTeam();
    }
};