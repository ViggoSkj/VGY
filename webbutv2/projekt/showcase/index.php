<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../style.css">
    <title>Document</title>
</head>

<body>
    <?php include("../../commandLine.php"); ?>

    <div id="wheel">
        <a href="../../commandLine.js">Command line code</a>
        <img src="../../images/moon.png" alt="earth" width="25" height="25">
        <a href="../sortingFunction/sortingEnglish.js">Weird sorting function</a>
        <img src="../../images/earth.png" alt="earth" width="50" height="50">
        <a href="../matrixDisplay/index.html">Matrix renderer</a>
        <img src="../../images/satelite.png" alt="earth" width="50">
    </div>

    <script src="../../commandLine.js"></script>
    <script src="../../util/wheel.js"></script>
    <script>
        Wheel("wheel", 200, 300, 300)
    </script>
</body>

</html>