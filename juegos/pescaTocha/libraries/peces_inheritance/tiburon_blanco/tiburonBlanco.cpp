#include "tiburonBlanco.h"
#include <iostream>
#include <cstdlib>

TiburonBlanco :: TiburonBlanco()
{ 
    tamanio = rand() % 151 + 340;
    peso = rand() % 421 + 680;
    tiempo = 50;
    pesoEstanque = 6; 
    id = 8;
    dinero = 600;
}
TiburonBlanco :: ~TiburonBlanco(){}