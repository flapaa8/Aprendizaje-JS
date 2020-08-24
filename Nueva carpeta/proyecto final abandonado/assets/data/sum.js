var newSelected;
let products;
var total;
var sum = 0
$(document).ready(function () {
    var selected = localStorage.getItem("selected");
    selectedParsed = JSON.parse(selected)
    var data = localStorage.getItem("data");
    console.log(data)
    newSelected = selectedParsed
    console.log(newSelected)
    products = $('.products');
    total = $('.ciopre');
    console.log(products)
    resumen();
    
})
function resumen() {
    for (i = 0; i < newSelected.length; i++) {
        products.append( ` <li>
    <h5>${newSelected[i].marca} ${newSelected[i].modelo} ${newSelected[i].color} ${newSelected[i].estado}................................................$${newSelected[i].precio} </h5>
</li>`);
    sum = sum + newSelected[i].precio    
    }
    total.append(`<h4> ${sum}</h4>`)
  console.log(sum)
}