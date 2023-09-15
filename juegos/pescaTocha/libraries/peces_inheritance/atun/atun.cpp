#include "atun.h"
#include <iostream>
#include <cstdlib>

Atun :: Atun()
{ 
    tamanio = rand() % 71 + 120;
    peso = rand() % 121 + 30;
    tiempo = 500;
    pesoEstanque = 4;
    id = 9; 
    dinero = 80;
}
Atun :: ~Atun(){}