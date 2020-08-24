$( document ).ready(function() {
    
    
    div1 = $(`.div1`);   
        mostrarProductos();
        mostrarOrdenes();
});

$( document ).ready(function() {
    
    
    contenedorDeProductos = $(`.div1`);    
    console.log(contenedorDeProductos)
    contenedorDeOrdenes =  [];
    //contenedorDeOrdenes = $(".btn -secondary");
        mostrarProductos();
       // mostrarOrdenes();
});
       
       function mostrarProductos(){
        finalSelection.forEach(function (destination, index)   { contenedorDeProductos.append(`
        <h1> A que destino le gustaria ir?</h1>
    <input type="button" value="${finalSelection.destination}" class="destination">`)})}









