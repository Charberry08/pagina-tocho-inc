// variables globales
let click = document.getElementById("sonidoClick");

let numeroTiempo = 0;

// Contadores
let contadorPeces = 0;
let contadorAvancesTutorial = 0;
let contadorAvancesDesbloqueo = 0;
let contadorAvancesAgradecimiento = 0;

// Variables de coordenadas de mouse
let pescaCoordX = 0;
let pescaCoordY = 0;

let coordX = 0;
let coordY = 0;

// Booleanos de estados
let estadoTutorialInicial = false;
let estadoPasadoAnzuelo = false;
let estadoAnzuelo = false;
let estadoPantallaNegra = false;
let estadoJuegoPesca = false;
let estadoMusicaDia = false;
let estadoReaccionAnzuelo = false;
let estadoReiniciadoAnzuelo = false;
let estadoJuegoReaccion = false;
let estadoDelayReaccion = false;
let estadoHablarDick = false;
let estadoTerminarHablar = false;
let estadoSonidoDesaparecer = false;
let estadoDificultadDificil = false;
let estadoBloquearMovimientoAnzuelo = false;
let estadoDesbloqueo = false;
let estadoMaxeo = false;
let estadoSpawneoJefeFinal = false;
let estadoDesaparecerJefe = false;
let estadoCreadoCania = false;
let estadoFase2Lista = false
let estadoIniciarFase2 = false;
let estadoUltimaFase = false;
let estadoEstanque = true;
let estadoPermitirPesca = true;
let estadoPezGlobo = true;
let estadoAgradecimientosFinales = true;

// Variables miscelanesas
let textoBurbuja = document.getElementById("textoHablarDick");
let textoTutorial = document.getElementById("textoTutorial");

let opcionTienda = 0;

let anzueloActual = 0;
let caniaObjetoActual = 0;

// Variables conteniendo objetos de HTML de la caña y catalogo
let cania = document.getElementById("cania");
let anzuelo = document.getElementById("anzuelo");
let cuerda = document.getElementById("cuerda");

let mango = document.getElementById("mango");
let puntera = document.getElementById("puntera");

let areaPesca = document.getElementById("areaPesca");
let modeloPez = document.getElementById("modeloPez");

let nombrePezCatalogo = document.getElementById("nombrePezCatalogo");
let anzueloPezCatalogo = document.getElementById("anzueloPezCatalogo");
let descripcionPezCatalogo = document.getElementById("descripcionPezCatalogo");
let cantidadPescadosCatalogo = document.getElementById("cantidadPescadosCatalogo");

// Variables de dinero
let dineroTotal = 0;
let dineroActualPez = 0;

let dineroNecesarioCompra = 0;

// IDs de objetos
let numeroVozDickPasado = 0;
let numeroDialogoPasado = 0;
let idPasadoCatalogo = 0;
let idFotoDescubrir = 0;
let idCompra = 0;
let idCatalogo = 0;
let idPez = 0;
let idPezActual = 0;
let idDesignado = 0;

// Arreglos con estado de peces, y objetos del catalogo
let arregloPecesActivos = new Array(8);
const arregloEspacios = [false, false, false, false, false, false, false, false, false, false];
const arregloTipoPeces = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const estadoAnzuelosTienda = [true, false, false, false];
const estadoCaniasTienda = [true, false, false, false, false];
const arregloContadorPeces = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arregloMostrarCartaCompleta = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

// Todas las variables asociadas con el jefe final
let jefe = 0;
let botonJefe = 0;

let contadorCentesimasJefeMirando = 0;
let contadorPescasJefeSeguidas = 0;
let modificacionTiempoReaccionJefe = 0;
let contadorDecimasInicioFase2 = 0;
let vueltasPorProyectil = 3;
let contadorVueltasParaProyectil = 0;
let contadorProyectiles = 0;
let vidaJugadorFase2 = 0;
let vidaJefeFase2 = 0;
let contadorCentesimasProyectil1 = 0;
let contadorCentesimasProyectil2 = 0;
let contadorCentesimasProyectil3 = 0;
let contadorCentesimasProyectil4 = 0;
let idProyectilBorrar = 0;
let espacioLibreProyectiles = 0;
let direccionDerechaActual = 0;
let contadorGolpesJefe = 0;
let estadoCanionTocho = false;
let estadoPermitirProyectiles = false;
let estadoDesaparecerProyectil1 = false;
let estadoDesaparecerProyectil2 = false;
let estadoDesaparecerProyectil3 = false;
let estadoDesaparecerProyectil4 = false;
let estadoPermitirCambiarVueltasFase2 = false;
let estadoSpawneoJefeVictoria = false;
let estadoPescaContraria = false;
let estadoMirandoFinal = false;
let estadoGameOverFase3 = false;

const arregloDireccionProyectiles = [0, 0, 0, 0];
const arregloEstadoProyectiles = [false, false, false, false];

let tochoCanion = document.getElementById("tochoCanion");
let jefeFase2 = document.getElementById("jefeFase2");

let numeroRandomSwitch = 0;

let tiempoDecimasSegundo = 0;

// Realizar funcion de inicio cuando se inicia la página
const realizarStartupt = startup();

function startup()// Función que acomoda los elementos con datos solo disponbiles en tiempo de ejecución
{
    document.getElementById("tituloLogo").style.height = (window.innerWidth * 0.6 * 919 / 1658) + "px";
    document.getElementById("pressStart").style.height = (window.innerWidth * 0.4 * 185 / 1642) + "px";
    document.getElementById("copyright").style.height = (window.innerWidth * 0.2 * 77 / 602) + "px";
    document.getElementById("pressStart").style.top= (window.innerWidth * 0.6 * 919 / 1658) + ((window.innerHeight - (window.innerWidth * 0.2 * 77 / 602) - (window.innerWidth * 0.6 * 919 / 1658)) / 2.5) + "px";
    document.getElementById("fondoMadera").style.left= (window.innerWidth - 1178) / 2 + "px";
    document.getElementById("fondoMadera").style.top= (window.innerHeight - 621) / 2 + "px";
    document.getElementById("dineroTotal").value = dineroTotal;
    document.getElementById("fondoTienda").style.left= (window.innerWidth - 959) / 2 + "px";
    document.getElementById("fondoOpciones").style.top=(window.innerHeight - 370) / 2 + "px";
    document.getElementById("fondoOpciones").style.left=(window.innerWidth - 1099) / 2 + "px";
    document.getElementById("fondoSeguroRegresar").style.top=(window.innerHeight - 370) / 2 + "px";
    document.getElementById("fondoSeguroRegresar").style.left=(window.innerWidth - 1099) / 2 + "px";
    document.getElementById("dickTutorial").style.left=(window.innerWidth - 382) / 2 + "px";
    document.getElementById("burbujaTutorial").style.left=(window.innerWidth - 469) / 2 + "px";
    document.getElementById("fondoCatalogo").style.top=(window.innerHeight - 630) / 2 + "px";
    document.getElementById("fondoCatalogo").style.left=(window.innerWidth - 1120) / 2 + "px";
    document.getElementById("dickDesbloqueo").style.left=(window.innerWidth - 382) / 2 + "px";
    document.getElementById("burbujaDesbloqueo").style.left=(window.innerWidth - 469) / 2 + "px";
    document.getElementById("videoJefeMirando").style.top=(window.innerHeight - 720) / 2 + "px";
    document.getElementById("videoJefeMirando").style.left=(window.innerWidth - 1279.5) / 2 + "px";
    document.getElementById("jefeFase2").style.top=(window.innerHeight * 0.6) + "px";
    document.getElementById("jefeFase2").style.left=(window.innerWidth - 689) / 2 + "px";
}

function getNumeroRandom(maximo)//Función para conseguir número random
{
    return Math.floor(Math.random() * maximo);
}

function iniciarPantallaInicio()// Función que quita la pantalla negra al comienzo y pone la música de la pantalla de inicio
{
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
    numeroTiempo = 0;
    document.getElementById("musicaInicio").play();
    document.getElementById("pantallaNegra").style.display = "none";
    document.getElementById("pantallaTitulo").style.display = "inline";
}

function maxearAutomaticamente()// Función de boton secreto que completa el juego para el usuario automaticamente
{
    dineroTotal = 9999;
    document.getElementById("dineroTotal").value = dineroTotal;
    for(let i = 0; i < 25; i++)// Mostrar todos los peces en el catalogo
    {
        arregloMostrarCartaCompleta[i] = true;
        arregloContadorPeces[i] = 7;
        mostrarFotoNegraCatalogo(i + 1);
    }
    for(let i = 0; i < 7; i++)// Recibir toda la tienda
    {
        idCompra = i + 1
        if((idCompra + 1) != 4)
        {
            recibirItem()
        }
    }
    document.getElementById("botonMaxeo").style.display="none";
}

function iniciarJuego()// Función que se ejecuta al presionar el press start
{
    click.play();
    caniaObjeto = new Module.Cania();
    caniaObjetoActual = caniaObjeto;
    estadoCreadoCania = true;
    caniaObjetoActual.setCaniaActual(1);
    estadoPantallaNegra = true;
    estadoJuegoPesca = true;
    document.getElementById("musicaInicio").pause();
    document.getElementById("musicaPescaDiaLarga").play();
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_day.png)";
    numeroTiempo = 3;
    document.getElementById("pantallaTitulo").style.display = "none";

    iniciarTutorial();// Iniciar tutorial
}

function iniciarTutorial()// Función que inicia el tutorial
{
    document.getElementById("tutorial").style.display="inline";
    if(!estadoTutorialInicial)// Solo fa la bienvenida al ingresar al tutorial desde press start
    {
        sonidoDick();
        textoTutorial.innerHTML = "<br>Bienvenido mocoso, hoy te enseñaré a pescar como un verdadero profesional.";
    }
}

function avanzarTutorial()// Función que se ejecuta al darle click al viejo y avanzar con el texto
{
    switch(contadorAvancesTutorial)
    {
    case 0:
        sonidoDick();
        textoTutorial.innerHTML = "<br>Para comenzar, deberas tirar el anzuelo al estanque, este deberá estar cerca de la boca del pez que deseas atrapar.";
        break;
    case 1:
        sonidoDick();
        textoTutorial.innerHTML = "<br>Una vez tirado el anzuelo, sabrás que el pez lo vió cuando este intente morderlo.";
        break;
    case 2:
        sonidoDick();
        textoTutorial.innerHTML = "<br>Cuando escuches o veas que el pez lo ha mordido por completo, haz click en tu anzuelo para pescarlo.";
        break;
    case 3:
        sonidoDick();
        textoTutorial.innerHTML = "Pero ojo, este podrá escaparse si no jalas el anzuelo rápido, o si lo jalas antes de que el pez lo muerda por completo.";
        break
    case 4:
        sonidoDick();
        textoTutorial.innerHTML = "No pasa nada si no pescas un pez a la primera, tengo mejoras y anzuelos nuevos que puedo venderte a cambio de monedas de oro.";
        break
    case 5:
        sonidoDick();
        textoTutorial.innerHTML = "<br>Eso sería todo, disfruta tu estancia en el Estanque Tocho.";
        break
    case 6:
        terminarTutorial()// Terminar tutorial
        break;
    }

    if(estadoTutorialInicial && contadorAvancesTutorial == 4)// Saltarse la despedida si se accede desde el menú
    {
        contadorAvancesTutorial++;
    }
    contadorAvancesTutorial++;
}

function terminarTutorial()// Función para terminar tutorial
{
    contadorAvancesTutorial = 0;
    document.getElementById("tutorial").style.display="none";
    document.getElementById("juegoPesca").style.display = "inline";
    document.getElementById("tienda").style.display = "inline";
    estadoTutorialInicial = true;
    subirTiendaFinal();
}

function regresarTutorial()// Función que sale del tutorial e inicia el juego de pesca
{
    click.play();
    salirOpciones();
    subirTienda();
    subirTiendaFinal()
    document.getElementById("tienda").style.display = "none";
    document.getElementById("juegoPesca").style.display = "none";
    iniciarTutorial();
    sonidoDick();
    textoTutorial.innerHTML = "<br>Para comenzar, deberas tirar el anzuelo al estanque, este deberá estar cerca de la boca del pez que deseas atrapar.";
}

// Función que lee la posición del mouse y se la da a una variable
document.addEventListener('mousemove', function(e){
    if(!estadoAnzuelo)
    {
        coordX = e.clientX * 100 / window.innerWidth;
        coordY = e.clientY * 100 / window.innerHeight;

        if(coordX > 50)// Cambiar posición de caña y cañon de la segunda fase dependiendo de donde este el mouse
        {
            direccionDerechaActual = -1;
            cuerda.style.left = (window.innerWidth * 0.0655) - 78 + "px";
            anzuelo.style.left = (window.innerWidth * 0.0655) - 90.5 + "px";
            cania.style.transform = "scaleX(-1)";
            cania.style.left = "28%";
            tochoCanion.style.left = ((window.innerWidth * 0.5) - 540) / window.innerWidth * 100 + "%";
            tochoCanion.style.transform = "scaleX(-1)";
        }
        else
        {
            direccionDerechaActual = 1;
            cuerda.style.left = (window.innerWidth * 0.3855) + 300 + "px";
            anzuelo.style.left = (window.innerWidth * 0.3855) + 287.5 + "px";
            cania.style.transform = "scaleX(1)";
            cania.style.left = "60%";
            tochoCanion.style.left = "50%";
            tochoCanion.style.transform = "scaleX(1)";
        }
    }
})

// Función que coloca las coordenadas del mouse en el area de pesca en variables
areaPesca.addEventListener('mousemove', function(e){
    pescaCoordX = e.clientX - (window.innerWidth * 0.2145);
    pescaCoordY = e.clientY - (window.innerHeight * 0.6);
})

function lanzarAnzuelo()// Función que se ejectua al darle click al anzuelo o botón de un pez para crear la ilusión que se avento el anzuelo
{
    if(estadoAnzuelo)// En el caso de que el anzuelo ya se halla aventado, esto solo lo saca del estanque
    {
        estadoPescaContraria = false;
        if(estadoReiniciadoAnzuelo)
        {
            estadoPermitirPesca = true;
            estadoReiniciadoAnzuelo = false;
        }
        if(estadoJuegoReaccion)// Calculos que se realizan si se saca el anzuelo y se encuentra en el juego de tiempo de reacción
        {
            if(!estadoDesaparecerJefe)
            {
                desaparecerPez(true);
                idPezActual = -1;
            }
            else
            {
                estadoPescaContraria = false;
                document.getElementById("sonidoRotura").pause();
                document.getElementById("sonidoRotura").currentTime = 0;
                document.getElementById("sonidoRotura").play();

                if(estadoUltimaFase)
                {
                    contadorPescasJefeSeguidas = 0;
                    muerteFinal();
                }

                realizarRotacionJefe();
                contadorPescasJefeSeguidas = 0;
            }
            
            estadoReaccionAnzuelo = false;
            estadoPermitirPesca = false;
            estadoReiniciadoAnzuelo = true;
            estadoJuegoReaccion = false;
        }
        if(coordX > 50)// Regresar anzuelo a posición de reposo dependiendo de donde se encuentre el mouse
        {
            cuerda.style.left = (window.innerWidth * 0.0655) - 78 + "px";
            anzuelo.style.left = (window.innerWidth * 0.0655) - 90.5 + "px";
            cuerda.style.rotate = "-90deg";
            anzuelo.style.top = "auto";
            anzuelo.style.bottom = "500px";
            cuerda.style.bottom = "515px";
            cuerda.style.width = "50px";
        }
        else
        {
            cuerda.style.left = (window.innerWidth * 0.3855) + 300 + "px";
            anzuelo.style.left = (window.innerWidth * 0.3855) + 287.5 + "px";
            cuerda.style.rotate = "-90deg";
            anzuelo.style.top = "auto";
            anzuelo.style.bottom = "500px";
            cuerda.style.bottom = "515px";
            cuerda.style.width = "50px";
        }

        if(!estadoBloquearMovimientoAnzuelo)
        {
            estadoAnzuelo = false;
        }
    }
    else// Colocar anzuelo en estanque
    {
        if(!estadoJuegoReaccion)
        {
            estadoPescaContraria = true;
        }
        document.getElementById("sonidoCania").pause();
        document.getElementById("sonidoCania").currentTime = 0;
        document.getElementById("sonidoCania").play();
        if(coordX > 50)// Dependiendo de donde este el mouse, calcular la distancia entre el mouse y la punta de la caña y modificar la foto de la cuerda con esa medida, calcular la tangente para saber el ángulo en el que debe de estar la cuerda y girarla
        {
            anzuelo.style.left = (pescaCoordX - 9) + "px";
            anzuelo.style.top = (pescaCoordY - 8) + "px";

            cuerda.style.rotate = -1.5708 - Math.atan((pescaCoordX + (window.innerWidth * 0.215) - ((window.innerWidth * 0.28) - 85)) / (565 - ((window.innerHeight * .4) - (pescaCoordY - 5)))) + "rad";
            cuerda.style.width = Math.sqrt(Math.pow((pescaCoordX + (window.innerWidth * 0.215) - ((window.innerWidth * 0.28) - 85)), 2) + Math.pow((565 - ((window.innerHeight * .4) - (pescaCoordY - 5))), 2)) + "px";
            cuerda.style.bottom = ((window.innerHeight * 0.4) - pescaCoordY + 6) + "px";
            cuerda.style.left = (pescaCoordX + 4) + "px";
        }
        else
        {
            anzuelo.style.left = (pescaCoordX - 9) + "px";
            anzuelo.style.top = (pescaCoordY - 8) + "px";

            cuerda.style.rotate = -Math.atan((565 - ((window.innerHeight * .4) - (pescaCoordY - 5))) / (((window.innerWidth * 0.6) + 300) - pescaCoordX - (window.innerWidth * 0.2145))) + "rad";
            cuerda.style.width = Math.sqrt(Math.pow((565 - ((window.innerHeight * .4) - (pescaCoordY - 8))), 2) + Math.pow((((window.innerWidth * 0.6) + 300) - pescaCoordX - (window.innerWidth * 0.2145)), 2)) + "px";
            cuerda.style.bottom = ((window.innerHeight * 0.4) - pescaCoordY + 2) + "px";
            cuerda.style.left = (pescaCoordX + 2) + "px";
        }

        estadoAnzuelo = true;
    }
    
}

const tiempo = setInterval(cambiarTiempo, 180000);// Función que ejecuta el cambio de tiempo cada 3 minutos

function cambiarTiempo()// Función que cambia el fondo y música del juego
{
    if(estadoPantallaNegra)//Solo realizar el cambio de tiempo si la pantalla negra si ha quitado
    {
        numeroTiempo++;
        switch(numeroTiempo % 4)// Dependiendo del valor de numeroTiempo, cambiar el tiempo
        {
        case 0:
            if(estadoMusicaDia)
            {
                document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_day.png)";
                document.getElementById("musicaPescaAmanecer").pause();
                document.getElementById("musicaPescaAmanecer").currentTime = 0;
                document.getElementById("musicaPescaNoche").pause();
                document.getElementById("musicaPescaNoche").currentTime = 0;
                document.getElementById("musicaPescaAtardecer").pause();
                document.getElementById("musicaPescaAtardecer").currentTime = 0;
                document.getElementById("musicaPescaDiaCorta").play();
            }
            else
            {
                estadoMusicaDia = true;
            }
            break;
        case 1:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
            document.getElementById("musicaPescaDiaLarga").pause();
            document.getElementById("musicaPescaAmanecer").pause();
            document.getElementById("musicaPescaAmanecer").currentTime = 0;
            document.getElementById("musicaPescaDiaCorta").pause();
            document.getElementById("musicaPescaDiaCorta").currentTime = 0;
            document.getElementById("musicaPescaNoche").pause();
            document.getElementById("musicaPescaNoche").currentTime = 0;
            document.getElementById("musicaPescaAtardecer").play();
            break;
        case 2:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_night.png)";
            document.getElementById("musicaPescaAmanecer").pause();
            document.getElementById("musicaPescaAmanecer").currentTime = 0;
            document.getElementById("musicaPescaDiaCorta").pause();
            document.getElementById("musicaPescaDiaCorta").currentTime = 0;
            document.getElementById("musicaPescaAtardecer").pause();
            document.getElementById("musicaPescaAtardecer").currentTime = 0;
            document.getElementById("musicaPescaNoche").play();
            break;
        case 3:
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunrise.png)";
            document.getElementById("musicaPescaNoche").pause();
            document.getElementById("musicaPescaNoche").currentTime = 0;
            document.getElementById("musicaPescaDiaCorta").pause();
            document.getElementById("musicaPescaDiaCorta").currentTime = 0;
            document.getElementById("musicaPescaAtardecer").pause();
            document.getElementById("musicaPescaAtardecer").currentTime = 0;
            document.getElementById("musicaPescaAmanecer").play();
            break;
        }
    }
}

const peces = document.getElementById("peces");// Asignar el elemento HTML de peces en la constante peces

const spawnInterval = setInterval(spawnearPeces, 6000);// Realizar el spawneo cada 6 segundos

function spawnearPeces()// Función que crea los peces y sus botones correspondientes y los muestra en el estanque
{    
    if (estadoJuegoPesca && !estadoReaccionAnzuelo && (caniaObjetoActual.getCaniaActual() - 1) != 3)// Checar por estados y la caña para mostrar todo
    {
        // Variables que se usaran para variar entre los modelos, tamaños y dirección
        var pezActual;
        var alturaPez = 0;
        var anchoPez = 0;
        var direccionPez = (1 - (2 * getNumeroRandom(2)));
        var distanciaArriba = 0;
        var distanciaIzquierda = 0;

        if(contadorPeces < 10)// Checar po la cantidad de peces activos
        {
            encontrarEspacio();
            switch(caniaObjetoActual.getCaniaActual() - 1)// Dependiendo de la caña, aparecer cierta pool
            {
            case 0:
                switchRandomPool1();
                switch(numeroRandomSwitch)// Peces realacionados con la pool 1
                {
                    case 0:
                        // Crear objeto de C++ y desviar un poco los tamaños medios, aumentar el contador con el peso del pez en el estanque
                        pezActual = new Module.Mojarra();
                        alturaPez = 22 * (pezActual.getTamanio() / 22);
                        anchoPez = 86 * (pezActual.getTamanio() / 22);
                        contadorPeces += pezActual.getPesoEstanque();

                        // Colocarlo en posición random en el estanque
                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 160) + 40;

                        // Crear el elemento HTML y darle todos los valores necesarios
                        const mo = document.createElement('div');
                        mo.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(mo);
                        mo.style.backgroundImage = "url(images/fishes/bluegill.png)";
                        mo.style.transform = "scaleX(" + direccionPez + ")";
                        mo.style.height = alturaPez + "px";
                        mo.style.width = anchoPez + "px";
                        mo.style.backgroundSize = "100%";
                        mo.style.backgroundRepeat = "no-repeat";
                        mo.style.position = "absolute";
                        mo.style.top = distanciaArriba + "px";
                        mo.style.left = distanciaIzquierda + "px";
                        mo.style.zIndex = "1";

                        // Darle la animación correcta dependiendo de su dirección
                        if(direccionPez == 1)
                        {
                            mo.style.animation="morderIzquierda";
                        }
                        else
                        {
                            mo.style.animation="morderDerecha";
                        }
                        
                        mo.style.animationPlayState="paused";
                        mo.style.animationIterationCount="infinite";
                        mo.style.animationDuration="0.5s";
                        mo.style.animationDirection="alternate";
                        
                        // Crear su botón de pesca y asignarle los datos correspondientes
                        const btmo = document.createElement('div');
                        btmo.setAttribute('id', 'boton_' + idDesignado);
                        btmo.setAttribute('type', 'div');
                        btmo.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btmo);
                        btmo.style.height = "20px";
                        btmo.style.width = "20px";
                        btmo.style.position = "absolute";
                        btmo.style.cursor = "pointer";
                        btmo.style.top = distanciaArriba + alturaPez - 10 + "px";

                        if(estadoDificultadDificil)
                        {
                            btmo.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btmo.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btmo.style.backgroundSize = "100%";
                            btmo.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btmo.style.border = "none";
                        btmo.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btmo.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btmo.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        // Guardar su tipo de pez en el arreglo
                        arregloTipoPeces[idDesignado - 1] = 1;
                        break;
                    case 1:
                        pezActual = new Module.Lubina();
                        alturaPez = 22 * (pezActual.getTamanio() / 40);
                        anchoPez = 104 * (pezActual.getTamanio() / 40);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 200) + 40;

                        const lu = document.createElement('div');
                        lu.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(lu);
                        lu.style.backgroundImage = "url(images/fishes/sea_bass.png)";
                        lu.style.transform = "scaleX(" + direccionPez + ")";
                        lu.style.height = alturaPez + "px";
                        lu.style.width = anchoPez + "px";
                        lu.style.backgroundSize = "100%";
                        lu.style.backgroundRepeat = "no-repeat";
                        lu.style.position = "absolute";
                        lu.style.top = distanciaArriba + "px";
                        lu.style.left = distanciaIzquierda + "px";
                        lu.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            lu.style.animation="morderIzquierda";
                        }
                        else
                        {
                            lu.style.animation="morderDerecha";
                        }
                        
                        lu.style.animationPlayState="paused";
                        lu.style.animationIterationCount="infinite";
                        lu.style.animationDuration="0.5s";
                        lu.style.animationDirection="alternate";
                        
                        const btlu = document.createElement('div');
                        btlu.setAttribute('id', 'boton_' + idDesignado);
                        btlu.setAttribute('type', 'button');
                        btlu.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btlu);
                        btlu.style.height = "20px";
                        btlu.style.width = "20px";
                        btlu.style.position = "absolute";
                        btlu.style.cursor = "pointer";
                        btlu.style.top = distanciaArriba + alturaPez - 10 + "px";

                        if(estadoDificultadDificil)
                        {
                            btlu.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btlu.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btlu.style.backgroundSize = "100%";
                            btlu.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btlu.style.border = "none";
                        btlu.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btlu.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btlu.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 2;
                        break;
                    case 2:
                        pezActual = new Module.PezPayaso();
                        alturaPez = 19 * (pezActual.getTamanio() / 10);
                        anchoPez = 66 * (pezActual.getTamanio() / 10);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 150) + 40;

                        const pp = document.createElement('div');
                        pp.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pp);
                        pp.style.backgroundImage = "url(images/fishes/clownfish.png)";
                        pp.style.transform = "scaleX(" + direccionPez + ")";
                        pp.style.height = alturaPez + "px";
                        pp.style.width = anchoPez + "px";
                        pp.style.backgroundSize = "100%";
                        pp.style.backgroundRepeat = "no-repeat";
                        pp.style.position = "absolute";
                        pp.style.top = distanciaArriba + "px";
                        pp.style.left = distanciaIzquierda + "px";
                        pp.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            pp.style.animation="morderIzquierda";
                        }
                        else
                        {
                            pp.style.animation="morderDerecha";
                        }
                        
                        pp.style.animationPlayState="paused";
                        pp.style.animationIterationCount="infinite";
                        pp.style.animationDuration="0.5s";
                        pp.style.animationDirection="alternate";
                        
                        const btpp = document.createElement('div');
                        btpp.setAttribute('id', 'boton_' + idDesignado);
                        btpp.setAttribute('type', 'button');
                        btpp.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpp);
                        btpp.style.height = "20px";
                        btpp.style.width = "20px";
                        btpp.style.position = "absolute";
                        btpp.style.cursor = "pointer";
                        btpp.style.top = distanciaArriba + alturaPez - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btpp.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btpp.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btpp.style.backgroundSize = "100%";
                            btpp.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btpp.style.border = "none";
                        btpp.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpp.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btpp.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 3;
                        break;
                    case 3:
                        pezActual = new Module.Carpa();
                        alturaPez = 28 * (pezActual.getTamanio() / 60);
                        anchoPez = 127 * (pezActual.getTamanio() / 60);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 230) + 40;

                        const cp = document.createElement('div');
                        cp.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cp);
                        cp.style.backgroundImage = "url(images/fishes/carp.png)";
                        cp.style.transform = "scaleX(" + direccionPez + ")";
                        cp.style.height = alturaPez + "px";
                        cp.style.width = anchoPez + "px";
                        cp.style.backgroundSize = "100%";
                        cp.style.backgroundRepeat = "no-repeat";
                        cp.style.position = "absolute";
                        cp.style.top = distanciaArriba + "px";
                        cp.style.left = distanciaIzquierda + "px";
                        cp.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            cp.style.animation="morderIzquierda";
                        }
                        else
                        {
                            cp.style.animation="morderDerecha";
                        }
                        
                        cp.style.animationPlayState="paused";
                        cp.style.animationIterationCount="infinite";
                        cp.style.animationDuration="0.5s";
                        cp.style.animationDirection="alternate";

                        const btcp = document.createElement('div');
                        btcp.setAttribute('id', 'boton_' + idDesignado);
                        btcp.setAttribute('type', 'button');
                        btcp.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcp);
                        btcp.style.height = "40px";
                        btcp.style.width = "40px";
                        btcp.style.position = "absolute";
                        btcp.style.cursor = "pointer";
                        btcp.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btcp.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btcp.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btcp.style.backgroundSize = "100%";
                            btcp.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btcp.style.border = "none";
                        btcp.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btcp.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btcp.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 4;
                        break;
                    case 4:
                        pezActual = new Module.Anchoa();
                        alturaPez = 10 * (pezActual.getTamanio() / 20);
                        anchoPez = 64 * (pezActual.getTamanio() / 20);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 30);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 150) + 40;

                        const an = document.createElement('div');
                        an.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(an);
                        an.style.backgroundImage = "url(images/fishes/anchovy.png)";
                        an.style.transform = "scaleX(" + direccionPez + ")";
                        an.style.height = alturaPez + "px";
                        an.style.width = anchoPez + "px";
                        an.style.backgroundSize = "100%";
                        an.style.backgroundRepeat = "no-repeat";
                        an.style.position = "absolute";
                        an.style.top = distanciaArriba + "px";
                        an.style.left = distanciaIzquierda + "px";
                        an.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            an.style.animation="morderIzquierda";
                        }
                        else
                        {
                            an.style.animation="morderDerecha";
                        }
                        
                        an.style.animationPlayState="paused";
                        an.style.animationIterationCount="infinite";
                        an.style.animationDuration="0.5s";
                        an.style.animationDirection="alternate";

                        const btan = document.createElement('div');
                        btan.setAttribute('id', 'boton_' + idDesignado);
                        btan.setAttribute('type', 'button');
                        btan.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btan);
                        btan.style.height = "20px";
                        btan.style.width = "20px";
                        btan.style.position = "absolute";
                        btan.style.cursor = "pointer";
                        btan.style.top = distanciaArriba + alturaPez - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btan.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btan.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btan.style.backgroundSize = "100%";
                            btan.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btan.style.border = "none";
                        btan.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btan.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btan.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 5;
                        break;
                    case 5:
                        pezActual = new Module.Koi();
                        alturaPez = 27 * (pezActual.getTamanio() / 80);
                        anchoPez = 141 * (pezActual.getTamanio() / 80);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const ko = document.createElement('div');
                        ko.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ko);
                        ko.style.backgroundImage = "url(images/fishes/koi.png)";
                        ko.style.transform = "scaleX(" + direccionPez + ")";
                        ko.style.height = alturaPez + "px";
                        ko.style.width = anchoPez + "px";
                        ko.style.backgroundSize = "100%";
                        ko.style.backgroundRepeat = "no-repeat";
                        ko.style.position = "absolute";
                        ko.style.top = distanciaArriba + "px";
                        ko.style.left = distanciaIzquierda + "px";
                        ko.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            ko.style.animation="morderIzquierda";
                        }
                        else
                        {
                            ko.style.animation="morderDerecha";
                        }
                        
                        ko.style.animationPlayState="paused";
                        ko.style.animationIterationCount="infinite";
                        ko.style.animationDuration="0.5s";
                        ko.style.animationDirection="alternate";

                        const btko = document.createElement('div');
                        btko.setAttribute('id', 'boton_' + idDesignado);
                        btko.setAttribute('type', 'button');
                        btko.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btko);
                        btko.style.height = "40px";
                        btko.style.width = "40px";
                        btko.style.position = "absolute";
                        btko.style.cursor = "pointer";
                        btko.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btko.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btko.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btko.style.backgroundSize = "100%";
                            btko.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btko.style.border = "none";
                        btko.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btko.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btko.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }
                        arregloTipoPeces[idDesignado - 1] = 6;
                        break;
                    case 6:
                        pezActual = new Module.Goldfish();
                        alturaPez = 19 * (pezActual.getTamanio() / 33);
                        anchoPez = 67 * (pezActual.getTamanio() / 33);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 50);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 140) + 40;

                        const gf = document.createElement('div');
                        gf.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(gf);
                        gf.style.backgroundImage = "url(images/fishes/goldfish.png)";
                        gf.style.transform = "scaleX(" + direccionPez + ")";
                        gf.style.height = alturaPez + "px";
                        gf.style.width = anchoPez + "px";
                        gf.style.backgroundSize = "100%";
                        gf.style.backgroundRepeat = "no-repeat";
                        gf.style.position = "absolute";
                        gf.style.top = distanciaArriba + "px";
                        gf.style.left = distanciaIzquierda + "px";
                        gf.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            gf.style.animation="morderIzquierda";
                        }
                        else
                        {
                            gf.style.animation="morderDerecha";
                        }
                        
                        gf.style.animationPlayState="paused";
                        gf.style.animationIterationCount="infinite";
                        gf.style.animationDuration="0.5s";
                        gf.style.animationDirection="alternate";

                        const btgf = document.createElement('div');
                        btgf.setAttribute('id', 'boton_' + idDesignado);
                        btgf.setAttribute('type', 'button');
                        btgf.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btgf);
                        btgf.style.height = "20px";
                        btgf.style.width = "20px";
                        btgf.style.position = "absolute";
                        btgf.style.cursor = "pointer";
                        btgf.style.top = distanciaArriba + alturaPez - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btgf.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btgf.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btgf.style.backgroundSize = "100%";
                            btgf.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btgf.style.border = "none";
                        btgf.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btgf.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btgf.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 7;
                        break;
                    case 7:
                        pezActual = new Module.PezGlobo();
                        alturaPez = 23 * (pezActual.getTamanio() / 9);
                        anchoPez = 92 * (pezActual.getTamanio() / 9);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 50);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 180) + 40;

                        const pg = document.createElement('div');
                        pg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pg);
                        pg.style.backgroundImage = "url(images/fishes/pufferfish_deflated.png)";
                        pg.style.transform = "scaleX(" + direccionPez + ")";
                        pg.style.height = alturaPez + "px";
                        pg.style.width = anchoPez + "px";
                        pg.style.backgroundSize = "100%";
                        pg.style.backgroundRepeat = "no-repeat";
                        pg.style.position = "absolute";
                        pg.style.top = distanciaArriba + "px";
                        pg.style.left = distanciaIzquierda + "px";
                        pg.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            pg.style.animation="morderIzquierda";
                        }
                        else
                        {
                            pg.style.animation="morderDerecha";
                        }
                        
                        pg.style.animationPlayState="paused";
                        pg.style.animationIterationCount="infinite";
                        pg.style.animationDuration="0.5s";
                        pg.style.animationDirection="alternate";
                        
                        const btpg = document.createElement('div');
                        btpg.setAttribute('id', 'boton_' + idDesignado);
                        btpg.setAttribute('type', 'button');
                        btpg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpg);
                        btpg.style.height = "20px";
                        btpg.style.width = "20px";
                        btpg.style.position = "absolute";
                        btpg.style.cursor = "pointer";
                        btpg.style.top = distanciaArriba + alturaPez - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btpg.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btpg.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btpg.style.backgroundSize = "100%";
                            btpg.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btpg.style.border = "none";
                        btpg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpg.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btpg.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 8;
                        break;
                    case 8:
                        pezActual = new Module.Atun();
                        alturaPez = 47 * (pezActual.getTamanio() / 155);
                        anchoPez = 182 * (pezActual.getTamanio() / 155);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 290) + 40;

                        const at = document.createElement('div');
                        at.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(at);
                        at.style.backgroundImage = "url(images/fishes/tuna.png)";
                        at.style.transform = "scaleX(" + direccionPez + ")";
                        at.style.height = alturaPez + "px";
                        at.style.width = anchoPez + "px";
                        at.style.backgroundSize = "100%";
                        at.style.backgroundRepeat = "no-repeat";
                        at.style.position = "absolute";
                        at.style.top = distanciaArriba + "px";
                        at.style.left = distanciaIzquierda + "px";
                        at.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            at.style.animation="morderIzquierda";
                        }
                        else
                        {
                            at.style.animation="morderDerecha";
                        }
                        
                        at.style.animationPlayState="paused";
                        at.style.animationIterationCount="infinite";
                        at.style.animationDuration="0.5s";
                        at.style.animationDirection="alternate";

                        const btat = document.createElement('div');
                        btat.setAttribute('id', 'boton_' + idDesignado);
                        btat.setAttribute('type', 'button');
                        btat.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btat);
                        btat.style.height = "60px";
                        btat.style.width = "60px";
                        btat.style.position = "absolute";
                        btat.style.cursor = "pointer";
                        btat.style.top = distanciaArriba + alturaPez - 30 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btat.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btat.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btat.style.backgroundSize = "100%";
                            btat.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btat.style.border = "none";
                        btat.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btat.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btat.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 9;
                        break;
                }
                break;
            case 1:
                switchRandomPool2();
                switch(numeroRandomSwitch)
                {
                    case 0:
                        pezActual = new Module.TetraNeon();
                        alturaPez = 9 * (pezActual.getTamanio() / 4);
                        anchoPez = 42 * (pezActual.getTamanio() / 4);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 130) + 40;

                        const tn = document.createElement('div');
                        tn.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(tn);
                        tn.style.backgroundImage = "url(images/fishes/neon_tetra.png)";
                        tn.style.transform = "scaleX(" + direccionPez + ")";
                        tn.style.height = alturaPez + "px";
                        tn.style.width = anchoPez + "px";
                        tn.style.backgroundSize = "100%";
                        tn.style.backgroundRepeat = "no-repeat";
                        tn.style.position = "absolute";
                        tn.style.top = distanciaArriba + "px";
                        tn.style.left = distanciaIzquierda + "px";
                        tn.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            tn.style.animation="morderIzquierda";
                        }
                        else
                        {
                            tn.style.animation="morderDerecha";
                        }
                        
                        tn.style.animationPlayState="paused";
                        tn.style.animationIterationCount="infinite";
                        tn.style.animationDuration="0.5s";
                        tn.style.animationDirection="alternate";
                        
                        const bttn = document.createElement('div');
                        bttn.setAttribute('id', 'boton_' + idDesignado);
                        bttn.setAttribute('type', 'button');
                        bttn.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(bttn);
                        bttn.style.height = "20px";
                        bttn.style.width = "20px";
                        bttn.style.position = "absolute";
                        bttn.style.cursor = "pointer";
                        bttn.style.top = distanciaArriba + alturaPez - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            bttn.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            bttn.style.backgroundImage = "url(images/elements/bubbles.gif";
                            bttn.style.backgroundSize = "100%";
                            bttn.style.backgroundRepeat = "no-repeat";
                        }
                        
                        bttn.style.border = "none";
                        bttn.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            bttn.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            bttn.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 10;
                        break;
                    case 1:
                        pezActual = new Module.Tortuga();
                        alturaPez = 32 * (pezActual.getTamanio() / 120);
                        anchoPez = 106 * (pezActual.getTamanio() / 120);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 200) + 40;

                        const to = document.createElement('div');
                        to.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(to);
                        to.style.backgroundImage = "url(images/fishes/turtle.png)";
                        to.style.transform = "scaleX(" + direccionPez + ")";
                        to.style.height = alturaPez + "px";
                        to.style.width = anchoPez + "px";
                        to.style.backgroundSize = "100%";
                        to.style.backgroundRepeat = "no-repeat";
                        to.style.position = "absolute";
                        to.style.top = distanciaArriba + "px";
                        to.style.left = distanciaIzquierda + "px";
                        to.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            to.style.animation="morderIzquierda";
                        }
                        else
                        {
                            to.style.animation="morderDerecha";
                        }
                        
                        to.style.animationPlayState="paused";
                        to.style.animationIterationCount="infinite";
                        to.style.animationDuration="0.5s";
                        to.style.animationDirection="alternate";

                        const btto = document.createElement('div');
                        btto.setAttribute('id', 'boton_' + idDesignado);
                        btto.setAttribute('type', 'button');
                        btto.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btto);
                        btto.style.height = "40px";
                        btto.style.width = "40px";
                        btto.style.position = "absolute";
                        btto.style.cursor = "pointer";
                        btto.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btto.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btto.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btto.style.backgroundSize = "100%";
                            btto.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btto.style.border = "none";
                        btto.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btto.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btto.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 11;
                        break;
                    case 2:
                        pezActual = new Module.Rana();
                        alturaPez = 22 * (pezActual.getTamanio() / 14);
                        anchoPez = 41 * (pezActual.getTamanio() / 14);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 40);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 120) + 40;

                        const rn = document.createElement('div');
                        rn.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(rn);

                        if(getNumeroRandom(1024) < 1)
                        {
                            rn.style.backgroundImage = "url(images/fishes/frog_shiny.png)";
                            arregloTipoPeces[idDesignado - 1] = 122;
                        }
                        else
                        {
                            rn.style.backgroundImage = "url(images/fishes/frog.png)";
                            arregloTipoPeces[idDesignado - 1] = 12;
                        }
                        
                        rn.style.transform = "scaleX(" + direccionPez + ")";
                        rn.style.height = alturaPez + "px";
                        rn.style.width = anchoPez + "px";
                        rn.style.backgroundSize = "100%";
                        rn.style.backgroundRepeat = "no-repeat";
                        rn.style.position = "absolute";
                        rn.style.top = distanciaArriba + "px";
                        rn.style.left = distanciaIzquierda + "px";
                        rn.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            rn.style.animation="morderIzquierda";
                        }
                        else
                        {
                            rn.style.animation="morderDerecha";
                        }
                        
                        rn.style.animationPlayState="paused";
                        rn.style.animationIterationCount="infinite";
                        rn.style.animationDuration="0.5s";
                        rn.style.animationDirection="alternate";

                        const btrn = document.createElement('div');
                        btrn.setAttribute('id', 'boton_' + idDesignado);
                        btrn.setAttribute('type', 'button');
                        btrn.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btrn);
                        btrn.style.height = "20px";
                        btrn.style.width = "20px";
                        btrn.style.position = "absolute";
                        btrn.style.cursor = "pointer";
                        btrn.style.top = distanciaArriba - 10 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btrn.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btrn.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btrn.style.backgroundSize = "100%";
                            btrn.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btrn.style.border = "none";
                        btrn.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btrn.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btrn.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }
                        break;
                    case 3:
                        pezActual = new Module.Trucha();
                        alturaPez = 26 * (pezActual.getTamanio() / 50);
                        anchoPez = 152 * (pezActual.getTamanio() / 50);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 280) + 40;

                        const tr = document.createElement('div');
                        tr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(tr);
                        tr.style.backgroundImage = "url(images/fishes/trout.png)";
                        tr.style.transform = "scaleX(" + direccionPez + ")";
                        tr.style.height = alturaPez + "px";
                        tr.style.width = anchoPez + "px";
                        tr.style.backgroundSize = "100%";
                        tr.style.backgroundRepeat = "no-repeat";
                        tr.style.position = "absolute";
                        tr.style.top = distanciaArriba + "px";
                        tr.style.left = distanciaIzquierda + "px";
                        tr.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            tr.style.animation="morderIzquierda";
                        }
                        else
                        {
                            tr.style.animation="morderDerecha";
                        }
                        
                        tr.style.animationPlayState="paused";
                        tr.style.animationIterationCount="infinite";
                        tr.style.animationDuration="0.5s";
                        tr.style.animationDirection="alternate";

                        const bttr = document.createElement('div');
                        bttr.setAttribute('id', 'boton_' + idDesignado);
                        bttr.setAttribute('type', 'button');
                        bttr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(bttr);
                        bttr.style.height = "40px";
                        bttr.style.width = "40px";
                        bttr.style.position = "absolute";
                        bttr.style.cursor = "pointer";
                        bttr.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            bttr.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            bttr.style.backgroundImage = "url(images/elements/bubbles.gif";
                            bttr.style.backgroundSize = "100%";
                            bttr.style.backgroundRepeat = "no-repeat";
                        }
                        
                        bttr.style.border = "none";
                        bttr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            bttr.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            bttr.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 13;
                        break;
                    case 4:
                        pezActual = new Module.Bagre();
                        alturaPez = 30 * (pezActual.getTamanio() / 85);
                        anchoPez = 165 * (pezActual.getTamanio() / 85);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 260) + 40;

                        const bg = document.createElement('div');
                        bg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(bg);
                        bg.style.backgroundImage = "url(images/fishes/catfish.png)";
                        bg.style.transform = "scaleX(" + direccionPez + ")";
                        bg.style.height = alturaPez + "px";
                        bg.style.width = anchoPez + "px";
                        bg.style.backgroundSize = "100%";
                        bg.style.backgroundRepeat = "no-repeat";
                        bg.style.position = "absolute";
                        bg.style.top = distanciaArriba + "px";
                        bg.style.left = distanciaIzquierda + "px";
                        bg.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            bg.style.animation="morderIzquierda";
                        }
                        else
                        {
                            bg.style.animation="morderDerecha";
                        }
                        
                        bg.style.animationPlayState="paused";
                        bg.style.animationIterationCount="infinite";
                        bg.style.animationDuration="0.5s";
                        bg.style.animationDirection="alternate";

                        const btbg = document.createElement('div');
                        btbg.setAttribute('id', 'boton_' + idDesignado);
                        btbg.setAttribute('type', 'button');
                        btbg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btbg);
                        btbg.style.height = "40px";
                        btbg.style.width = "40px";
                        btbg.style.position = "absolute";
                        btbg.style.cursor = "pointer";
                        btbg.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btbg.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btbg.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btbg.style.backgroundSize = "100%";
                            btbg.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btbg.style.border = "none";
                        btbg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btbg.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btbg.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 14;
                        break;
                    case 5:
                        pezActual = new Module.CangrejoRio();
                        alturaPez = 22 * (pezActual.getTamanio() / 19);
                        anchoPez = 44 * (pezActual.getTamanio() / 19);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = 40 + getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 140) + 40;

                        const cr = document.createElement('div');
                        cr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cr);
                        cr.style.backgroundImage = "url(images/fishes/crawfish.png)";
                        cr.style.transform = "scaleX(" + direccionPez + ")";
                        cr.style.height = alturaPez + "px";
                        cr.style.width = anchoPez + "px";
                        cr.style.backgroundSize = "100%";
                        cr.style.backgroundRepeat = "no-repeat";
                        cr.style.position = "absolute";
                        cr.style.top = distanciaArriba + "px";
                        cr.style.left = distanciaIzquierda + "px";
                        cr.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            cr.style.animation="morderIzquierda";
                        }
                        else
                        {
                            cr.style.animation="morderDerecha";
                        }
                        
                        cr.style.animationPlayState="paused";
                        cr.style.animationIterationCount="infinite";
                        cr.style.animationDuration="0.5s";
                        cr.style.animationDirection="alternate";

                        const btcr = document.createElement('div');
                        btcr.setAttribute('id', 'boton_' + idDesignado);
                        btcr.setAttribute('type', 'button');
                        btcr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcr);
                        btcr.style.height = "20px";
                        btcr.style.width = "20px";
                        btcr.style.position = "absolute";
                        btcr.style.cursor = "pointer";
                        btcr.style.top = distanciaArriba - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btcr.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btcr.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btcr.style.backgroundSize = "100%";
                            btcr.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btcr.style.border = "none";
                        btcr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btcr.style.left = distanciaIzquierda - 30 + "px";
                        }
                        else
                        {
                            btcr.style.left = distanciaIzquierda + anchoPez + 10 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 15;
                        break;
                    case 6:
                        pezActual = new Module.Salmon();
                        alturaPez = 29 * (pezActual.getTamanio() / 85);
                        anchoPez = 160 * (pezActual.getTamanio() / 85);
                        contadorPeces += pezActual.getPesoEstanque();
                        
                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 250) + 40;

                        const sa = document.createElement('div');
                        sa.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(sa);
                        sa.style.backgroundImage = "url(images/fishes/salmon.png)";
                        sa.style.transform = "scaleX(" + direccionPez + ")";
                        sa.style.height = alturaPez + "px";
                        sa.style.width = anchoPez + "px";
                        sa.style.backgroundSize = "100%";
                        sa.style.backgroundRepeat = "no-repeat";
                        sa.style.position = "absolute";
                        sa.style.top = distanciaArriba + "px";
                        sa.style.left = distanciaIzquierda + "px";
                        sa.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            sa.style.animation="morderIzquierda";
                        }
                        else
                        {
                            sa.style.animation="morderDerecha";
                        }
                        
                        sa.style.animationPlayState="paused";
                        sa.style.animationIterationCount="infinite";
                        sa.style.animationDuration="0.5s";
                        sa.style.animationDirection="alternate";

                        const btsa = document.createElement('div');
                        btsa.setAttribute('id', 'boton_' + idDesignado);
                        btsa.setAttribute('type', 'button');
                        btsa.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btsa);
                        btsa.style.height = "40px";
                        btsa.style.width = "40px";
                        btsa.style.position = "absolute";
                        btsa.style.cursor = "pointer";
                        btsa.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btsa.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btsa.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btsa.style.backgroundSize = "100%";
                            btsa.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btsa.style.border = "none";
                        btsa.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btsa.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btsa.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 16;
                        break;
                    case 7:
                        pezActual = new Module.PezEspada();
                        alturaPez = 49 * (pezActual.getTamanio() / 150);
                        anchoPez = 248 * (pezActual.getTamanio() / 150);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 110);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 430) + 40;

                        const pe = document.createElement('div');
                        pe.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pe);
                        pe.style.backgroundImage = "url(images/fishes/swordfish.png)";
                        pe.style.transform = "scaleX(" + direccionPez + ")";
                        pe.style.height = alturaPez + "px";
                        pe.style.width = anchoPez + "px";
                        pe.style.backgroundSize = "100%";
                        pe.style.backgroundRepeat = "no-repeat";
                        pe.style.position = "absolute";
                        pe.style.top = distanciaArriba + "px";
                        pe.style.left = distanciaIzquierda + "px";
                        pe.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            pe.style.animation="morderIzquierda";
                        }
                        else
                        {
                            pe.style.animation="morderDerecha";
                        }
                        
                        pe.style.animationPlayState="paused";
                        pe.style.animationIterationCount="infinite";
                        pe.style.animationDuration="0.5s";
                        pe.style.animationDirection="alternate";

                        const btpe = document.createElement('div');
                        btpe.setAttribute('id', 'boton_' + idDesignado);
                        btpe.setAttribute('type', 'button');
                        btpe.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpe);
                        btpe.style.height = "60px";
                        btpe.style.width = "60px";
                        btpe.style.position = "absolute";
                        btpe.style.cursor = "pointer";
                        btpe.style.top = distanciaArriba + alturaPez - 30 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btpe.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btpe.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btpe.style.backgroundSize = "100%";
                            btpe.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btpe.style.border = "none";
                        btpe.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpe.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btpe.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 17;
                        break;
                }
                break;
            case 2:
                switchRandomPool3();
                switch(numeroRandomSwitch)
                {
                    case 0:
                        pezActual = new Module.Char();
                        alturaPez = 18 * (pezActual.getTamanio() / 53);
                        anchoPez = 125 * (pezActual.getTamanio() / 53);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 240) + 40;

                        const ch = document.createElement('div');
                        ch.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ch);
                        ch.style.backgroundImage = "url(images/fishes/char.png)";
                        ch.style.transform = "scaleX(" + direccionPez + ")";
                        ch.style.height = alturaPez + "px";
                        ch.style.width = anchoPez + "px";
                        ch.style.backgroundSize = "100%";
                        ch.style.backgroundRepeat = "no-repeat";
                        ch.style.position = "absolute";
                        ch.style.top = distanciaArriba + "px";
                        ch.style.left = distanciaIzquierda + "px";
                        ch.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            ch.style.animation="morderIzquierda";
                        }
                        else
                        {
                            ch.style.animation="morderDerecha";
                        }
                        
                        ch.style.animationPlayState="paused";
                        ch.style.animationIterationCount="infinite";
                        ch.style.animationDuration="0.5s";
                        ch.style.animationDirection="alternate";

                        const btch = document.createElement('div');
                        btch.setAttribute('id', 'boton_' + idDesignado);
                        btch.setAttribute('type', 'button');
                        btch.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btch);
                        btch.style.height = "40px";
                        btch.style.width = "40px";
                        btch.style.position = "absolute";
                        btch.style.cursor = "pointer";
                        btch.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btch.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btch.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btch.style.backgroundSize = "100%";
                            btch.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btch.style.border = "none";
                        btch.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btch.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btch.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }
                        
                        arregloTipoPeces[idDesignado - 1] = 18;
                        break;
                    case 1:
                        pezActual = new Module.Magikarp();
                        alturaPez = 58;
                        anchoPez = 119;
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const mg = document.createElement('div');
                        mg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(mg);
                        mg.style.backgroundImage = "url(images/fishes/magikarp.png)";
                        mg.style.transform = "scaleX(" + direccionPez + ")";
                        mg.style.height = alturaPez + "px";
                        mg.style.width = anchoPez + "px";
                        mg.style.backgroundSize = "100%";
                        mg.style.backgroundRepeat = "no-repeat";
                        mg.style.position = "absolute";
                        mg.style.top = distanciaArriba + "px";
                        mg.style.left = distanciaIzquierda + "px";
                        mg.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            mg.style.animation="morderIzquierda";
                        }
                        else
                        {
                            mg.style.animation="morderDerecha";
                        }
                        
                        mg.style.animationPlayState="paused";
                        mg.style.animationIterationCount="infinite";
                        mg.style.animationDuration="0.5s";
                        mg.style.animationDirection="alternate";
                        
                        const btmg = document.createElement('div');
                        btmg.setAttribute('id', 'boton_' + idDesignado);
                        btmg.setAttribute('type', 'button');
                        btmg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btmg);
                        btmg.style.height = "40px";
                        btmg.style.width = "40px";
                        btmg.style.position = "absolute";
                        btmg.style.cursor = "pointer";
                        btmg.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btmg.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btmg.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btmg.style.backgroundSize = "100%";
                            btmg.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btmg.style.border = "none";
                        btmg.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btmg.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btmg.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 19;
                        break;
                    case 2:
                        pezActual = new Module.Cangrejo();
                        alturaPez = 39 * (pezActual.getTamanio() / 165);
                        anchoPez = 112 * (pezActual.getTamanio() / 165);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 60);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 160) + 20;

                        const cg = document.createElement('div');
                        cg.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(cg);
                        cg.style.backgroundImage = "url(images/fishes/crab_animated.gif)";
                        cg.style.transform = "scaleX(" + direccionPez + ")";
                        cg.style.height = alturaPez + "px";
                        cg.style.width = anchoPez + "px";
                        cg.style.backgroundSize = "100%";
                        cg.style.backgroundRepeat = "no-repeat";
                        cg.style.position = "absolute";
                        cg.style.top = distanciaArriba + "px";
                        cg.style.left = distanciaIzquierda + "px";
                        cg.style.zIndex = "1";
                        
                        cg.style.animation="morderArriba";
                        cg.style.animationPlayState="paused";
                        cg.style.animationIterationCount="infinite";
                        cg.style.animationDuration="0.5s";
                        cg.style.animationDirection="alternate-reverse";

                        const btcg = document.createElement('div');
                        btcg.setAttribute('id', 'boton_' + idDesignado);
                        btcg.setAttribute('type', 'button');
                        btcg.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btcg);
                        btcg.style.height = "20px";
                        btcg.style.width = "20px";
                        btcg.style.position = "absolute";
                        btcg.style.cursor = "pointer";
                        btcg.style.top = distanciaArriba - 30 + "px";
                        btcg.style.left = distanciaIzquierda + (anchoPez / 2.4) + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btcg.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btcg.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btcg.style.backgroundSize = "100%";
                            btcg.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btcg.style.border = "none";
                        btcg.style.zIndex = "0";

                        arregloTipoPeces[idDesignado - 1] = 20;
                        break;
                    case 3:
                        pezActual = new Module.Esturion();
                        alturaPez = 25 * (pezActual.getTamanio() / 200);
                        anchoPez = 208 * (pezActual.getTamanio() / 200);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 70);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 340) + 40;

                        const es = document.createElement('div');
                        es.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(es);
                        es.style.backgroundImage = "url(images/fishes/sturgeon.png)";
                        es.style.transform = "scaleX(" + direccionPez + ")";
                        es.style.height = alturaPez + "px";
                        es.style.width = anchoPez + "px";
                        es.style.backgroundSize = "100%";
                        es.style.backgroundRepeat = "no-repeat";
                        es.style.position = "absolute";
                        es.style.top = distanciaArriba + "px";
                        es.style.left = distanciaIzquierda + "px";
                        es.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            es.style.animation="morderIzquierda";
                        }
                        else
                        {
                            es.style.animation="morderDerecha";
                        }
                        
                        es.style.animationPlayState="paused";
                        es.style.animationIterationCount="infinite";
                        es.style.animationDuration="0.5s";
                        es.style.animationDirection="alternate";
                        
                        const btes = document.createElement('div');
                        btes.setAttribute('id', 'boton_' + idDesignado);
                        btes.setAttribute('type', 'button');
                        btes.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btes);
                        btes.style.height = "40px";
                        btes.style.width = "40px";
                        btes.style.position = "absolute";
                        btes.style.cursor = "pointer";
                        btes.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btes.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btes.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btes.style.backgroundSize = "100%";
                            btes.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btes.style.border = "none";
                        btes.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btes.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btes.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 21;
                        break;
                    case 4:
                        pezActual = new Module.Pirania();
                        alturaPez = 33 * (pezActual.getTamanio() / 43);
                        anchoPez = 106 * (pezActual.getTamanio() / 43);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 80);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 220) + 40;

                        const pi = document.createElement('div');
                        pi.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pi);
                        pi.style.backgroundImage = "url(images/fishes/piranha.png)";
                        pi.style.transform = "scaleX(" + direccionPez + ")";
                        pi.style.height = alturaPez + "px";
                        pi.style.width = anchoPez + "px";
                        pi.style.backgroundSize = "100%";
                        pi.style.backgroundRepeat = "no-repeat";
                        pi.style.position = "absolute";
                        pi.style.top = distanciaArriba + "px";
                        pi.style.left = distanciaIzquierda + "px";
                        pi.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            pi.style.animation="morderIzquierda";
                        }
                        else
                        {
                            pi.style.animation="morderDerecha";
                        }
                        
                        pi.style.animationPlayState="paused";
                        pi.style.animationIterationCount="infinite";
                        pi.style.animationDuration="0.5s";
                        pi.style.animationDirection="alternate";
                        
                        const btpi = document.createElement('div');
                        btpi.setAttribute('id', 'boton_' + idDesignado);
                        btpi.setAttribute('type', 'button');
                        btpi.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpi);
                        btpi.style.height = "40px";
                        btpi.style.width = "40px";
                        btpi.style.position = "absolute";
                        btpi.style.cursor = "pointer";
                        btpi.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btpi.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btpi.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btpi.style.backgroundSize = "100%";
                            btpi.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btpi.style.border = "none";
                        btpi.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpi.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btpi.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 22;
                        break;
                    case 5:
                        pezActual = new Module.PezRape();
                        alturaPez = 38 * (pezActual.getTamanio() / 60);
                        anchoPez = 128 * (pezActual.getTamanio() / 60);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 100);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 270) + 40;

                        const pr = document.createElement('div');
                        pr.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(pr);
                        pr.style.backgroundImage = "url(images/fishes/anglerfish.png)";
                        pr.style.transform = "scaleX(" + direccionPez + ")";
                        pr.style.height = alturaPez + "px";
                        pr.style.width = anchoPez + "px";
                        pr.style.backgroundSize = "100%";
                        pr.style.backgroundRepeat = "no-repeat";
                        pr.style.position = "absolute";
                        pr.style.top = distanciaArriba + "px";
                        pr.style.left = distanciaIzquierda + "px";
                        pr.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            pr.style.animation="morderIzquierda";
                        }
                        else
                        {
                            pr.style.animation="morderDerecha";
                        }
                        
                        pr.style.animationPlayState="paused";
                        pr.style.animationIterationCount="infinite";
                        pr.style.animationDuration="0.5s";
                        pr.style.animationDirection="alternate";
                        
                        const btpr = document.createElement('div');
                        btpr.setAttribute('id', 'boton_' + idDesignado);
                        btpr.setAttribute('type', 'button');
                        btpr.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btpr);
                        btpr.style.height = "40px";
                        btpr.style.width = "40px";
                        btpr.style.position = "absolute";
                        btpr.style.cursor = "pointer";
                        btpr.style.top = distanciaArriba + alturaPez - 20 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btpr.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btpr.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btpr.style.backgroundSize = "100%";
                            btpr.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btpr.style.border = "none";
                        btpr.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btpr.style.left = distanciaIzquierda - 60 + "px";
                        }
                        else
                        {
                            btpr.style.left = distanciaIzquierda + anchoPez + 20 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 23;
                        break;
                    case 6:
                        pezActual = new Module.Cachalote();
                        alturaPez = 184 * (pezActual.getTamanio() / 1600);
                        anchoPez = 892 * (pezActual.getTamanio() / 1600);
                        contadorPeces += pezActual.getPesoEstanque();

                        const ca = document.createElement('div');
                        ca.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ca);
                        ca.style.backgroundImage = "url(images/fishes/sperm_whale.png)";
                        ca.style.transform = "scaleX(" + direccionPez + ")";
                        ca.style.height = alturaPez + "px";
                        ca.style.width = anchoPez + "px";
                        ca.style.backgroundSize = "100%";
                        ca.style.backgroundRepeat = "no-repeat";
                        ca.style.position = "absolute";
                        ca.style.top = 10 + "px";
                        ca.style.left = 20 + "px";
                        ca.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            ca.style.animation="morderIzquierda";
                        }
                        else
                        {
                            ca.style.animation="morderDerecha";
                        }
                        
                        ca.style.animationPlayState="paused";
                        ca.style.animationIterationCount="infinite";
                        ca.style.animationDuration="0.5s";
                        ca.style.animationDirection="alternate";

                        const btca = document.createElement('div');
                        btca.setAttribute('id', 'boton_' + idDesignado);
                        btca.setAttribute('type', 'button');
                        btca.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btca);
                        btca.style.height = "60px";
                        btca.style.width = "60px";
                        btca.style.position = "absolute";
                        btca.style.cursor = "pointer";
                        btca.style.top = alturaPez - 30 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btca.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btca.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btca.style.backgroundSize = "100%";
                            btca.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btca.style.border = "none";
                        btca.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btca.style.left = - 70 + "px";
                        }
                        else
                        {
                            btca.style.left = anchoPez + 50 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 24;
                        break;
                    case 7:
                        pezActual = new Module.TiburonBlanco();
                        alturaPez = 67 * (pezActual.getTamanio() / 415);
                        anchoPez = 373 * (pezActual.getTamanio() / 415);
                        contadorPeces += pezActual.getPesoEstanque();

                        distanciaArriba = getNumeroRandom((window.innerHeight * 0.4) - 120);
                        distanciaIzquierda = getNumeroRandom((window.innerWidth * 0.6) - 520) + 40;

                        const ws = document.createElement('div');
                        ws.setAttribute('id', 'pez_' + idDesignado);
                        peces.appendChild(ws);
                        ws.style.backgroundImage = "url(images/fishes/great_white_shark.png)";
                        ws.style.transform = "scaleX(" + direccionPez + ")";
                        ws.style.height = alturaPez + "px";
                        ws.style.width = anchoPez + "px";
                        ws.style.backgroundSize = "100%";
                        ws.style.backgroundRepeat = "no-repeat";
                        ws.style.position = "absolute";
                        ws.style.top = distanciaArriba + "px";
                        ws.style.left = distanciaIzquierda + "px";
                        ws.style.zIndex = "1";
                        
                        if(direccionPez == 1)
                        {
                            ws.style.animation="morderIzquierda";
                        }
                        else
                        {
                            ws.style.animation="morderDerecha";
                        }
                        
                        ws.style.animationPlayState="paused";
                        ws.style.animationIterationCount="infinite";
                        ws.style.animationDuration="0.5s";
                        ws.style.animationDirection="alternate";

                        const btws = document.createElement('div');
                        btws.setAttribute('id', 'boton_' + idDesignado);
                        btws.setAttribute('type', 'button');
                        btws.setAttribute('onclick', 'pescaPeces(' + idDesignado + ')');
                        peces.appendChild(btws);
                        btws.style.height = "60px";
                        btws.style.width = "60px";
                        btws.style.position = "absolute";
                        btws.style.cursor = "pointer";
                        btws.style.top = distanciaArriba + alturaPez - 30 + "px";
                        
                        if(estadoDificultadDificil)
                        {
                            btws.style.backgroundColor = "#36C5F4";
                        }
                        else
                        {
                            btws.style.backgroundImage = "url(images/elements/bubbles.gif";
                            btws.style.backgroundSize = "100%";
                            btws.style.backgroundRepeat = "no-repeat";
                        }
                        
                        btws.style.border = "none";
                        btws.style.zIndex = "0";

                        if(direccionPez == 1)
                        {
                            btws.style.left = distanciaIzquierda - 90 + "px";
                        }
                        else
                        {
                            btws.style.left = distanciaIzquierda + anchoPez + 30 + "px";
                        }

                        arregloTipoPeces[idDesignado - 1] = 25;
                        break;
                }
                break;
            }
            arregloPecesActivos[idDesignado - 1] = pezActual;
        }
    }
}

function switchRandomPool1()// Función que genera un numero random dependiendo del pool y de la probabilidad que les dimos a cada uno
{
    var nrs = getNumeroRandom(100);

    if(nrs < 2)
    {
        numeroRandomSwitch = 8;
        return;
    }
    if(nrs < 9)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 19)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 29)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 39)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 51)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 65)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 80)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function switchRandomPool2()
{
    var nrs = getNumeroRandom(100);
    if(nrs < 2)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 10)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 25)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 36)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 49)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 64)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 80)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function switchRandomPool3()
{
    var nrs = getNumeroRandom(100);
    if(nrs < 1)
    {
        numeroRandomSwitch = 7;
        return;
    }
    if(nrs < 6)
    {
        numeroRandomSwitch = 6;
        return;
    }
    if(nrs < 16)
    {
        numeroRandomSwitch = 5;
        return;
    }
    if(nrs < 27)
    {
        numeroRandomSwitch = 4;
        return;
    }
    if(nrs < 42)
    {
        numeroRandomSwitch = 3;
        return;
    }
    if(nrs < 60)
    {
        numeroRandomSwitch = 2;
        return;
    }
    if(nrs < 78)
    {
        numeroRandomSwitch = 1;
        return;
    }
    numeroRandomSwitch = 0;
    return;
}

function encontrarEspacio()// Función que encuentra un espacio disponible en los arreglos
{
    for(let i = 0; i < 10; i++)
    {
        if(!arregloEspacios[i])
        {
            idDesignado = i + 1;
            arregloEspacios[idDesignado - 1] = true;
            return;
        }
    }
}

const contarDecimasSegundo = setInterval(contarTiempo, 100);// Funcion que cuenta las decimas de segundo en el tiempo de reacción

function contarTiempo()// Función que realiza la desaparición del pez si no modifica ciertos valores a tiempo
{
    tiempoDecimasSegundo++;

    if(tiempoDecimasSegundo > 7200)
    {
        tiempoDecimasSegundo = 0;
    }
    if(estadoReaccionAnzuelo && ((tiempoDecimasSegundo * 100) - caniaObjetoActual.getTiempoMas()) > (arregloPecesActivos[idPezActual - 1].getTiempo() + modificacionTiempoReaccionJefe))
    {
        if(!estadoDesaparecerJefe)
        {
            desaparecerPez(true);
            idPezActual = -1;
        }
        else
        {
            estadoPescaContraria = true;
            document.getElementById("sonidoRotura").pause();
            document.getElementById("sonidoRotura").currentTime = 0;
            document.getElementById("sonidoRotura").play();

            if(estadoUltimaFase)
            {
                contadorPescasJefeSeguidas = 0;

                muerteFinal();
            }

            realizarRotacionJefe();
            contadorPescasJefeSeguidas = 0;
        }
        estadoReaccionAnzuelo = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        estadoJuegoReaccion = false;
    }
}

const intervaloTrigger = setInterval(crearIntervalos, 1000);// Funcion que crea intervalos de 1 segundo

function crearIntervalos()// Función que genera el sonido de pesca cada vez que el pez intente morderlo
{
    if(estadoJuegoReaccion && estadoDelayReaccion)
    {
        if(!estadoDesaparecerJefe)
        {
            document.getElementById("pez_" + idPezActual).style.animationPlayState="paused";
        }
        else
        {
            jefe.style.animationPlayState="paused";
        }
        if(getNumeroRandom(100) < 30)
        {
            document.getElementById("sonidoAtrapar").pause();
            document.getElementById("sonidoAtrapar").currentTime = 0;
            document.getElementById("sonidoAtrapar").play();
            tiempoDecimasSegundo = 0;
            estadoReaccionAnzuelo = true;
            estadoJuegoReaccion = false;
            estadoDelayReaccion = false;
        }
        else
        {
            document.getElementById("falsoAtrapar").play();
        }
    }
    if(estadoJuegoReaccion)
    {
        estadoDelayReaccion = true;
        if(!estadoDesaparecerJefe)
        {
            document.getElementById("pez_" + idPezActual).style.animationDelay="0.4s";
            document.getElementById("pez_" + idPezActual).style.animationPlayState="running";
        }
        else
        {
            jefe.style.animationDelay="0.4s";
            jefe.style.animationPlayState="running";
        }
    }
}

function pescaPeces(idPez)// Función que se realiza al darle click al botón de un pez
{
    if(!estadoReaccionAnzuelo && !estadoAnzuelo)// Tirar el anzuelo si no hay nada
    {
        estadoJuegoReaccion = true;
        idPezActual = idPez;
        if(estadoReiniciadoAnzuelo)
        {
            estadoPermitirPesca = true;
            estadoReiniciadoAnzuelo = false;
        }
    }
    else if(!estadoJuegoReaccion && idPez == idPezActual && estadoAnzuelo && estadoPermitirPesca)// Atrapar el pez si el juego de reacción esta activo
    {
        atraparPez();
        estadoReaccionAnzuelo = false;
        estadoJuegoReaccion = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        idPezActual = -1;
    }
    else if(estadoJuegoReaccion && idPez == idPezActual)// Desaparecer el pez si se da click antes de que inicie el juego de reacción
    {
        desaparecerPez(true);
        estadoReaccionAnzuelo = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        estadoJuegoReaccion = false;
        idPezActual = -1;
    }
}

function desaparecerPez(estadoSonidoDesaparecer)// Desaparecer el pez y su botón correspondiente
{
    if(estadoSonidoDesaparecer)
    {
        document.getElementById("sonidoRotura").pause();
        document.getElementById("sonidoRotura").currentTime = 0;
        document.getElementById("sonidoRotura").play();
    }
    contadorPeces -= arregloPecesActivos[idPezActual - 1].getPesoEstanque();
    document.getElementById("pez_" + idPezActual).remove();
    document.getElementById("boton_" + idPezActual).remove();
    arregloEspacios[idPezActual - 1] = false;
}

function atraparPez()// Función que atrapa el pez y guarda todos sus datos necesarios
{
    document.getElementById("sonidoCaptura").currentTime = 0;
    document.getElementById("sonidoCaptura").play();
    caniaObjetoActual.capturaExitosa(arregloTipoPeces[idPezActual - 1]);
    mostrarPez();
    contadorPeces -= arregloPecesActivos[idPezActual - 1].getPesoEstanque();
    document.getElementById("pez_" + idPezActual).remove();
    document.getElementById("boton_" + idPezActual).remove();
    arregloEspacios[idPezActual - 1] = false;

    if(arregloTipoPeces[idPezActual - 1] != 122)
    {
        arregloContadorPeces[arregloTipoPeces[idPezActual - 1] - 1]++;
    }
}

function mostrarPez()// Función que muestra en pantalla en grande al pez que se pesco y sus datos
{
    asignarYCalcularPez();
    document.getElementById("pantallaPesca").style.display = "inline";
    document.getElementById("pesoPez").value = "KG: " + arregloPecesActivos[idPezActual - 1].getPeso();
    document.getElementById("tamanioPez").value = "CM: " + arregloPecesActivos[idPezActual - 1].getTamanio();
    document.getElementById("dineroPez").value = "G: " + Math.round(dineroActualPez);
    
    if(estadoDificultadDificil)// Sumar dinero de pez al dinero total dependinedo de la dificultad
    {
        dineroTotal += Math.round(dineroActualPez * 1.5);
    }
    else
    {
        dineroTotal += Math.round(dineroActualPez);
    }
    
    if(dineroTotal > 9999)
    {
        dineroTotal = 9999;
    }
    document.getElementById("dineroTotal").value = dineroTotal;
    document.getElementById("botonBajarTienda").style.display="none";
    document.getElementById("estanque").style.display="none";
    estadoAnzuelo = true;
    estadoBloquearMovimientoAnzuelo = true
}

function quitarMadera()// Función para quitar el modelo del pez y regresar al juego principal
{
    document.getElementById("pantallaPesca").style.display = "none";
    document.getElementById("botonBajarTienda").style.display="inline";
    document.getElementById("estanque").style.display="inline";
    estadoAnzuelo = false;
    estadoBloquearMovimientoAnzuelo = false;

    if(estadoUltimaFase)
    {
        document.getElementById("sonidoAtraparJefeFase3").currentTime = 0;
        document.getElementById("sonidoAtraparJefeFase3").pause();

        cambiarAnzuelo(2);
        estadoUltimaFase = false;
        
        salirPantallaGameOver();
        dineroTotal = 9999;
        document.getElementById("dineroTotal").value = dineroTotal;
        mostrarFotoNegraCatalogo(26);
        arregloContadorPeces[25]++;
        if(estadoAgradecimientosFinales)
        {
            iniciarAgradecimientosFinales();
            estadoAgradecimientosFinales = false;
        }
    }
    else
    {
        if(estadoDesaparecerJefe)
        {
            document.getElementById("notaDoFinal").currentTime = 0;
            document.getElementById("notaDoFinal").pause();
            document.getElementById("sonidoAtraparJefeFase1").currentTime = 0;
            document.getElementById("sonidoAtraparJefeFase1").pause();
            document.getElementById("fondo").style.backgroundImage="url(images/boss_fight/black_screen.jpg)";
            document.getElementById("juegoPesca").style.display="none";
            document.getElementById("videoJefeMirando").style.display="inline";
            document.getElementById("videoJefeMirando").play();
            estadoFase2Lista = true;
        }
        else
        {
            click.play();
        }
    }
}

function asignarYCalcularPez()// Función que coloca la foto del pez dependiendo de su ID
{
    switch(arregloTipoPeces[idPezActual - 1])
    {
    case 1:
        modeloPez.style.backgroundImage = "url(images/fishes/bluegill.png)";
        modeloPez.style.height = 396 + "px";
        modeloPez.style.width = 785 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 396) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 785) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 2:
        modeloPez.style.backgroundImage = "url(images/fishes/sea_bass.png)";
        modeloPez.style.height = 396 + "px";
        modeloPez.style.width = 834 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 396) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 834) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 6);
        break;
    case 3:
        modeloPez.style.backgroundImage = "url(images/fishes/clownfish.png)";
        modeloPez.style.height = 306 + "px";
        modeloPez.style.width = 528 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 306) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 528) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 4:
        modeloPez.style.backgroundImage = "url(images/fishes/carp.png)";
        modeloPez.style.height = 418 + "px";
        modeloPez.style.width = 954 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 418) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 954) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 8);
        break;
    case 5:
        modeloPez.style.backgroundImage = "url(images/fishes/anchovy.png)";
        modeloPez.style.height = 217 + "px";
        modeloPez.style.width = 688 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 217) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 688) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 23);
        break;
    case 6:
        modeloPez.style.backgroundImage = "url(images/fishes/koi.png)";
        modeloPez.style.height = 297 + "px";
        modeloPez.style.width = 755 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 297) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 755) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 13);
        break;
    case 7:
        modeloPez.style.backgroundImage = "url(images/fishes/goldfish.png)";
        modeloPez.style.height = 230 + "px";
        modeloPez.style.width = 397 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 230) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 397) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 8:
        modeloPez.style.backgroundImage = "url(images/fishes/pufferfish_inflated.png)";
        modeloPez.style.height = 327 + "px";
        modeloPez.style.width = 493 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 327) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 493) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 6);
        break;
    case 9:
        modeloPez.style.backgroundImage = "url(images/fishes/tuna.png)";
        modeloPez.style.height = 375 + "px";
        modeloPez.style.width = 726 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 375) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 726) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 90);
        break;
    case 10:
        modeloPez.style.backgroundImage = "url(images/fishes/neon_tetra.png)";
        modeloPez.style.height = 202 + "px";
        modeloPez.style.width = 445 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 202) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 445) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 11:
        modeloPez.style.backgroundImage = "url(images/fishes/turtle.png)";
        modeloPez.style.height = 339 + "px";
        modeloPez.style.width = 568 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 339) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 568) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 43);
        break;
    case 12:
        modeloPez.style.backgroundImage = "url(images/fishes/frog.png)";
        modeloPez.style.height = 346 + "px";
        modeloPez.style.width = 329 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 346) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 329) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 122:
        modeloPez.style.backgroundImage = "url(images/fishes/frog_shiny.png)";
        modeloPez.style.height = 346 + "px";
        modeloPez.style.width = 329 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 346) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 329) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 13:
        modeloPez.style.backgroundImage = "url(images/fishes/trout.png)";
        modeloPez.style.height = 273 + "px";
        modeloPez.style.width = 813 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 273) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 813) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 17);
        break;
    case 14:
        modeloPez.style.backgroundImage = "url(images/fishes/catfish.png)";
        modeloPez.style.height = 318 + "px";
        modeloPez.style.width = 880 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 318) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 880) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 15:
        modeloPez.style.backgroundImage = "url(images/fishes/crawfish.png)";
        modeloPez.style.height = 266 + "px";
        modeloPez.style.width = 263 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 266) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 263) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 16:
        modeloPez.style.backgroundImage = "url(images/fishes/salmon.png)";
        modeloPez.style.height = 311 + "px";
        modeloPez.style.width = 851 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 311) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 851) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 7);
        break;
    case 17:
        modeloPez.style.backgroundImage = "url(images/fishes/swordfish.png)";
        modeloPez.style.height = 360 + "px";
        modeloPez.style.width = 745 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 293) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 745) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 140);
        break;
    case 18:
        modeloPez.style.backgroundImage = "url(images/fishes/char.png)";
        modeloPez.style.height = 196 + "px";
        modeloPez.style.width = 665 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 196) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 665) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 2);
        break;
    case 19:
        modeloPez.style.backgroundImage = "url(images/fishes/magikarp.png)";
        modeloPez.style.height = 308 + "px";
        modeloPez.style.width = 318 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 308) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 318) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 20:
        modeloPez.style.backgroundImage = "url(images/fishes/crab_animated.gif)";
        modeloPez.style.height = 309 + "px";
        modeloPez.style.width = 447 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 309) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 447) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 11);
        break;
    case 21:
        modeloPez.style.backgroundImage = "url(images/fishes/sturgeon.png)";
        modeloPez.style.height = 202 + "px";
        modeloPez.style.width = 832 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 202) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 832) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 65);
        break;
    case 22:
        modeloPez.style.backgroundImage = "url(images/fishes/piranha.png)";
        modeloPez.style.height = 267 + "px";
        modeloPez.style.width = 425 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 267) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 425) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 11);
        break;
    case 23:
        modeloPez.style.backgroundImage = "url(images/fishes/anglerfish.png)";
        modeloPez.style.height = 305 + "px";
        modeloPez.style.width = 511 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 305) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 511) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 37);
        break;
    case 24:
        modeloPez.style.backgroundImage = "url(images/fishes/sperm_whale.png)";
        modeloPez.style.height = 369 + "px";
        modeloPez.style.width = 892 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 369) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 892) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero();
        break;
    case 25:
        modeloPez.style.backgroundImage = "url(images/fishes/great_white_shark.png)";
        modeloPez.style.height = 357 + "px";
        modeloPez.style.width = 995 + "px";
        modeloPez.style.backgroundSize = "100%";
        modeloPez.style.backgroundRepeat = "no-repeat";
        modeloPez.style.position = "absolute";
        modeloPez.style.top = ((innerHeight - 357) / 3) + "px";
        modeloPez.style.left = ((innerWidth - 995) / 2) + "px";
        dineroActualPez = arregloPecesActivos[idPezActual - 1].getDinero() * (arregloPecesActivos[idPezActual - 1].getPeso() / 890);
        break;
    }
}

function bajarTienda()// Función que se ejecuta al darle click a la tienda y la muestra
{
    document.getElementById("fondoSeguroRegresar").style.display = "none";
    document.getElementById("fondoOpciones").style.display = "none";
    document.getElementById("fondoCatalogo").style.display = "none";
    document.getElementById("botonBajarTienda").style.display = "none";
    document.getElementById("fondoTienda").style.display = "inline";
    document.getElementById("botonesTienda").style.display = "inline";
    document.getElementById("dickTinieblas").style.display = "inline";
    estadoHablarDick = false;
}

function subirTienda()// Función que se ejecuta cuando se sube la tienda y se regresa a lo anterior
{
    resetVozDick()
    document.getElementById("botonBajarTienda").style.display = "inline";
    document.getElementById("fondoTienda").style.display = "none";
    document.getElementById("botonesTienda").style.display = "none";
    document.getElementById("dickTinieblas").style.display = "none";
    document.getElementById("burbujaTextoDick").style.display = "none";
    document.getElementById("tablonCompra").style.display = "none";
    document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas.png)";
    estadoTerminarHablar = false;
    estadoHablarDick = false;
}

function bajarTiendaComienzo()// Función que se ejecuta cuando se baja la tienda desde el juego de pesca
{
    click.play();
    if(estadoAnzuelo)
    {
        estadoPasadoAnzuelo = true;
    }
    estadoAnzuelo = true;
    bajarTienda()
    document.getElementById("estanque").style.display="none";
    estadoEstanque = false;
}

function subirTiendaFinal()// Función que se ejecuta cuando se regresa al juego de pesca desde la tienda
{
    click.play();
    if(!estadoPasadoAnzuelo)
    {
        estadoAnzuelo = false;
    }
    estadoPasadoAnzuelo = false;
    document.getElementById("estanque").style.display="inline";
    chequeoMax();
    estadoEstanque = true;
}

function subirTiendaFuncion()// Función que use ambas subidas de tienda para ciertas situaciones
{
    subirTienda();
    subirTiendaFinal();
}

function sonidoDick()// Sonido que hace Dick Tinieblas
{
    var vozDickActual = 0;
    do
    {
        vozDickActual = getNumeroRandom(5);
    } while(vozDickActual == numeroVozDickPasado);
    numeroVozDickPasado = vozDickActual;

    resetVozDick();

    switch(vozDickActual)
    {
    case 0:
        document.getElementById("vozDick1").play();
        break;
    case 1:
        document.getElementById("vozDick2").play();
        break;
    case 2:
        document.getElementById("vozDick3").play();
        break;
    case 3:
        document.getElementById("vozDick4").play();
        break;
    case 4:
        document.getElementById("vozDick5").play();
        break;
    }
}

function resetVozDick()//Función que resetea de su voz
{
    document.getElementById("vozDick1").pause();
    document.getElementById("vozDick1").currentTime = 0;
    document.getElementById("vozDick2").pause();
    document.getElementById("vozDick2").currentTime = 0;
    document.getElementById("vozDick3").pause();
    document.getElementById("vozDick3").currentTime = 0;
    document.getElementById("vozDick4").pause();
    document.getElementById("vozDick4").currentTime = 0;
    document.getElementById("vozDick5").pause();
    document.getElementById("vozDick5").currentTime = 0;
}

function dickHablar()// Función que muestra la burbuja de texto con tips del viejo en la tienda
{
    sonidoDick()
    var dialogoActual = 0;
    document.getElementById("tablonCompra").style.display = "none";
    if(!estadoHablarDick)
    {
        estadoHablarDick = true;
        document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
        document.getElementById("burbujaTextoDick").style.display = "inline";
    }
    if(estadoHablarDick)
    {
        do
        {
            dialogoActual = getNumeroRandom(7);
        } while(dialogoActual == numeroDialogoPasado);
        numeroDialogoPasado = dialogoActual;

        if(getNumeroRandom(100) < 1)
        {
            dialogoActual = 7;
        }

        switch(dialogoActual)
        {
        case 0:
            textoBurbuja.innerHTML = "<br>Los peces no se irán del estanque hasta que intentes pescarlos.";
            break;
        case 1:
            textoBurbuja.innerHTML = "<br>Utiliza otros anzuelos para que aparezcan más tipos de peces en el estanque.";
            break;
        case 2:
            textoBurbuja.innerHTML = "<br>Mientras más potente sea tu caña, será más fácil será pescar cualquier pez.";
            break;
        case 3:
            textoBurbuja.innerHTML = "<br>Mientras más peso tenga el pez, recibirás más monedas.";
            break;
        case 4:
            textoBurbuja.innerHTML = "<br>El tiempo del día no afecta el estanque, solo la ambientación.";
            break;
        case 5:
            textoBurbuja.innerHTML = "<br>La dificultad difícil aumentará la cantidad de monedas recibidas por cada pesca.";
            break;
        case 6:
            textoBurbuja.innerHTML = "<br>Puedes volver a checar el tutorial desde el menú de ajustes.";
            break;
        case 7:
            textoBurbuja.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsam, dicta perferendis quisquam, veniam officiis quis at.";
            break;
        }
    }
}

function cambiarAnzuelo(opcionTienda)// Función que se ejecuta cuando se cambia de anzuelo o se quiere comprar uno
{
    click.play();
    switch(opcionTienda)
    {
    case 0:
        limpiarPool();     
        caniaObjetoActual.setCaniaActual(1);
        document.getElementById("bordeAnzueloLigero").style.backgroundImage = "url(images/elements/shop_item_border_golden.png)";
        if(estadoAnzuelosTienda[1])
        {
            document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            document.getElementById("fotoAnzueloMediano").style.backgroundImage = "url(images/elements/mediumweight_fish_hook.png)";
        }
        else
        {
            document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
        }
        if(estadoAnzuelosTienda[2])
        {
            document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border.png)";
        }
        else
        {
            document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
        }
        if(estadoAnzuelosTienda[3])
        {
            document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border.png)";
        }
        else
        {
            if(estadoDesbloqueo)
            {
                document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
            }
            else
            {
                document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_broken_border.png)";
            }
        }
        anzuelo.style.backgroundImage="url(images/cania/anzuelo.png)";
        break;
    case 1:
        if(estadoAnzuelosTienda[1])
        {
            limpiarPool();
            caniaObjetoActual.setCaniaActual(2);
            
            document.getElementById("bordeAnzueloLigero").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border_golden.png)";
            document.getElementById("fotoAnzueloMediano").style.backgroundImage = "url(images/elements/mediumweight_fish_hook.png)";
            if(estadoAnzuelosTienda[2])
            {
                document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border.png)";
                document.getElementById("fotoAnzueloPesado").style.backgroundImage = "url(images/elements/heavyweight_fish_hook.png)";
            }
            else
            {
                document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
            }
            if(estadoAnzuelosTienda[3])
            {
                document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            }
            else
            {
                if(estadoDesbloqueo)
                {
                    document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
                }
                else
                {
                    document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_broken_border.png)";
                }
            }
            anzuelo.style.backgroundImage="url(images/cania/anzuelo2.png)";
        }
        else
        {
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es un anzuelo de peso mediano. Te costará unas... 400 monedas.<br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 400;
            idCompra = 1;
        }
        break;
    case 2:
        if(estadoAnzuelosTienda[2])
        {
            limpiarPool();
            caniaObjetoActual.setCaniaActual(3);
            document.getElementById("bordeAnzueloLigero").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            if(estadoAnzuelosTienda[1])
            {
                document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border.png)";
                document.getElementById("fotoAnzueloMediano").style.backgroundImage = "url(images/elements/mediumweight_fish_hook.png)";
            }
            else
            {
                document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
            }
            document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border_golden.png)";
            document.getElementById("fotoAnzueloPesado").style.backgroundImage = "url(images/elements/heavyweight_fish_hook.png)";
            if(estadoAnzuelosTienda[3])
            {
                document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            }
            else
            {
                if(estadoDesbloqueo)
                {
                    document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border_gray.png)";
                }
                else
                {
                    document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_broken_border.png)";
                }
            }
            anzuelo.style.backgroundImage="url(images/cania/anzuelo3.png)";
        }
        else
        {
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es un anzuelo de peso pesado. Te costará unas... 2000 monedas.<br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 2000;
            idCompra = 2;
        }
        break;
    case 3:
        if(estadoAnzuelosTienda[3])
        {
            limpiarPool();
            caniaObjetoActual.setCaniaActual(4);
            document.getElementById("bordeAnzueloLigero").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            document.getElementById("bordeAnzueloMediano").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            document.getElementById("fotoAnzueloMediano").style.backgroundImage = "url(images/elements/mediumweight_fish_hook.png)";
            document.getElementById("bordeAnzueloPesado").style.backgroundImage = "url(images/elements/shop_item_border.png)";
            document.getElementById("fotoAnzueloPesado").style.backgroundImage = "url(images/elements/heavyweight_fish_hook.png)";
            document.getElementById("bordeAnzueloMisterioso").style.backgroundImage = "url(images/elements/shop_item_border_golden.png)";
            document.getElementById("fotoAnzueloMisterioso").style.display = "inline";
            document.getElementById("fotoAnzueloMisterioso").style.backgroundImage = "url(images/elements/mysterious_fish_hook.png)";
            anzuelo.style.backgroundImage="url(images/cania/anzuelo4.png)";
        }
        else
        {
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "¿Con que quieres mi anzuelo misterioso ehh. Te costará unas... 9999 monedas.<br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 9999;
            idCompra = 3;
        }
        break;
    }
}

function limpiarPool()// Función que limpia todo el estanque
{
    for(let i = 0; i < 10; i++)
    {
        idPezActual = i + 1;
        if(arregloEspacios[i])
        {
            desaparecerPez(false);
        }
    }
    estadoReaccionAnzuelo = false;
    estadoPermitirPesca = false;
    estadoReiniciadoAnzuelo = true;
    estadoJuegoReaccion = false;
    idPezActual = -1;
}

function comprarCania(opcionTienda)// Función que se ejecuta al cambiar de caña o al querer mejorarla
{
    click.play();
    if(estadoCaniasTienda[opcionTienda - 1])
    {
        switch(opcionTienda)
        {
        case 1:
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es una caña +1. Te costará unas... 200 monedas.<br><br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 200;
            idCompra = 4;
            break;
        case 2:
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es una caña +2. Te costará unas... 800 monedas.<br><br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 800;
            idCompra = 5;
            break;
        case 3:
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es una caña +3. Te costará unas... 2200 monedas.<br><br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 2200;
            idCompra = 6;
            break
        case 4:
            sonidoDick()
            document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
            document.getElementById("burbujaTextoDick").style.display = "inline";
            textoBurbuja.innerHTML = "Eso de ahí es una caña +4. Te costará unas... 4000 monedas.<br><br>¿Qué dices?";
            document.getElementById("tablonCompra").style.display = "inline";
            dineroNecesarioCompra = 4000;
            idCompra = 7;
            break;
        }
    }
    else
    {
        sonidoDick()
        document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
        document.getElementById("burbujaTextoDick").style.display = "inline";
        textoBurbuja.innerHTML = "Necesitas comprar todas las cañas anteriores antes de comprar esa caña.";
        document.getElementById("tablonCompra").style.display = "none";
    }
}

function realizarCompra()// Función que se ejecuta al querer comprar un objeto
{
    click.play();
    document.getElementById("tablonCompra").style.display = "none";
    if(dineroNecesarioCompra > dineroTotal)
    {
        sonidoDick()
        textoBurbuja.innerHTML = "<br>No tienes suficientes monedas, regresa cuando hayas conseguido las suficientes.";
    }
    else
    {
        sonidoDick()
        dineroTotal -= dineroNecesarioCompra;
        document.getElementById("dineroTotal").value = dineroTotal;
        textoBurbuja.innerHTML = "<br>¡Excelente compra!";
        recibirItem();
    }
}

function salirDeCompra()// Función que se ejecuta al no quere comprar
{
    click.play();
    sonidoDick()
    document.getElementById("tablonCompra").style.display = "none";
    textoBurbuja.innerHTML = "Hmm...<br>Al cabo que ni quería vendertela.";
}

function recibirItem()// Función que realiza la compra de cualquier objeto de la tienda
{
    switch(idCompra)
    {
    case 1:
        estadoAnzuelosTienda[1] = true;
        cambiarAnzuelo(1);
        break;
    case 2:
        estadoAnzuelosTienda[2] = true;
        cambiarAnzuelo(2);
        break;
    case 3:
        estadoAnzuelosTienda[3] = true;
        document.getElementById("fotoAnzueloMisterioso").style.width="102px";
        document.getElementById("fotoAnzueloMisterioso").style.left="754.8px";
        cambiarAnzuelo(3);
        break;
    case 4:
        estadoCaniasTienda[1] = true;
        document.getElementById("bordeCania").style.backgroundImage = "url(images/elements/shop_item_border_fishing_rod.png)";
        document.getElementById("bordeCaniaMas1").style.backgroundImage = "url(images/elements/shop_item_border_golden_fishing_rod.png)";
        document.getElementById("fotoCaniaMas1").style.backgroundImage = "url(images/elements/fishing_rod_plus_1.png)";
        mango.style.backgroundImage="url(images/cania/mango2.png)";
        puntera.style.backgroundImage="url(images/cania/puntera2.png)";
        document.getElementById("fotoCaniaMas1").removeAttribute("onclick");
        document.getElementById("fotoCaniaMas1").style.cursor="default"
        caniaObjetoActual.mejorarCania();
        break;
    case 5:
        estadoCaniasTienda[2] = true;
        document.getElementById("bordeCaniaMas1").style.backgroundImage = "url(images/elements/shop_item_border_fishing_rod.png)";
        document.getElementById("bordeCaniaMas2").style.backgroundImage = "url(images/elements/shop_item_border_golden_fishing_rod.png)";
        document.getElementById("fotoCaniaMas2").style.backgroundImage = "url(images/elements/fishing_rod_plus_2.png)";
        mango.style.backgroundImage="url(images/cania/mango3.png)";
        puntera.style.backgroundImage="url(images/cania/puntera3.png)";
        document.getElementById("fotoCaniaMas2").removeAttribute("onclick");
        document.getElementById("fotoCaniaMas2").style.cursor="default"
        caniaObjetoActual.mejorarCania();
        break;
    case 6:
        estadoCaniasTienda[3] = true;
        document.getElementById("bordeCaniaMas2").style.backgroundImage = "url(images/elements/shop_item_border_fishing_rod.png)";
        document.getElementById("bordeCaniaMas3").style.backgroundImage = "url(images/elements/shop_item_border_golden_fishing_rod.png)";
        document.getElementById("fotoCaniaMas3").style.backgroundImage = "url(images/elements/fishing_rod_plus_3.png)";
        mango.style.backgroundImage="url(images/cania/mango4.png)";
        puntera.style.backgroundImage="url(images/cania/puntera4.png)";
        document.getElementById("fotoCaniaMas3").removeAttribute("onclick");
        document.getElementById("fotoCaniaMas3").style.cursor="default"
        caniaObjetoActual.mejorarCania();
        break;
    case 7:
        estadoCaniasTienda[4] = true;
        document.getElementById("bordeCaniaMas3").style.backgroundImage = "url(images/elements/shop_item_border_fishing_rod.png)";
        document.getElementById("bordeCaniaMas4").style.backgroundImage = "url(images/elements/shop_item_border_golden_fishing_rod.png)";
        document.getElementById("fotoCaniaMas4").style.backgroundImage = "url(images/elements/fishing_rod_plus_4.png)";
        mango.style.backgroundImage="url(images/cania/mango5.png)";
        puntera.style.backgroundImage="url(images/cania/puntera5.png)";
        document.getElementById("fotoCaniaMas4").removeAttribute("onclick");
        document.getElementById("fotoCaniaMas4").style.cursor="default"
        caniaObjetoActual.mejorarCania();
        break;
    }
}

function dialogoMisterioso()// Función que se ejecuta al querer ver que hay en la tienda en el espacio vacío
{
    click.play();
    sonidoDick()
    document.getElementById("tablonCompra").style.display = "none";
    document.getElementById("burbujaTextoDick").style.display = "inline";
    textoBurbuja.innerHTML = "<br>No te preocupes por ese espacio vacío, no tengo nada más que ofrecerte...";
    document.getElementById("dickTinieblas").style.backgroundImage = "url(images/elements/dick_tinieblas_animated.gif)";
}

function cambiarDificultadNormal()// Función para cambiar la dificultad a normal
{
    click.play();
    limpiarPool();
    estadoDificultadDificil = false;
    fondoDificultadSeleccionada.style.left="78px";
}

function cambiarDificultadDificil()// Función para cambiar la dificultad a difícil
{
    click.play();
    limpiarPool();
    estadoDificultadDificil = true;
    fondoDificultadSeleccionada.style.left="396px";
}

function regresarPantallaTitulo()// Función para reiniciar el juego
{
    click.play();
    window.location.reload();
}

function entrarOpciones()// Función para entrar a las opciones del juego
{
    click.play();
    document.getElementById("fondoOpciones").style.display = "inline";
    subirTienda();
    document.getElementById("botonBajarTienda").style.display="none";
    document.getElementById("juegoPesca").style.display="none";
}

function salirOpciones()// Función para salir de las opciones del juego
{
    click.play();
    document.getElementById("fondoOpciones").style.display = "none";
    bajarTienda();
    document.getElementById("botonBajarTienda").style.display="inline";
    document.getElementById("juegoPesca").style.display="inline";
}

function menuAsegurarSalir()// Función para mostrar la pantalla para asegurar que se quiere salir del juego
{
    click.play();
    document.getElementById("fondoSeguroRegresar").style.display = "inline";
    document.getElementById("fondoOpciones").style.display = "none";
}

function noRegresarTitulo()// Función que se ejecuta cuando no se quiere regresar
{
    click.play();
    document.getElementById("fondoSeguroRegresar").style.display = "none";
    document.getElementById("fondoOpciones").style.display = "inline";
}

function entrarCatalogo()// Función para entrar al catálogo
{
    document.getElementById("fondoCatalogo").style.display = "inline";
    actualizarCatalogo();
    subirTienda();
    document.getElementById("botonBajarTienda").style.display="none";
    document.getElementById("juegoPesca").style.display="none";
    cambiarCartaCatalogo(1);
    mostrarFotoNegraCatalogo(1);
    document.getElementById("botonModeloPezOriginalCatalogo").style.display="none"
    document.getElementById("botonModeloPezAlternoCatalogo").style.display="none"
}

function actualizarCatalogo()// Función para actualizar los peces que se pueden ver en el catalogo dependiendo de si estan en los vectores del objeto caña en c++
{
    for(let j = 0; j < 3; j++)
    {
        cambiarAnzuelo(j);
        for(let i = 0; i < (caniaObjetoActual.getTamanioVector(caniaObjetoActual.getCaniaActual())); i++)
        {
            mostrarFotoNegraCatalogo(caniaObjetoActual.getIndexVector(caniaObjetoActual.getCaniaActual(), i));
        }
    }
}

function mostrarFotoNegraCatalogo(idFotoDescubrir)// Función para mostrar la foto negra pequeña en el catalogo y mostrar el modelo real si se pesco cierta cantidad
{
    switch(idFotoDescubrir)
    {
    case 1:
        document.getElementById("cartaMojarraCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(1)');
        document.getElementById("cartaMojarraCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaMojarraCatalogo").style.cursor="pointer";
        document.getElementById("fotoMojarraCatalogo").style.display="inline";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoMojarraCatalogo").style.backgroundImage = "url(images/fishes/bluegill.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezMojarraCatalogo").style.backgroundImage = "url(images/fishes/bluegill.png)";
        }
        break;
    case 2:
        document.getElementById("fotoLubinaCatalogo").style.display="inline";
        document.getElementById("cartaLubinaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(2)');
        document.getElementById("cartaLubinaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaLubinaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoLubinaCatalogo").style.backgroundImage = "url(images/fishes/sea_bass.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezLubinaCatalogo").style.backgroundImage = "url(images/fishes/sea_bass.png)";
        }
        break;
    case 3:
        document.getElementById("fotoPezPayasoCatalogo").style.display="inline";
        document.getElementById("cartaPezPayasoCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(3)');
        document.getElementById("cartaPezPayasoCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaPezPayasoCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoPezPayasoCatalogo").style.backgroundImage = "url(images/fishes/clownfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezPezPayasoCatalogo").style.backgroundImage = "url(images/fishes/clownfish.png)";
        }
        break;
    case 4:
        document.getElementById("fotoCarpaCatalogo").style.display="inline";
        document.getElementById("cartaCarpaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(4)');
        document.getElementById("cartaCarpaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaCarpaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoCarpaCatalogo").style.backgroundImage = "url(images/fishes/carp.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezCarpaCatalogo").style.backgroundImage = "url(images/fishes/carp.png)";
        }
        break;
    case 5:
        document.getElementById("fotoAnchoaCatalogo").style.display="inline";
        document.getElementById("cartaAnchoaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(5)');
        document.getElementById("cartaAnchoaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaAnchoaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoAnchoaCatalogo").style.backgroundImage = "url(images/fishes/anchovy.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezAnchoaCatalogo").style.backgroundImage = "url(images/fishes/anchovy.png)";
        }
        break;
    case 6:
        document.getElementById("fotoKoiCatalogo").style.display="inline";
        document.getElementById("cartaKoiCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(6)');
        document.getElementById("cartaKoiCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaKoiCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoKoiCatalogo").style.backgroundImage = "url(images/fishes/koi.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezKoiCatalogo").style.backgroundImage = "url(images/fishes/koi.png)";
        }
        break;
    case 7:
        document.getElementById("fotoGoldfishCatalogo").style.display="inline";
        document.getElementById("cartaGoldfishCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(7)');
        document.getElementById("cartaGoldfishCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaGoldfishCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoGoldfishCatalogo").style.backgroundImage = "url(images/fishes/goldfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezGoldfishCatalogo").style.backgroundImage = "url(images/fishes/goldfish.png)";
        }
        break;
    case 8:
        document.getElementById("fotoPezGloboCatalogo").style.display="inline";
        document.getElementById("cartaPezGloboCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(8)');
        document.getElementById("cartaPezGloboCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaPezGloboCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoPezGloboCatalogo").style.backgroundImage = "url(images/fishes/pufferfish_deflated.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezPezGloboCatalogo").style.backgroundImage = "url(images/fishes/pufferfish_deflated.png)";
        }
        break;
    case 9:
        document.getElementById("fotoAtunCatalogo").style.display="inline";
        document.getElementById("cartaAtunCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(9)');
        document.getElementById("cartaAtunCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaAtunCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 3)
        {
            document.getElementById("fotoAtunCatalogo").style.backgroundImage = "url(images/fishes/tuna.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezAtunCatalogo").style.backgroundImage = "url(images/fishes/tuna.png)";
        }
        break;
    case 10:
        document.getElementById("fotoTetraNeonCatalogo").style.display="inline";
        document.getElementById("cartaTetraNeonCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(10)');
        document.getElementById("cartaTetraNeonCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaTetraNeonCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoTetraNeonCatalogo").style.backgroundImage = "url(images/fishes/neon_tetra.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezTetraNeonCatalogo").style.backgroundImage = "url(images/fishes/neon_tetra.png)";
        }
        break;
    case 11:
        document.getElementById("fotoTortugaCatalogo").style.display="inline";
        document.getElementById("cartaTortugaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(11)');
        document.getElementById("cartaTortugaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaTortugaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoTortugaCatalogo").style.backgroundImage = "url(images/fishes/turtle.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezTortugaCatalogo").style.backgroundImage = "url(images/fishes/turtle.png)";
        }
        break;
    case 12:
        document.getElementById("fotoRanaCatalogo").style.display="inline";
        document.getElementById("cartaRanaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(12)');
        document.getElementById("cartaRanaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaRanaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoRanaCatalogo").style.backgroundImage = "url(images/fishes/frog.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezRanaCatalogo").style.backgroundImage = "url(images/fishes/frog.png)";
        }
        break;
    case 13:
        document.getElementById("fotoTruchaCatalogo").style.display="inline";
        document.getElementById("cartaTruchaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(13)');
        document.getElementById("cartaTruchaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaTruchaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoTruchaCatalogo").style.backgroundImage = "url(images/fishes/trout.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezTruchaCatalogo").style.backgroundImage = "url(images/fishes/trout.png)";
        }
        break;
    case 14:
        document.getElementById("fotoBagreCatalogo").style.display="inline";
        document.getElementById("cartaBagreCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(14)');
        document.getElementById("cartaBagreCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaBagreCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoBagreCatalogo").style.backgroundImage = "url(images/fishes/catfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezBagreCatalogo").style.backgroundImage = "url(images/fishes/catfish.png)";
        }
        break;
    case 15:
        document.getElementById("fotoCangrejoRioCatalogo").style.display="inline";
        document.getElementById("cartaCangrejoRioCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(15)');
        document.getElementById("cartaCangrejoRioCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaCangrejoRioCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoCangrejoRioCatalogo").style.backgroundImage = "url(images/fishes/crawfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezCangrejoRioCatalogo").style.backgroundImage = "url(images/fishes/crawfish.png)";
        }
        break;
    case 16:
        document.getElementById("fotoSalmonCatalogo").style.display="inline";
        document.getElementById("cartaSalmonCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(16)');
        document.getElementById("cartaSalmonCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaSalmonCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoSalmonCatalogo").style.backgroundImage = "url(images/fishes/salmon.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezSalmonCatalogo").style.backgroundImage = "url(images/fishes/salmon.png)";
        }
        break;
    case 17:
        document.getElementById("fotoPezEspadaCatalogo").style.display="inline";
        document.getElementById("cartaPezEspadaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(17)');
        document.getElementById("cartaPezEspadaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaPezEspadaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 3)
        {
            document.getElementById("fotoPezEspadaCatalogo").style.backgroundImage = "url(images/fishes/swordfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezPezEspadaCatalogo").style.backgroundImage = "url(images/fishes/swordfish.png)";
        }
        break;
    case 18:
        document.getElementById("fotoCharCatalogo").style.display="inline";
        document.getElementById("cartaCharCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(18)');
        document.getElementById("cartaCharCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaCharCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoCharCatalogo").style.backgroundImage = "url(images/fishes/char.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezCharCatalogo").style.backgroundImage = "url(images/fishes/char.png)";
        }
        break;
    case 19:
        document.getElementById("fotoMagikarpCatalogo").style.display="inline";
        document.getElementById("cartaMagikarpCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(19)');
        document.getElementById("cartaMagikarpCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaMagikarpCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoMagikarpCatalogo").style.backgroundImage = "url(images/fishes/magikarp.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezMagikarpCatalogo").style.backgroundImage = "url(images/fishes/magikarp.png)";
        }
        break;
    case 20:
        document.getElementById("fotoCangrejoCatalogo").style.display="inline";
        document.getElementById("cartaCangrejoCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(20)');
        document.getElementById("cartaCangrejoCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaCangrejoCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 7)
        {
            document.getElementById("fotoCangrejoCatalogo").style.backgroundImage = "url(images/fishes/crab.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezCangrejoCatalogo").style.backgroundImage = "url(images/fishes/crab_animated.gif)";
        }
        break;
    case 21:
        document.getElementById("fotoEsturionCatalogo").style.display="inline";
        document.getElementById("cartaEsturionCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(21)');
        document.getElementById("cartaEsturionCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaEsturionCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoEsturionCatalogo").style.backgroundImage = "url(images/fishes/sturgeon.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezEsturionCatalogo").style.backgroundImage = "url(images/fishes/sturgeon.png)";
        }
        break;
    case 22:
        document.getElementById("fotoPiraniaCatalogo").style.display="inline";
        document.getElementById("cartaPiraniaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(22)');
        document.getElementById("cartaPiraniaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaPiraniaCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoPiraniaCatalogo").style.backgroundImage = "url(images/fishes/piranha.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezPiraniaCatalogo").style.backgroundImage = "url(images/fishes/piranha.png)";
        }
        break;
    case 23:
        document.getElementById("fotoPezRapeCatalogo").style.display="inline";
        document.getElementById("cartaPezRapeCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(23)');
        document.getElementById("cartaPezRapeCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaPezRapeCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 5)
        {
            document.getElementById("fotoPezRapeCatalogo").style.backgroundImage = "url(images/fishes/anglerfish.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezPezRapeCatalogo").style.backgroundImage = "url(images/fishes/anglerfish.png)";
        }
        break;
    case 24:
        document.getElementById("fotoCachaloteCatalogo").style.display="inline";
        document.getElementById("cartaCachaloteCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(24)');
        document.getElementById("cartaCachaloteCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaCachaloteCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 3)
        {
            document.getElementById("fotoCachaloteCatalogo").style.backgroundImage = "url(images/fishes/sperm_whale.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezCachaloteCatalogo").style.backgroundImage = "url(images/fishes/sperm_whale.png)";
        }
        break;
    case 25:
        document.getElementById("fotoTiburonBlancoCatalogo").style.display="inline";
        document.getElementById("cartaTiburonBlancoCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(25)');
        document.getElementById("cartaTiburonBlancoCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaTiburonBlancoCatalogo").style.cursor="pointer";
        if(arregloContadorPeces[idFotoDescubrir - 1] >= 3)
        {
            document.getElementById("fotoTiburonBlancoCatalogo").style.backgroundImage = "url(images/fishes/great_white_shark.png)";
            arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
            document.getElementById("fotoPezTiburonBlancoCatalogo").style.backgroundImage = "url(images/fishes/great_white_shark.png)";
        }
        break;
    case 26:
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").style.backgroundImage = "url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoBallenaAzulAntarticaCatalogo").style.display="inline";
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").setAttribute('onclick', 'cambiarCartaCatalogo(26)');
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").setAttribute('type', 'button');
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").style.cursor="pointer";
        arregloMostrarCartaCompleta[idFotoDescubrir - 1] = true;
        break;
    }
}

function salirCatalogo()// Función para salir del catálogo
{
    click.play();
    document.getElementById("fondoCatalogo").style.display = "none";
    bajarTienda();
    document.getElementById("botonBajarTienda").style.display="inline";
    document.getElementById("juegoPesca").style.display="inline";
}

function cambiarCartaCatalogo(idCatalogo)// Función para cambiar la carta grande en el catálogo
{
    click.play();
    cambiarCartaCatalogoQuitar();
    cambiarCartaCatalogoMostrar(idCatalogo);
    cambiarDatosIndependientesCatalogo(idCatalogo);
}

function cambiarCartaCatalogoMostrar(idCatalogo)// Función para insertar el modelo del pez que se quiere ver
{
    if(!arregloMostrarCartaCompleta[idCatalogo - 1])
    {
        descripcionPezCatalogo.style.fontSize="60px";
        descripcionPezCatalogo.style.top="300px";
        descripcionPezCatalogo.style.left="160px";
    }
    switch(idCatalogo)
    {
    case 1:
        document.getElementById("cartaMojarraCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezMojarraCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[0] + "/7";
        }
        break;
    case 2:
        document.getElementById("cartaLubinaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezLubinaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[1] + "/7";
        }
        break;
    case 3:
        document.getElementById("cartaPezPayasoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPezPayasoCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[2] + "/7";
        }
        break;
    case 4:
        document.getElementById("cartaCarpaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezCarpaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[3] + "/5";
        }
        break;
    case 5:
        document.getElementById("cartaAnchoaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezAnchoaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[4] + "/7";
        }
        break;
    case 6:
        document.getElementById("cartaKoiCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezKoiCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[5] + "/5";
        }
        break;
    case 7:
        document.getElementById("cartaGoldfishCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezGoldfishCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[6] + "/7";
        }
        break;
    case 8:
        document.getElementById("cartaPezGloboCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPezGloboCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[7] + "/7";
        }
        estadoPezGlobo = true;
        cambiarModeloOriginal();
        break;
    case 82:
        document.getElementById("cartaPezGloboCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPezGloboInfladoCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[7] + "/7";
        }
        break;
    case 9:
        document.getElementById("cartaAtunCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezAtunCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[8] + "/3";
        }
        break;
    case 10:
        document.getElementById("cartaTetraNeonCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezTetraNeonCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[9] + "/7";
        }
        break;
    case 11:
        document.getElementById("cartaTortugaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezTortugaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[10] + "/5";
        }
        break;
    case 12:
        document.getElementById("cartaRanaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezRanaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[11] + "/7";
        }
        estadoPezGlobo = false;
        cambiarModeloOriginal();
        break;
    case 122:
        document.getElementById("cartaRanaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezRanaShinyCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[11] + "/7";
        }
        break;
    case 13:
        document.getElementById("cartaTruchaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezTruchaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[12] + "/5";
        }
        break;
    case 14:
        document.getElementById("cartaBagreCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezBagreCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[13] + "/5";
        }
        break;
    case 15:
        document.getElementById("cartaCangrejoRioCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezCangrejoRioCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[14] + "/7";
        }
        break;
    case 16:
        document.getElementById("cartaSalmonCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezSalmonCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[15] + "/5";
        }
        break;
    case 17:
        document.getElementById("cartaPezEspadaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPezEspadaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[16] + "/3";
        }
        break;
    case 18:
        document.getElementById("cartaCharCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezCharCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[17] + "/5";
        }
        break;
    case 19:
        document.getElementById("cartaMagikarpCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezMagikarpCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[18] + "/5";
        }
        break;
    case 20:
        document.getElementById("cartaCangrejoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezCangrejoCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[19] + "/7";
        }
        break;
    case 21:
        document.getElementById("cartaEsturionCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezEsturionCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[20] + "/5";
        }
        break;
    case 22:
        document.getElementById("cartaPiraniaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPiraniaCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[21] + "/5";
        }
        break;
    case 23:
        document.getElementById("cartaPezRapeCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezPezRapeCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[22] + "/5";
        }
        break;
    case 24:
        document.getElementById("cartaCachaloteCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezCachaloteCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[23] + "/3";
        }
        break;
    case 25:
        document.getElementById("cartaTiburonBlancoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezTiburonBlancoCatalogo").style.display="inline";
        if(!arregloMostrarCartaCompleta[idCatalogo - 1])
        {
            descripcionPezCatalogo.innerHTML= arregloContadorPeces[24] + "/3";
        }
        break;
    case 26:
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card_golden.png)";
        document.getElementById("fotoPezBallenaAzulAntarticaCatalogo").style.display="inline";
        break;
    }
    idPasadoCatalogo = idCatalogo;
}

function cambiarCartaCatalogoQuitar()// Función para quitar el modelo del pez anterior en la carta grande del catálogo
{
    switch(idPasadoCatalogo)
    {
    case 1:
        document.getElementById("cartaMojarraCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezMojarraCatalogo").style.display="none";
        break;
    case 2:
        document.getElementById("cartaLubinaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezLubinaCatalogo").style.display="none";
        break;
    case 3:
        document.getElementById("cartaPezPayasoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPezPayasoCatalogo").style.display="none";
        break;
    case 4:
        document.getElementById("cartaCarpaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezCarpaCatalogo").style.display="none";
        break;
    case 5:
        document.getElementById("cartaAnchoaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezAnchoaCatalogo").style.display="none";
        break;
    case 6:
        document.getElementById("cartaKoiCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezKoiCatalogo").style.display="none";
        break;
    case 7:
        document.getElementById("cartaGoldfishCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezGoldfishCatalogo").style.display="none";
        break;
    case 8:
        document.getElementById("cartaPezGloboCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPezGloboCatalogo").style.display="none";
        document.getElementById("fotoPezPezGloboInfladoCatalogo").style.display="none";
        break;
    case 82:
        document.getElementById("cartaPezGloboCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPezGloboInfladoCatalogo").style.display="none";
        break;
    case 9:
        document.getElementById("cartaAtunCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezAtunCatalogo").style.display="none";
        break;
    case 10:
        document.getElementById("cartaTetraNeonCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezTetraNeonCatalogo").style.display="none";
        break;
    case 11:
        document.getElementById("cartaTortugaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezTortugaCatalogo").style.display="none";
        break;
    case 12:
        document.getElementById("cartaRanaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezRanaCatalogo").style.display="none";
        document.getElementById("fotoPezRanaShinyCatalogo").style.display="none";
        break;
    case 122:
        document.getElementById("cartaRanaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezRanaShinyCatalogo").style.display="none";
        break;
    case 13:
        document.getElementById("cartaTruchaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezTruchaCatalogo").style.display="none";
        break;
    case 14:
        document.getElementById("cartaBagreCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezBagreCatalogo").style.display="none";
        break;
    case 15:
        document.getElementById("cartaCangrejoRioCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezCangrejoRioCatalogo").style.display="none";
        break;
    case 16:
        document.getElementById("cartaSalmonCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezSalmonCatalogo").style.display="none";
        break;
    case 17:
        document.getElementById("cartaPezEspadaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPezEspadaCatalogo").style.display="none";
        break;
    case 18:
        document.getElementById("cartaCharCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezCharCatalogo").style.display="none";
        break;
    case 19:
        document.getElementById("cartaMagikarpCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezMagikarpCatalogo").style.display="none";
        break;
    case 20:
        document.getElementById("cartaCangrejoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezCangrejoCatalogo").style.display="none";
        break;
    case 21:
        document.getElementById("cartaEsturionCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezEsturionCatalogo").style.display="none";
        break;
    case 22:
        document.getElementById("cartaPiraniaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPiraniaCatalogo").style.display="none";
        break;
    case 23:
        document.getElementById("cartaPezRapeCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezPezRapeCatalogo").style.display="none";
        break;
    case 24:
        document.getElementById("cartaCachaloteCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezCachaloteCatalogo").style.display="none";
        break;
    case 25:
        document.getElementById("cartaTiburonBlancoCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezTiburonBlancoCatalogo").style.display="none";
        break;
    case 26:
        document.getElementById("cartaBallenaAzulAntarticaCatalogo").style.backgroundImage="url(images/catalogo/individual_fish_card.png)";
        document.getElementById("fotoPezBallenaAzulAntarticaCatalogo").style.display="none";
        break;
    }
}

function cambiarDatosIndependientesCatalogo(idCatalogo)// Función para cambiar las descripciones de los peces de la carta dependiendo de cual selecciono el usuario
{
    if(arregloMostrarCartaCompleta[idCatalogo - 1])
    {
        anzueloPezCatalogo.style.display="inline";
        cantidadPescadosCatalogo.style.display="inline";
        descripcionPezCatalogo.style.fontSize="20px";
        descripcionPezCatalogo.style.textAlign="justify";
        descripcionPezCatalogo.style.top="260px";
        descripcionPezCatalogo.style.left="22px";
        descripcionPezCatalogo.style.width="380px"
        switch(idCatalogo)
        {
        case 1:
            nombrePezCatalogo.innerHTML="Mojarra";
            nombrePezCatalogo.style.left="140px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Ocupa normalmente pequeños lagos, charcas y zonas poco profundas de grandes lagos y ríos de corriente lenta; en general prefiere zonas de aguas claras con abundante vegetación, ocupando cualquier tipo de sustrato.";
            break;
        case 2:
            nombrePezCatalogo.innerHTML="Lubina";
            nombrePezCatalogo.style.left="155px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es propia del mar Mediterráneo y el océano Atlántico, desde las costas africanas (Senegal) hasta Noruega. Este pescado es muy apreciado por su valor culinario y en la pesca deportiva.";
            break;
        case 3:
            nombrePezCatalogo.innerHTML="Pez payaso";
            nombrePezCatalogo.style.left="120px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Procede de los arrecifes de coral del Indo-Pacífico y vive conjuntamente con las anémonas, teóricamente especies depredadoras, de las que obtiene una protección frente a posibles atacantes.";
            break;
        case 4:
            nombrePezCatalogo.innerHTML="Carpa";
            nombrePezCatalogo.style.left="160px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Nada formando cardúmenes; es omnívora, y resistente a una gran variedad de condiciones climáticas. Se han dado casos de especímenes que han llegado a vivir 65 años.";
            break;
        case 5:
            nombrePezCatalogo.innerHTML="Anchoa";
            nombrePezCatalogo.style.left="150px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Comprende más de 140 especies, pero todas comparten ciertas características. Son pequeños y para alimentarse solo tienen que nadar con la boca abierta y filtrar pequeñas partículas.";
            break;
        case 6:
            nombrePezCatalogo.innerHTML="Koi";
            nombrePezCatalogo.style.left="185px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Su nombre viene del japonés コイ Koi, cuyo homónimo también significa ‘amor’ o ‘afecto’. Se cree que los koi traen buena suerte. Al igual que las carpas salvajes, los koi son peces muy resistentes.";
            break;
        case 7:
            nombrePezCatalogo.innerHTML="Pez dorado";
            nombrePezCatalogo.style.left="120px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Habita en aguas de curso lento y frías del continente asiático. Es una de las pocas variedades que pueden habitar en estanques al aire libre y aguantar las bajas temperaturas.";
            break;
        case 8:
            document.getElementById("botonModeloPezOriginalCatalogo").style.display="inline"
            document.getElementById("botonModeloPezAlternoCatalogo").style.display="inline"
            nombrePezCatalogo.innerHTML="Pez globo";
            nombrePezCatalogo.style.left="130px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Cuando nacen no son venenosos, sino que adquieren esta propiedad tras ingerir una gran cantidad de microbios del agua y de la comida. Cuando se sienten amenazados, se llenan de aire y agua hasta que se hinchan como un globo.";
            break;
        case 9:
            nombrePezCatalogo.innerHTML="Atún";
            nombrePezCatalogo.style.left="170px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/lightweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="El atún nada con velocidades de crucero de 3 a 7 km/h, pero puede alcanzar los 70 km/h y, excepcionalmente, es capaz de superar los 110 km/h en recorridos cortos. Ciertas especies de atunes pueden sumergirse hasta los 400 m de profundidad.";
            break;
        case 10:
            nombrePezCatalogo.innerHTML="Tetra neón";
            nombrePezCatalogo.style.left="120px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es una especie de pez actinopterigio carácido originario del oeste de Sudamérica. Es una especie muy apreciada en acuariofilia. Apreciados por su carácter pacífico, su llamativo colorido y sus desplazamientos en cardumen, dan movimiento y vida a todo acuario.";
            break;
        case 11:
            nombrePezCatalogo.innerHTML="Tortuga";
            nombrePezCatalogo.style.left="140px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Son animales ovíparos que cavan sus nidos en la tierra, donde llevan a cabo la incubación de los huevos. A pesar de que carecen de dientes, cuentan con un fuerte pico que usan para alimentarse.";
            break;
        case 12:
            document.getElementById("botonModeloPezOriginalCatalogo").style.display="inline"
            document.getElementById("botonModeloPezAlternoCatalogo").style.display="inline"
            nombrePezCatalogo.innerHTML="Rana";
            nombrePezCatalogo.style.left="165px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Se caracterizan por carecer de cola, por presentar un cuerpo corto y muy ensanchado, y unas patas posteriores muy desarrolladas y adaptadas para el salto.";
            break;
        case 13:
            nombrePezCatalogo.innerHTML="Trucha";
            nombrePezCatalogo.style.left="150px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es una especie eurifágica, ya que su espectro alimentario es amplio, y presenta carácter alimentario marcado por el oportunismo, debido a que posee una enorme facilidad de adaptación frente a los cambios en la disponibilidad del alimento.";
            break;
        case 14:
            nombrePezCatalogo.innerHTML="Bagre";
            nombrePezCatalogo.style.left="160px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Son peces de agua dulce que pueden llegar a vivir cerca de 20 años. Habitan en los estanques con troncos y otros restos orgánicos de baja pendiente a alta pendiente, tanto en pequeños como en grandes ríos.";
            break;
        case 15:
            nombrePezCatalogo.innerHTML="Cangrejo de río";
            nombrePezCatalogo.style.left="80px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="También son conocidos como langostas. La caña de pesca tradicional utilizada es una rama sencilla atada con cuerda de un papalote. El cebo se ata en el extremo de la cuerda, y puede consistir de pescado, salchichas o pasta.";
            break;
        case 16:
            nombrePezCatalogo.innerHTML="Salmón";
            nombrePezCatalogo.style.left="150px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="No son unos peces especialmente longevos: el salmón más grande reportado (de edad) murió con cinco años. Nacen en el río y después se trasladan al mar para volver de nuevo al río a desovar. ";
            break;
        case 17:
            nombrePezCatalogo.innerHTML="Pez espada";
            nombrePezCatalogo.style.left="115px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mediumweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es una especie de pez perciforme de la familia Xiphiidae. Son grandes peces predadores altamente migratorios, caracterizados por su pico largo y aplanado, diferente del de sus parientes, los marlines, que es cónico.";
            break;
        case 18:
            nombrePezCatalogo.innerHTML="Salvelino";
            nombrePezCatalogo.style.left="135px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="El ciclo vital del salvelino es similar al del salmón, ya que vive la mayor parte de su vida en aguas costeras árticas y subárticas, y regresa del océano a los ríos de agua dulce donde nació para desovar.";
            break;
        case 19:
            nombrePezCatalogo.innerHTML="Magikarp";
            nombrePezCatalogo.style.left="130px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Magikarp, está inspirado en una antigua leyenda china conocida como ‘Li yu tiao Long men’, cinco caracteres que significan literalmente ‘la carpa salta sobre la Puerta del Dragón’.";
            break;
        case 20:
            nombrePezCatalogo.innerHTML="Cangrejo";
            nombrePezCatalogo.style.left="130px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Son animales omnívoros que se alimentan de cualquier materia orgánica que encuentran a su paso como otros crustáceos, moluscos, pequeños peces o gusanos.";
            break;
        case 21:
            nombrePezCatalogo.innerHTML="Esturión";
            nombrePezCatalogo.style.left="140px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Se caracteriza por ser un animal de costumbres. Tanto es así que permanecerá siempre en el mismo sitio, mientras las condiciones del lugar no varíen. Tan pronto como perciba la presencia humana, abandonará el lugar para no regresar nunca.";
            break;
        case 22:
            nombrePezCatalogo.innerHTML="Piraña";
            nombrePezCatalogo.style.left="150px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es un pez de agua dulce y de clima subtropical. Soporta una gama amplia de temperaturas aunque lo ideal es entre 22ºC a 26ºC. Habita aguas claras con buena luz, pH ácido de 6,5-7.";
            break;
        case 23:
            nombrePezCatalogo.innerHTML="Pez rapé";
            nombrePezCatalogo.style.left="140px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Su forma del cuerpo está adaptada para poder sobrevivir en las inhóspitas profundidades oceánicas. En las profundidades del océano apenas llega la luz solar, por lo que los nutrientes son más escasos.";
            break;
        case 24:
            nombrePezCatalogo.innerHTML="Cachalote";
            nombrePezCatalogo.style.left="125px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="La cabeza contiene el órgano de esperma o espermaceti que produce una gran cantidad de sustancia cerosa sobre la cual las estimaciones indican que tiene una importante función en la flotabilidad del animal.";
            break;
        case 25:
            nombrePezCatalogo.innerHTML="Tiburón blanco";
            nombrePezCatalogo.style.left="90px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/heavyweight_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="Es un pez que ha existido desde mucho antes que existieran los dinosaurios. Se puede encontrar en las aguas de todo el mundo, en todos los océanos. Los tiburones no tienen huesos.";
            break;
        case 26:
            nombrePezCatalogo.innerHTML="Ballena azúl";
            nombrePezCatalogo.style.left="100px";
            anzueloPezCatalogo.style.backgroundImage="url(images/elements/mysterious_fish_hook.png)";
            descripcionPezCatalogo.innerHTML="La ballena azul es el animal conocido más grande que jamás haya poblado la Tierra. Estos majestuosos mamíferos marinos dominan los océanos con sus 30 metros de longitud y hasta 180 toneladas de peso. Solo su lengua puede pesar tanto como un elefante, y el corazón, como un automóvil.";
            break;
        }
        if(idCatalogo != 122 && idCatalogo != 82)
        {
            cantidadPescadosCatalogo.innerHTML = "Pescados: " + arregloContadorPeces[idCatalogo - 1];
        }
        if(idCatalogo != 8 && idCatalogo != 12)
        {
            document.getElementById("botonModeloPezOriginalCatalogo").style.display="none"
            document.getElementById("botonModeloPezAlternoCatalogo").style.display="none"
        }
    }
    else
    {
        nombrePezCatalogo.innerHTML="???";
        nombrePezCatalogo.style.left="180px";
        anzueloPezCatalogo.style.display="none";
        cantidadPescadosCatalogo.style.display="none"
    }
}

function cambiarModeloOriginal()// Función para cambiar el modelo al original en la rana y el pez payaso
{
    click.play();
    document.getElementById("botonModeloPezOriginalCatalogo").style.backgroundColor="rgba(228, 175, 76, 0.548)"
    document.getElementById("botonModeloPezOriginalCatalogo").style.borderColor="rgb(110, 73, 25)";
    document.getElementById("botonModeloPezAlternoCatalogo").style.backgroundColor="rgba(163, 122, 45, 0.548";
    document.getElementById("botonModeloPezAlternoCatalogo").style.borderColor="rgb(65, 41, 10)";

    if(estadoPezGlobo)
    {
        document.getElementById("fotoPezPezGloboCatalogo").style.display="inline";
        document.getElementById("fotoPezPezGloboInfladoCatalogo").style.display="none";
    }
    else
    {
        document.getElementById("fotoPezRanaCatalogo").style.display="inline";
        document.getElementById("fotoPezRanaShinyCatalogo").style.display="none";
    }
}

function cambiarModeloSecundario()// Función para cambiar el modelo al secundario en la rana y el pez payaso
{
    click.play();
    document.getElementById("botonModeloPezOriginalCatalogo").style.backgroundColor="rgba(163, 122, 45, 0.548";
    document.getElementById("botonModeloPezOriginalCatalogo").style.borderColor="rgb(65, 41, 10)";
    document.getElementById("botonModeloPezAlternoCatalogo").style.backgroundColor="rgba(228, 175, 76, 0.548)"
    document.getElementById("botonModeloPezAlternoCatalogo").style.borderColor="rgb(110, 73, 25)";

    if(estadoPezGlobo)
    {
        document.getElementById("fotoPezPezGloboCatalogo").style.display="none";
        document.getElementById("fotoPezPezGloboInfladoCatalogo").style.display="inline";
    }
    else
    {
        document.getElementById("fotoPezRanaCatalogo").style.display="none";
        document.getElementById("fotoPezRanaShinyCatalogo").style.display="inline";
    }
}

function chequeoMax()// Función que checa si esta completo el juego para desbloquear el último anzuelo
{
    var contPecesMax = 0;
    for(let i = 0; i < 25; i++)
    {
        if(arregloMostrarCartaCompleta[i])
        {
            contPecesMax++;
        }
    }

    if(contPecesMax == 25 && estadoCaniasTienda[4] && !estadoDesbloqueo)
    {
        iniciarDesbloqueo();
    }
}

function iniciarDesbloqueo()// Función que inicia el dialogo del viejo de habe conseguido todo anterior al jefe
{
    document.getElementById("tienda").style.display = "none";
    document.getElementById("juegoPesca").style.display = "none";
    document.getElementById("desbloqueo").style.display="inline";
    sonidoDick();
    textoDesbloqueo.innerHTML = "<br>¿Enserio lo has logrado?";
}

function avanzarDesbloqueo()// Avanzar en el dialogo del viejo en el desbloqueo del último anzuelo
{
    switch(contadorAvancesDesbloqueo)
    {
    case 0:
        sonidoDick();
        textoDesbloqueo.innerHTML = "Llenaste tu catálogo al haber pescado todos los peces, conseguiste todos los anzuelos y mejoraste tu caña al máximo.";
        break;
    case 1:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Enserio lo lograste.";
        break;
    case 2:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Siempre supe que serías el próximo Pescador Tocho.";
        break;
    case 3:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Bien hecho muchacho, ha llegado la hora mostrarte mi tesoro más preciado.";
        break
    case 4:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Un anzuelo capaz de atraer al animal marino más grande, majestuoso y tenebroso de todos.";
        break
    case 5:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Jaja, pero claro que no será gratis. Mi tienda ahora tendrá mi anzuelo misterioso a la venta.";
        break
    case 6:
        terminarDesbloqueo()
        break;
    }
    contadorAvancesDesbloqueo++;
}

function terminarDesbloqueo()// Terminar el dialogo de desbloqueo y mostrar la caña misteriosa en la tienda
{
    contadorAvancesDesbloqueo = 0;
    document.getElementById("desbloqueo").style.display="none";
    document.getElementById("juegoPesca").style.display = "inline";
    document.getElementById("tienda").style.display = "inline";
    estadoDesbloqueo = true;
    document.getElementById("fotoAnzueloMisterioso").style.display = "inline";
    cambiarAnzuelo(2);
    document.getElementById("bordeAnzueloMisterioso").removeAttribute("onclick");
    document.getElementById("bordeAnzueloMisterioso").style.cursor="default"
}

const intervaloSpawnBallena = setInterval(spawnearBallenaAzul, 60000);// Función que spawnea la ballena cada minuto

function spawnearBallenaAzul()// Función para spawnear la ballena e iniciar el jefe final
{
    if(estadoEstanque && !estadoSpawneoJefeFinal && estadoCreadoCania && (caniaObjetoActual.getCaniaActual() - 1) == 3 && !estadoUltimaFase)
    {
        estadoSpawneoJefeFinal = true;
        estadoPantallaNegra = false;
        estadoDesaparecerJefe = true;
        modificacionTiempoReaccionJefe = -150;
        document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_boss_phase1.png)";
        document.getElementById("musicaPescaAmanecer").pause();
        document.getElementById("musicaPescaAmanecer").currentTime = 0;
        document.getElementById("musicaPescaDiaLarga").pause();
        document.getElementById("musicaPescaDiaLarga").currentTime = 0;
        document.getElementById("musicaPescaDiaCorta").pause();
        document.getElementById("musicaPescaDiaCorta").currentTime = 0;
        document.getElementById("musicaPescaAtardecer").pause();
        document.getElementById("musicaPescaAtardecer").currentTime = 0;
        document.getElementById("musicaPescaNoche").pause();
        document.getElementById("musicaPescaNoche").currentTime = 0;
        document.getElementById("musicaJefeFase1").play();
        document.getElementById("tienda").style.display = "none";
        document.getElementById("fondoDineroTotal").style.width="0px";
        document.getElementById("monedaOro").style.width="0px";
        document.getElementById("dineroTotal").style.width="0px";
        aparecerModelojefe();
    }
}

function aparecerModelojefe()// Función que crea el modelo del jefe y lo muestra en el estanque, igual con su botón de pesca
{
    var pezActual;
    var alturaPez = 0;
    var anchoPez = 0;
    var direccionPez = (1 - (getNumeroRandom(2) * 2));
    var distanciaArriba = 0;
    var distanciaIzquierda = 0;

    pezActual = new Module.BallenaAzulAntartica();
    alturaPez = 149;
    anchoPez = 862;

    distanciaArriba = 0;

    if(estadoSpawneoJefeVictoria)
    {
        distanciaIzquierda = 20;
    }
    else
    {
        distanciaIzquierda = 0;
    }

    const jf = document.createElement('div');
    jf.setAttribute('id', 'jefe');
    peces.appendChild(jf);
    jf.style.backgroundImage = "url(images/fishes/antartic_blue_whale.png)";
    jf.style.transform = "scaleX(" + direccionPez + ")";
    jf.style.height = alturaPez + "px";
    jf.style.width = anchoPez + "px";
    jf.style.backgroundSize = "100%";
    jf.style.backgroundRepeat = "no-repeat";
    jf.style.position = "absolute";
    jf.style.top = distanciaArriba + "px";
    jf.style.zIndex = "1";

    if(estadoSpawneoJefeVictoria)
    {
        if(direccionPez == 1)
        {
            jf.style.left = distanciaIzquierda + 150 + "px";
        }
        else
        {
            jf.style.left = distanciaIzquierda - 50 + "px";
        }
    }
    else
    {
        jf.style.left = distanciaIzquierda + "px";
    }

    if(direccionPez == 1)
    {
        jf.style.animation="morderIzquierda";
    }
    else
    {
        jf.style.animation="morderDerecha";
    }
                        
    jf.style.animationPlayState="paused";
    jf.style.animationIterationCount="infinite";
    jf.style.animationDuration="0.5s";
    jf.style.animationDirection="alternate";
           
    const btjf = document.createElement('div');
    btjf.setAttribute('id', 'botonJefe');
    btjf.setAttribute('type', 'button');
    btjf.setAttribute('onclick', 'pescaJefe()');

    peces.appendChild(btjf);
    btjf.style.height = "80px";
    btjf.style.width = "80px";
    btjf.style.position = "absolute";
    btjf.style.cursor = "pointer";
    btjf.style.top = distanciaArriba + alturaPez - 40 + "px";

    btjf.style.backgroundImage = "url(images/elements/bubbles.gif";
    btjf.style.backgroundSize = "100%";
    btjf.style.backgroundRepeat = "no-repeat";
                        
    btjf.style.border = "none";
    btjf.style.zIndex = "0";

    if(estadoSpawneoJefeVictoria)
    {
        if(direccionPez == 1)
        {
            btjf.style.left = distanciaIzquierda + 30 + "px";
        }
        else
        {
            btjf.style.left = distanciaIzquierda + anchoPez - 10 + "px";
        }
    }
    else
    {
        if(direccionPez == 1)
        {
            btjf.style.left = distanciaIzquierda - 120 + "px";
        }
        else
        {
            btjf.style.left = distanciaIzquierda + anchoPez + 40 + "px";
        }
    }

    arregloPecesActivos[0] = pezActual;
    idPezActual = 1;
    jefe = jf;
    botonJefe = btjf;
}

function pescaJefe()// Función para el botón del jefe, funciona de manera distinta al de los peces normales, aumentando un contador
{
    if(!estadoReaccionAnzuelo && !estadoAnzuelo)// Tirar el anzuelo
    {
        estadoJuegoReaccion = true;
        if(estadoReiniciadoAnzuelo)
        {
            estadoPermitirPesca = true;
            estadoReiniciadoAnzuelo = false;
        }
        estadoPescaContraria = false;
    }
    else if(!estadoJuegoReaccion && estadoAnzuelo && estadoPermitirPesca && !estadoPescaContraria)// Aumentar el contador de intentos o pescarlo de manera definitiva si se llevo a 8 seguidos
    {
        if(estadoUltimaFase)
        {
            estadoReaccionAnzuelo = false;
            estadoJuegoReaccion = false;
            estadoPermitirPesca = false;
            estadoReiniciadoAnzuelo = true;
            contadorPescasJefeSeguidas = 0;

            pescaFinal();
        }
        else
        {
            contadorPescasJefeSeguidas++;
            sonarTimbreFase1Jefe();
            realizarRotacionJefe();
            estadoReaccionAnzuelo = false;
            estadoJuegoReaccion = false;
            estadoPermitirPesca = false;
            estadoReiniciadoAnzuelo = true;

            if(contadorPescasJefeSeguidas == 8)// Atraparlo si se llego a 8
            {
                contadorPescasJefeSeguidas = 0;
                atraparJefe();
            }
        }
    }
    else if(estadoJuegoReaccion)// Desaparecer y crear un modelo nuevo para invertir su dirección
    {
        estadoPescaContraria = false;
        document.getElementById("sonidoRotura").pause();
        document.getElementById("sonidoRotura").currentTime = 0;
        document.getElementById("sonidoRotura").play();

        if(estadoUltimaFase)
        {
            muerteFinal();
        }
        else
        {
            realizarRotacionJefe();
        }

        contadorPescasJefeSeguidas = 0;
        estadoReaccionAnzuelo = false;
        estadoPermitirPesca = false;
        estadoReiniciadoAnzuelo = true;
        estadoJuegoReaccion = false;
    }
}

function realizarRotacionJefe()// Función que borra al jefe y su botón y crea un nuevo con el fin de tener una dirección nueva
{
    document.getElementById("jefe").remove();
    document.getElementById("botonJefe").remove();
    aparecerModelojefe();
}

function sonarTimbreFase1Jefe()// Función que cicla entre los 8 sonidos en escala
{
    document.getElementById("notaDo").pause();
    document.getElementById("notaDo").currentTime = 0;
    document.getElementById("notaRe").pause();
    document.getElementById("notaRe").currentTime = 0;
    document.getElementById("notaRe#").pause();
    document.getElementById("notaRe#").currentTime = 0;
    document.getElementById("notaFa").pause();
    document.getElementById("notaFa").currentTime = 0;
    document.getElementById("notaSol").pause();
    document.getElementById("notaSol").currentTime = 0;
    document.getElementById("notaSol#").pause();
    document.getElementById("notaSol#").currentTime = 0;
    document.getElementById("notaSi").pause();
    document.getElementById("notaSi").currentTime = 0;
    document.getElementById("notaDoFinal").pause();
    document.getElementById("notaDoFinal").currentTime = 0;

    switch(contadorPescasJefeSeguidas)
    {
    case 1:
        document.getElementById("notaDo").play();
        break;
    case 2:
        document.getElementById("notaRe").play();
        break;
    case 3:
        document.getElementById("notaRe#").play();
        break;
    case 4:
        document.getElementById("notaFa").play();
        break;
    case 5:
        document.getElementById("notaSol").play();
        break;
    case 6:
        document.getElementById("notaSol#").play();
        break;
    case 7:
        document.getElementById("notaSi").play();
        break;
    case 8:
        document.getElementById("notaDoFinal").play();
        break;
    }
}

function atraparJefe()// Función que atrapa al jefe y muestra su modelo en pantalla
{
    document.getElementById("sonidoAtraparJefeFase1").currentTime = 0;
    document.getElementById("sonidoAtraparJefeFase1").play();
    mostrarJefe();
    document.getElementById("jefe").remove();
    document.getElementById("botonJefe").remove();
}

function mostrarJefe()// Función que muestra la tabla de madera y los datos del jefe
{
    document.getElementById("musicaJefeFase1").pause();
    document.getElementById("musicaJefeFase1").currentTime = 0;

    modeloPez.style.backgroundImage = "url(images/fishes/antartic_blue_whale.png)";
    modeloPez.style.height = 358 + "px";
    modeloPez.style.width = 1034 + "px";
    modeloPez.style.backgroundSize = "100%";
    modeloPez.style.backgroundRepeat = "no-repeat";
    modeloPez.style.position = "absolute";
    modeloPez.style.top = ((innerHeight - 358) / 2.5) + "px";
    modeloPez.style.left = ((innerWidth - 1034) / 2) + "px";

    document.getElementById("pantallaPesca").style.display = "inline";
    document.getElementById("pesoPez").value = "KG: ???";
    document.getElementById("tamanioPez").value = "CM: ???";
    document.getElementById("dineroPez").value = "G: ???";

    document.getElementById("estanque").style.display="none";
    estadoAnzuelo = true;
    estadoBloquearMovimientoAnzuelo = true
}

const quitarJefeMirando = setInterval(avanzarJefeFase2, 10);// Crear intervalos de centesimas de segundo para contar el tiempo transcurrido

function avanzarJefeFase2()// Función que sirve para quitar el jumpscare después de cierto tiempo
{
    if(estadoFase2Lista)
    {
        contadorCentesimasJefeMirando++;
        if(contadorCentesimasJefeMirando == 400)
        {
            contadorCentesimasJefeMirando = 0;
            estadoFase2Lista = false;
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_boss_phase2.png)";
            document.getElementById("videoJefeMirando").pause;
            document.getElementById("videoJefeMirando").currentTime = 0;
            document.getElementById("videoJefeMirando").style.display="none";
            document.getElementById("musicaJefeFase2Comienzo").play();
            document.getElementById("juegoPesca").style.display="none";
            document.getElementById("llantoJefeFase2").play();
            jefeFase2.style.display="inline"
            estadoIniciarFase2 = true;
        }
        if(contadorCentesimasJefeMirando == 50)
        {
            document.getElementById("sonidoJefeMirando").currentTime = 0;
            document.getElementById("sonidoJefeMirando").play();
        }
    }
}

const comenzarFase2 = setInterval(iniciarFase2, 100);// Función que crea intervalos de décimas de segundo

function iniciarFase2()// Función que inicia la fase 2 del jefe
{
    if(estadoIniciarFase2)
    {
        contadorDecimasInicioFase2++;
        if(contadorDecimasInicioFase2 == 92)
        {
            contadorDecimasInicioFase2 = 0;
            jefeFase2.style.backgroundImage="url(images/boss_fight/boss_phase2_flying.gif)";
            jefeFase2.style.height = "311px";
            jefeFase2.setAttribute('onclick', 'jefeFase2Golpe()');
            jefeFase2.style.display="inline";
            jefeFase2.style.animationPlayState="running";
            document.getElementById("vidaJugador").style.display="inline";
            vidaJugadorFase2 = 5;
            actualizarCorazones();
            vidaJefeFase2 = 3;
            actualizarVidaJefe();
            document.getElementById("vidaJefe").style.display="inline";
            document.getElementById("cuadroFalloFase2").style.display="inline";
            document.getElementById("musicaJefeFase2").play();
            document.getElementById("sacarTochoCanion").style.display="none";
            tochoCanion.style.display="inline"
            estadoIniciarFase2 = false;
            estadoPermitirProyectiles = true;
        }
        if(contadorDecimasInicioFase2 == 80)
        {
            jefeFase2.style.display="none";
            document.getElementById("sacarTochoCanion").style.display="inline";
            document.getElementById("sacarTochoCanion").play();
        }
    }
}

function actualizarCorazones()// Función que actualiza la cantidad de corazones mostrados dependiendo de la vida del jugador
{
    for(let i = 0; i < vidaJugadorFase2; i++)
    {
        document.getElementById("corazon" + (i + 1) + "HP").style.display="inline"
    }
    for(let i = 0; i < (5 - vidaJugadorFase2); i++)
    {
        document.getElementById("corazon" + (5 - i) + "HP").style.display="none"
    }
    if(vidaJugadorFase2 == 0)
    {
        gameOverFase2();
    }
}

function actualizarVidaJefe()// Función que actualiza la vida del jefe dependiendo de la variable que contiene el valor
{
    if(vidaJefeFase2 == 3)
    {
        document.getElementById("vidaJefe").style.backgroundImage = "url(images/boss_fight/boss_hp_3.png)";
        vueltasPorProyectil = 3;
    }
    if(vidaJefeFase2 == 2)
    {
        document.getElementById("vidaJefe").style.backgroundImage = "url(images/boss_fight/boss_hp_2.png)";
        vueltasPorProyectil = 2;
    }
    if(vidaJefeFase2 == 1)
    {
        document.getElementById("vidaJefe").style.backgroundImage = "url(images/boss_fight/boss_hp_1.png)";
        vueltasPorProyectil = 1;
    }
    if(vidaJefeFase2 == 0)
    {
        document.getElementById("vidaJefe").style.backgroundImage = "url(images/boss_fight/boss_hp_0.png)";
        progresarFase3Jefe();
    }
}

const intervaloDispararProyectiles = setInterval(dispararProyectilFase2, 1000);// Crear intervalos de 1 segundo para los proyectiles que mande el jefe

function dispararProyectilFase2()// Función que crea los proyectiles dependiendo de la ronda en la pelea
{
    if(estadoPermitirCambiarVueltasFase2)
    {
        actualizarVidaJefe();
        estadoPermitirCambiarVueltasFase2 = false;
        contadorVueltasParaProyectil = 0;
    }
    if(estadoPermitirProyectiles && contadorProyectiles < 4)
    {
        contadorVueltasParaProyectil++;

        if(contadorVueltasParaProyectil == vueltasPorProyectil)
        {
            contadorProyectiles++;
            buscarLugarProyectiles();
            arregloEstadoProyectiles[espacioLibreProyectiles - 1] = true;
            const proyectilActual = document.createElement('div');
            proyectilActual.setAttribute('id', 'proyectil_' + espacioLibreProyectiles);
            document.getElementById("pantallaJefeFase2").appendChild(proyectilActual);
            proyectilActual.style.zIndex = "4";
            proyectilActual.style.top="0px";

            if(getNumeroRandom(2) == 1)
            {
                proyectilActual.style.left="30%";
                arregloDireccionProyectiles[espacioLibreProyectiles - 1] = -1;
            }
            else
            {
                proyectilActual.style.left="64%";
                arregloDireccionProyectiles[espacioLibreProyectiles - 1] = 1;
            }

            proyectilActual.style.position="absolute";
            proyectilActual.style.backgroundImage="url(images/boss_fight/projectile.gif)";
            proyectilActual.style.height="126px";
            proyectilActual.style.width="102px";
            proyectilActual.style.backgroundSize = "100%";
            proyectilActual.style.backgroundRepeat = "no-repeat";
            proyectilActual.style.pointerEvents="none";
            proyectilActual.style.animation="movimentoProyectil";
            proyectilActual.style.animationPlayState="running";
            proyectilActual.style.animationDuration="2s";

            if(espacioLibreProyectiles == 1)
            {
                estadoDesaparecerProyectil1 = true;
            }
            if(espacioLibreProyectiles == 2)
            {
                estadoDesaparecerProyectil2 = true;
            }
            if(espacioLibreProyectiles == 3)
            {
                estadoDesaparecerProyectil3 = true;
            }
            if(espacioLibreProyectiles == 4)
            {
                estadoDesaparecerProyectil4 = true;
            }

            contadorVueltasParaProyectil = 0;
        }
    }
}

const intervaloBorrarProyectil = setInterval(borrarProyectil, 100);// Función que sirve para contar las décimas de segundo transcurridas después de que spawneo un proyectil

function borrarProyectil()// Función que borra cada proyectil despues de que halla viajado hasta abajo
{
    if(estadoDesaparecerProyectil1)
    {
        contadorCentesimasProyectil1++;
        if(contadorCentesimasProyectil1 == 20)
        {
            document.getElementById("proyectil_1").remove();
            estadoDesaparecerProyectil1 = false;
            contadorCentesimasProyectil1 = 0;
            arregloEstadoProyectiles[0] = false;
            contadorProyectiles--;
            if(arregloDireccionProyectiles[0] == direccionDerechaActual)
            {
                vidaJugadorFase2--;
                actualizarCorazones();
                document.getElementById("sonidoGolpeJugador").pause();
                document.getElementById("sonidoGolpeJugador").currentTime = 0;
                document.getElementById("sonidoGolpeJugador").play();
            }
        }
    }
    if(estadoDesaparecerProyectil2)
    {
        contadorCentesimasProyectil2++;
        if(contadorCentesimasProyectil2 == 20)
        {
            document.getElementById("proyectil_2").remove();
            estadoDesaparecerProyectil2 = false;
            contadorCentesimasProyectil2 = 0;
            arregloEstadoProyectiles[1] = false;
            contadorProyectiles--;
            if(arregloDireccionProyectiles[1] == direccionDerechaActual)
            {
                vidaJugadorFase2--;
                actualizarCorazones();
                document.getElementById("sonidoGolpeJugador").pause();
                document.getElementById("sonidoGolpeJugador").currentTime = 0;
                document.getElementById("sonidoGolpeJugador").play();
            }
        }
    }
    if(estadoDesaparecerProyectil3)
    {
        contadorCentesimasProyectil3++;
        if(contadorCentesimasProyectil3 == 20)
        {
            document.getElementById("proyectil_3").remove();
            estadoDesaparecerProyectil3 = false;
            contadorCentesimasProyectil3 = 0;
            arregloEstadoProyectiles[2] = false;
            contadorProyectiles--;
            if(arregloDireccionProyectiles[2] == direccionDerechaActual)
            {
                vidaJugadorFase2--;
                actualizarCorazones();
                document.getElementById("sonidoGolpeJugador").pause();
                document.getElementById("sonidoGolpeJugador").currentTime = 0;
                document.getElementById("sonidoGolpeJugador").play();
            }
        }
    }
    if(estadoDesaparecerProyectil4)
    {
        contadorCentesimasProyectil4++;
        if(contadorCentesimasProyectil4 == 20)
        {
            document.getElementById("proyectil_4").remove();
            estadoDesaparecerProyectil4 = false;
            contadorCentesimasProyectil4 = 0;
            arregloEstadoProyectiles[3] = false;
            contadorProyectiles--;
            if(arregloDireccionProyectiles[3] == direccionDerechaActual)
            {
                vidaJugadorFase2--;
                actualizarCorazones();
                document.getElementById("sonidoGolpeJugador").pause();
                document.getElementById("sonidoGolpeJugador").currentTime = 0;
                document.getElementById("sonidoGolpeJugador").play();
            }
        }
    }
}

function limpiarProyectiles()// Función que borra el proyectil correspondiente
{
    if(estadoDesaparecerProyectil1)
    {
        document.getElementById("proyectil_1").remove();
        estadoDesaparecerProyectil1 = false;
        contadorCentesimasProyectil1 = 0;
        arregloEstadoProyectiles[0] = false;
        contadorProyectiles--;
    }
    if(estadoDesaparecerProyectil2)
    {
        document.getElementById("proyectil_2").remove();
        estadoDesaparecerProyectil2 = false;
        contadorCentesimasProyectil2 = 0;
        arregloEstadoProyectiles[1] = false;
        contadorProyectiles--;
    }
    if(estadoDesaparecerProyectil3)
    {
        document.getElementById("proyectil_3").remove();
        estadoDesaparecerProyectil3 = false;
        contadorCentesimasProyectil3 = 0;
        arregloEstadoProyectiles[2] = false;
        contadorProyectiles--;
    }
    if(estadoDesaparecerProyectil4)
    {
        document.getElementById("proyectil_4").remove();
        estadoDesaparecerProyectil4 = false;
        contadorCentesimasProyectil4 = 0;
            rregloEstadoProyectiles[3] = false;
        contadorProyectiles--;
    }
}

function buscarLugarProyectiles()// Función que busca un lugar disponible en los proyectiles y sus arreglos
{
    for(let i = 0; i < 4; i++)
    {
        if(!arregloEstadoProyectiles[i])
        {
            espacioLibreProyectiles = i + 1;
            break;
        }
    }
}

const intervaloTransformarJefe = setInterval(transformarJefeFase2, 3000);// Función que cicla cada 3 segundos y de manera random invierte su modelo

function transformarJefeFase2()
{
    if(getNumeroRandom(2) == 0)
    {
        jefeFase2.style.transform="scaleX(-1)";
    }
    else
    {
        jefeFase2.style.transform="scaleX(1)";
    }
}

function jefeFase2Golpe()// Función que se ejecuta cuando le das al jefe y le baja vida
{
    document.getElementById("sonidoGolpejefe").pause();
    document.getElementById("sonidoGolpejefe").currentTime = 0;
    document.getElementById("sonidoGolpejefe").play();

    estadoCanionTocho = true;
    contadorGolpesJefe++;
    
    if(contadorGolpesJefe == 100)
    {
        vidaJefeFase2--;
        vidaJugadorFase2 = 5;
        actualizarCorazones();
        estadoPermitirCambiarVueltasFase2 = true;
        contadorGolpesJefe = 0;
    }
}

const cambiarEstadoDisparar = setInterval(cambiarEstadoTochoCanion, 50);// Función que ayuda a ciclar cada media décima de segundo

function cambiarEstadoTochoCanion()// Función que realiza el sonido de disparo y cambia el modelo de manera rápida
{
    if(estadoCanionTocho)
    {
        document.getElementById("sonidoDisparoFase2").pause();
        document.getElementById("sonidoDisparoFase2").currentTime = 0;
        document.getElementById("sonidoDisparoFase2").play();
        tochoCanion.style.backgroundImage="url(images/boss_fight/tocho_cannon_shooting.png)";
        estadoCanionTocho = false;
        document.getElementById("explosionDisparo").style.display="inline";
        document.getElementById("explosionDisparo").style.top= (window.innerHeight * coordY / 100) - 21 + "px";
        document.getElementById("explosionDisparo").style.left= (window.innerWidth * coordX / 100) - 20 + "px";
    }
    else
    {
        tochoCanion.style.backgroundImage="url(images/boss_fight/tocho_cannon_idle.png)"
        document.getElementById("explosionDisparo").style.display="none";
    }
}

function jefeFase2Fallo()// Función que se ejecuta cuando se da click en otra parte que no sea el jefe, indicando que fallo
{
    estadoCanionTocho = true;
}

function gameOverFase2()// Función que se ejecuta cuando la vida del jugador llega a 0 y limpia todas las variables modificadas en la pelea
{
    cambiarAnzuelo(2);
    limpiarProyectiles();
    estadoSpawneoJefeFinal = false;
    estadoDesaparecerJefe = false;
    estadoBloquearMovimientoAnzuelo = false;
    estadoAnzuelo = false;
    estadoPermitirProyectiles = false;

    jefeFase2.style.backgroundImage="url(images/fishes/antartic_blue_whale.png)";
    jefeFase2.style.height = "239px";
    jefeFase2.setAttribute('onclick', 'jefeFase2Golpe()');
    jefeFase2.removeAttribute("onclick");
    jefeFase2.style.animationPlayState="paused";
    jefeFase2.style.display="none";

    jefeFase2.remove();
    const jf2 = document.createElement('div');
    jf2.setAttribute('id', 'jefeFase2');
    document.getElementById("pantallaJefeFase2").appendChild(jf2);
    jefeFase2 = jf2;
    jefeFase2.setAttribute('type', 'button');
    jefeFase2.setAttribute('onclick', 'jefeFase2Golpe()');
    jefeFase2.style.display="none";
    jefeFase2.style.position = "absolute";
    jefeFase2.style.backgroundImage="url(images/fishes/antartic_blue_whale.png)";
    jefeFase2.style.height="239px";
    jefeFase2.style.width="689px";
    jefeFase2.style.backgroundSize="100%";
    jefeFase2.style.backgroundRepeat="no-repeat";
    jefeFase2.style.zIndex="2";
    jefeFase2.style.cursor="pointer";
    jefeFase2.style.animation="movimientoJefeFase2";
    jefeFase2.style.animationPlayState="paused";
    jefeFase2.style.animationIterationCount="infinite";
    jefeFase2.style.animationDuration="30s";
    jefeFase2.style.top=(window.innerHeight * 0.6) + "px";
    jefeFase2.style.left=(window.innerWidth - 689) / 2 + "px";

    tochoCanion.style.display="none"
    document.getElementById("cuadroFalloFase2").style.display="none";
    document.getElementById("vidaJefe").style.display="none";
    document.getElementById("vidaJugador").style.display="none";
    document.getElementById("estanque").style.display="inline";
    document.getElementById("fondoDineroTotal").style.width="290px";
    document.getElementById("monedaOro").style.width="80px";
    document.getElementById("dineroTotal").style.width="170px";

    document.getElementById("musicaJefeFase2").pause();
    document.getElementById("musicaJefeFase2").currentTime = 0;

    if(!estadoGameOverFase3)
    {
        pantallaGameOver();
    }
    estadoGameOverFase3 = false;
}

function pantallaGameOver()// Función que muestra la pantalla de game over
{
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/black_screen.webp)";
    document.getElementById("pantallaGameOver").style.display="inline";
    document.getElementById("musicaGameOver").play();
}

function salirPantallaGameOver()// Función que saca al jugador de la pantalla y regresa todo al juego normal
{
    tiempoReset();
    estadoPantallaNegra = true;

    document.getElementById("musicaGameOver").pause();
    document.getElementById("musicaGameOver").currentTime = 0;

    document.getElementById("pantallaGameOver").style.display="none";
    document.getElementById("juegoPesca").style.display="inline";
    document.getElementById("tienda").style.display = "inline";

    estadoUltimaFase = false;
}

function tiempoReset()// Función que cambia el tiempo de fondo del juego, ya que este de deshabilito durante la pelea
{
    switch(numeroTiempo % 4)
    {
    case 0:
        if(estadoMusicaDia)
        {
            document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_day.png)";
            document.getElementById("musicaPescaAmanecer").pause();
            document.getElementById("musicaPescaAmanecer").currentTime = 0;
            document.getElementById("musicaPescaNoche").pause();
            document.getElementById("musicaPescaNoche").currentTime = 0;
            document.getElementById("musicaPescaAtardecer").pause();
            document.getElementById("musicaPescaAtardecer").currentTime = 0;
            document.getElementById("musicaPescaDiaCorta").play();
        }
        else
        {
            estadoMusicaDia = true;
        }
        break;
    case 1:
        document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunset.png)";
        document.getElementById("musicaPescaDiaLarga").pause();
        document.getElementById("musicaPescaAmanecer").pause();
        document.getElementById("musicaPescaAmanecer").currentTime = 0;
        document.getElementById("musicaPescaDiaCorta").pause();
        document.getElementById("musicaPescaDiaCorta").currentTime = 0;
        document.getElementById("musicaPescaNoche").pause();
        document.getElementById("musicaPescaNoche").currentTime = 0;
        document.getElementById("musicaPescaAtardecer").play();
        break;
    case 2:
        document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_night.png)";
        document.getElementById("musicaPescaAmanecer").pause();
        document.getElementById("musicaPescaAmanecer").currentTime = 0;
        document.getElementById("musicaPescaDiaCorta").pause();
        document.getElementById("musicaPescaDiaCorta").currentTime = 0;
        document.getElementById("musicaPescaAtardecer").pause();
        document.getElementById("musicaPescaAtardecer").currentTime = 0;
        document.getElementById("musicaPescaNoche").play();
        break;
    case 3:
        document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunrise.png)";
        document.getElementById("musicaPescaNoche").pause();
        document.getElementById("musicaPescaNoche").currentTime = 0;
        document.getElementById("musicaPescaDiaCorta").pause();
        document.getElementById("musicaPescaDiaCorta").currentTime = 0;
        document.getElementById("musicaPescaAtardecer").pause();
        document.getElementById("musicaPescaAtardecer").currentTime = 0;
        document.getElementById("musicaPescaAmanecer").play();
        break;
    }
}

function progresarFase3Jefe()// Función para avanzar a la fase 3 del jefe
{
    estadoUltimaFase = true;
    cambiarAnzuelo(3);
    limpiarProyectiles();
    estadoSpawneoJefeFinal = false;
    estadoBloquearMovimientoAnzuelo = false;
    estadoAnzuelo = false;
    estadoPermitirProyectiles = false;

    jefeFase2.style.backgroundImage="url(images/fishes/antartic_blue_whale.png)";
    jefeFase2.style.height = "239px";
    jefeFase2.setAttribute('onclick', 'jefeFase2Golpe()');
    jefeFase2.removeAttribute("onclick");
    jefeFase2.style.animationPlayState="paused";
    jefeFase2.style.display="none";
    tochoCanion.style.display="none"
    document.getElementById("cuadroFalloFase2").style.display="none";
    document.getElementById("vidaJefe").style.display="none";
    document.getElementById("vidaJugador").style.display="none";
    document.getElementById("estanque").style.display="inline";
    document.getElementById("fondoDineroTotal").style.width="290px";
    document.getElementById("monedaOro").style.width="80px";
    document.getElementById("dineroTotal").style.width="170px";

    document.getElementById("musicaJefeFase2").pause();
    document.getElementById("musicaJefeFase2").currentTime = 0;

    document.getElementById("fondo").style.backgroundImage="url(images/fondo/background_sunrise.png)";
    document.getElementById("musicaFase3").play();

    document.getElementById("juegoPesca").style.display="inline";

    estadoSpawneoJefeVictoria = true;
    aparecerModelojefe();
    estadoSpawneoJefeVictoria = false;
}

function pescaFinal()// Función que se ejecuta cuando se pesca de manera final al jefe
{
    estadoDesaparecerJefe = false;
    document.getElementById("sonidoAtraparJefeFase3").currentTime = 0;
    document.getElementById("sonidoAtraparJefeFase3").play();
    mostrarFinal();
    document.getElementById("jefe").remove();
    document.getElementById("botonJefe").remove();
}

function mostrarFinal()// Función para mostrar el modelo del jefe
{
    document.getElementById("musicaFase3").pause();
    document.getElementById("musicaFase3").currentTime = 0;

    modeloPez.style.backgroundImage = "url(images/fishes/antartic_blue_whale.png)";
    modeloPez.style.height = 358 + "px";
    modeloPez.style.width = 1034 + "px";
    modeloPez.style.backgroundSize = "100%";
    modeloPez.style.backgroundRepeat = "no-repeat";
    modeloPez.style.position = "absolute";
    modeloPez.style.top = ((innerHeight - 358) / 2.5) + "px";
    modeloPez.style.left = ((innerWidth - 1034) / 2) + "px";

    document.getElementById("pantallaPesca").style.display = "inline";
    document.getElementById("pesoPez").value = "KG: 180000";
    document.getElementById("tamanioPez").value = "CM: 2900";
    document.getElementById("dineroPez").value = "G: 9999";

    document.getElementById("estanque").style.display="none";
    estadoAnzuelo = true;
    estadoBloquearMovimientoAnzuelo = true
}

function muerteFinal()// Función para mostrar la pantalla de muerte final
{
    estadoGameOverFase3 = true;
    gameOverFase2();
    document.getElementById("jefe").remove();
    document.getElementById("botonJefe").remove();
    document.getElementById("musicaFase3").pause();
    document.getElementById("musicaFase3").currentTime = 0;
    document.getElementById("juegoPesca").style.display="none";
    document.getElementById("fondo").style.backgroundImage="url(images/fondo/black_screen.webp)";
    document.getElementById("videoJefeMirando").style.display="inline";
    document.getElementById("videoJefeMirando").currentTime = 0;
    document.getElementById("videoJefeMirando").play();
    estadoMirandoFinal = true;
}

const mirandoFinalIntervalo = setInterval(mirandoFinal, 10);// Función para ciclar cada centecima de segundo

function mirandoFinal()// Función que muestra el último jumpscare si no logra pescar el jugador a la ballena en la fase 3
{
    if(estadoMirandoFinal)
    {
        contadorCentesimasJefeMirando++;
        if(contadorCentesimasJefeMirando == 400)
        {
            contadorCentesimasJefeMirando = 0;
            estadoMirandoFinal = false;
            document.getElementById("videoJefeMirando").pause;
            document.getElementById("videoJefeMirando").currentTime = 0;
            document.getElementById("videoJefeMirando").style.display="none";

            pantallaGameOver();
        }
        if(contadorCentesimasJefeMirando == 50)
        {
            document.getElementById("sonidoJefeMirando").currentTime = 0;
            document.getElementById("sonidoJefeMirando").play();
        }
    }
}

function iniciarAgradecimientosFinales()// Función que da inicio al último dialogo de Dick Tinieblas
{
    document.getElementById("tienda").style.display = "none";
    document.getElementById("juegoPesca").style.display = "none";
    document.getElementById("desbloqueo").style.display="inline";
    sonidoDick();
    textoDesbloqueo.innerHTML = "<br>¡Felicidades!";
    document.getElementById("dickDesbloqueo").removeAttribute("onclick");
    document.getElementById("dickDesbloqueo").setAttribute('onclick', 'agradecimientosFinales()');
}

function agradecimientosFinales()// Función para avanzar en el último dialogo de Dick Tinieblas
{
    switch(contadorAvancesAgradecimiento)
    {
    case 0:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Yo nunca fuí capaz de pescar una ballena azúl.";
        break;
    case 1:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>Desde el primer día que llegaste al estanque ví potencial en tí.";
        break;
    case 2:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>¡Jaja!, esta sí que ha sido una Pesca Tocha.";
        break;
    case 3:
        sonidoDick();
        textoDesbloqueo.innerHTML = "<br>¡Gracias por jugar este juego!";
        break
    case 4:
        terminarDesbloqueo()
        break;
    }
    contadorAvancesAgradecimiento++;
}

function terminarAgradecimienosFinales()// Función para terminar el último dialogo de Dick Tinieblas y regresar al juego normal
{
    contadorAvancesAgradecimiento = 0;
    document.getElementById("desbloqueo").style.display="none";
    document.getElementById("juegoPesca").style.display = "inline";
    document.getElementById("tienda").style.display = "inline";
}