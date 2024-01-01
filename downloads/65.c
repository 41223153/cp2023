#include <stdio.h>
int main() {
    
    // i 用於迴圈中的遞增值。
    // j 用於內部迴圈中的遞增值。
    // flag 用於標記是否為質數。
    // ip 用於計算印出的質數數量。
    int i, j, flag, ip = 0;

    // 找出並印出1到199之間的所有質數。
    printf("The prime numbers between 1 and 199 are:\n");

    // 用於從2到198查找質數。
    for (i = 2; i < 199; i++) {
        flag = 1;

        // 檢查 i 是否能被 1 及其自身以外的任何數字整除
        for (j = 2; j <= i / 2 && flag == 1; j++) {
            if (i % j == 0) {
                flag = 0;
            }
        }

        // 如果 i 是質數，則列印它
        if (flag == 1) {
            printf("%5d ", i);
            ip++;

            // 如果 ip 是10的倍數，則印出一個換行符號。
            if (ip % 10 == 0) {
                printf("\n");
            }
        }
    }

    printf("\n");

    return 0;
}
