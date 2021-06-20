$(document).ready(function(){
//    var $clickNombre = $("#ingNomb");
    var inpNomb = "nada";
    var inpPes = 0;
    var inpCot =0;
    var inpDol = 0;
    console.log(inpNomb + " antes del function");

    let cantidad = 0;
    const consultas = [];

    $("#btnConsulta").click(function(){
        inpNomb = ($("#ingNomb").val());
        console.log(inpNomb);
        $("#valueInpNomb").append("<span>Hola </span>"  + inpNomb + "<span>.</span>");


        inpPes = ($("#ingPes").val());
        console.log(inpPes);
        $("#valueInpPes").append('<span>Ingreso $</span>' + inpPes);

        inpCot =($("#ingCot").val());
        console.log(inpCot);
        $("#valueInpPes").append('<span> a una cotización de $</span>' + inpCot);



        let boton = document.getElementById("btnConsulta2");
        boton.addEventListener ("click", respClickBoton);


        function respClickBoton () {


            class Monedas {
                constructor (nombre, pesos, dolares, cotiza){
                    this.nombre = nombre;
                    this.pesos = pesos;
                    this.dolares = dolares;
                    this.cotiza = cotiza;
                }
        
        
        
        
                cantConsultas () {
                //    cantidad =parseInt(prompt ("Cuantos cotizaciones desea realizar? "));
                cantidad= 1;  //PRUEBA
                }
        
                pedirNombre () {
                    for (let i =1; i<=cantidad; i++){
                        const divisas = [];
        
                        divisas.push(inpNomb);
        
                        divisas.push(inpPes); 
        
                        divisas.push(inpCot);
        
                        inpDol = inpPes / inpCot; 
                        divisas.push(inpDol);                    
        
                        consultas.push(divisas);
        
                        let parrafo = document.createElement("p");
        
                        //parrafo.innerHTML = `<h2>$${inpPes} pesos equivalen a US$${inpDol.toFixed(2)} dolares. Gracias ${inpNomb} por tu consulta. </h2>`;    
                        //document.body.appendChild (parrafo);

                        $("#resultado").append(`<h2>$${inpPes} pesos equivalen a US$${inpDol.toFixed(2)} dolares. Gracias ${inpNomb} por tu consulta. </h2>`);
        
                    }
                }
            }
        
        
            const moneda1 = new Monedas ("Nombre", "0", "0" , "1" );
        
            moneda1.cantConsultas();
            moneda1.pedirNombre();
        
            console.log(moneda1);
            console.log(typeof moneda1);
        
            console.log(consultas);
        
        //    let orden = prompt("Desea ordenar su de forma alfabetica? En caso afirmativo ponga SI");
        //    if (orden === "SI"){
        //        consultas.sort();
        //        console.log(consultas);
        //    }
        
        }












        return inpNomb, ingPes, ingCot;

    });

    console.log(inpNomb + " despues del function");


});


