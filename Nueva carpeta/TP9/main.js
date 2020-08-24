   //body.append( `<p>Test</p>` )       //append basico para guardar   
   var eleccion = []; 
   var destination = [];
    window.onload = function() {
        destination = document.getElementsByClassName ("destination");
        for(let i = 0; i < destination.length; i++){ 
          destination[i].addEventListener('click', () => {eleccion.pop()   
              eleccion.push(event.target.value); })
          console.log(eleccion)
        }
    var medio = [];
    var transport = [];
        transport = document.getElementsByClassName("transport")
        for(let i = 0; i < transport.length; i++){ 
            transport[i].addEventListener('click', () => {medio.pop()   
                medio.push(event.target.value); })}
            console.log(medio) 
           }
    var cf = [];  
    cf = document.getElementsByClassName("cf");
    for(let i = 0; i < cf.length; i++){ 
        cf[i].addEventListener('click', () => {cf.pop()   
            cf.push(event.target.value); 
        if (cf.value == "cancelar"){
            window.location.reload();

        }
        else (cf.value=="confirmar"); {
            let calculate = destination+medio+dur;
            console.log(calculate)
}
    
    })


}           
        
       
    













        
      
    
       