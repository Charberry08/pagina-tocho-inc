#include "carpa.h"
#include <iostream>
#include <cstdlib>

Carpa :: Carpa()
{ 
    tamanio = rand() % 41 + 40;
    peso = rand() % 13 + 2;
    tiempo = 900;
    pesoEstanque = 1;
    id = 4; 
    dinero = 18;
}
Carpa :: ~Carpa(){}