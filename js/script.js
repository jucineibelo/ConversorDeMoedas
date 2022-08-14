function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; //somente o valor 
    var valorEmDolarNumerico = parseFloat(valor); // transforma o valor de texto para moeda
  
    var valorEmReal = valorEmDolarNumerico * 5.06;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  