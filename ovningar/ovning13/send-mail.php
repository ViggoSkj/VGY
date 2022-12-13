

<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php if (isset($_POST["submit"])) { ?>
                <?php $submit = $_POST["submit"]; ?>
                <?php if ($submit == "laxa") {
                    if(isset($_POST["amne"]) && isset($_POST["viktighet"]) && isset($_POST["laxa"]))
                    
                    $amne = $_POST["amne"];
                    $viktighet = $_POST["viktighet"];
                    $laxa = $_POST["laxa"];
                ?>
                    <h1>Läxa</h1>
                    <h3>Ämne</h3>
                    <p><?php echo $amne?></p>
                    <h3>Viktighets grad:</h3>
                    <p><?php echo $viktighet?></p>
                    <h3>Läxa</h3>
                    <p><?php echo $laxa?></p>

                <?php } ?>




            <?php } ?>
            
    </body>
</html>