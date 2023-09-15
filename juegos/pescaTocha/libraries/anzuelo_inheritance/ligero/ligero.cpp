#include <iostream>
#include <vector>
#include "ligero.h"

Ligero :: Ligero(){}
Ligero :: ~Ligero(){}

//Este codigo se repite en las 3 herencias, la unica diferencia es el catalogo al que se agrega
void Ligero :: atraparPez(int id)
{
    //booleana para checar si ya esta el id del pez en el arreglo, para no tenerlo repetido
    bool alreadyCatched = false;
    //For que itere por el arreglo y cheque si ya esta adentro
    for(int elemento : catalogoLigero)
    {
        if(id == elemento)
        {
            alreadyCatched = true;
        }
    }
    //Si no esta adentro se agrega
    if(!alreadyCatched)
    {
        catalogoLigero.push_back(id);
    }
}