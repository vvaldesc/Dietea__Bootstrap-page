    // Precargar las imágenes al cargar la página

    //Lo primero que hace el script es crear el fragmento
    let fechaIni = new Date();

    const fragmento = document.createDocumentFragment();

    window.addEventListener('load', function () {

        let i=0;

        preloadImage('../assets/img/carr1.jpg', 'preload-image--'+i++);
        preloadImage('../assets/img/carr2.jpg', 'preload-image--'+i++);
        preloadImage('../assets/img/carr3.jpg', 'preload-image--'+i++);

        console.log("milisegundos para precargar las imágenes: ");
        console.log(new Date() - fechaIni)
      });
  
      function preloadImage(url, id) {
        let div_preCarga = document.createElement("div");
        div_preCarga.id=id.toString();
        div_preCarga.style.display="none";
        var img = new Image();
        img.src = url;
        img.onload = function () {
            div_preCarga.appendChild(img);
          fragmento.append(div_preCarga);
        };
      }

document.getElementsByTagName("nav")[0].append(fragmento);
