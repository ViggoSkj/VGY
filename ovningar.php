<!DOCTYPE html>
<html lang="se">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./public/css/style.css">
        <title>Övningar</title>
    </head>
    <body>
        <div class="container">
            <p class="title">Övningar</p>

            <div class="ovning-selection">

                <?php
                    $ovningOptions = [
                        "Övning 0" => "ovning0",
                        "Övning 1" => "ovning1",
                        "Övning 2" => "ovning2",
                        "Övning 3" => "ovning3",
                        "Övning 4" => "ovning4",
                        "Övning 6" => "ovning6",
                        "Övning 7" => "ovning7",
                        "Övning 8" => "ovning8",
                        "Övning 9" => "ovning9",
                        "Övning Meny" => "ovningMeny",
                        "Övning 11" => "ovning11",
                        "Photoshop" => "photoshopovning",
                        "Övenings Prov E" => "ovningsprove",
                        "Övenings Prov C" => "ovningsprovc",
                        "Övenings Prov A" => "ovningsprova",
                    ]  
                ?>

                <?php foreach ($ovningOptions as $x => $v) {?>
                    <a class="button" href="ovningar/<?php echo $v?>"><?php echo $x?></a>
                <?php }?>

                <a class="button button-red" href="index.php">Back</a>
            </div>
        </div>
    </body>
</html>