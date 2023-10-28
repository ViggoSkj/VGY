<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="chatVgy.css">
    <title>Document</title>
</head>

<body>
    <?php include("commandLine.php") ?>
    <?php include("header.php") ?>

    <div id="wheel">
        <img src="images/moon.png" alt="earth" width="25" height="25">
        <img src="images/earth.png" alt="earth" width="50" height="50">
        <img src="images/satelite.png" alt="earth" width="50">
        <img src="images/mars.png" alt="earth" width="30">
        <img src="images/venus.png" alt="earth" width="70">
        <img src="images/saturnus.webp" alt="earth" width="200">
    </div>

    <script src="util/wheel.js"></script>
    <script>
        const body = document.getElementsByTagName("body")[0]
        const rigth = Math.min(body.offsetWidth - 400, 800)
        Wheel("wheel", 200, rigth, 300)

    </script>

    <section>
        <p class="title">Övningar</p>
        <a href="bootstrap.php">Bootstrap</a>
        <a href="ovningar/ovning_start">Start</a>
        <a href="ovningar/ovning_grunder">Grunder</a>
        <p class="title">Projects</p>
        <a href="projekt/matrixDisplay/">Matrix Display</a>
        <a href="projekt/sortingFunction/">Sorting Algo</a>
        <a href="projekt/showcase/">Showcase</a>
    </section>

    <section>
        <p class="title">Open files here</p>
        <div class="path-opener" id="drop-area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-box-arrow-in-up-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z" />
                <path fill-rule="evenodd" d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z" />
            </svg>
        </div>
    </section>

    <section id="chat-vgy">
        <div id="chat-messages">

        </div>
        <div>
            <input type="text" name="" id="vgy-send-text">
            <button id="vgy-send">Send</button>
        </div>
    </section>
    <script src="commandLine.js"></script>

    <script src="chatVgyApi.js"></script>
    <script>
        const dropArea = document.getElementById("drop-area")
        let dragged = null

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            element.addEventListener("click", e => {
                e.preventDefault()
                commandLine.alert("drag the link into the drop area to access this recorse.")
                dragged = element
            })
            element.addEventListener("dragstart", e => {
                dragged = element
            })
        })

        dropArea.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        dropArea.addEventListener("drop", e => {
            e.preventDefault()
            if (dragged.tagName === "A") {
                window.location = dragged.href
            }
        })

        // chat vgy
        const chatVgy = ChatVgy()
        chatVgy.init()
    </script>
</body>

</html>