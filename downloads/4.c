#include <stdio.h>

int main() 
{
    // 宣告並初始化了三個字符變數 char1、char2、char3。
    // 分別賦值為 'X'、'M'、'L'，它們分別代表英文字母 X、M 和 L。
    char char1 = 'X';
    char char2 = 'M';
    char char3 = 'L';

    // 格式化字串中包含了兩組 %c，每組 %c 用來表示一個字符。
    // 會先印出 char1、char2、char3 這三個字符。
    // 接著印出 char3、char2、char1 這三個字符。
    // 這樣做的結果就是在同一行中先印出 X, M, L，然後接著印出 L, M, X。
    
    printf("The reverse of %c%c%c is %c%c%c\n",
        char1, char2, char3,
        char3, char2, char1);

    return(0);
}