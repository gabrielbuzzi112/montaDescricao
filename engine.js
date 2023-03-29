let version = "v4.0 (05/09/2022)";

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

function writeInfoPcs () {
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
	var pcsPotenciaMax = $("#pcs_inputPotenciaMax").val(); //
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

    texto = "Família:" + pcsFamilia + "<br>" +
        "Fabricante: " + pcsFabricante + "<br>" +
        "Referência: " + pcsReferencia + "<br>" +
        "Origem: " + pcsOrigem + "<br>" +
        "Fonte de Iluminação: " + pcsFonte + "<br>";

    if(pcsFonte==="Lâmpada"){
        texto += "Quantidade de Lâmpadas: " + pcsQtdLamp + " (Não Acompanha o Produto)<br>" +
            "Lâmpada Indicada: " + pcsTipoLamp + " (Não Acompanha o Produto)<br>" +
            "Soquete: " + pcsSoquete + "<br>" +
			"Potência Máx: " + pcsPotenciaMax + " W<br>"
        ;
    }
    else if(pcsFonte==="Integrado") {
        texto += "Potência: " + pcsPotencia + " W<br>" +
            "Temperatura da Cor: " + temperaturaCor(pcsTempCor) +" ("+ pcsTempCor + " K)<br>" +
            "Fluxo luminoso: " + pcsFluxo + " lm<br>"
        ;
    }

    texto += "Tensão: " + pcsTensao + "<br>" +
        "Posição: " + pcsEmbutirSobrepor + " no(a) " + pcsPosicao + "<br>" +
        "Ambiente: " + pcsAplicacao + "<br>" +
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

    texto += "<br>";

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
        texto += "<br>";
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
        texto += "<br>";
    }

    texto += "Cor: " + pcsCor + "<br>" +
        "Material: " + pcsMaterial + "<br>";

    if(pcsAcabamento) {
	texto += "Acabamento: " + pcsAcabamento + "<br>";
    }	

    if(pcsObs) {
        texto += pcsObs + "<br>";
    }

    

    let adicional = "";
	
    $.get("texto.txt", function(text){
        adicional = text;
    },"text");
		
	console.log(adicional);
	
	texto += "<br>"+adicional;
		
	$('#descricaoFinal').html(texto);
}

function writeInfoLamp () {
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
        "Fabricante:" + lampFabricante + "<br>" +
        "Referência: " + lampReferencia + "<br>" +
        "Tecnologia: " + lampTecnologia + "<br>" +
        "Modelo: " + lampModelo + "<br>" +
        "Origem: " + lampOrigem + "<br>" +
        "Potência: " + lampPotencia + " W<br>" +
        "Tensão: " + lampTensao + " V<br>" +
        "Temperatura da Cor: " + temperaturaCor(lampTempCor) +" ("+ lampTempCor + " K)<br>" +
        "Ângulo de Abertura: " + lampAngulo + "º<br>" +
        "Fluxo Luminoso: " + lampFluxo + " lm<br>" +
        "Vida Útil Estimada: " + lampVidaUtil + " horas<br>" +
        "Soquete: " + lampSoquete + "<br>" +
        "Dimerizável: " + lampDimerizavel + "<br>" +
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
    
        texto += "<br>";

        if(lampObs) {
            texto += lampObs + "<br>";
        }

        
		//document.getElementById("descricaoFinal").innerHTML = texto;
		
		let adicional = "";
        $.get("texto.txt", function(text){
            adicional = text;
        },"text");
		
		
		
		texto += "<br>"+adicional;
		
		$('#descricaoFial').html(texto);
}
$("#form1").change(function(){
    writeInfoPcs();
});

$("#form2").change(function(){
    writeInfoLamp();
});
































