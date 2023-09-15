#ifndef PECES_H
#define PECES_H

class Peces
{
protected:    
    //Caracteristicas generales de los peces
    int tamanio;
    int peso;
    //Tiempo de reaccion
    int tiempo;
    //Para tener un limite de peces que hay en el estanque al mismo tiempo
    int pesoEstanque;
    int id;
    //dinero que te dan
    int dinero;

public:
    Peces();
    ~Peces();
    //sets y gets
    void setTamanio(int tamanio);
    int getTamanio();

    void setPeso(int peso);
    int getPeso();

    void setTiempo(int tiempo);
    int getTiempo();

    void setId(int id);
    int getId();

    void setPesoEstanque(int pesoEstanque);
    int getPesoEstanque();

    void setDinero(int dinero);
    int getDinero();
};

#endif