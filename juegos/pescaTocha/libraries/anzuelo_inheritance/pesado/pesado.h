#ifndef PESADO_H
#define PESADO_H

#include "../../anzuelo/anzuelo.h"
#include <iostream>
#include <vector>

class Pesado : public Anzuelo
{
public:
    Pesado();
    ~Pesado();

    void atraparPez(int) override;
};

#endif