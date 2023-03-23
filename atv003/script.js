const buffetQuilo = document.getElementById("buffetQuilo");
const valor = document.getElementById("consumo");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const result = buffetQuilo.value * (valor.value / 1000);
    
    document.getElementById(`valorPagar`).innerHTML = `Valor a pagar R$${result} `
})