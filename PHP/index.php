<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP-Buổi-1</title>
</head>
<body>
    <?php 
        // 1. Cú pháp in ra màn hình
        echo "Hello, World!! <br>"; 

        echo "PHP <br>";
         
        // 2. Biến : $ + tên biến = giá trị của biến

        $ten = "Nguyen Hoang";
        $tuoi = 20;

        echo $ten."<br>";
        

        echo "Xin chào " . $ten. " " .$tuoi." tuổi !!" ."<br>" ;

        // 3. Hằng : define ("tên hằng","giá trị")
        define ("soPi","3,14");
        echo soPi."<br>";

        // 4. Phân biệt "" và ''

        echo "$ten"."<br>"; // 
        echo '$ten'."<br>"; // đối tượng trong dấu '' được coi là 1 chuỗi

        // 5. Xử lý chuỗi
            #5.1 Kiểm tra độ dài chuỗi
            echo strlen($ten)."<br>";
            #5.2 Đếm số từ
            echo str_word_count($ten) . "<br>";
            #5.3 Tìm kiếm ký tự trong chuỗi
            echo strpos($ten,"a") ."<br>";
            #5.4 Thay thế kí tự trong chuỗi
            echo str_replace("Nguyen", "Le", $ten)."<br>";

        // 6. Toán tử
        $a = 10;
        $b = 20;
        // 6.1. +, -, *, /, %
            echo $a+$b."<br>";
        // 7. if-else
            $tong=$a+$b;
            if($tong==15){
                echo "tổng là ".$tong." bằng 15";
            }
            elseif($tong>15){
                echo "tổng là ".$tong." lớn hơn 15";
            }
            else{
                echo "tổng là ".$tong." nhỏ hơn 15"."<br>";
            }
        // 8. switch-case
            $color ="red";
            switch($color){
                case "red";
                    echo "is red"."<br>";
                    break;
                case "blue";
                    echo "is blue";
                    break;
                default:
                    echo "no color";
                    break;
            }
        // 9. For
            for($i=0; $i<10; $i++){
                echo $i ."<br>";
            }
    ?>
</body>
</html> 