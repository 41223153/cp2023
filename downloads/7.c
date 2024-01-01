#include <stdio.h>

int main()
{
    int a = 125, b = 12345;        // a 被賦值為 125。b 被賦值為 12345。
    long ax = 1234567890;          // 將型別為 long ax 的變數，初始化為 1234567890。
    short s = 4043;                // 將型別為 short s的變數，初始化為 4043。
    float x = 2.13459;             // 將型別為 float x 的變數，初始化為 2.13459。
    double dx = 1.1415927;         // 將型別為 doule dx 的變數，初始化為 1.1415927。
    char c = 'W';                  // 將型別為 char c 的變數，初始化為 W。
    unsigned long ux = 2541567890; // 將型別為 unsigned long ux 的變數，初始化為 2541567890。

    // 各種算術運算和類型轉換
    printf("a + c =  %d\n", a + c);
    printf("x + c = %f\n", x + c);
    printf("dx + x = %f\n", dx + x);
    printf("((int) dx) + ax =  %ld\n", ((int) dx) + ax);
    printf("a + x = %f\n", a + x);
    printf("s + b =  %d\n", s + b);
    printf("ax + b = %ld\n", ax + b);
    printf("s + c =  %hd\n", s + c);
    printf("ax + c = %ld\n", ax + c);
    printf("ax + ux = %lu\n", ax + ux);

    return 0;
}