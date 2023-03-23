const nomeCarro = document.getElementById("veiculo");
const valor = document.getElementById("preco");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const valorEntrada = valor.value / 2;
    const valorParcelas = (valor.value / 2) / 12;
    
    document.getElementById(`nomeCarro`).innerHTML = `${nomeCarro.value}`
    document.getElementById(`valorEntrada`).innerHTML = `Entrada de R$${valorEntrada}`
    document.getElementById(`valorParcelas`).innerHTML = `12 X de R$${valorParcelas}`
})