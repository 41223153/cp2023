#include <gd.h>
#include <stdio.h>
#include <math.h>

int main() {
    gdImagePtr im;
    FILE *output;
    int white, red, blue;

    im = gdImageCreateTrueColor(600, 400);
    white = gdImageColorAllocate(im, 255, 255, 255);

    // 將紅色和藍色顏色值對調
    red = gdImageColorAllocate(im, 225, 0, 0);
    blue = gdImageColorAllocate(im, 0, 0, 225);

    // 填充白色背景
    gdImageFilledRectangle(im, 0, 0, 599, 399, white);

    // 在中間添加紅藍各一半的圓，將紅色移到上方，藍色移到下方
    int centerX = 300;
    int centerY = 200;
    int radius = 200;

    gdImageFilledArc(im, centerX, centerY, radius, radius, 0, 180, blue, gdPie);
    gdImageFilledArc(im, centerX, centerY - 1, radius, radius, 180, 360, red, gdPie);

    // 在中間添加向右偏移49的直徑為100的藍色圓
    int blueCircleRadius = 50; // 半徑為50
    int offsetX = 49;
    gdImageFilledEllipse(im, centerX + offsetX, centerY, blueCircleRadius * 2, blueCircleRadius * 2, blue);

    // 在中間添加向左偏移50的直徑為100的紅色圓
    int redCircleRadius = 50; // 半徑為50
    gdImageFilledEllipse(im, centerX - 49, centerY, redCircleRadius * 2, redCircleRadius * 2, red);

    // 將中間的圖形順時針旋轉104度
    double angle = 104.0;
    gdImagePtr rotated_im = gdImageCreateTrueColor(600, 400);
    gdImageFilledRectangle(rotated_im, 0, 0, 599, 399, white);
    gdImageCopyRotated(rotated_im, im, 300, 200, 0, 0, 600, 400, (int)(angle * 10));

    // 其他繪製操作...

    output = fopen("korea_flag.png", "wb");
    gdImagePng(rotated_im, output);
    fclose(output);

    gdImageDestroy(im);
    gdImageDestroy(rotated_im);

    return 0;
}