let base, altura, largo, ancho, valorX, resultado,opcion;

do {
    opcion = prompt("Ingresa la opcion\n1.area del trinagulo\n2.area del Rectangulo\n3.Perminetro del rectangulo\n4.calcular Y=X^2 + 6X+9\n5.salir", "aqui")
    if (opcion == 1) {
        base = prompt("ingresar la base", "aqui");
        altura = prompt("ingresar la altura", "aqui");
        resultado = 1 / 2 * base * altura;
        alert("el resultado es " + resultado);

    } else if (opcion == 2) {
        largo = prompt("ingresar el largo", "aqui");
        ancho = prompt("ingresar el ancho", "aqui");
        resultado = largo * ancho;
        alert("el resultado es " + resultado);

    } else if (opcion == 3) {
        largo = prompt("ingresar el largo", "aqui");
        ancho = prompt("ingresar el ancho", "aqui");
        resultado = 2 * largo + 2 * ancho;
        alert("el resultado es " + resultado);

    } else if (opcion == 4) {
        valorX = prompt("ingresar el valor de x", "aqui");
        resultado = Math.pow(valorX, 2) + 6 * valorX + 9;
        alert("El resultado es " + resultado);

    } else if (opcion == 5) {
        alert("ADIOS");

    } else {
        alert("opcion invalida");
    }

} while (opcion != 5);
