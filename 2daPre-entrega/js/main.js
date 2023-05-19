let productos = [];

fetch("./js/productos.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    cargarProductos(productos);
  });

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".btn-categoria");
const titleCategoria = document.querySelector("#title-categoria");
let btnAgregar = document.querySelectorAll(".btn-cart");
const numCantidad = document.querySelector(".num-cantidad");
let favProduct = document.querySelector("#cant-fav");
const selectBox = document.querySelector(".select-box");
const search = document.querySelector("#search");

function cargarProductos(productElegido) {
  contenedorProductos.innerHTML = "";
  productElegido.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.setAttribute("data-name", producto.id);
    div.innerHTML = `
        <div class="fav-product">
          <button id="${producto.id}" class= "btnFav bi bi-heart-fill"></button>
        </div>
        <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img">
        <img src="${producto.img2}" alt="${producto.titulo}" class="efecto-hover">
        <button class="btn-cart" id="${producto.id}"><i class="bi bi-cart-plus"></i>Ad to Cart</button>
        <div class="details-product">
            <h3 class="title-product">${producto.titulo}</h3>
            <p class="price-product">$${producto.precio}</p>
        </div>`;

    contenedorProductos.append(div);
  });
  BtnFav();
  actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (e.currentTarget.id != "todos") {
      const productCategory = productos.find(
        (product) => product.categoria.id === e.currentTarget.id
      );
      titleCategoria.innerHTML = productCategory.categoria.nombre;

      const productElegido = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productElegido);
    } else {
      titleCategoria.innerHTML = "New Arrivals";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  btnAgregar = document.querySelectorAll(".btn-cart");

  btnAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(
  localStorage.getItem("productosEnCarrito")
);

productosEnCarritoLS
  ? ((productosEnCarrito = productosEnCarritoLS), actualizarNumCantidad())
  : (productosEnCarrito = []);

function agregarAlCarrito(e) {
  Toastify({
    text: "Producto En Carrito",
    duration: 3000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#252323",
      color: "#FFFFFF",
      borderRadius: "1rem",
      textTransform: "uppercase",
      fontSize: "15px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  const idBoton = e.currentTarget.id;

  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumCantidad();

  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
}

let productosEnCarritoFav = [];

function BtnFav() {
  likeBtn = document.querySelectorAll(".btnFav");
  btnAgregar = document.querySelectorAll(".btn-cart");

  likeBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let colorFav = btn.classList.toggle("btn-fav-active");
      const idBtn = e.currentTarget.id;

      const favAgregado = productos.find((el) => el.id === idBtn);
      const idFav = favAgregado.id;

      if (productosEnCarritoFav.some((el) => el.id === idFav)) {
        const index = productosEnCarritoFav.findIndex((el) => {
          el.id === idFav;
        });
        productosEnCarritoFav.splice(index, 1);
      } else {
        productosEnCarritoFav.push({ id: idBtn, fav: colorFav, favorito: 1 });
      }
      LengthFav();
    })
  );
}

const user = JSON.parse(localStorage.getItem("login-success") || false);
if (!user) {
  window.location.href = "../seccion/login.html";
}
const logout = document.querySelector("#Logout");

logout.innerHTML = user.name;

logout.addEventListener("click", () => {
  localStorage.removeItem("login-success");
  window.location.href = "../seccion/login.html";
});
search.addEventListener("input", (e) => {
  const filtrado = productos.filter((el) => {
    let encontrado = el.categoria.nombre.includes(e.target.value);
    return encontrado;
  });
  cargarProductos(filtrado);
});

selectBox.addEventListener(
  "click",
  (e) => {
    let value = e.target.value;

    let precios = productos.map((el) => el);
    if (value === "mayorPrecio") {
      let mayorPrecio = precios.sort((a, b) => a.precio + b.precio);
      cargarProductos(mayorPrecio);
    } else if ((value = "menorPrecio")) {
      let menorPrecio = precios.sort((a, b) => a.precio - b.precio);
      cargarProductos(menorPrecio);
    }
  },
  true
);

function LengthFav() {
  let num = productosEnCarritoFav.reduce(
    (acc, product) => acc + product.favorito,
    0
  );

  favProduct.innerHTML = num;
}

function actualizarNumCantidad() {
  let num = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numCantidad.innerHTML = num;
}

const startSlider = () => {
  let currentSlide = 0;
  let slides = document.querySelectorAll(".slide");

  const nextSlide = () => {
    slides[currentSlide].classList.remove("active");
    // slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    // slides[currentSlide].style.display = 'block';
    slides[currentSlide].classList.add("active");
  };

  // slides[currentSlide].style.display = 'block';
  setInterval(nextSlide, 3000);
};
startSlider();
