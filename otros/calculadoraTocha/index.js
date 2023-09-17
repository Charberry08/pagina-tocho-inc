// Variables globales
let numP = "";
let signo = "";
let numRes = 0;
let numTemp = 0;
let setPunto = false;
let setOperacion = false;
let setSegundoSigno = false;
let setSegundoNumero = false;
let setAnteriorIgual = false;

function toggleMusica()// Funcion que prende la música
{
    document.getElementById("botonMusica").style.backgroundColor = "rgb(110, 255, 171)";
    document.getElementById("botonMusica").style.borderColor = "rgb(85, 196, 131";
    document.getElementById("botonMusica").innerHTML = "Music - ON";
    document.getElementById("musicaFondo").play();
}

function insertarElemento(numP)// Función que coloca en elemento en la pantalla
{// Sonido click
    setSegundoSigno = false;
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setOperacion)// Borrar pantalla si hay una operacion lista
    {
        setSegundoNumero = true;
        setOperacion = false;
        document.getElementById("pantalla").value = "";
    }
    if(setAnteriorIgual)// Borrar pantalla si lo anterior fue un resultado de operación
    {
        document.getElementById("pantalla").value = "";
        setAnteriorIgual = false;
    }
    if((!setPunto || numP != ".") && document.getElementById("pantalla").value.length < 11)// Solamente se entra si lo que se metio no es un punto o si es un punto pero no hay puntos actualmente, o si la pantalla ya tiene 12 elemenetos.
    {
        if(numP == ".")// Colocar un 0 antes de colocar un punto si esta vacia
        {
            setPunto = true;
            if(document.getElementById("pantalla").value.substring(0, 1) == "")
            {
                document.getElementById("pantalla").value += "0";
            }
        }
        else// Borrar los 0s si se coloca un número
        {
            if(document.getElementById("pantalla").value == "0")
            {
                document.getElementById("pantalla").value = "";
            }
        }
        document.getElementById("pantalla").value += numP;// Concatenar el valor a la pantalla
    }
}

function operacion(numP)// Función que realiza las operaciones
{// Sonido click
    setPunto = false;
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setSegundoNumero && !setSegundoSigno)// Realizar operacion si hay 2 números y lo anterior fue un número
    {
        var realizarOperacion = Module.cwrap(
            "realizarOperacion",
            "Number",
            ["string", "number", "number"]
        );
        document.getElementById("pantalla").value = realizarOperacion(signo, numRes, document.getElementById("pantalla").value);
        signo = numP;
    }
    if(numP != "=")// Asignar signo a variable y realizar operacoin
    {
        setSegundoSigno = true;
        setOperacion = true;
        numRes = Number(document.getElementById("pantalla").value);
        signo = numP;
    }
    if(numP == "=")// Checar por el códiga para ingresar a Pesca Tocha
    {
        setSegundoNumero = false;
        setOperacion = false;
        setAnteriorIgual = true;
    }
}

function eliminarElemento()// Función para eliminar último elemento de la pantalla 
{// Sonido click
    document.getElementById("sonidoBoton").currentTime = 0.05;
    document.getElementById("sonidoBoton").play();
    if(setOperacion)// Si hay signo de operación borrarlo
    {
        setOperacion = false;
        document.getElementById("pantalla").value = "";
    }
    if(setAnteriorIgual)// Borrar todo si lo que esta en pantalla es un resultado de operación
    {
        document.getElementById("pantalla").value = "";
        setAnteriorIgual = false;
    }
    else//Borrar el último elemento
    {
        if((document.getElementById("pantalla").value.substring(document.getElementById("pantalla").value.length - 1, document.getElementById("pantalla").value.length)) == ".")
        {
            setPunto = false;
        }
        document.getElementById("pantalla").value = document.getElementById("pantalla").value.substring(0, document.getElementById("pantalla").value.length - 1);
    }
    
}
function eliminarPantalla()// Borrar todo de la pantalla y reiniciar todo a sus valores iniciales
{// Sonido click
    document.getElementById("sonidoBoton").currentTime = 0.05;   
    document.getElementById("sonidoBoton").play();
    document.getElementById("pantalla").value = "";
    setSegundoNumero = false;
    setOperacion = false;
    setPunto = false;
}