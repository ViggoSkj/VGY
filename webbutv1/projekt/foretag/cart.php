<?php 
    include "begin.php";
    include "include/contentloading.inc.php";
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
                <div id="cart-item-container">
                    
                </div>

                <div id="payment-field">
                    <div class="input-group">
                        <label for="name">Namn</label>
                        <input type="text" id="name">
                    </div>
                    <div class="input-group">
                        <label for="lastname">Effternam</label>
                        <input type="text" id="lastname">
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email">
                    </div>

                    <div class="input-group">
                        <label for="address">Address</label>
                        <input type="text" id="address">
                    </div>
                    <div class="input-group">
                        <label for="postTown">Post ort</label>
                        <input type="text" id="postTown">
                    </div>
                    <div class="input-group">
                        <label for="postnumber">Postnumer</label>
                        <input type="text" id="postnumber">
                    </div>

                    <div class="card-info">
                        <div class="input-group card-number">
                            <label for="cardnumber">Kortnummber</label>
                            <input type="text" id="cardnumber">
                        </div>
                        <div class="input-group">
                            <label for="exp">utgångs datum</label>
                            <input type="text" id="exp">
                        </div>
                        <div class="input-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv">
                        </div>
                    </div>

                    <p id="payment-status"></p>
                    <button class="button button-border" id="pay-button">
                        Köp
                    </button>
                </div>
            </main>
            <?php include "footer.php" ?>
            <script src="public/js/cartPage.js"></script>
        </div>
    </body>
</html>