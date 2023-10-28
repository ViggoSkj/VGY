<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../style.css">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <?php include("../../commandLine.php"); ?>
    <div id="array">
    </div>
    <div id="sorting"></div>

    <section id="controll-panel">
        <div>
            <input class="text-input" type="text" name="" id="use-text">
            <button id="use" class="button">Use</button>
        </div>

        <button id="sort" class="button">Sort</button>
    </section>


    <script src="sortingEnglish.js"></script>
    <script src="../../commandLine.js"></script>
    <script>
        const sortingDisplay = SortingDisplay("array", "sorting")
        sortingDisplay.setNumbers([1, 4, 2, 10, 12, 3, 3])

        document.getElementById("sort").addEventListener("click", () => {
            sortingDisplay.slideDown()
            sortingDisplay.sort()
        })

        document.getElementById("use").addEventListener("click", () => {
            try {
                const numbers = document.getElementById("use-text").value.split(" ")

                if (numbers.find(x => isNaN(Number(x)))) {
                    return tooltip.displayMessage("array must only contain numbers")
                }

                sortingDisplay.setNumbers(numbers)
            } catch (err) {
                commandLine.alert("Must only be numbers seperated by spaces")
                console.error(err)
            }
        })
    </script>
</body>

</html>