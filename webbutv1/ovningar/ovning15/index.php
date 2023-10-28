<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Javascript</h1>
    <p id="lorem-js">Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    <button id="show-js">Show</button>
    <button id="hide-js">Hide</button>

    <br>
    <textarea name="dsadsad" id="copy-text" cols="30" rows="10"></textarea>
    <br>
    <button id="copy-button">copy</button>
    <br>
    <div id="copy-reciver"></div>

    <h1>JQuery</h1>
    <p id="lorem-jq">Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    <button id="show-jq">Show</button>
    <button id="hide-jq">Hide</button>

    <br>

    <h1 id="title">Webbutveckling är ibland knepigt men ibland kul!</h1>
    <button id="toggle-title">toggle</button>

    <p id="author">Viggo Skjönsberg</p>

    <div class="grid">
    <?php
        for($i = 0; $i < 50*50; $i++) {
            ?>
            <div class="r<?php echo $i%3;?>"></div>
            <?php
        }
        ?>
    </div>

    <button id="h0">hide</button>
    <button id="h1">hide</button>
    <button id="h2">hide</button>


    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <script src="public/js/js.js"></script>
    <script src="public/js/jquery.js"></script>
    <div id="myfooter">
                <a href="https://validator.w3.org/unicorn/check?ucn_uri=labb.vgy.se/~viggosg/ovningar/ovning15/&ucn_task=conformance">Unicorn</a>
            </div> 
</body>
</html>