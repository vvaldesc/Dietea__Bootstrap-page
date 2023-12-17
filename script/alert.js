const alertReservado = document.getElementById("alertReservado")
const reservar = document.getElementById("reservar")

reservar.addEventListener("click", () => {
    alertReservado.classList.toggle("d-none");
})
