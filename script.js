$(document).ready(function(){

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

        inpPes = ($("#ingPes").val());
        console.log(inpPes);

        inpCot =($("#ingCot").val());
        console.log(inpCot);


        $("#valueEntr").append(`<div id="datosCons" style="display:none"><p>Hola ${inpNomb}. Ingreso $${inpPes} a una cotizacion de $ ${inpCot} </p></div>`);

        $("#datosCons").css ({"color": "blue",
                                "font-size": "30px",
                                "font-family": "Open Sans",
                                "font-weight": "bold"
                            })
                        .delay(1000)
                        .slideDown(5000, function(){
                            $("#datosCons").css("font-size", "18px")
                        });


        cantidad++;
        console.log(cantidad);


        $("#btnConsulta2").click(function(){


            class Monedas {
                constructor (nombre, pesos, dolares, cotiza){
                    this.nombre = nombre;
                    this.pesos = pesos;
                    this.dolares = dolares;
                    this.cotiza = cotiza;
                }
        
        
        
        
                cantConsultas () {
                //    cantidad =parseInt(prompt ("Cuantos cotizaciones desea realizar? "));
                cantidad= 1;  
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
        


                        $("#resultado").append(`<h2 id="datosRes" style="display:none">$${inpPes} pesos equivalen a US$${inpDol.toFixed(2)} dolares. Gracias ${inpNomb} por tu consulta. </h2>`);

                         $("#datosRes").css ({"color": "blue",
                         "font-size": "42px",
                         "font-family": "Open Sans",
                         "font-weight": "bold"
                                        })
                                        .delay(1000)
                                        .slideDown(5000, function(){
                                             $("#datosRes").css("font-size", "30px")
                                         });
                                
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
        

        // var datConsString = JSON.stringify(consultas);
        // console.log(datConsString + "Datos para json");

        });






        // //Declaramos la url que vamos a usar para el GET
        // const URLGET = "https://jsonplaceholder.typicode.com/posts"
        // //Agregamos un botón con jQuery
        // $("body").prepend('<button id="btn1">GET</button>');
        // //Escuchamos el evento click del botón agregado
        // $("#btn1").click(() => { 
        //     $.get(URLGET, function (respuesta, estado) {
        //         if(estado === "success"){
        //             let misDatos = respuesta;
        //             for (const dato of misDatos) {
        //             $("body").prepend(`<div>
        //                                 <h3>${dato.title}</h3>
        //                                 <p> ${dato.body}</p>
        //                                 </div>`);
        //             }  
        //         }
        //     });
        // });



        const URLJSON = "datos.json";
        $("body").prepend('<button id="btnjson">JSON</button>');
        $("#btnjson").click(() => {
            $.getJSON(URLJSON, function (libre, blue){
                if(blue === "13.20"){
                    let misDatos = libre;
                    for (const dato of misDatos) {
                        $("body").prepend('<div> <h3> ${dato.libre}</h3> <p> ${dato.blue}</p> </div> ')
                    }
                }
            });
        });







        return inpNomb, ingPes, ingCot;

    });

    console.log(inpNomb + " despues del function");


});


