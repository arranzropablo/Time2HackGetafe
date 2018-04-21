"use strict";
let copy;
let i = 0;


$(function() {
    copy = $("#listaIncidencias li");
});

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
    if($('#incidencia').prop('value') === ''){
        $("#listaIncidencias").append(copy);
    }
    else{
        searchTeam();
    }
};

function resolverIncidencia(event){
    copy.splice(event-i, 1);
    $("#listaIncidencias").empty();
    $("#listaIncidencias").append(copy);
    i++;
};

function detallesIncidencia(nr){
    let aviso = String($(copy[nr]).text()).replace('Resolver','').replace('Detalles','');
    $("#modalLongTitle").text(aviso);

};


