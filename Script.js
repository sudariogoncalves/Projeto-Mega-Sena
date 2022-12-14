function HabilitaBotaoJogar() {
   if (document.getElementById('numero6').value != "") {
      document.getElementById('jogar').disabled = false;
   } else {
      document.getElementById('jogar').disabled = true;
   }
}

function VerificarNumero(numero) {
   if (isNaN(numero.value)) {
      alert("Não é aceito digitação diferente de numero.");
      numero.value = "";
      numero.focus();
      return;
   }
   if (numero.id == "numero1") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero2") {
      if (numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero3") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero4") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value == "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero5") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero1").value ||
         numero.value == document.getElementById("numero6").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.id == "numero6") {
      if (numero.value == document.getElementById("numero2").value ||
         numero.value == document.getElementById("numero3").value ||
         numero.value == document.getElementById("numero4").value ||
         numero.value == document.getElementById("numero5").value ||
         numero.value == document.getElementById("numero1").value
      ) {
         alert("O numero esta repetido");
         numero.value = "";
         numero.focus();
         return;
      }
   }
   if (numero.value < 1 || numero.value > 60) {
      alert("Este numero esta fora do parâmetro do jogo 1 a 60!");
      numero.value = ""; /*Avalia o numero digitado e limpa o campo.*/
      numero.focus(); /*Posiciona ou permanece no campo pra correção*/
   }
}

function Jogar() {
   var resultado = ['5', '10', '17', '27', '32', '37'];
   var verificacao = 0

   for (var i = 0; i <= 5; i++) {
      var numero = resultado[i];
      if (document.getElementById("numero1").value == numero ||
         document.getElementById("numero2").value == numero ||
         document.getElementById("numero3").value == numero ||
         document.getElementById("numero4").value == numero ||
         document.getElementById("numero5").value == numero ||
         document.getElementById("numero6").value == numero) {
         verificacao = verificacao + 1;
      }
   }
   if (verificacao > 0) {
      document.getElementById("resultado").innerHTML = "Parabéns! Voce fez: " + verificacao + " ponto(s)";
   } else {
      document.getElementById("resultado").innerHTML = "Voce não acertou nenhum numero, tente novamente.";
   }
}
function JogarNovamente() {
   document.getElementById('numero1').value = '';
   document.getElementById('numero2').value = '';
   document.getElementById('numero3').value = '';
   document.getElementById('numero4').value = '';
   document.getElementById('numero5').value = '';
   document.getElementById('numero6').value = '';
   document.getElementById('resultado').innerHTML = '';
   document.getElementById('jogar').disabled = true;
}

function SairDoSitema() {
   window.close();
}
