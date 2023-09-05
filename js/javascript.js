function simularLanzamientos() {
  const numLanzamientos = prompt("Ingrese el numero de lanzamientos:");
  let mensaje = '';

  for (let i = 1; i <= numLanzamientos; i++) {
    const valorDado = Math.floor(Math.random() * 6) + 1; 
    mensaje += "Lanzamiento " + i + ": " + valorDado;

   
    if (valorDado === 6) {
      mensaje += " Obtuviste un 6 en el lanzamiento " + i + " Felicidades";
    }

    mensaje += '\n';
  }

  
  alert(mensaje);
  }