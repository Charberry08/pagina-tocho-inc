#include "esturion.h"
#include <iostream>
#include <cstdlib>

Esturion :: Esturion()
{ 
    tamanio = rand() % 201 + 100;
    peso = rand() % 31 + 50;
    tiempo = 400;
    pesoEstanque = 2; 
    id = 4;
    dinero = 164;
}
Esturion :: ~Esturion(){}