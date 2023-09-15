#include <iostream> 
#include "cania.h"
#include "../anzuelo_inheritance/ligero/ligero.h"
#include "../anzuelo_inheritance/mediano/mediano.h"
#include "../anzuelo_inheritance/pesado/pesado.h"
#include <vector>

Cania :: Cania()
{
  tiempoMas = 0;
  caniaActual = 1;
  anzueloPtr = &anzueloLigero;
}
Cania :: ~Cania(){}

void Cania :: setTiempoMas(int tiempoMas)
{
    this -> tiempoMas = tiempoMas;
}
int Cania :: getTiempoMas()
{
    return tiempoMas;
}

//Indica el tipo de anzuelo que se usa
void Cania :: setCaniaActual(int caniaActual)
{
    this -> caniaActual = caniaActual;
    //Dependiendo del tipo de anzuelo es el tipo de objeto al que apuntara anzueloPtr, con el cual accederemos a la clase anzuelo
    switch(caniaActual)
      {
        case 1: 
          anzueloPtr = &anzueloLigero;
          break;
        case 2:
          anzueloPtr = &anzueloMediano;
          break;
        case 3:
          anzueloPtr = &anzueloPesado;
          break;
      }
}

int Cania :: getCaniaActual()
{
    return caniaActual;
}

//Si captura al pez, entonces llama la funcion atraparPez dependiendo de la caniaActual
void Cania :: capturaExitosa(int id)
{
    anzueloPtr -> atraparPez(id);
}

//Agrega al tiempo de reaccion
void Cania :: mejorarCania()
{
    tiempoMas+=200;
}

//Regresa el tamanio de cada catalogo
int Cania :: getTamanioVector(int opcion)
{
    int temp;
    switch(opcion)
    {
        case 1:
          temp = anzueloPtr -> catalogoLigero.size();
          break;
        case 2:
          temp = anzueloPtr -> catalogoMediano.size();
          break;
        case 3:
          temp = anzueloPtr -> catalogoPesado.size();
          break;
    }
    return temp;
}

//Regresa el elemento en cierta posicion del catalogo, necesario para javascript, pues ahi no se puede acceder al vector como se hace en c++
int Cania :: getIndexVector(int opcion, int index)
{
  int temp;
  switch(opcion)
  {
    case 1: 
      temp = anzueloPtr -> catalogoLigero[index];
      break;
    case 2:
      temp = anzueloPtr -> catalogoMediano[index];
      break;
    case 3:
      temp = anzueloPtr -> catalogoPesado[index];
      break;
  }
  return temp;
}