#ifndef LIGERO_H
#define LIGERO_H
#include "../../anzuelo/anzuelo.h"
#include <vector>

class Ligero : public Anzuelo
{
public:
    Ligero();
    ~Ligero();

    void atraparPez(int);
};

#endif