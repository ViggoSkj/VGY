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
                <article class="page-container"> 
                    <h2>FAQ</h2>

                    <div class="faq-question closed">
                        <h2 class="question">
                            Vilken typ av produkter säljer ni?
                        </h2>
                        <button class="faq-question-toggler" aria-label="expand faq">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </button>
                        <p class="answer">
                        Vi säljer ett brett utbud av gammal elektronik som sträcker sig från gamla datorer och TV-apparater till retro radios och kassettspelare. Vårt sortiment består av produkter från olika decennier och varumärken, vilket ger dig möjlighet att hitta den perfekta biten av teknisk nostalgi som passar just dig.
                        </p>
                    </div>
                    <div class="faq-question closed">
                        <h2 class="question">
                            Är era produkter testade och fungerande?
                        </h2>
                        <button class="faq-question-toggler" aria-label="expand faq">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </button>
                        <p class="answer">
                        Ja, vi testar och rengör varje produkt noggrant innan den skickas till dig för att säkerställa att den fungerar som den ska. Vi strävar efter att säkerställa att alla våra produkter är i god skick och fungerar som de ska.
                        </p>
                    </div>
                    <div class="faq-question closed">
                        <h2 class="question">
                            Hur snabbt skickar ni ut produkterna?
                        </h2>
                        <button class="faq-question-toggler" aria-label="expand faq">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </button>
                        <p class="answer">
                        Vi erbjuder snabb frakt och vi strävar efter att skicka ut produkterna så snart som möjligt. Normalt sett skickar vi ut beställningar inom 1-2 arbetsdagar.
                        </p>
                    </div>
                    <div class="faq-question closed">
                        <h2 class="question">
                        Hur kan jag betala för min beställning?
                        </h2>
                        <button class="faq-question-toggler" aria-label="expand faq">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </button>
                        <p class="answer">
                        Vad händer om jag inte är nöjd med min produkt?
A: Vi vill att våra kunder ska vara nöjda med sina köp, så om du inte är nöjd med din produkt, vänligen kontakta oss så att vi kan hjälpa dig att lösa eventuella problem. Vi erbjuder också en returpolicy som gör att du kan returnera produkten om du inte är nöjd med den.
                        </p>
                    </div>

                </article>

                <article class="page-container">
                    <form class="contact-form" action="https://www.bestonline.se/formripper/rippform.php" method="post">
                        <h2>Skicka in fråga</h2>
                        <label for="email" class="visually-hidden">din email</label>
                        <input type="text" id="email" name="email" placeholder="email">
                        
                        <label for="subject" class="visually-hidden">Ämne</label>
                        <input type="text" id="subject" name="subject" placeholder="ämne">
                        
                        <label for="question" class="visually-hidden">fråga</label>
                        <textarea name="text" id="question" cols="30" rows="10"></textarea>
                        
                        <button class="button">Send</button>
                        <input type="hidden" name="s_email" value="viggosg@varmdogymnasium.se">
                        <input type="hidden" name="s_retur" value="https://labb.vgy.se/~viggosg/projekt/foretag/support.php">
                        <label for="password" class="visually-hidden">Form ripper password</label>
                        <input type="password" id="password" name="pw" placeholder="password" size="10" value="">

                    </form>
                </article>
            </main>
            <?php include "footer.php" ?>
            <script src="public/js/faq.js"></script>
        </div>
    </body>
</html>