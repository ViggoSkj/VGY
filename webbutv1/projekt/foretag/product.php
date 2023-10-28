<?php 
    include "begin.php";
    include "include/contentloading.inc.php";
    include "products.php";

    $product;
    foreach ($products as $p) {
        if ($p["id"] == $_GET["id"]) {
            $product = $p;
        }
    }
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
                <div class="product-page">
                    <img src="public/media/<?php echo $product["img"]?>" width=200 alt="<?php echo $product["name"]?>">
                    <h2 class="text-center"><?php echo $product["name"]." ".$product["price"]." sek"?></h2>
                    <button class="button" data-productId=<?php echo $product["id"]?> id="addToCart">Legg till i kundvagnen</button>
                    <div class="container">
                        <?php echo $product["desc"];?>
                    </div>
                </div>
            </main>
            <?php include "footer.php";?>
            <script src="public/js/product.js"></script>
        </div>
    </body>
</html>