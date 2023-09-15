#include "koi.h"
#include <iostream>
#include <cstdlib>

Koi :: Koi()
{ 
    tamanio = rand() % 21 + 70;
    peso = rand() % 6 + 10;
    tiempo = 700;
    pesoEstanque = 2; 
    id = 6;
    dinero = 27;
}
Koi :: ~Koi(){}