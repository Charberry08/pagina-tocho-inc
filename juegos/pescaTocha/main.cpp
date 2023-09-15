#include <iostream>
#include <cstdlib>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int main()
{
    srand(time(0));
    std::cout << "Man, I love Stacks" << std::endl;

    return 0;
}