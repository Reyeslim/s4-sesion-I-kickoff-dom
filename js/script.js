const btnHamburguesa = document.getElementById("btn-hamburguesa")
const menuNavegacion = document.querySelector("#menu-navegacion")
const navLinks = document.querySelectorAll(".nav-link")

// Abrimos y cerramos menú clicando en el botón hamburguesa
btnHamburguesa.addEventListener("click", () => {
  menuNavegacion.classList.toggle("abierto")
})

// Cerramos menú al clicar en los links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuNavegacion.classList.remove("abierto")
  })
})

// Cerramos menú al clicar fuera del menú
document.addEventListener("click", (e) => {
  if (
    !menuNavegacion.contains(e.target) &&
    !btnHamburguesa.contains(e.target)
  ) {
    menuNavegacion.classList.remove("abierto")
  }
})

// EJERCICIO 1
const paso1Btn = document.getElementById("paso1-btn")
const paso1Resultado = document.getElementById("paso1-resultado")

paso1Btn.addEventListener("click", () => {
  paso1Resultado.textContent = "Texto modificado con getElementById" // modificamos el texto
  paso1Resultado.style.color = "#667eea"
  paso1Resultado.style.fontWeight = "bold"
})

// EJERCICIO 2
const paso2Btn = document.querySelector("#paso2-btn")
const paso2Texto = document.querySelector(".paso2-texto")

paso2Btn.addEventListener("click", () => {
  paso2Texto.style.backgroundColor = "#667eea"
  paso2Texto.style.color = "white"
  paso2Texto.style.padding = "1.5rem"
})

// EJERCICIO 3

const paso3Text = document.getElementById("paso3-text")
const paso3Html = document.getElementById("paso3-html")
const paso3Btn = document.getElementById("paso3-btn")

paso3Btn.addEventListener("click", () => {
  paso3Text.textContent =
    "Esto es textContent: <strong>no interpreta HTML</strong>"

  paso3Html.innerHTML = "Esto es innerHTML: <strong>sí interpreta HTML</strong>"
})

// EJERCICIO 4

const paso4Btn = document.getElementById("paso4-btn")
const paso4Contenedor = document.getElementById("paso4-contenedor")

paso4Btn.addEventListener("click", () => {
  const tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta"

  const titulo = document.createElement("h3")
  titulo.textContent = "Nueva tarjeta"

  const descripcion = document.createElement("p")
  descripcion.textContent = "Creada con createElement"

  tarjeta.appendChild(titulo)
  tarjeta.appendChild(descripcion)

  paso4Contenedor.appendChild(tarjeta)
})

// EJERCICIO 5

const paso5Btn = document.getElementById("paso5-btn")
const paso5Contenedor = document.getElementById("paso5-contenedor")

paso5Btn.addEventListener("click", () => {
  paso5Contenedor.innerHTML = ""

  usuarios.forEach((usuario) => {
    const card = document.createElement("div")
    card.className = "item-lista"
    card.textContent = `Nombre: ${usuario.nombre} - Edad: ${usuario.edad}`

    paso5Contenedor.appendChild(card)
  })
})

// EJERCICIO 6

const paso6Btn = document.getElementById("paso6-btn")
const paso6Contenedor = document.getElementById("paso6-contenedor")

paso6Btn.addEventListener("click", () => {
  const template = productos
    .map(
      (producto) => `
    <div class="tarjeta">
      <h3>${producto.nombre}</h3>
      <p class="precio">${producto.precio}</p>
    </div>
  `,
    )
    .join("")
  paso6Contenedor.innerHTML = template
})

// EJERCICIO 7

const paso7Caja = document.getElementById("paso7-caja")
const paso7Toggle = document.getElementById("paso7-toggle")
const paso7Add = document.getElementById("paso7-add")
const paso7Remove = document.getElementById("paso7-remove")

paso7Toggle.addEventListener("click", () => {
  paso7Caja.classList.toggle("activa")

  const hasActiva = paso7Caja.classList.contains("activa")
  hasActiva
    ? (paso7Toggle.style.backgroundColor = "red") &&
      (paso7Toggle.textContent = 'Quitar clase "activa"')
    : (paso7Toggle.style.backgroundColor = "#667eea") &&
      (paso7Toggle.textContent = "Añadir clase 'activa'")
})

paso7Add.addEventListener("click", () => {
  paso7Caja.classList.add("destacada")
})

paso7Remove.addEventListener("click", () => {
  paso7Caja.classList.remove("destacada")
})
