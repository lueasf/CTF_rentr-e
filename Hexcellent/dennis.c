#include <stdio.h>
#include <string.h>
#include "noise.h"

char *reponse = "mot de passe :";
char *pass = "ritchie";

void lapluiecamouille(){
    printf("Q���42���53438���,e��E�é1���\n");
    float a = 0.0;
    float b = 0.03;
    float c = 0.05;
    for (int i = 0; i < 10; i++) {
        a = a + 0.0001;
        b = a + 0.0001;
        c = b + c + 0.0001;
    }
}

void someFunction() {
    printf("const char *noise = s_auxcompleted.6145dtor_idx.6147frame_dummyobject.6167__CTOR_END____FRAME_END____JCR_END____do_global_ctors_auxch2.ccheck_one_fdstatic_slotinfostatic_dtvstatic_maplock_L_lock_20_L_unlock_157__PRETTY_FUNCTION__.6146__CTOR_LIST__");
}

void jemappelledennis(char *input){
    if (strcmp(input, pass) == 0) {
        printf("tu as réussi\n");
    } else {
        printf("tu as raté\n");
    }
}

int main() {
    char input[256];
    printf("Quel_est_le_mdp ?\n");
    printf("indice : c'est le nom de quelqu'un qui commence par r\n");
    fgets(input, 256, stdin);
    input[strcspn(input, "\n")] = 0;
    jemappelledennis(input);
    return 0;
}

