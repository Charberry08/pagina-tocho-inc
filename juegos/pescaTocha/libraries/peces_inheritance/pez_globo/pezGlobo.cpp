#include "pezGlobo.h"
#include <iostream>
#include <cstdlib>

PezGlobo :: PezGlobo()
{ 
    tamanio = rand() % 13 + 3;
    peso = rand() % 10 + 1;
    tiempo = 550;
    pesoEstanque = 3; 
    id = 8;
    dinero = 32;
}
PezGlobo :: ~PezGlobo(){}