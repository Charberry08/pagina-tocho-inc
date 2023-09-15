#include <iostream>
#include <vector>
#include "pesado.h"

Pesado :: Pesado(){}
Pesado :: ~Pesado(){}

void Pesado :: atraparPez(int id)
{
    bool alreadyCatched = false;
    for(int elemento : catalogoPesado)
    {
        if(id == elemento)
        {
            alreadyCatched = true;
        }
    }
    if(!alreadyCatched)
    {
        catalogoPesado.push_back(id);
    }
}