#include <iostream>
#include "anzuelo.h"

Anzuelo :: Anzuelo(){}
Anzuelo :: ~Anzuelo(){}

void Anzuelo :: setBaitPower(int baitPower)
{
    this -> baitPower = baitPower;
}
int Anzuelo :: getBaitPower()
{
    return baitPower;
}
//Funcion virtual de la clase base con la que se agregaran los peces atrapados al catalogo
void Anzuelo :: atraparPez(int ID){}


