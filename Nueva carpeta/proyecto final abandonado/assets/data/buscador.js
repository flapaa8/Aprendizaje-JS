var formulario;
formulario = $("#form");
const searchButton = $("#cfirm");
contenedorDeProductos = $(`#contenedor-de-productos`); 
const filtrar = () => {
    contenedorDeProductos.html(``);
    var busqueda = formulario.val();
    var step1 = busqueda.toLowerCase();
    data.forEach(function (element, index) {
        let modelo = element.modelo.toLowerCase();
        if (step1 == modelo) {
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
        }
    })
    if(contenedorDeProductos.append===''){
        contenedorDeProductos.append(`
         <h1> No se encontraron resultados </h1>
        `)
}

console.log("activado")
}
searchButton.click(filtrar);