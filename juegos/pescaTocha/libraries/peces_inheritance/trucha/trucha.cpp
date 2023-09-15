#include "trucha.h"
#include <iostream>
#include <cstdlib>

Trucha :: Trucha()
{ 
    tamanio = rand() % 41 + 30;
    peso = rand() % 11 + 12;
    tiempo = 650;
    pesoEstanque = 1; 
    id = 4;
    dinero = 58;
}
Trucha :: ~Trucha(){}