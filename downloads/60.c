#include <stdio.h>
int main() {
    // 這裡使用 enum 關鍵字定義了一個新的資料類型 week
    // 在 C 語言的列舉中，每個名稱會被賦予數字值從0開始，
    enum week {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

    // 使用 printf 函式印出了 week 列舉型別中各個常數的值。
    // 每個列舉常數名稱都被轉換為其對應的整數值，並使用 %d 占位符進行輸出。
    printf("Sun = %d", Sun);
    printf("\nMon = %d", Mon);
    printf("\nTue = %d", Tue);
    printf("\nWed = %d", Wed);
    printf("\nThu = %d", Thu);
    printf("\nFri = %d", Fri);
    printf("\nSat = %d", Sat);

    return 0;
}