#include "goldfish.h"
#include <iostream>
#include <cstdlib>

Goldfish :: Goldfish()
{ 
    tamanio = rand() % 16 + 25;
    peso = rand() % 3 + 1;
    tiempo = 600;
    pesoEstanque = 1; 
    id = 7;
    dinero = 22;
}
Goldfish :: ~Goldfish(){}