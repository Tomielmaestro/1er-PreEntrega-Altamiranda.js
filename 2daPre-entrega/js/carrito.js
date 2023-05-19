let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));

const carritoVacio = document.querySelector("#carrito-vacio");
const containerProductos = document.querySelector("#container-productos");
const productCard = document.querySelector("#productCard");
const totalAndCantidad = document.querySelector("#total-comprar");
let deleteProduct = document.querySelectorAll(".delete-product");
const total = document.querySelector("#total");
const btnComprar = document.querySelector(".comprar");

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    carritoVacio.classList.add("active");
    totalAndCantidad.classList.remove("active");
    containerProductos.classList.remove("active");
    containerProductos.innerHTML = "";
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("shopping-product");
      div.innerHTML = `<img src="${producto.imagen}" alt="${producto.titulo}">
      <div class="shopping-product-details">
        <div class="title-price">
          <h3>${producto.titulo}</h3>
          <span>$${producto.precio}</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio dignissimos quasi sapiente. Veniam, amet?</p>
        <div class="size">
          <label for="">SIZE :</label>
          <select name="SIZE" id="size">
            <option>M</option>
            <option>S</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div class="cantidad-borrar">
          <h4>Cantidad :<input type="number" value="${producto.cantidad}" min="1"></h4>
          <button id="${producto.id}" class="delete-product">Delete</button>
        </div>
      </div>`;
      containerProductos.append(div);
    });
    actualizarBotonesDelete();
    actualizarTotal();
  } else {
    carritoVacio.classList.remove("active");
    totalAndCantidad.classList.add("active");
    containerProductos.classList.add("active");
  }
}
cargarProductosCarrito();

function actualizarBotonesDelete() {
  deleteProduct = document.querySelectorAll(".delete-product");

  deleteProduct.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      Toastify({
        text: "Producto Eliminado",
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
      const idDelete = e.target.id;
      const productDelete = productosEnCarrito.findIndex(
        (producto) => producto.id === idDelete
      );
      productosEnCarrito.splice(productDelete, 1);
      cargarProductosCarrito();
      localStorage.setItem(
        "productosEnCarrito",
        JSON.stringify(productosEnCarrito)
      );
    });
  });
}

btnComprar.addEventListener("click", () => {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  carritoVacio.classList.remove("active");
  totalAndCantidad.classList.add("active");
  containerProductos.classList.add("active");
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Compra Exitosa",
    showConfirmButton: false,
    timer: 1500,
  });
});

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  total.innerText = `$${totalCalculado}`;
}
