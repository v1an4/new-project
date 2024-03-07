var dataglobal = formatarData(new Date());

function formatarData(date) {
  var options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleString("pt-BR", options);
}


function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
    console.log(dataglobal)
 
 }
 
 function show(nome){
    document.getElementById("nomeprint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex"
    }
    
 }
 
 function fechar(){
    document.getElementById("error").style.display = "none";
 }

 function calculartotal() {
    var selectLanche = document.getElementById("selectprato");
    var selectCafe = document.getElementById("selectsobremesa");
    var selectDoce = document.getElementById("selectbebida");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var lanche = 0;
    var cafe = 0;
    var doce = 0;
  
    // Adicione os valores correspondentes às opções selecionadas
    switch (selectLanche.value) {
      case "bauru":
        total += 7;
        prato = 7;
        break;
      case "misto quente":
        total += 5;
        prato = 5;
        break;
      case "torta de frango":
        total += 6;
        prato = 6;
        break;
      case "enroladinho de salsicha":
        total += 4.50;
        prato = 4.50;
      case "esfiha":
        total += 5;
        prato = 5;  
    }
  
    switch (selectCafe.value) {
      case "achocolatado":
        total += 8;
        bebida = 8;
        break;
      case "expresso":
        total += 6;
        bebida = 6;
        break;
      case "capuccino":
        total += 8.50;
        bebida = 8.50;
        break;
      case "macchiato":
        total += 9;
        bebida = 9;
        break;
      case "irish coffee":
        total += 10;
        bebida = 10;
        break;
    }
  
    switch (selectDoce.value) {
      case "torta de morango":
        total += 25.50;
        sobremesa = 25.50;
        break;
      case "pudim de leite":
        total += 30.50;
        sobremesa = 30.50;
        break;
      case "tiramissu":
        total += 16.80;
        sobremesa = 16.80;
        break;
      case "brownie":
         total += 9.80;
         sobremesa = 9.80;
         break;
      case "bolo de chocolate com creme de café":
         total += 12.50;
         sobremesa = 12.50;
         break;
    }
  
    document.getElementById("cafe-pronto").textContent = 
      selectCafe.value + " - R$" + cafe;
    document.getElementById("doce-pronto").textContent = 
      selectDoce.value + " - R$" + doce;
    document.getElementById("lanche-pronto").textContent = 
      selectLanche.value + " - R$" + lanche;
    document.getElementById("pedido-pronto").style.display = "flex";
    // Exiba o total no span
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
  }
  
  function limpar() {
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = " ";
    document.getElementById("resultado").value = " ";
    document.getElementById("selectDoce").value = "selecione uma doce";
    document.getElementById("selectCafe").value = "selecione uma cafe";
    document.getElementById("selectLanche").value = "selecione um lanche";
  }

  function enviar() {
    var numeroTelefone = "5541999999999";
  
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=NOME DO RECEPTOR(A): " +
      nomeGlobal +
      " - " +
      mensagemGlobal +
      " - " +
      formatarData(dateGlobal);
  
    window.open(linkWhatsApp, "_blank");
  }