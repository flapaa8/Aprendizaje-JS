var botonAgregarOrdenes;
var selected = [];
$(document).ready(function () {
    contenedorDeProductos = $(`#contenedor-de-productos`);   //creo la pagina 
    carrito = $(`#cart`);
    mostrarProductos();
    localStorage.setItem('data', JSON.stringify(this.data))
});
//insercion con foreach de cada articulo al html
function mostrarProductos() {
    data.forEach(function (element, index) {
        contenedorDeProductos.append(`
                    <article class="search-item">
                        <div class="col-4-12">
                    <img src=${element.img} class="imagenes">
                   </div>
                    <div class="col-8-12">
            <h2  id="${element.id}">${element.marca} ${element.modelo} </h2>
            <p>$${element.precio}</p>
            <div>
                <input type="button" id = "cart-btn" data-id="${index}" class="btn -secondary -button"  value="Agregar al carrito" >
                </div>
                        </div>
                    </article>
                </div>`)
    })
    //evento que agrega los items  al carrito segun posicion en su array
    botonAgregarOrdenes = $(".-button");
    botonAgregarOrdenes.click(function (event) {
        var indexSelected = $(event.target).data("id");
        agregarYMostrarOrdenes(indexSelected);
    });
    function agregarYMostrarOrdenes(indexSelected) {
        let cartList = document.getElementById('cart-list');
        cartList.insertAdjacentHTML('beforeend', `<li>${data[indexSelected].marca} ${data[indexSelected].modelo}</li>`);
        selected.push(data[indexSelected]);
        localStorage.setItem('selected', JSON.stringify(this.selected));
    }
    console.log(selected);
}





















