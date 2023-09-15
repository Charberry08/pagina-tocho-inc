#include "salmon.h"
#include <iostream>
#include <cstdlib>

Salmon :: Salmon()
{ 
    tamanio = rand() % 51 + 60;
    peso = rand() % 11 + 2;
    tiempo = 400;
    pesoEstanque = 2; 
    id = 7;
    dinero = 77;
}
Salmon :: ~Salmon(){}