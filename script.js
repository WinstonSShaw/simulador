let cantidad = 0;

const consultas = [];

let boton = document.getElementById("btnConsulta");
boton.addEventListener ("click", respClickBoton);

//Obtener NOMBRE
let inpNomb = 0;
//let botonNomb = document.getElementById("btnNombre");
let botonNomb = '$ ("#btnNombre")';

const getValInpNomb = () =>{
    //inpNomb = document.getElementById("ingNomb").value;
    inpNomb = $("#ingNomb").value;
    //document.getElementById("valueInpNomb").innerHTML = "Hola " + inpNomb + ".";
    $("#valueInpNomb").append("<p>Hola  + inpNomb + .</p>");
    console.log(inpNomb);
    return inpNomb;
}

//botonNomb.addEventListener("click", getValInpNomb);
$ ('body') .prepend('<button id="botonNombre">CLICK</button>');
on ('click', getValInpNomb());

//Obtener PESOS
var inpPes = 0;
let botonPes = document.getElementById("btnPesos");

const getValInpPes = () =>{
    inpPes = document.getElementById("ingPes").value;
    document.getElementById("valueInpPes").innerHTML = " Ingreso $" + inpPes + " ";
    console.log(inpPes);
    return inpPes;
}

botonPes.addEventListener("click", getValInpPes);

//Obtener DOLARES
var inpDol = 0;


//Obtener Cotizacion
let botonCot = document.getElementById("btnCotizacion");
var inpCot = 0;

const getValInpCot = () =>{
    inpCot = document.getElementById("ingCot").value;
    document.getElementById("valueInpCot").innerHTML = "a $" + inpCot + " el dolar.";
    console.log(inpCot);
    return inpCot;
}

botonCot.addEventListener("click", getValInpCot);




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

                parrafo.innerHTML = `<h2>$${inpPes} pesos equivalen a US$${inpDol.toFixed(2)} dolares. Gracias ${inpNomb} por tu consulta. </h2>`;    
                document.body.appendChild (parrafo);

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















