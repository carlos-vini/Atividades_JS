const titulo = document.getElementById("filme");
const minuto = document.getElementById("minutos");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    const result = Math.floor(minuto.value / 60);
    const resto = minuto.value % 60;
    
    document.getElementById(`titulo`).innerHTML = `${titulo.value}`
    document.getElementById(`hora`).innerHTML = `${result} horas e ${resto} minutos.`
})