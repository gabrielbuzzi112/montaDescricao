function writeInfo (adicional) {
    var texto;
    var pcsOrigem = $("input[name='origem']:checked").val(); //
    var pcsFamilia = $("#pcs_inputFamilia").val(); //
    var pcsFabricante = $("#pcs_inputFabricante").val(); //
    var pcsReferencia = $("#pcs_inputRef").val(); //
    var pcsFonte = $("#pcs_inputFonteIluminacao").val(); //
    var pcsQtdLamp = $("#pcs_inputQuantidadeLamps").val(); //
    var pcsTipoLamp = $("#pcs_inputTipoLamp").val(); //
    var pcsSoquete = $("#pcs_inputSoquete").val(); //
    var pcsPotencia = $("#pcs_inputPotencia").val(); //
    var pcsTempCor = $("#pcs_inputTempCor").val(); //
    var pcsFluxo = $("#pcs_inputFluxo").val(); //
    var pcsTensao = $("#pcs_inputTensao").val(); //
    var pcsPosicao = $("#pcs_inputPosicao").val(); //
    var pcsEmbutirSobrepor = $("input[name='embutirSobrePor']:checked").val(); //
    var pcsAplicacao = $("#pcs_inputAplicacao").val(); //
    var pcsComprimento = $("#pcs_inputComprimento").val(); //
    var pcsLargura = $("#pcs_inputLargura").val(); //
    var pcsAltura = $("#pcs_inputAltura").val(); //
    var pcsDiametro = $("#pcs_inputDiametro").val(); //
    var pcsComprimentoNicho = $("#pcs_inputComprimentoNicho").val(); //
    var pcsLarguraNicho = $("#pcs_inputLarguraNicho").val(); //
    var pcsDiametroNicho = $("#pcs_inputDiametroNicho").val(); //
    var pcsComprimentoFio = $("#pcs_inputComprimentoFio").val(); //
    var pcsDiametroFio = $("#pcs_inputDiametroFio").val(); //
    var pcsCor = $("#pcs_inputCor").val(); //
    var pcsMaterial = $("#pcs_inputMaterial").val(); //
    var pcsAcabamento = $("#pcs_inputAcabamento").val(); //
    var pcsObs = $("#pcs_textObs").val(); //

    texto = "Família: " + pcsFamilia + "\n" +
        "Fabricante: " + pcsFabricante + "\n" +
        "Referência: " + pcsReferencia + "\n" +
        "Origem: " + pcsOrigem + "\n" +
        "Fonte de Iluminação: " + pcsFonte + "\n";

    if(pcsFonte==="Lâmpada"){
        texto += "Quantidade de Lâmpadas: " + pcsQtdLamp + "\n" +
            "Lâmpada Indicada: " + pcsTipoLamp + "\n" +
            "Soquete: " + pcsSoquete + "\n"
        ;
    }
    else if(pcsFonte==="Integrado") {
        texto += "Potência: " + pcsPotencia + " W\n" +
            "Temperatura da Cor: " + pcsTempCor + " K\n" +
            "Fluxo luminoso: " + pcsFluxo + " lm\n"
        ;
    }

    texto += "Tensão: " + pcsTensao + "\n" +
        "Posição: " + pcsEmbutirSobrepor + " no(a) " + pcsPosicao + "\n" +
        "Ambiente: " + pcsAplicacao + "\n" +
        "Dimensões(cm):"
    ;
    if(pcsComprimento) {
        texto += " (C)"  + pcsComprimento;
    }
    if(pcsLargura) {
        if(pcsComprimento) {
            texto += " x (L)" + pcsLargura;
        } else {
            texto += " (L)" + pcsLargura;
        }
    }
    if(pcsAltura) {
        if(pcsLargura) {
            texto += " x (A)" + pcsAltura;
        } else if(pcsComprimento) {
            texto += " x (A)" + pcsAltura;
        } else {
            texto += " (A)" + pcsAltura;
        }
    }

    if(pcsDiametro) {
        if(pcsAltura) {
            texto += " x (Ø)" + pcsDiametro;
        } else if(pcsLargura) {
            texto += " x (Ø)" + pcsDiametro;
        } else if(pcsComprimento) {
            texto += " x (Ø)" + pcsDiametro;
        } else {
            texto += " (Ø)" + pcsDiametro;
        }
    }

    texto += "\n";

    if(pcsEmbutirSobrepor==="Embutir"){
        texto += "Dimensões do Nicho(cm): ";

        if(pcsComprimentoNicho) {
            texto += " (C)"  + pcsComprimentoNicho;
        }

        if(pcsLarguraNicho) {
            if(pcsComprimentoNicho) {
                texto += " x (L)" + pcsLarguraNicho;
            } else {
                texto += " (L)" + pcsLarguraNicho;
            }
        }

        if(pcsDiametroNicho) {
            if(pcsLarguraNicho) {
                texto += " x (Ø)" + pcsDiametroNicho;
            } else if(pcsComprimentoNicho) {
                texto += " x (Ø)" + pcsDiametroNicho;
            } else {
                texto += " (Ø)" + pcsDiametroNicho;
            }
        }
        texto += "\n";
    }

    if(pcsFamilia==="Pendente") {
        texto += "Dimensões do Fio(cm): ";
        if(pcsComprimentoFio) {
            texto += " (C)"  + pcsComprimentoFio;
        }

        if(pcsDiametroFio) {
            if(pcsComprimentoFio) {
                texto += " x (Ø)" + pcsDiametroFio;
            } else {
                texto += " (Ø)" + pcsDiametroFio;
            }
        }
        texto += "\n";
    }

    texto += "Cor: " + pcsCor + "\n" +
        "Material: " + pcsMaterial + "\n";

    if(pcsAcabamento) {
	texto += "Acabamento: " + pcsAcabamento + "\n";
    }	

    if(pcsObs) {
        texto += pcsObs + "\n";
    }

    //alert(texto);
    document.getElementById("descricaoFinal").innerHTML = texto;
}

$("#form1").change(function(){
    //alert("oi");
    writeInfo(0);
});
/*
$("#pcs_inputFamilia").change(function() {
    writeInfo(0);
});

$("#pcs_inputFabricante").change(function() {
    writeInfo(0);
});

$("#pcs_oNacional").change(function() {
    writeInfo(0);
});

$("#pcs_oImport").change(function() {
    writeInfo(0);
});

$("#pcs_inputFonteIluminacao").change(function() {
    writeInfo(0);
});

$("#pcs_inputQuantidadeLamps").change(function() {
    writeInfo(0);
});

$("#pcs_inputTipoLamp").change(function() {
    writeInfo(0);
});

$("#pcs_inputSoquete").change(function() {
    writeInfo(0);
});

$("#pcs_inputPotencia").change(function() {
    writeInfo(0);
});

$("#pcs_inputTempCor").change(function() {
    writeInfo(0);
});

$("#pcs_inputFluxo").change(function() {
    writeInfo(0);
});

$("#pcs_inputTensao").change(function() {
    writeInfo(0);
});

$("#pcs_inputPosicao").change(function() {
    writeInfo(0);
});

$("input[name='embutirSobrePor']:checked").change(function() {
    writeInfo(0);
});

$("input[name='embutirSobrePor']").click(function() {
    writeInfo(0);
});

//Original
/*
$("#pcs_inputAplicacao").change(function() {
    writeInfo(0);
});
*

$("#pcs_inputComprimento").change(function() {
    writeInfo(0);
});

$("#pcs_inputLargura").change(function() {
    writeInfo(0);
});

$("#pcs_inputAltura").change(function() {
    writeInfo(0);
});

$("#pcs_inputDiametro").change(function() {
    writeInfo(0);
});

$("#pcs_inputComprimentoNicho") .change(function() {
    writeInfo(0);
});

$("#pcs_inputLarguraNicho").change(function() {
    writeInfo(0);
});

$("#pcs_inputDiametroNicho").change(function() {
    writeInfo(0);
});

$("#pcs_inputComprimentoFio").change(function() {
    writeInfo(0);
});

$("#pcs_inputDiametroFio").change(function() {
    writeInfo(0);
});

$("#pcs_inputCor").change(function() {
    writeInfo(0);
});

$("#pcs_inputMaterial").change(function() {
    writeInfo(0);
});

$("#pcs_inputAcabamento").change(function() {
    writeInfo(0);
});

$("#pcs_textObs").change(function() {
    writeInfo(0);
});
*/
$("#form2").change(function(){
    alert("oi");
});
































