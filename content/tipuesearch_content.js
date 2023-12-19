var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件 // https://blog.csdn.net/weixin_38468077/article/details/101069365 // http://www.gnuplot.info/demo/ // https://github.com/sysprog21/rv32emu // https://github.com/sysprog21/semu  // https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 // https://cs61c.org/fa23/ // https://greenteapress.com/wp/think-python-2e/ // https://github.com/ecalvadi/c99-examples // https://github.com/gouravthakur39/beginners-C-program-examples // https://github.com/ergenekonyigit/Numerical-Analysis-Examples // https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf // https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf // https://jsommers.github.io/cbook/cbook.pdf // https://jsommers.github.io/cbook/index.html // http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf // http://cslibrary.stanford.edu/101/EssentialC.pdf // https://publications.gbdirect.co.uk/c_book/ // https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf // ***** execute on replit  // cd downloads // cc gnuplot_ex1.c -o gnuplot_ex1 // ./gnuplot_ex1 #include <stdio.h> \n // 主函式 int main() {  // Start a Gnuplot process using popen  FILE *gnuplotPipe = popen("gnuplot -persistent", "w");  if (!gnuplotPipe) {  fprintf(stderr, "Failed to start Gnuplot.\\n");  return 1;  } \n // Use Gnuplot plotting commands, specify font and output as PNG  fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");  fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");  fprintf(gnuplotPipe, "plot sin(x)");  // Close popen  pclose(gnuplotPipe); \n return 0; } \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '//https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621 // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library // https://www.rapidtables.com/web/color/RGB_Color.html // 幾何形狀著色與繪圖練習 // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖 #include <stdio.h> #include <gd.h> #include <math.h> \n void draw_roc_flag(gdImagePtr img); void draw_white_sun(gdImagePtr img, int x, int y, int size, int color); \n int main() {  // width 3: height 2  int width = 1200;  // 國旗長寬比為 3:2  int height = (int)(width*2.0 / 3.0); \n gdImagePtr img = gdImageCreateTrueColor(width, height);  gdImageAlphaBlending(img, 0); \n draw_roc_flag(img); \n FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");  if (outputFile == NULL) {  fprintf(stderr, "Error opening the output file.\\n");  return 1;  }  gdImagePngEx(img, outputFile, 9);  fclose(outputFile);  gdImageDestroy(img);  return 0; } \n void draw_roc_flag(gdImagePtr img) {  int width = gdImageSX(img);  int height = gdImageSY(img);  int red, white, blue;  // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處  int center_x = (int)(width/4);  int center_y = (int)(height/4);  // gdImageFilledEllipse 需以長寬方向的 diameter 作圖  // 由於中央白日圓形的半徑為青天寬度的 1/8  // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8  // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8  int sun_radius = (int)(width/8);  // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑  int white_circle_dia = sun_radius;  // 中央藍色圓形半徑為中央白日的 1又 2/15  int blue_circle_dia = white_circle_dia + white_circle_dia*2/15;  // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值  red = gdImageColorAllocate(img, 255, 0, 0); // 紅色  white = gdImageColorAllocate(img, 255, 255, 255); // 白色  blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色  // 根據畫布大小塗上紅色長方形區域  gdImageFilledRectangle(img, 0, 0, width, height, red);  // 青天面積為整面國旗的 1/4, 也是採用長方形塗色  gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);  // 先設法以填色畫出六個白色堆疊菱形  draw_white_sun(img, center_x, center_y, sun_radius, white);  // 利用一個藍色大圓與白色小圓畫出藍色環狀  gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);  gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white); \n } \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {  // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位  // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度  float deg = M_PI/180;  // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度  // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小  float sr = sun_radius/tan(75*deg);  int ax, ay, bx, by, dx, dy, ex, ey;  gdPoint points[4];  /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確  ax = center_x;  ay = center_y - sun_radius;  bx = center_x - sun_radius*tan(15*deg);  by = center_y;  ex = center_x;  ey = center_y + sun_radius;  dx = center_x + sun_radius*tan(15*deg);  dy = center_y;  // AB  gdImageLine(img, ax, ay, bx, by, color);  // BE  gdImageLine(img, bx, by, ex, ey, color);  // ED  gdImageLine(img, ex, ey, dx, dy, color);  // DA  gdImageLine(img, dx, dy, ax, ay, color);  */  ax = center_x;  ay = center_y - sun_radius;  bx = center_x - sun_radius*tan(15*deg);  by = center_y;  ex = center_x;  ey = center_y + sun_radius;  dx = center_x + sun_radius*tan(15*deg);  dy = center_y;  // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域  for (int i=1;i<=6;i++){  // A  points[0].x = ax+sun_radius*sin(30*deg*i);  points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);  // B  points[1].x = bx+sr-sr*cos(30*deg*i);  points[1].y = by-sr*sin(30*deg*i);  // E  points[2].x = ex-sun_radius*sin(30*deg*i);  points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));  // D  points[3].x = dx-(sr-sr*cos(30*deg*i));  points[3].y = dy+sr*sin(30*deg*i);  // 對菱形區域範圍塗色  gdImageFilledPolygon(img, points, 4, color);  // 在菱形區域外圍畫線, 明確界定菱形範圍  gdImagePolygon(img, points, 4, color);  } }', 'tags': '', 'url': 'w6.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};