var listaConvidados = [];

function AddNome() {
    var nomeAdicionado = document.getElementById("textInput").value;
    listaConvidados.push(nomeAdicionado);
    console.log(listaConvidados);
    document.getElementById("Lista").innerHTML = listaConvidados.toString();
}

function MostrarNomes() {
    var i = listaConvidados.join("<br>");
    document.getElementById("listaAdicionados").innerHTML = i.toString();
    document.getElementById("btnMostrarNomes").style.display = "block";
}