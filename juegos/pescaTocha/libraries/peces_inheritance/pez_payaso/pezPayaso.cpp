#include "pezPayaso.h"
#include <iostream>
#include <cstdlib>

PezPayaso :: PezPayaso()
{ 
    tamanio = rand() % 6 + 7;
    peso = 1;
    tiempo = 1000;
    pesoEstanque = 1;
    id = 3;
    dinero = 19;
}
PezPayaso :: ~PezPayaso(){}