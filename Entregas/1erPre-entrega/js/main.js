alert("Hola, bienvenido a FhasionAlt!");

let ingreso = true;
let seleccionarCantidad;
let total = 0;

//funcion
const cantidad = (cant, precio) => {
    return cant * precio;
};


if(ingreso) {
    let opciones = parseInt(prompt("Elegir catálogo: \n1- Hombre.\n2- Mujer.\n3- Salir."))
    while(opciones != 3) {
        switch(opciones) {
            case 1:
                let productosHombre = parseInt(prompt("Elegir los siguientes productos disponibles: \n1- buzo $15. \n2- Jean $20. \n3- zapas $50. \n4- Volver."));
                switch(productosHombre){
                    case 1:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es buzo, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 15);
                    continue;
                    case 2:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es Jean, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 20);
                    continue;
                    case 3:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es zapas, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 50);
                    continue;
                    case 4:
                        break;
                    default:
                        alert("Opcion no válida");
                    continue;
                }
            break;
            case 2:
                let productosMujer = parseInt(prompt("Elegir los siguientes productos disponibles: \n1- top $10. \n2-pollera $30. \n3- tacos $100. \n4- Volver."));
                switch(productosMujer){
                    case 1:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es top, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 10);
                    continue;
                    case 2:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es pollera, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 30);
                    continue;
                    case 3:
                        seleccionarCantidad = Number(prompt("El producto seleccionado es tacos, indique la cantidad"));
                        total += cantidad(seleccionarCantidad, 100);
                    continue;
                    case 4:
                        break;
                    default:
                        alert("Opcion no válida");
                    continue;
                }
            break;
        }



        //Condicion de salida
        opciones = parseInt(prompt("Elegir catálogo: \n1- Hombre.\n2- Mujer.\n3- Salir."))
    }
}
alert("El total de la compra es: " + total);