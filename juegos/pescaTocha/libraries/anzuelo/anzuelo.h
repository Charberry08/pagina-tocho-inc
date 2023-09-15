#ifndef ANZUELO_H
#define ANZUELO_H
#include <vector>

class Anzuelo
{
protected:
    int baitPower;
public:
    std::vector <int> catalogoLigero;  
    std::vector <int> catalogoMediano; 
    std::vector <int> catalogoPesado;  
    Anzuelo();
    ~Anzuelo();
    void setBaitPower(int baitPower);
    int getBaitPower();

    virtual void atraparPez(int);
};

#endif