<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="public/css/style.css">
    </head>
    <body>
        <div class="structure">
            <main>
                <?php for($i = 0; $i < 20; $i++) {?>
                    <div class="con">
                        <div class="dude <?php if ($i%3==0) echo "r"; if ($i%3==1) echo "g"; if ($i%3==2) echo "b";?>">
                            <p>:)</p>
                        </div>
                    </div>
                <?php } ?>
            </main>
            <footer>
                
            </footer>
        </div>
    </body>
</html>