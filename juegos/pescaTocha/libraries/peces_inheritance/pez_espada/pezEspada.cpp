#include "pezEspada.h"
#include <iostream>
#include <cstdlib>

PezEspada :: PezEspada()
{ 
    tamanio = rand() % 141 + 80;
    peso = rand() % 201 + 40;
    tiempo = 300;
    pesoEstanque = 4; 
    id = 8;
    dinero = 220;
}
PezEspada :: ~PezEspada(){}