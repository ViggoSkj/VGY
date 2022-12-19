<?php
include("../../mail.php");
function generateMailHTML($amne, $viktighetsGrad, $laxa) {
    return <<< EOD
        <table style="
    background-color: rgb(216, 216, 216);
    color: rgb(13, 13, 14);
    padding: 1em;
    font-family: sans-serif;
    width: 400px;
    ">
    <tr style="background-color: rgb(196, 196, 196); text-align: center;">
        <td colspan="2" style="padding: 1em;"><h3 style="margin:0;">Läxa</h3></td>
    </tr>
    <tr style="background-color: rgb(196, 196, 196);">
        <td style="padding: 1em;"><h4 style="margin:0;">Ämne:</h4></td>
        <td style="padding: 1em;">$amne</td>
    </tr>
    <tr style="background-color: rgb(196, 196, 196);">
        <td style="padding: 1em;"><h4 style="margin:0;">Viktighets grad:</h4></td>
        <td style="padding: 1em;">$viktighetsGrad</td>
    </tr>
    <tr>
        <td colspan="2">
            <table style="
            ">
                <tr><dt style="background-color: rgb(196, 196, 196); padding: 0.5em;"><h4 style="margin:0;">Läxa:</h4></dt></tr>
                <tr><dt style="background-color: rgb(196, 196, 196); padding: 1em;">$laxa</dt></tr>
            </table>
        </td>
    </tr>

    EOD;
}
?>

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

                    $html =  generateMailHTML($amne, $viktighet, $laxa);
                    sendEmail("viggosg@varmdogymnasium.se", "labb.vgy form", $html)
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