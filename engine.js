let version = "v2.0 (21/07/2022)";

$(document).ready(function(){
    $("#version").html(version);
});

function temperaturaCor (temp) {
    //temp.parseInt();
    if(temp<=3200){
        return "Luz Branca Quente";
    }
    if(temp<=4200){
        return "Luz Branca Neutra";
    }
    else {
        return "Luz Branca Fria";
    }
}

function writeInfoPcs (adicional) {
    var texto;
    var pcsOrigem = $("input[name='origemPcs']:checked").val(); //
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
        texto += "Quantidade de Lâmpadas: " + pcsQtdLamp + " (Não Acompanha o Produto)\n" +
            "Lâmpada Indicada: " + pcsTipoLamp + " (Não Acompanha o Produto)\n" +
            "Soquete: " + pcsSoquete + "\n"
        ;
    }
    else if(pcsFonte==="Integrado") {
        texto += "Potência: " + pcsPotencia + " W\n" +
            "Temperatura da Cor: " + temperaturaCor(pcsTempCor) +" ("+ pcsTempCor + " K)\n" +
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

    $.get("texto.txt", function(text){
        $("#descricaoFinal").append(text);
    },"text");
}

function writeInfoLamp (adicional) {
    var texto;
    
    
    var lampFabricante = $("#lamp_inputFabricante").val(); //
    var lampReferencia = $("#lamp_inputRef").val(); //
    var lampModelo = $("#lamp_inputModelo").val(); //
    var lampTecnologia = $("#lamp_inputTecnologia").val(); //
    var lampOrigem = $("input[name='origemLamp']:checked").val(); //
    var lampPotencia = $("#lamp_inputPotencia").val(); //
    var lampTensao = $("#lamp_inputTensao").val(); //
    var lampTempCor = $("#lamp_inputTempCor").val(); //
    var lampAngulo = $("#lamp_inputAngulo").val(); //
    var lampFluxo = $("#lamp_inputFluxo").val(); //
    var lampVidaUtil = $("#lamp_inputVidaUtil").val(); //
    var lampSoquete = $("#lamp_inputSoquete").val(); //
    var lampDimerizavel = $("input[name='dimerizavelLamp']:checked").val(); //
    var lampComprimento = $("#lamp_inputComprimento").val(); //
    var lampLargura = $("#lamp_inputLargura").val(); //
    var lampAltura = $("#lamp_inputAltura").val(); //
    var lampDiametro = $("#lamp_inputDiametro").val(); //
    var lampObs = $("#lamp_textObsLamp").val(); //

    texto = 
        "Fabricante: " + lampFabricante + "\n" +
        "Referência: " + lampReferencia + "\n" +
        "Tecnologia: " + lampTecnologia + "\n" +
        "Modelo: " + lampModelo + "\n" +
        "Origem: " + lampOrigem + "\n" +
        "Potência: " + lampPotencia + " W\n" +
        "Tensão: " + lampTensao + " V\n" +
        "Temperatura da Cor: " + temperaturaCor(lampTempCor) +" ("+ lampTempCor + " K)\n" +
        "Ângulo de Abertura: " + lampAngulo + "º\n" +
        "Fluxo Luminoso: " + lampFluxo + " lm\n" +
        "Vida Útil Estimada: " + lampVidaUtil + " horas\n" +
        "Soquete: " + lampSoquete + "\n" +
        "Dimerização: " + lampDimerizavel + "\n" +
        "Dimensões: ";
        
        if(lampComprimento) {
            texto += " (C)"  + lampComprimento;
        }
        if(lampLargura) {
            if(lampComprimento) {
                texto += " x (L)" + lampLargura;
            } else {
                texto += " (L)" + lampLargura;
            }
        }
        if(lampAltura) {
            if(lampLargura) {
                texto += " x (A)" + lampAltura;
            } else if(lampComprimento) {
                texto += " x (A)" + lampAltura;
            } else {
                texto += " (A)" + lampAltura;
            }
        }
    
        if(lampDiametro) {
            if(lampAltura) {
                texto += " x (Ø)" + lampDiametro;
            } else if(lampLargura) {
                texto += " x (Ø)" + lampDiametro;
            } else if(lampComprimento) {
                texto += " x (Ø)" + lampDiametro;
            } else {
                texto += " (Ø)" + lampDiametro;
            }
        }
    
        texto += "\n";

        if(lampObs) {
            texto += lampObs + "\n";
        }

        document.getElementById("descricaoFinal").innerHTML = texto;

        $.get("texto.txt", function(text){
            $("#descricaoFinal").append(text);
        },"text");
}
$("#form1").change(function(){
    writeInfoPcs(0);
});

$("#form2").change(function(){
    writeInfoLamp(0);
});
































