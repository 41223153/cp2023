#include <stdio.h>

int main() {
   // radius 是整數型別，用來儲存圓的半徑
   int radius;      
   // area 和 perimeter 是浮點數型別，用來儲存計算後的圓的面積和周長。
   float area, perimeter;    
   // 將半徑 radius 的值設置為 6。
   radius = 6;     

   // 計算並儲存了圓的周長，使用圓周長的公式：2 * π * radius
   // π 大約等於 3.14
   // 使用 printf 函式印出圓的周長到終端上。
   perimeter = 2 * 3.14 * radius;
   printf("Perimeter of the Circle = %f inches\n", perimeter);

   // 使用圓面積的公式：π * radius * radius。
   // 同樣地使用了3.14作為圓周率的近似值。
   area = 3.14 * radius * radius;
   printf("Area of the Circle = %f square inches\n", area);

   return(0);
}