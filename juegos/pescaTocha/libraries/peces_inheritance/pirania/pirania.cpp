#include "pirania.h"
#include <iostream>
#include <cstdlib>

Pirania :: Pirania()
{ 
    tamanio = rand() % 36 + 25;
    peso = rand() % 9 + 7;
    tiempo = 300;
    pesoEstanque = 1; 
    id = 5;
    dinero = 170;
}
Pirania :: ~Pirania(){}