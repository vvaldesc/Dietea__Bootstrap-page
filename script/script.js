const registroA = document.getElementById("registroA");
const cajaInputs = document.getElementById("cajaInputs");

const añadirRegistro = () => {
  let campos = [
    "Confirma usuario",
    "Confirma contraseña",
    "Mail",
    "Confirma mail",
  ];

  for (const texto of campos) {
    let cajaInput = document.createElement("div");
    cajaInput.className =
      "p-4 m-0 pl-3 border height-100 col-md-6 col-lg-12 d-flex align-items-center position-relative";
    
      let nuevoInput = document.createElement("input");
    nuevoInput.className = "border-0 input_div--login";
    nuevoInput.type = "text";
    nuevoInput.name = texto;
    nuevoInput.placeholder = "";

    cajaInput.appendChild(nuevoInput);

    var nuevoSpan = document.createElement("span");

    nuevoSpan.className = "form-label position-absolute labelLogin";
    nuevoSpan.textContent = texto;
    cajaInput.appendChild(nuevoSpan);

    cajaInputs.appendChild(cajaInput);
  }
};

registroA.addEventListener("click", añadirRegistro);
