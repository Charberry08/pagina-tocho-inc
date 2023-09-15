#include <iostream>
#include <vector>
#include "mediano.h"

Mediano :: Mediano(){}
Mediano :: ~Mediano(){}

void Mediano :: atraparPez(int id)
{
    bool alreadyCatched = false;
    for(int elemento : catalogoMediano)
    {
        if(id == elemento)
        {
            alreadyCatched = true;
        }
    }
    if(!alreadyCatched)
    {
        catalogoMediano.push_back(id);
    }
}