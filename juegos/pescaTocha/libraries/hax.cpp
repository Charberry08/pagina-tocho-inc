#include <emscripten/bind.h>
#include <emscripten.h>
//librerias de los peces
#include "peces/peces.h"
#include "peces_inheritance/anchoa/anchoa.h"
#include "peces_inheritance/atun/atun.h"
#include "peces_inheritance/bagre/bagre.h"
#include "peces_inheritance/ballena_azul_antartica/ballenaAzulAntartica.h"
#include "peces_inheritance/cachalote/cachalote.h"
#include "peces_inheritance/cangrejo/cangrejo.h"
#include "peces_inheritance/cangrejo_rio/cangrejoRio.h"
#include "peces_inheritance/carpa/carpa.h"
#include "peces_inheritance/char/char.h"
#include "peces_inheritance/esturion/esturion.h"
#include "peces_inheritance/goldfish/goldfish.h"
#include "peces_inheritance/koi/koi.h"
#include "peces_inheritance/lubina/lubina.h"
#include "peces_inheritance/magikarp/magikarp.h"
#include "peces_inheritance/mojarra/mojarra.h"
#include "peces_inheritance/pez_espada/pezEspada.h"
#include "peces_inheritance/pez_globo/pezGlobo.h"
#include "peces_inheritance/pez_payaso/pezPayaso.h"
#include "peces_inheritance/pez_rape/pezRape.h"
#include "peces_inheritance/pirania/pirania.h"
#include "peces_inheritance/rana/rana.h"
#include "peces_inheritance/salmon/salmon.h"
#include "peces_inheritance/tetra_neon/tetraNeon.h"
#include "peces_inheritance/tiburon_blanco/tiburonBlanco.h"
#include "peces_inheritance/tortuga/tortuga.h"
#include "peces_inheritance/trucha/trucha.h"
//libreria de la cania
#include "cania/cania.h"
#include "anzuelo/anzuelo.h"
#include "anzuelo_inheritance/ligero/ligero.h"
#include "anzuelo_inheritance/mediano/mediano.h"
#include "anzuelo_inheritance/pesado/pesado.h"
//Comando con el que compilamos en el cmd
//em++ libraries/anzuelo/anzuelo.cpp libraries/anzuelo_inheritance/ligero/ligero.cpp libraries/anzuelo_inheritance/mediano/mediano.cpp libraries/anzuelo_inheritance/pesado/pesado.cpp libraries/cania/cania.cpp libraries/peces/peces.cpp libraries/peces_inheritance/anchoa/anchoa.cpp libraries/peces_inheritance/atun/atun.cpp libraries/peces_inheritance/bagre/bagre.cpp libraries/peces_inheritance/ballena_azul_antartica/ballenaAzulAntartica.cpp libraries/peces_inheritance/cachalote/cachalote.cpp libraries/peces_inheritance/cangrejo/cangrejo.cpp libraries/peces_inheritance/cangrejo_rio/cangrejoRio.cpp libraries/peces_inheritance/carpa/carpa.cpp libraries/peces_inheritance/char/char.cpp libraries/peces_inheritance/esturion/esturion.cpp libraries/peces_inheritance/goldfish/goldfish.cpp libraries/peces_inheritance/koi/koi.cpp libraries/peces_inheritance/lubina/lubina.cpp libraries/peces_inheritance/magikarp/magikarp.cpp libraries/peces_inheritance/mojarra/mojarra.cpp libraries/peces_inheritance/pez_espada/pezEspada.cpp libraries/peces_inheritance/pez_globo/pezGlobo.cpp libraries/peces_inheritance/pez_payaso/pezPayaso.cpp libraries/peces_inheritance/pez_rape/pezRape.cpp libraries/peces_inheritance/pirania/pirania.cpp libraries/peces_inheritance/rana/rana.cpp libraries/peces_inheritance/salmon/salmon.cpp libraries/peces_inheritance/tetra_neon/tetraNeon.cpp libraries/peces_inheritance/tiburon_blanco/tiburonBlanco.cpp libraries/peces_inheritance/tortuga/tortuga.cpp libraries/peces_inheritance/trucha/trucha.cpp libraries/hax.cpp main.cpp -o main.js -s WASM=1 --bind
using namespace emscripten;

EMSCRIPTEN_BINDINGS(Peces) {
  //Exportacion de la clase peces y sus funciones, asi como sus herencias
  class_<Peces>("Peces")
    .constructor<>()
    .function("getTamanio", &Peces::getTamanio)
    .function("getPeso", &Peces::getPeso)
    .function("getTiempo", &Peces::getTiempo)
    .function("getId", &Peces::getId)
    .function("getPesoEstanque", &Peces::getPesoEstanque)
    .function("getTiempo", &Peces::getTiempo)
    .function("getDinero", &Peces::getDinero);

  class_<Anchoa, base<Peces>>("Anchoa")
    .constructor<>();
  class_<Atun, base<Peces>>("Atun")
    .constructor<>();
  class_<Bagre, base<Peces>>("Bagre")
    .constructor<>();
  class_<BallenaAzulAntartica, base<Peces>>("BallenaAzulAntartica")
    .constructor<>();
  class_<Cachalote, base<Peces>>("Cachalote")
    .constructor<>();
  class_<Cangrejo, base<Peces>>("Cangrejo")
    .constructor<>();
  class_<CangrejoRio, base<Peces>>("CangrejoRio")
    .constructor<>();
  class_<Carpa, base<Peces>>("Carpa")
    .constructor<>();
  class_<Char, base<Peces>>("Char")
    .constructor<>();
  class_<Esturion, base<Peces>>("Esturion")
    .constructor<>();
  class_<Goldfish, base<Peces>>("Goldfish")
    .constructor<>();
  class_<Koi, base<Peces>>("Koi")
    .constructor<>();
  class_<Lubina, base<Peces>>("Lubina")
    .constructor<>();
  class_<Magikarp, base<Peces>>("Magikarp")
    .constructor<>();
  class_<Mojarra, base<Peces>>("Mojarra")
    .constructor<>();
  class_<PezEspada, base<Peces>>("PezEspada")
    .constructor<>();
  class_<PezGlobo, base<Peces>>("PezGlobo")
    .constructor<>();
  class_<PezPayaso, base<Peces>>("PezPayaso")
    .constructor<>();
  class_<PezRape, base<Peces>>("PezRape")
    .constructor<>();
  class_<Pirania, base<Peces>>("Pirania")
    .constructor<>();
  class_<Rana, base<Peces>>("Rana")
    .constructor<>();
  class_<Salmon, base<Peces>>("Salmon")
    .constructor<>();
  class_<TetraNeon, base<Peces>>("TetraNeon")
    .constructor<>();
  class_<TiburonBlanco, base<Peces>>("TiburonBlanco")
    .constructor<>();
  class_<Tortuga, base<Peces>>("Tortuga")
    .constructor<>();
  class_<Trucha, base<Peces>>("Trucha")
    .constructor<>();

  //Exportacion de la clase cania y sus funciones
  class_<Cania>("Cania")
    .constructor<>()
    .function("setCaniaActual", &Cania::setCaniaActual)
    .function("getCaniaActual", &Cania::getCaniaActual)
    .function("capturaExitosa", &Cania::capturaExitosa)
    .function("mejorarCania", &Cania::mejorarCania)
    .function("getTiempoMas", &Cania::getTiempoMas)
    .function("setTiempoMas", &Cania::setTiempoMas)
    .function("getTamanioVector", &Cania::getTamanioVector)
    .function("getIndexVector", &Cania::getIndexVector);

  //Exportacion de la clase anzuelo y sus derivadas
  class_<Anzuelo>("Anzuelo")
    .constructor<>()
    .function("atraparPez", &Anzuelo::atraparPez);
  class_<Ligero, base<Anzuelo>>("Ligero")
    .constructor<>();
  class_<Mediano, base<Anzuelo>>("Mediano")
    .constructor<>();
  class_<Pesado, base<Anzuelo>>("Pesado")
    .constructor<>();
}