#include "mojarra.h"
#include <iostream>
#include <cstdlib>

Mojarra :: Mojarra()
{ 
    tamanio = rand() % 8 + 18;
    peso = rand() % 2 + 1;
    tiempo = 1200;
    pesoEstanque = 1;
    id = 1;
    dinero = 13;
}

Mojarra :: ~Mojarra(){}