var tipuesearch = {"pages": [{'title': 'About', 'text': '41223153龔威仁 \n Github倉儲: https://github.com/41223153/cp2023 \xa0 \n 分組: \n \xa0 \xa0 \xa0 \xa0倉儲: https://github.com/41023101/cp2023_ag1 \xa0 \n \xa0 \xa0 \xa0 \xa0網站: https://41023101.github.io/cp2023_ag1/content/index.html \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': '網站維護', 'text': '', 'tags': '', 'url': '網站維護.html'}, {'title': '近端維護', 'text': '', 'tags': '', 'url': '近端維護.html'}, {'title': 'replit維護', 'text': '1. 點擊上方Run啟動編輯網頁 \n 2. 點擊New teb將編輯網頁獨立出來 \n \n \n 3. 在Password輸入密碼後點擊login登入(密碼預設admin) \n \n \n \n 網頁功能: \n \xa0 \xa0 \xa0SMap: 網站所有頁面 \n \xa0 \xa0 \xa0EditA: 使用時機為(1)解決多人共用網站時的衝突, 或(2)刪除特定頁面 \n \xa0 \xa0 \xa0Edit: 先選頁面, 再選 Edit 然後才能進入編輯模式 \n \xa0 \xa0 \xa0Config: 編輯網站標題, 若要編輯 site title, 必須更改 init.py 中的 site_title 字串內容 \n \xa0 \xa0 \xa0Search: 頁面資料 html 原始碼內容搜尋 \n \xa0 \xa0 \xa0IUpload: 影像檔案上傳, 資料會放入 images 目錄中 \n \xa0 \xa0 \xa0IList: 列出存在 images 目錄下的影像檔案 \n \xa0 \xa0 \xa0FUpload: 一般檔案上傳功能, 資料會放入 downloads 目錄中 \n \xa0 \xa0 \xa0FList: 列出位於 downloads 目錄下的檔案 \n \xa0 \xa0 \xa0Logout: 登出 \n \xa0 \xa0 \xa0Convert: 將 config/content.htm 經過分頁程式處理後, 轉為 content 目錄下的超文件 \n 4. 編輯完內容後點擊下方save儲存，在點擊右上方 Convert將先前編輯內容轉為靜態 \n \n \n \n \n 5. 到 replit 在Git頁面中，於紅框中輸入此次維護網頁的事項。 \n 6. 點擊 \xa0 Stage and commit all changes \xa0  儲存這個commit。 \n \n \n \n 7. 完成後會跳出 \xa0 Push 1 commit\xa0 ，點擊後程式會Push先前儲存的commit。 \n \n \n \n 8. 回到GitHub倉儲確認下圖中的紅框是否出現綠勾，綠勾表示成功改版網站。 \n \xa0 \xa0 \xa0 :改版正在執行中 \n \xa0 \xa0 \xa0 :改版失敗 \n \xa0 \xa0 \xa0 :改版成功 \n \n 重複以上8個步驟邊能輕鬆的更新改版網站。 \n \n \n \n \n \n \n', 'tags': '', 'url': 'replit維護.html'}, {'title': '課程作業', 'text': '', 'tags': '', 'url': '課程作業.html'}, {'title': 'w1~w4', 'text': '', 'tags': '', 'url': 'w1~w4.html'}, {'title': 'GitHub倉儲', 'text': '', 'tags': '', 'url': 'GitHub倉儲.html'}, {'title': 'Replit', 'text': '', 'tags': '', 'url': 'Replit.html'}, {'title': 'w5', 'text': '執行步驟: \n \xa0 \xa01 cd downloads \n \xa0 \xa02 cc gnuplot_ex1.c -lgd -lm \n \xa0 \xa03 ./a.out \n \xa0 \xa0執行結果圖片位於images \n \xa0 在replit執行程式繪圖前，須於replit.nix中加入下列gd繪圖程式庫 \n { pkgs }: {\n    deps = [\n      pkgs.gnuplot\n      pkgs.ncurses.dev\n      pkgs.gd\n    ];\n} \n \n \n gnuplot_ex1.c原始碼如下: \n // 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n  \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n  \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n  \n    return 0;\n} \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'roc', 'text': '以下為各國國旗，程式繪圖練習，建立在先前已經傭有gd程式庫的Replit環境下 \n //https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n// width 3: height 2\nint width = 1200;\n// 國旗長寬比為 3:2\nint height = (int)(width*2.0 / 3.0);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_roc_flag(img);\n\nFILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\n// gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n// 由於中央白日圓形的半徑為青天寬度的 1/8\n// 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n// 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\nint sun_radius = (int)(width/8);\n// 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\nint white_circle_dia = sun_radius;\n// 中央藍色圓形半徑為中央白日的 1又 2/15\nint blue_circle_dia = white_circle_dia + white_circle_dia*2/15;\n// 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n// 根據畫布大小塗上紅色長方形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n// 青天面積為整面國旗的 1/4, 也是採用長方形塗色\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n// 先設法以填色畫出六個白色堆疊菱形\ndraw_white_sun(img, center_x, center_y, sun_radius, white);\n// 利用一個藍色大圓與白色小圓畫出藍色環狀\ngdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\ngdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n// M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n// 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\nfloat deg = M_PI/180;\n// 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n// 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\nfloat sr = sun_radius/tan(75*deg);\nint ax, ay, bx, by, dx, dy, ex, ey;\ngdPoint points[4];\n/* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// AB\ngdImageLine(img, ax, ay, bx, by, color);\n// BE\ngdImageLine(img, bx, by, ex, ey, color);\n// ED\ngdImageLine(img, ex, ey, dx, dy, color);\n// DA\ngdImageLine(img, dx, dy, ax, ay, color);\n*/\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\nfor (int i=1;i<=6;i++){\n// A\npoints[0].x = ax+sun_radius*sin(30*deg*i);\npoints[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n// B\npoints[1].x = bx+sr-sr*cos(30*deg*i);\npoints[1].y = by-sr*sin(30*deg*i);\n// E\npoints[2].x = ex-sun_radius*sin(30*deg*i);\npoints[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n// D\npoints[3].x = dx-(sr-sr*cos(30*deg*i));\npoints[3].y = dy+sr*sin(30*deg*i);\n// 對菱形區域範圍塗色\ngdImageFilledPolygon(img, points, 4, color);\n// 在菱形區域外圍畫線, 明確界定菱形範圍\ngdImagePolygon(img, points, 4, color);\n}\n} \n \n \n', 'tags': '', 'url': 'roc.html'}, {'title': 'usa', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n', 'tags': '', 'url': 'usa.html'}, {'title': 'proc', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\nint width = 300; // 國旗寬度\nint height = 200; // 國旗高度\n\ngdImagePtr im = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(im, 0);\n\ndraw_chinese_flag(im);\n\nFILE *outputFile = fopen("./../images/proc_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打開輸出文件時出錯。\\n");\nreturn 1;\n}\n\ngdImagePngEx(im, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(im);\n\nreturn 0;\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\ngdPoint points[10];\n\ndouble outer_radius = size / 2;\ndouble inner_radius = size / 6;\ndouble angle = M_PI / 5.0;\n\nfor (int i = 0; i < 10; i++) {\ndouble radius = (i % 2 == 0) ? outer_radius : inner_radius;\ndouble theta = rotation_angle + i * angle;\npoints[i].x = x + radius * cos(theta);\npoints[i].y = y + radius * sin(theta);\n}\n\ngdImageFilledPolygon(img, points, 10, color);\n}\n\nvoid draw_chinese_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, yellow;\n\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\nyellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n\nint star_size = (int)(0.28 * height);\nint star_x = (int)(0.165 * width);\nint star_y = (int)(0.265 * height);\n\ndraw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\ndouble radius = 0.15 * height;\ndouble angle = 360 / 7 * M_PI / 179.0;\ndouble rotation = -M_PI / 7.5;\nint cx = (int)(0.32 * width);\nint cy = (int)(0.27 * height);\n\nfor (int i = -1; i < 3; i++) {\nint x = (int)(cx + radius * cos(i * angle + rotation));\nint y = (int)(cy + radius * sin(i * angle + rotation));\ndraw_star(img, x, y, 19, yellow, M_PI / 5.0);\n}\n} \n \n', 'tags': '', 'url': 'proc.html'}, {'title': 'uk', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\nint width = 1200;\nint height = width / 2;\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_uk_flag(img);\n\nFILE *outputFile = fopen("./../images/uk_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打開輸出文件時發生錯誤。\\n");\nreturn 1;\n}\n\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_uk_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\nint red, white, blue;\nred = gdImageColorAllocate(img, 204, 0, 0);\nwhite = gdImageColorAllocate(img, 255, 255, 255);\nblue = gdImageColorAllocate(img, 0, 0, 153);\n\ngdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n// 繪製斜線\n{\nint line_thickness = 100;\ngdImageSetThickness(img, line_thickness);\n\n// 繪製白色斜線\nint x1 = 0, y1 = 600, x2 = 1200, y2 = 0;\ngdImageLine(img, x1, y1, x2, y2, white);\n\nx1 = 0, y1 = 0, x2 = 1200, y2 = 600;\ngdImageLine(img, x1, y1, x2, y2, white);\n}\n\n// 繪製紅色斜線\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\n// 繪製紅色斜線\nint x1 = 566, y1 = 300, x2 = 1166, y2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 1233, y1 = 600, x2 = 633, y2 = 300;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 566, y1 = 300, x2 = -33, y2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 600, y1 = 316.5, x2 = 0, y2 = 616.5;\ngdImageLine(img, x1, y1, x2, y2, red);\n}\n\n// 繪製白色斜線\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\n// 繪製斜線\nint x1 = 0, y1 = 600, x2 = 1200, y2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 1200, y1 = 16.5, x2 = 600, y2 = 316.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n\nx1 = 0, y1 = 583.5, x2 = 600, y2 = 283.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n}\n\n// 繪製白色十字\nint cross_width = width / 32;\nint cross_arm_width = width / 32;\nint center_x = width / 2;\nint center_y = height / 2;\n\ngdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\ngdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n// 繪製紅色十字\ngdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\ngdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n', 'tags': '', 'url': 'uk.html'}, {'title': 'japan', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n \n', 'tags': '', 'url': 'japan.html'}, {'title': 'korea', 'text': '#include <gd.h>\n#include <stdio.h>\n#include <math.h>\n\nint main() {\n    gdImagePtr im;\n    FILE *output;\n    int white, red, blue;\n\n    im = gdImageCreateTrueColor(600, 400);\n    white = gdImageColorAllocate(im, 255, 255, 255);\n\n    // 將紅色和藍色顏色值對調\n    red = gdImageColorAllocate(im, 225, 0, 0);\n    blue = gdImageColorAllocate(im, 0, 0, 225);\n\n    // 填充白色背景\n    gdImageFilledRectangle(im, 0, 0, 599, 399, white);\n\n    // 在中間添加紅藍各一半的圓，將紅色移到上方，藍色移到下方\n    int centerX = 300;\n    int centerY = 200;\n    int radius = 200;\n\n    gdImageFilledArc(im, centerX, centerY, radius, radius, 0, 180, blue, gdPie);\n    gdImageFilledArc(im, centerX, centerY - 1, radius, radius, 180, 360, red, gdPie);\n\n    // 在中間添加向右偏移49的直徑為100的藍色圓\n    int blueCircleRadius = 50; // 半徑為50\n    int offsetX = 49;\n    gdImageFilledEllipse(im, centerX + offsetX, centerY, blueCircleRadius * 2, blueCircleRadius * 2, blue);\n\n    // 在中間添加向左偏移50的直徑為100的紅色圓\n    int redCircleRadius = 50; // 半徑為50\n    gdImageFilledEllipse(im, centerX - 49, centerY, redCircleRadius * 2, redCircleRadius * 2, red);\n\n    // 將中間的圖形順時針旋轉104度\n    double angle = 104.0;\n    gdImagePtr rotated_im = gdImageCreateTrueColor(600, 400);\n    gdImageFilledRectangle(rotated_im, 0, 0, 599, 399, white);\n    gdImageCopyRotated(rotated_im, im, 300, 200, 0, 0, 600, 400, (int)(angle * 10));\n\n    // 其他繪製操作...\n\n    output = fopen("korea_flag.png", "wb");\n    gdImagePng(rotated_im, output);\n    fclose(output);\n\n    gdImageDestroy(im);\n    gdImageDestroy(rotated_im);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'korea.html'}, {'title': 'w13', 'text': '課程心得: \n 截至目前，學習的課程，讓我開始對從未接觸過的C語言有些了概念，原來程式在生活中可以節省更多，不必要浪費的時間， C 語言是一種經典且強大的程式設計語言，它也被廣泛應用於系統軟體開發。目前學習到如何使用Replit維護網站，並在Github倉儲中，留下維護紀錄，或是使用近端的cmd進行維護。 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w15', 'text': '', 'tags': '', 'url': 'w15.html'}, {'title': 'MSD', 'text': 'Mass-Spring-Damper 是一個典型的物理模型, 由質量-彈簧-阻尼器等三個元件組成, 若將彈簧其拉力與變形量成正比, 若假設阻尼器的阻力大小則與其受力方向的速度成正比, 根據牛頓運動定律, 就可以從物理模型的自由體圖導入系統的運動方程式. 接下來就要利用計算機程式, 解此一系統的微分方程式. \n \n euler_gnuplot_msd_ex1.c 程式內容: \n // 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n}\n \n \n 在Shell頁面輸入: \n \xa0 \xa0 \xa0cd downloads \n \xa0 \xa0 \xa0cc\xa0 euler_gnuplot_msd_ex1.c \n \xa0 \xa0 \xa0./a.out \n 即可在images資料夾中找到下圖 \n \n', 'tags': '', 'url': 'MSD.html'}, {'title': 'ANSIC', 'text': '請從\xa0 https://www.w3resource.com/c-programming-exercises/ \xa0 網頁中自選 10 個練習範例, 分別在 Replit, Windows 與 Linux (or macOS) 中執行後, 取下執行畫面放入個人的 Github Pages 網頁 (即帳號.github.io 網站), 以 \xa0 ANSIC \xa0 作為頁面標題並詳細說明每一行的程式語法.', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1.', 'text': '\n 在「main()」函數內部，有三個printf語句。“printf()”函數用於將格式化文字列印到控制台。每個 printf 語句列印一行包含特定資訊的文字： \n \n printf("姓名XXX\\n"); \xa0 列印“XXX”，後面跟著換行符，將遊標移到下一行。 \n printf("出生日期：YYYY\xa0年 MM 月 DD 日\\n"); \xa0 印出“DOB :\xa0MM\xa0DD, YYYY”，後面跟著換行符。 \n printf("手機: 09-xxxxxxxx\\n"); \xa0 列印“Mobile : 09-xxxxxxxx”，後面跟著換行符。 \n \n \n \n #include <stdio.h>\n\nint main()  \n{\n    //使用 printf 函式來印出姓名 "龔威仁\n    printf("Name   : 龔威仁\\n"); \n\n    //使用 printf 函式印出了出生日期 "Feb 11, 2005"\n    printf("DOB    : Feb 11, 2005\\n"); \n\n    //使用 printf 函式印出了手機號碼 "0908-780211"\n    printf("Mobile : 0908-780211\\n"); \n\n    return(0); \n} \n \n', 'tags': '', 'url': '1..html'}, {'title': '2.', 'text': '\n 程式碼使用預處理器指令（#if、#elif、#else 和 #endif）根據編譯器偵測到的 C 標準版本有條件地編譯不同的列印語句： \n \n #if __STDC_VERSION__ >= 201710L 檢查 C 標準版本是否大於或等於 C18 (2017)。如果為真，則會列印「我們正在使用 C18！」。 \n #elif __STDC_VERSION__ >= 201112L 檢查 C 標準版本是否大於或等於 C11 (2011)。如果為 true，則會列印「We are using C11!」。 \n #elif __STDC_VERSION__ >= 199901L 檢查 C 標準版本是否大於或等於 C99 (1999)。如果為 true，則會列印「We are using C99!」。 \n #else 是一個後備條件，如果上述條件均不滿足，則觸發該條件。它列印“我們正在使用 C89/C90！”。 \n \n \n \n #include <stdio.h>\n\nint main(int argc, char** argv) {\n    // 檢查 C 標準版本\n    #if __STDC_VERSION__ >=  201710L\n        printf("We are using C18!\\n");\n    #elif __STDC_VERSION__ >= 201112L\n        printf("We are using C11!\\n");\n    #elif __STDC_VERSION__ >= 199901L\n        printf("We are using C99!\\n");\n    #else\n        printf("We are using C89/C90!\\n");\n    #endif\n   //這段程式碼是用來檢查所使用的C語言標準版本。\n   //__STDC_VERSION__ 是一個預定義的（macro），代表了目前編譯器所支援的C語言標準版本。\n   //程式會依照目前使用的標準版本來印出相應的訊息。\n   //例如，如果編譯器支援的標準版本為 C18，則會印出 "We are using C18!"，以此類推。\n\n    return 0;\n} \n', 'tags': '', 'url': '2..html'}, {'title': '3.', 'text': '寫一個 C 程序，使用雜湊值 (#) 列印一個區塊 E，其中 E 的高度為 6 個字符，寬度為 5 個和 4 個字符。 \n \n #include <stdio.h>\n\nint main() \n{\n    // 宣告並初始化了三個字符變數 char1、char2、char3。\n    // 分別賦值為 \'X\'、\'M\'、\'L\'，它們分別代表英文字母 X、M 和 L。\n    char char1 = \'X\';\n    char char2 = \'M\';\n    char char3 = \'L\';\n\n    // 格式化字串中包含了兩組 %c，每組 %c 用來表示一個字符。\n    // 會先印出 char1、char2、char3 這三個字符。\n    // 接著印出 char3、char2、char1 這三個字符。\n    // 這樣做的結果就是在同一行中先印出 X, M, L，然後接著印出 L, M, X。\n    \n    printf("The reverse of %c%c%c is %c%c%c\\n",\n        char1, char2, char3,\n        char3, char2, char1);\n\n    return(0);\n} \n', 'tags': '', 'url': '3..html'}, {'title': '4.', 'text': '#include <stdio.h> - 此程式碼包含標準輸入/輸出庫 <stdio.h>。 \n \n 在“main()”函數中，它聲明了三個字元變數：“char1”、“char2”和“char3”，並分別為它們賦值“X”、“M”和“L”。 \n 它使用“printf()”函數來顯示格式化訊息。 該訊息包含由 %c 指定的佔位符，它們代表字元。 \n 在「printf()」函數內部，它提供了替代佔位符的值。 在本例中，它提供了“char1”、“char2”和“char3”，後面跟著它們的相反順序：“char3”、“char2”和“char1”。 \n 程式將會列印：“XML 的反向是 LMX”，因為它以相反的順序交換字元。 \n 最後main函數傳回0表示程式執行成功。 \n \n \n #include <stdio.h>\n\nint main() \n{\n    // 宣告並初始化了三個字符變數 char1、char2、char3，分別賦值為 \'X\'、\'M\'、\'L\'，它們分別代表英文字母 X、M     和 L。\n    char char1 = \'X\';\n    char char2 = \'M\';\n    char char3 = \'L\';\n\n    // 格式化字串中包含了兩組 %c，每組 %c 用來表示一個字符。\n    // 會先印出 char1、char2、char3 這三個字符，接著印出 char3、char2、char1 這三個字符。這樣做的結果就是     在同一行中先印出 X, M, L，然後接著印出 L, M, X。\n    printf("The reverse of %c%c%c is %c%c%c\\n",\n        char1, char2, char3,\n        char3, char2, char1);\n\n    return(0);\n} \n', 'tags': '', 'url': '4..html'}, {'title': '5.', 'text': '在下面的練習中 - \n \n 程式包括標準輸入/輸出庫<stdio.h>。 \n 它聲明了幾個整數變數： \n \n width：表示矩形寬度（以英吋為單位）。 \n height：表示矩形的高度（以英吋為單位）。 \n 面積：將儲存計算出的矩形面積。 \n 週長：將儲存計算出的矩形週長。 \n \n 在“main()”函數中： \n \n 它將值 7 分配給“height”變量，將值 5 分配給“width”變量，代表矩形的尺寸。 \n \n 然後程式計算矩形的周長和麵積： \n \n 週長：它使用公式 2 *（高度 + 寬度）來計算矩形的周長，並將結果儲存在「perimeter」變數中。 \n 面積：它使用公式“高度 * 寬度”計算面積，並將結果儲存在“area”變數中。 \n \n 最後，程式使用“printf()”函數顯示計算值： \n \n 它會列印計算出的周長並顯示一條訊息：“矩形的周長 = [週長] 英吋。” \n 它會列印計算出的面積並顯示一條訊息：“矩形面積 = [面積] 平方英吋。” \n \n \n \n #include <stdio.h> \n\n// 宣告兩個整數變數 width 和 height 來分別儲存矩形的寬和高。\nint width;          \nint height;         \n\n// 宣告兩個整數變數 area 和 perimeter 用來儲存計算後的矩形面積和周長。\nint area;           \nint perimeter;      \n\nint main() {\n   // 將 height 賦值為 7\n   // 將 width 賦值為 5\n  height = 7;\n  width = 5;\n\n    // 使用矩形周長的公式：2 * (height + width)。然後使用 printf 函式印出矩形的周長到終端上。\n    perimeter = 2*(height + width);\n  printf("Perimeter of the rectangle = %d inches\\n", perimeter);\n\n    // 計算並儲存了矩形的面積，使用矩形面積的公式：height * width。\n    // 然後使用 printf 函式印出矩形的面積到終端上。\n  area = height * width;\n  printf("Area of the rectangle = %d square inches\\n", area);\n\n    return(0);\n} \n', 'tags': '', 'url': '5..html'}, {'title': '6.', 'text': '在下面的練習中 - \n \n 程式包括標準輸入/輸出庫<stdio.h>。 \n 它聲明了幾個變數： \n \n int radius：表示圓半徑。 \n 浮動面積和浮動週長：將儲存計算出的圓的面積和周長。 \n \n 在“main()”函數中： \n \n 它將值 6 分配給“radius”變量，表示圓的半徑。 \n \n 然後程式計算圓的周長和麵積： \n \n 週長：它使用公式 2*3.14* 半徑來計算圓的周長，並將結果儲存在「週長」變數中。 這裡，3.14 是數學常數 π (pi) 的近似值。 \n 面積：使用公式 3.14*radius*radius (π * r^2) 計算面積，並將結果儲存於「area」變數中。 \n \n 最後，程式使用“printf()”函數顯示計算值： \n \n 它會列印計算出的周長並顯示一條訊息：「圓的周長 = [週長] 英吋」。 \n 它會列印計算出的面積並顯示一條訊息：圓的面積 = [面積] 平方英吋。 \n \n \n \n #include <stdio.h>\n\nint main() {\n   // radius 是整數型別，用來儲存圓的半徑\n   int radius;      \n   // area 和 perimeter 是浮點數型別，用來儲存計算後的圓的面積和周長。\n   float area, perimeter;    \n   // 將半徑 radius 的值設置為 6。\n   radius = 6;     \n\n   // 計算並儲存了圓的周長，使用圓周長的公式：2 * π * radius\n   // π 大約等於 3.14\n   // 使用 printf 函式印出圓的周長到終端上。\n   perimeter = 2 * 3.14 * radius;\n   printf("Perimeter of the Circle = %f inches\\n", perimeter);\n\n   // 使用圓面積的公式：π * radius * radius。\n   // 同樣地使用了3.14作為圓周率的近似值。\n   area = 3.14 * radius * radius;\n   printf("Area of the Circle = %f square inches\\n", area);\n\n   return(0);\n} \n', 'tags': '', 'url': '6..html'}, {'title': '7.', 'text': '寫一個 C 程式來顯示以下變數。 a+ c, x + c,dx + x, ((int) dx) + ax, a + x, s + b, ax + b, s + c, ax + c, ax + ux 變數宣告 ： int a = 125 ，b = 12345； 長斧=1234567890； 短 s = 4043； 浮動x = 2.13459； 雙 dx = 1.1415927； 字符c = \'W\'; 無符號長 ux = 2541567890； \n \n #include <stdio.h>\n\nint main()\n{\n    int a = 125, b = 12345;        // a 被賦值為 125。b 被賦值為 12345。\n    long ax = 1234567890;          // 將型別為 long ax 的變數，初始化為 1234567890。\n    short s = 4043;                // 將型別為 short s的變數，初始化為 4043。\n    float x = 2.13459;             // 將型別為 float x 的變數，初始化為 2.13459。\n    double dx = 1.1415927;         // 將型別為 doule dx 的變數，初始化為 1.1415927。\n    char c = \'W\';                  // 將型別為 char c 的變數，初始化為 W。\n    unsigned long ux = 2541567890; // 將型別為 unsigned long ux 的變數，初始化為 2541567890。\n\n    // 各種算術運算和類型轉換\n    printf("a + c =  %d\\n", a + c);\n    printf("x + c = %f\\n", x + c);\n    printf("dx + x = %f\\n", dx + x);\n    printf("((int) dx) + ax =  %ld\\n", ((int) dx) + ax);\n    printf("a + x = %f\\n", a + x);\n    printf("s + b =  %d\\n", s + b);\n    printf("ax + b = %ld\\n", ax + b);\n    printf("s + c =  %hd\\n", s + c);\n    printf("ax + c = %ld\\n", ax + c);\n    printf("ax + ux = %lu\\n", ax + ux);\n\n    return 0;\n} \n', 'tags': '', 'url': '7..html'}, {'title': '8.', 'text': '在下面的練習中 - \n \n 程式包括標準輸入/輸出庫<stdio.h>。 \n 它聲明了三個整數變數： \n \n int days：此變數儲存要轉換的總天數。 \n intyear：儲存計算出的年數。 \n int week：儲存計算出的周數。 \n \n 程式用 1329 初始化“days”變數。 \n 然後它會轉換： \n \n 年=天/365：此除法計算給定天數中的年數。 由於一年大約有 365 天，因此這種劃分給出了年數的估計。 \n 週 = (天 % 365) / 7：計算出年份後，程式使用模運算子 % 來找出無法用完整年份表示的剩餘天數。 然後將該餘數除以 7 來計算週數。 \n 最後，減去年和周所佔的天數即可得到剩餘的天數。 \n \n 程式使用 printf 語句來顯示計算值： \n \n 它會列印年數並顯示以下訊息：“年：[年]。” \n 它會列印週數並顯示以下訊息：“週：[週]。” \n 它會列印剩餘天數並顯示以下訊息：“天數：[天]。” \n \n 程式返回0表示執行成功。 \n \n \n #include <stdio.h>\n\nint main()\n{\n    int days, years, weeks;\n\n    days = 1329; // 將days設為1329\n\n    // 將總天數除以 365，得到年份。\n    years = days/365; \n    // 用取餘數運算符 % 獲得總天數除以 365 的餘數，然後除以 7 得到周數。\n    weeks = (days % 365)/7; \n    // 使用已經計算出來的年份和周數，將總天數中對應的年份天數和周數天數相減，獲得剩餘的天數。\n    days = days - ((years*365) + (weeks*7)); \n  \n\n    // 分別印出計算出來的年份、周數和剩餘的天數。\n    printf("Years: %d\\n", years);\n    printf("Weeks: %d\\n", weeks);\n    printf("Days: %d \\n", days);\n\n    return 0;\n} \n', 'tags': '', 'url': '8..html'}, {'title': '60.', 'text': '編寫一個 C 程式來建立 7 天的枚舉資料類型，並以整數常數顯示它們的值。 \n \n #include <stdio.h>\nint main() {\n    // 這裡使用 enum 關鍵字定義了一個新的資料類型 week\n    // 在 C 語言的列舉中，每個名稱會被賦予數字值從0開始，\n    enum week {Sun, Mon, Tue, Wed, Thu, Fri, Sat};\n\n    // 使用 printf 函式印出了 week 列舉型別中各個常數的值。\n    // 每個列舉常數名稱都被轉換為其對應的整數值，並使用 %d 占位符進行輸出。\n    printf("Sun = %d", Sun);\n    printf("\\nMon = %d", Mon);\n    printf("\\nTue = %d", Tue);\n    printf("\\nWed = %d", Wed);\n    printf("\\nThu = %d", Thu);\n    printf("\\nFri = %d", Fri);\n    printf("\\nSat = %d", Sat);\n\n    return 0;\n} \n', 'tags': '', 'url': '60..html'}, {'title': '10.', 'text': '', 'tags': '', 'url': '10..html'}, {'title': '課程資源', 'text': '\xa0 \xa0倉儲\xa0 github.com \n \xa0 \xa0維護網站\xa0 replit.com \xa0 \n \xa0 \xa0ChatGPT\xa0 chat.openai.com \n \xa0 \xa0CPNOTE\xa0 https://mde.tw/cpnote \n \n 教材: \n \xa0 \xa0 basic_portable_python.7z \n \xa0 \xa0 cadlab_network_setting.7z \n \xa0 \xa0 python3114_git_putty.7z \n \xa0 \xa0 tinyc.7z \n \xa0 \xa0 w11_1a.7z \n', 'tags': '', 'url': '課程資源.html'}, {'title': '課程評分', 'text': '課程評分: \n \xa0 \xa0 \xa0線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗: \n \xa0 \xa0 \xa0建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報: \n \xa0 \xa0 \xa0期中考前兩週開始進行. \n 期末網站評分與簡報: \n \xa0 \xa0 \xa0期末考前兩週開始進行. \n 期中成績計算: \n \xa0 \xa0 \xa0期中考與之前各週線上測驗成績平均 \n 學期成績計算: \n \xa0 \xa0 \xa0(期中成績與之後各週線上測驗成績平均)* 60% +(期中網站與簡報成績)* 20% +(期末網站與簡報成績)* 20% \n', 'tags': '', 'url': '課程評分.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};