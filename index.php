<!DOCTYPE html>
<html lang="se">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./public/css/style.css">
        <title>Document</title>
    </head>
    <body>
        <h1 class="title"> Viggo Skjönsberg </h1>
        <div class="container">
            <a class="button d-block" href="ovningar.php">Övningar</a>
        </div>
        <div class="slider">
            <div>
                <div class="slide" id="current">
                    <div class="showcase fit">
                        <h1>chockalocka</h1>
                        <div class="showcase-content">
                            <img src="./public/images/7eleven.jpg" alt="">
                            <p>Choka locka upgiften gjord på svenskan och webutäklingen</p>
                        </div>
                        <a class="button" href="projekt/chockalocka">Open</a>
                    </div>
                </div>

                <div class="slide">
                    <div class="showcase fit">
                        <h1>Tetris</h1>
                        <div class="showcase-content">
                            <img src="./public/images/tetris.png" alt="">
                            <p>Simple tetris game made in a few hours. The game is not fully completed</p>
                        </div>
                        <a class="button" href="projekt/tetris">Tetris Game</a>
                    </div>
                </div>

                <div class="slide">
                    <div class="showcase fit">
                        <h1>Snake</h1>
                        <div class="showcase-content">
                            <img src="./public/images/bil_edited.jpg" alt="">
                            <p>Snake made in made in a few hours. Only the basic game loop. No score or good looks.</p>
                        </div>
                        <a class="button" href="projekt/snake">Snake Game</a>
                    </div>
                </div>
            </div>
            <div class="slider-buttons">
                <button class="button button-red prev" onclick="prevSlide()">
                    Previos
                </button>
                <button class="button button-cyan next" onclick="nextSlide()">
                    Next
                </button>
            </div>
        </div>


        <div id="myfooter">
            <a href="https://validator.w3.org/unicorn/check?ucn_uri=labb.vgy.se/~viggosg/index.html&ucn_task=conformance">Unicorn</a>
         </div> 
         <script src="public/js/homepage.js">

         </script>
    </body>
</html>