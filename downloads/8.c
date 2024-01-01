#include <stdio.h>

int main()
{
    int days, years, weeks;

    days = 1329; // 將days設為1329

    // 將總天數除以 365，得到年份。
    years = days/365; 
    // 用取餘數運算符 % 獲得總天數除以 365 的餘數，然後除以 7 得到周數。
    weeks = (days % 365)/7; 
    // 使用已經計算出來的年份和周數，將總天數中對應的年份天數和周數天數相減，獲得剩餘的天數。
    days = days - ((years*365) + (weeks*7)); 
  

    // 分別印出計算出來的年份、周數和剩餘的天數。
    printf("Years: %d\n", years);
    printf("Weeks: %d\n", weeks);
    printf("Days: %d \n", days);

    return 0;
}