#include "char.h"
#include <iostream>
#include <cstdlib>

Char :: Char()
{ 
    tamanio = rand() % 46 + 30;
    peso = rand() % 2 + 1;
    tiempo = 700;
    pesoEstanque = 2; 
    id = 1;
    dinero = 69;
}
Char :: ~Char(){}