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
                <div id="homepage-display">
                    <img id="homepage-image" src="public/media/yarn.png" alt="logo of website">
                    <div class="content">
                        <h2>Mest populär:</h2>
                        <?php 
                            $p = $products[0]
                        ?>
                        <div class="product">
                            <a href="product.php?id=<?php echo $p["id"]?>"><img src="public/media/<?php echo $p["img"]?>" alt="<?php echo $p["name"]?>"></a>
                            <div>
                                <h3><?php echo $p["name"]." $".$p["price"]?></h3>
                            </div>
                            <a class="button" href="product.php?id=<?php echo $p["id"]?>">Buy</a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>Vilka vi är</h2>
                    <p>
                        Välkommen till vår e-butik som specialiserar sig på att sälja gammal elektronik! Vi är passionerade om att bevara och ge nytt liv åt äldre teknik som annars skulle ha hamnat i glömska eller slängts bort.
                    </p>
                    <br>
                    <p>
                        Vi erbjuder ett brett utbud av elektronikprodukter som sträcker sig från gamla datorer och TV-apparater till retro radios och kassettspelare. Vårt sortiment består av produkter från olika decennier och varumärken, vilket ger dig möjlighet att hitta den perfekta biten av teknisk nostalgi som passar just dig.
                    </p>
                </div>
            </main>
            <?php include "footer.php" ?>
        </div>
    </body>
</html>