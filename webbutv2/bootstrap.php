<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Document</title>
</head>

<body class="m-auto">
    <header class="nav-navbar p-2 shadow-lg">
        <a class="m-2" href="https://www.google.com"><img src="logo.png" alt="" width="200"></a>
        <button class="m-2 btn btn-dark px-5 py-3" id="destroy">Destroy</button>
        <a class="m-2 btn btn-dark px-5 py-3" href="https://youtube.com">Youtube</a>
    </header>

    <img src="b.jpg" class="w-100" alt="" height="200">

    <main class="container">
        <div class="d-flex flex-wrap my-5 gap-5 mx-auto justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="tu.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Ifall du inte viste så suger bootstrap.</p>
                </div>
            </div>
        </div>
    </main>

    <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
                <p class="text-muted">© 2022</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>
        </footer>
    </div>


    <script>
        document.getElementById("destroy").addEventListener("click", () => {
            let i = 0
            setInterval(() => {
                document.body.style.width = i%10000 + "px"
                i += 30
            }, 1000/60)
        })
    </script>
</body>

</html>