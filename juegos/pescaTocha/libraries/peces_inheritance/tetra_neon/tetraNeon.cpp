#include "tetraNeon.h"
#include <iostream>
#include <cstdlib>

TetraNeon :: TetraNeon()
{ 
    tamanio = rand() % 4 + 2;
    peso = 1;
    tiempo = 900;
    pesoEstanque = 1; 
    id = 1;
    dinero = 21;
}
TetraNeon :: ~TetraNeon(){}