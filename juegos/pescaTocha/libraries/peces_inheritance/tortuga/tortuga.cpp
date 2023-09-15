#include "tortuga.h"
#include <iostream>
#include <cstdlib>

Tortuga :: Tortuga()
{ 
    tamanio = rand() % 121 + 60;
    peso = rand() % 16 + 35;
    tiempo = 800;
    pesoEstanque = 2; 
    id = 2;
    dinero = 42;
}
Tortuga :: ~Tortuga(){}