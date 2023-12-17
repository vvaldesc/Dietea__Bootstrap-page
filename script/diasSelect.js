const seleccionarDia=document.getElementById("seleccionarDia");

let frag = document.createDocumentFragment();
for (let index = 0; index < 31; index++) {
    let option = document.createElement("OPTION")
    option.textContent=index+1;
    option.value = index + 1;
    frag.appendChild(option);

}

seleccionarDia.appendChild(frag);
