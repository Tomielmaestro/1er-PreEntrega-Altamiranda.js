alert("Hola, bienvenido a FhasionAlt!");



const productos = [
    {id: 1, nombre: "top", precio: 1202},
    {id: 2, nombre: "remera", precio: 1514},
    {id: 3, nombre: "vestido", precio: 1817},
    {id: 4, nombre: "mono", precio: 1716},
    {id: 5, nombre: "short", precio: 1917},
    {id: 6, nombre: "polleras", precio: 1262},
    {id: 7, nombre: "bikers", precio: 1287},
    {id: 8, nombre: "bodys", precio: 1988},
    {id: 9, nombre: "jean", precio: 1655},
    {id: 10, nombre: "tacos", precio: 1098},
    {id: 11, nombre: "falda", precio: 1998},
    {id: 12, nombre: "campera", precio: 1272}
];
const filtrarServicio = (array, filtro)=> {
    const filtrado = array.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}
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
const startSlider= ()=> {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slide');


    const nextSlide = ()=> {
        slides[currentSlide].classList.remove('active');
        // slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        // slides[currentSlide].style.display = 'block';
        slides[currentSlide].classList.add('active');
    }

    // slides[currentSlide].style.display = 'block';
    setInterval(nextSlide, 3000);
}
startSlider();