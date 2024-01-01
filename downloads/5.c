#include <stdio.h> 

// 宣告兩個整數變數 width 和 height 來分別儲存矩形的寬和高。
int width;          
int height;         

// 宣告兩個整數變數 area 和 perimeter 用來儲存計算後的矩形面積和周長。
int area;           
int perimeter;      

int main() {
   // 將 height 賦值為 7
   // 將 width 賦值為 5
  height = 7;
  width = 5;

    // 使用矩形周長的公式：2 * (height + width)。然後使用 printf 函式印出矩形的周長到終端上。
    perimeter = 2*(height + width);
  printf("Perimeter of the rectangle = %d inches\n", perimeter);

    // 計算並儲存了矩形的面積，使用矩形面積的公式：height * width。
    // 然後使用 printf 函式印出矩形的面積到終端上。
  area = height * width;
  printf("Area of the rectangle = %d square inches\n", area);

    return(0);
}