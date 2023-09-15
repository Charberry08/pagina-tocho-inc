#include "cangrejo.h"
#include <iostream>
#include <cstdlib>

Cangrejo :: Cangrejo()
{ 
    tamanio = rand() % 31 + 150;
    peso = rand() % 6 + 8;
    tiempo = 500;
    pesoEstanque = 1; 
    id = 3;
    dinero = 111;
}
Cangrejo :: ~Cangrejo(){}