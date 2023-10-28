<?php 
    include "begin.php";
    include "include/contentloading.inc.php";
    include "products.php";
?>

<!DOCTYPE html>
<html lang="sv">
    <head>
        <?php include "head.php" ?>
        <title>Document</title>
    </head>
    <body>
        <div class="layout">
            <?php include "navbar.php";?>
            <main>
                <div class="products">
                    <?php foreach ($products as $p) { ?>
                        <div class="product">
                            <a href="product.php?id=<?php echo $p["id"]?>"><img src="public/media/<?php echo $p["img"]?>" alt="<?php echo $p["name"]?>"></a>
                            <p><?php echo $p["name"]." ".$p["price"]." sek"?></p>
                            <a class="button" href="product.php?id=<?php echo $p["id"]?>">Buy</a>
                        </div>
                    <?php } ?>
                </div>
            </main>
            <?php include "footer.php";?>
        </div>
    </body>
</html>