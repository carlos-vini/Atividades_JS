const nomeRemedio = document.getElementById("regrande");
const preco = document.getElementById("preco");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const result = Math.floor(preco.value * 2)
    
    document.getElementById(`nomeRepequeno`).innerHTML = `Promoção de ${nomeRemedio.value}`
    document.getElementById(`valorPromocao`).innerHTML = `Leve 2 por apenas R$${result}`
})