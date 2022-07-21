//form1 = Pecas
//form2 = Lampadas
//form3 = Utensilios

$(document).ready(function () {
    $("#form1").hide("fast");
    $("#form2").hide("fast");
    $("#form3").hide("fast");
    $("#formPcsComLamp").hide("fast");
    $("#formPcsComLedIntegrado").hide("fast");
    $("#pcs_dimensoesNicho").hide("fast");
    $("#pcs_dimensoesFio").hide("fast");
    $("#pcs_dimensoesVidro").hide("fast");
});

$("#linkIluminacao").click(function () {
    if($("#linkUtensilios").hasClass("active")) {
        $("#linkUtensilios").toggleClass("active");
    }
    if($("#linkLampadas").hasClass("active")) {
        $("#linkLampadas").toggleClass("active");
    }
    if(!$("#linkIluminacao").hasClass("active")) {
        $("#linkIluminacao").toggleClass("active");
    }
    $("#form1").show("fast");
    $("#form2").hide("fast");
    $("#form3").hide("fast");
});

$("#linkLampadas").click(function () {
    if($("#linkIluminacao").hasClass("active")) {
        $("#linkIluminacao").toggleClass("active");
    }
    if(!$("#linkLampadas").hasClass("active")) {
        $("#linkLampadas").toggleClass("active");
    }
    if($("#linkUtensilios").hasClass("active")) {
        $("#linkUtensilios").toggleClass("active");
    }
    $("#form1").hide("fast");
    $("#form2").show("fast");
    $("#form3").hide("fast");
});

$("#linkUtensilios").click(function () {
    if($("#linkIluminacao").hasClass("active")) {
        $("#linkIluminacao").toggleClass("active");
    }
    if($("#linkLampadas").hasClass("active")) {
        $("#linkLampadas").toggleClass("active");
    }
    if(!$("#linkUtensilios").hasClass("active")) {
        $("#linkUtensilios").toggleClass("active");
    }
    $("#form1").hide("fast");
    $("#form2").hide("fast");
    $("#form3").show("fast");
});

$("#linkUtensilios").click(function () {
    if($("#linkIluminacao").hasClass("active")) {
        $("#linkIluminacao").toggleClass("active");
    }
    if(!$("#linkUtensilios").hasClass("active")) {
        $("#linkUtensilios").toggleClass("active");
    }
    $("#form1").hide("fast");
    $("#form2").hide("fast");
    $("#form3").show("fast");
});

$("#pcs_inputFonteIluminacao").change(function () {
    if($("#pcs_inputFonteIluminacao").val()==="Lâmpada") {
        $("#formPcsComLamp").show("fast");
        $("#formPcsComLedIntegrado").hide("fast");
    }else if($("#pcs_inputFonteIluminacao").val()==="Integrado") {
        $("#formPcsComLedIntegrado").show("fast");
        $("#formPcsComLamp").hide("fast");
    }
    else {
        $("#formPcsComLamp").hide("fast");
        $("#formPcsComLedIntegrado").hide("fast");
    }
});

$("#pcs_embutir").change(function () {
    var radioValue = $("input[name='embutirSobrePor']:checked").val();
    if(radioValue==="Embutir") {
        $("#pcs_dimensoesNicho").show("fast");
    }else {
        $("#pcs_dimensoesNicho").hide("fast");
    }
});

$("#pcs_sobrePor").change(function () {
    var radioValue = $("input[name='embutirSobrePor']:checked").val();
    if(radioValue==="Embutir") {
        $("#pcs_dimensoesNicho").show("fast");
    }else {
        $("#pcs_dimensoesNicho").hide("fast");
    }
});

$("#pcs_sVidro").change(function () {
    var radioValue = $("input[name='pVidro']:checked").val();
    if(radioValue==="ComVidro") {
        $("#pcs_dimensoesVidro").show("fast");
    }else {
        $("#pcs_dimensoesVidro").hide("fast");
    }
});

$("#pcs_cVidro").change(function () {
    var radioValue = $("input[name='pVidro']:checked").val();
    if(radioValue==="ComVidro") {
        $("#pcs_dimensoesVidro").show("fast");
    }else {
        $("#pcs_dimensoesVidro").hide("fast");
    }
});

$("#pcs_inputFamilia").change(function () {
    var radioValue = $("#pcs_inputFamilia").val();
    if(radioValue==="Pendente") {
        $("#pcs_dimensoesFio").show("fast");
    }else {
        $("#pcs_dimensoesFio").hide("fast");
    }
});

var lOption = '<option selected>Choose...</option>';

$.getJSON('lampadas.json', function(data){
   var i = 0;
   while(data[i].lampada!=null) {
       lOption += '<option id="l' + data[i].lampada + '" value="' + data[i].lampada + '">' + data[i].lampada + '</option>';
       document.getElementById("lamp_inputModelo").innerHTML = lOption;
       document.getElementById("pcs_inputTipoLamp").innerHTML = lOption;
       i++;
   }
});

var sOption = '<option selected>Choose...</option>';

$("#lamp_inputModelo").change( function () {
    sOption = '<option selected>Choose...</option>';
    document.getElementById("lamp_inputSoquete").innerHTML = sOption;
    document.getElementById("pcs_inputSoquete").innerHTML = sOption;
    var lampada = $(this).val();
    var i = 0;
    var j = 0;
    $.get('lampadas.json', function(data){
        while(data[i]!=null) {
            j = 0;
            if(data[i].lampada===lampada) {
                while(data[i].soquete[j]!=null) {
                    sOption += '<option id="l' + data[i].soquete[j] + '" value="' + data[i].soquete[j] + '">' + data[i].soquete[j] + '</option>';
                    document.getElementById("lamp_inputSoquete").innerHTML = sOption;
                    document.getElementById("pcs_inputSoquete").innerHTML = sOption;
                    j++;
                }
            }
            i++;
        }
    },"json");
});

$("#pcs_inputTipoLamp").change( function () {
    sOption = '<option selected>Choose...</option>';
    document.getElementById("pcs_inputSoquete").innerHTML = sOption;
    var lampada = $(this).val();
    //alert(lampada);
    var i = 0;
    var j = 0;
    $.getJSON('lampadas.json', function(data){
        while(data[i]!=null) {
            j = 0;
            if(data[i].lampada===lampada) {
                while(data[i].soquete[j]!=null) {
                    sOption += '<option id="l' + data[i].soquete[j] + '" value="' + data[i].soquete[j] + '">' + data[i].soquete[j] + '</option>';
                    document.getElementById("pcs_inputSoquete").innerHTML = sOption;
                    j++;
                }
            }
            i++;
        }
    });
});