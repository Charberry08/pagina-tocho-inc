#include "pezRape.h"
#include <iostream>
#include <cstdlib>

PezRape :: PezRape()
{ 
    tamanio = rand() % 81 + 20;
    peso = rand() % 20 + 27;
    tiempo = 200;
    pesoEstanque = 2; 
    id = 6;
    dinero = 247;
}
PezRape :: ~PezRape(){}