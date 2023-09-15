#include "cangrejoRio.h"
#include <iostream>
#include <cstdlib>

CangrejoRio :: CangrejoRio()
{ 
    tamanio = rand() % 6 + 16;
    peso = rand() % 3 + 1;
    tiempo = 500;
    pesoEstanque = 1; 
    id = 6;
    dinero = 51;
}
CangrejoRio :: ~CangrejoRio(){}