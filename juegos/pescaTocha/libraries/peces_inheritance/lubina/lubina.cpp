#include "lubina.h"
#include <iostream>
#include <cstdlib>

Lubina :: Lubina()
{ 
    tamanio = rand() % 31 + 25;
    peso = rand() % 4 + 4;
    tiempo = 1100;
    pesoEstanque = 1; 
    id = 2;
    dinero = 16;
}
Lubina :: ~Lubina(){}