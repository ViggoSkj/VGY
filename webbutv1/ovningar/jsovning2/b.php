
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>trafikljus</title>
        <style>
            body {
                font-family:Calibri, Verdana, Geneva, sans-serif;
            }
            .container {
                background-color: #DDD;
                width:300px;
                margin:auto;
                border:1px solid #aaa;
                padding:10px;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <h1><img src="public/media/trafikljus-start.gif" width="120" height="90" alt="trafikljus">TRAFIKLJUS</h1>
            <button id="on">Testa av och på</button>
            <div id="trafikljus">
                <div id="r">
                    <h3 >RÖTT STOPP</h3>
                    <button id="rb">stäng</button>
                    <p>Fot på broms, avvakta uppmärksamt <span class="lamptest">Lamp test</span>
                    </p>
                </div>
                <div id="y">
                    <h3>GULT AVVAKTA</h3>
                    <button id="yb">stäng</button>
                    <p>Stanna om du hinner. Man ska ej köra på gult <span class="lamptest">Lamp test</span></p>
                </div>
                <div id="g">
                    <h3>GRÖNT KÖR</h3>
                    <button id="gb">stäng</button>
                    <p>Kör på, men skaffa dig info att vägen är klar. <span class="lamptest">Lamp test</span></p>
                </div>
            </div>
        </div>
        <script src="public/js/b.js"></script>
    </body> 
</html>