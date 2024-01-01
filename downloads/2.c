#include <stdio.h>

int main(int argc, char** argv) {
    // Check for C standard version
    #if __STDC_VERSION__ >=  201710L
        printf("We are using C18!\n");
    #elif __STDC_VERSION__ >= 201112L
        printf("We are using C11!\n");
    #elif __STDC_VERSION__ >= 199901L
        printf("We are using C99!\n");
    #else
        printf("We are using C89/C90!\n");
    #endif
  //這段程式碼是用來檢查所使用的C語言標準版本。__STDC_VERSION__ 是一個預定義的（macro），代表了目前編譯器所支援的C語言標準版本。程式會依照目前使用的標準版本來印出相應的訊息。例如，如果編譯器支援的標準版本為 C18，則會印出 "We are using C18!"，以此類推。

    // Indicate successful execution
    return 0;
}