#include "anchoa.h"
#include <iostream>
#include <cstdlib>

//Codigo es muy similar en los demas tipos de peces
Anchoa :: Anchoa()
{ 
    //Genera un tamanio random entre el 15 y 25
    tamanio = rand() % 11 + 15;
    //Peson random entre el 20 y el 25
    peso = rand() % 6 + 20;
    //Tiempo esta en milisegundos
    tiempo = 800;
    pesoEstanque = 2; 
    id = 5;
    dinero = 12;
}
Anchoa :: ~Anchoa(){}