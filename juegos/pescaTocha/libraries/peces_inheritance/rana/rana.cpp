#include "rana.h"
#include <iostream>
#include <cstdlib>

Rana :: Rana()
{ 
    tamanio = rand() % 8 + 10;
    peso = rand() % 3 + 1;
    tiempo = 700;
    pesoEstanque = 2; 
    id = 3;
    dinero = 45;
}
Rana :: ~Rana(){}