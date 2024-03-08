var dataglobal = formatarData(new Date());
var totalGlobal = 0;

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
    var selectLanche = document.getElementById("selectlanche");
    var selectCafe = document.getElementById("selectcafe");
    var selectSuco = document.getElementById("selectsuco");
    var selectFondue = document.getElementById("selectfondue");
    var selectBolo = document.getElementById("selectbolo");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var lanche = 0;
    var cafe = 0;
    var suco = 0;
    var bolo = 0;
    var fondue = 0;
  
    // Adicione os valores correspondentes às opções selecionadas
    switch (selectLanche.value) {
      case "Bauru":
        total += 7;
        lanche = 7;
        break;
      case "Misto quente":
        total += 5;
        lanche = 5;
        break;
      case "Torta de frango":
        total += 6;
        lanche = 6;
        break;
      case "Enroladinho de salsicha":
        total += 4.50;
        lanche = 4.50;
      case "Esfiha":
        total += 5;
        lanche = 5;  
    }
  
    switch (selectCafe.value) {
      case "Achocolatado":
        total += 8;
        cafe = 8;
        break;
      case "Expresso":
        total += 6;
        cafe = 6;
        break;
      case "Capuccino":
        total += 8.50;
        cafe = 8.50;
        break;
      case "Macchiato":
        total += 9;
        cafe = 9;
        break;
      case "Irish coffee":
        total += 10;
        cafe = 10;
        break;
    }
  
    switch (selectSuco.value) {
      case "Suco de laranja":
        total += 10;
        suco = 10;
        break;
      case "Suco de uva":
        total += 10;
        suco = 10;
        break;
      case "Suco de abacaxi":
        total += 10;
        suco = 10;
        break;
      case "Suco de limao":
         total += 10;
         suco = 10;
         break;
      case "Suco de maracuja":
         total += 10;
         suco = 10;
         break;
    }
  
    switch (selectBolo.value) {
      case "Torta de morango":
        total += 20.50;
        bolo = 20.50;
        break;
      case "Bolo de leite ninho":
        total += 20.50;
        bolo = 20.50;
        break;
      case "Bolo de fuba":
        total += 16.80;
        bolo = 16.80;
        break;
      case "Torta de uva":
         total += 14.00;
         bolo = 14.00;
         break;
      case "Bolo de chocolate com creme de café":
         total += 16.50;
         bolo = 16.50;
         break;
    }
  
    switch (selectFondue.value) {
      case "Tomate cereja":
        total += 10.50;
        fondue = 10.50;
        break;
      case "Batatas":
        total += 13.50;
        fondue = 13.50;
        break;
      case "Cubos de filé mignon":
        total += 16.80;
        fondue = 16.80;
        break;
      case "Cenoura":
         total += 8.80;
         fondue = 8.80;
         break;
      case "Cubos de presunto":
         total += 8.50;
         fondue = 8.50;
        break;
    }
  
    console.log(fondue, cafe, bolo, lanche, suco)
    document.getElementById("cafe-pronto").textContent = 
      selectCafe.value + " - R$" + cafe;
      document.getElementById("fondue-pronto").textContent = 
      selectFondue.value + " - R$" + fondue;
      document.getElementById("bolo-pronto").textContent = 
      selectBolo.value + " - R$" + bolo;
    document.getElementById("suco-pronto").textContent = 
      selectSuco.value + " - R$" + suco;
    document.getElementById("lanche-pronto").textContent = 
      selectLanche.value + " - R$" + lanche;
    document.getElementById("pedido-pronto").style.display = "flex";
    // Exiba o total no span
    resultadoSpan.textContent = "R$ " + total.toFixed(2);

    totalGlobal = total.toFixed(2);
    
  }
  
  function limpar() {
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = " ";
    document.getElementById("resultado").value = " ";
    document.getElementById("selectBolo").value = "selecione uma bolo";
    document.getElementById("selectCafe").value = "selecione uma cafe";
    document.getElementById("selectLanche").value = "selecione um lanche";
    document.getElementById("selectSuco").value = "selecione um suco";
    document.getElementById("selectFondue").value = "selecione um fondue";

  }

  function zap() {
    var numeroTelefone = "5541995078586";
    console.log(totalGlobal)
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=NOME DO RECEPTOR(A): " +
      dataglobal +
      " - " + " R$: " +
      totalGlobal;
  
    window.open(linkWhatsApp, "_blank");
  }