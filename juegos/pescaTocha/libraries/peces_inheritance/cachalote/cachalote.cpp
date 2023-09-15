#include "cachalote.h"
#include <iostream>
#include <cstdlib>

Cachalote :: Cachalote()
{ 
    tamanio = rand() % 101 + 1550;
    peso = rand() % 10001 + 30000;
    tiempo = 100;
    pesoEstanque = 12; 
    id = 7;
    dinero = 470;
}
Cachalote :: ~Cachalote(){}