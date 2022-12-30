function addUser(){
    var nome1 = document.getElementById("inputNome1").value;
    var nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game_page.html";   
}
function carregar(){
    var nome1 = localStorage.getItem("player1");
    var nome2 = localStorage.getItem("player2");
    document.getElementById("legendaNome1").innerHTML = nome1;
    document.getElementById("legendaNome2").innerHTML = nome2;
}
