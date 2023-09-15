#include <iostream>
#include "peces.h"

Peces :: Peces()
{
    this -> tamanio = 0;
    this -> peso = 0;
    this -> tiempo = 0;
}
Peces :: ~Peces(){}

void Peces :: setTamanio(int tamanio)
{
    this -> tamanio = tamanio;
}
int Peces :: getTamanio()
{
    return tamanio;
}

void Peces :: setPeso(int peso)
{
    this -> peso = peso;
}
int Peces :: getPeso()
{
    return peso;
}

void Peces :: setTiempo(int tiempo)
{
    this -> tiempo = tiempo;
}
int Peces :: getTiempo()
{
    return tiempo;
}

void Peces :: setId(int id)
{
    this -> id = id;
}
int Peces :: getId()
{
    return id;
}

void Peces :: setPesoEstanque(int pesoEstanque)
{
    this -> pesoEstanque = pesoEstanque;
}
int Peces :: getPesoEstanque()
{
    return pesoEstanque;
}

void Peces :: setDinero(int dinero)
{
    this -> dinero = dinero;
}
int Peces :: getDinero()
{
    return dinero;
}
