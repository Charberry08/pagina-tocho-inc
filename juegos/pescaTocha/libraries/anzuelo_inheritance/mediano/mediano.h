#ifndef MEDIANO_H
#define MEDIANO_H
#include "../../anzuelo/anzuelo.h"
#include <iostream>
#include <vector>

class Mediano : public Anzuelo
{
public:
    Mediano();
    ~Mediano();

    void atraparPez(int) override;
};

#endif