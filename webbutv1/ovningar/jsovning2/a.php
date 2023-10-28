
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
            <button onclick="on()">Testa av och på</button>
            <div id="trafikljus">
                <div id="r">
                    <h3 >RÖTT STOPP</h3>
                    <button onclick="toggleId('r')">stäng</button>
                    <p>Fot på broms, avvakta uppmärksamt
                    </p>
                </div>
                <div id="y">
                    <h3>GULT AVVAKTA</h3>
                    <button onclick="toggleId('y')">stäng</button>
                    <p>Stanna om du hinner. Man ska ej köra på gult</p>
                </div>
                <div id="g">
                    <h3>GRÖNT KÖR</h3>
                    <button onclick="toggleId('g')">stäng</button>
                    <p>Kör på, men skaffa dig info att vägen är klar.</p>
                </div>
            </div>
        </div>
        <script src="public/js/a.js"></script>
    </body> 
</html>