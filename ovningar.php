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
                        "Ovning 0" => "ovning0",
                        "Ovning 1" => "ovning1",
                        "Ovning 2" => "ovning2",
                        "Ovning 3" => "ovning3",
                        "Ovning 4" => "ovning4",
                        "Ovning 6" => "ovning6",
                        "Ovning 7" => "ovning7",
                        "Ovning 8" => "ovning8",
                        "Ovning 9" => "ovning9",
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