#include <iostream>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
extern "C"
{
    double realizarOperacion(char *signo, double numRes, double numeroPantalla)
    {
        char signoCaracter = signo[0];

        switch(signoCaracter)
        {
        case '+':
            numRes += numeroPantalla;
            break;
        case '-':
            numRes -= numeroPantalla;
            break;
        case '*':
            numRes *= numeroPantalla;
            break;
        case '/':
            numRes /= numeroPantalla;
            break;
        }

        return numRes;
    }
}

EMSCRIPTEN_KEEPALIVE
int main()
{
    std::cout << "Welcome to my world!" << std::endl;

    return 0;
}