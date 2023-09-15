#include "bagre.h"
#include <iostream>
#include <cstdlib>

Bagre :: Bagre()
{ 
    tamanio = rand() % 11 + 80;
    peso = rand() % 2 + 1;
    tiempo = 600;
    pesoEstanque = 2; 
    id = 5;
    dinero = 67;
}
Bagre :: ~Bagre(){}