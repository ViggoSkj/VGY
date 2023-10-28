<?php


$products = [
    [
        "id" => 1,
        "name" => "radio",
        "img" => "radio.jpg",
        "desc" => "
        
        <br>
        <p>
        Absolut, här är en beskrivning för en retro radio:
        </p>

        <br>
        <p>
        Denna retro radio är en fantastisk bit av teknisk nostalgi från en annan tid. Tillverkad på 1970-talet, har den en tidlös design som fortfarande ser modern ut än idag.
        </p>
        
        <br>
        <p>
        Radios mottagare är av hög kvalitet och ger dig en klar och stark signal. Den har flera band så att du kan lyssna på AM/FM eller SW, beroende på vad du föredrar. Du kan också ställa in din favoritstation med hjälp av det enkla inställningssystemet.
        </p>
        
        <br>
        <p>
        Denna retro radio har också en inbyggd högtalare som ger ett fylligt och behagligt ljud. Du kan justera ljudnivån med den enkla volymknappen på frontpanelen.
        </p>

        <br>
        <p>
        Radio är i utmärkt skick och har testats för att säkerställa att den fungerar som den ska. Den har också en vacker träfinish som ger den en unik karaktär och charm.
        </p>

        <br>
        <p>
        Oavsett om du vill lyssna på musik eller hålla dig uppdaterad med de senaste nyheterna, är denna retro radio ett utmärkt val. Det är ett perfekt tillskott till ditt hem eller arbetsplats och en underbar bit av teknisk nostalgi som du kommer att njuta av under många år framöver.
        </p>
        ",
        "price" => 50
    ],
    [
        "id" => 2,
        "name" => "fax",
        "img" => "fax.jpg",
        "desc" => "
        
        <br>
        <p>
        En fax är en elektronisk enhet som används för att skicka dokument på avstånd genom telefonsystemet. Det är en vanlig kontorsapparat som har varit i bruk sedan 1980-talet.
        </p>
        
        <br>
        <p>
        En typisk fax har en skanner som scannar dokumentet och omvandlar det till en digital signal. Sedan sänds signalen via telefonlinjen till mottagarens fax, som skriver ut dokumentet på papper.
        </p>
        
        <br>
        <p>
        Förutom att skicka dokument på avstånd kan en fax också ta emot dokument. När ett dokument skickas till en fax, sätts det automatiskt in i maskinen, skannas och skrivs ut på papper.
        </p>
        
        <br>
        <p>
        En fax är ett praktiskt verktyg för företag som ofta behöver skicka och ta emot dokument på ett snabbt och tillförlitligt sätt. Faxar är också populära bland privata användare som behöver skicka dokument som inte kan skickas via e-post eller andra digitala kanaler.
        </p>
        
        <br>
        <p>
        Även om tekniken har utvecklats över tiden, är en fax fortfarande en användbar enhet för att säkerställa att viktig information kan skickas snabbt och tillförlitligt mellan olika platser.
        </p>
        
        <br>
        <p>
        </p>
        ",
        "price" => 500
    ],
    [
        "id" => 3,
        "name" => "högtalare",
        "img" => "hogtalare.jpg",
        "desc" => "
        <p>En högtalare är en elektronisk enhet som används för att återge ljud från en ljudkälla, till exempel en musikspelare, en TV eller en dator. En högtalare består av flera komponenter, inklusive en drivrutin, en upphängning, en magnet och en korg.</p>
        <br>
        <p>Drivrutinen är den viktigaste delen av högtalaren och består av en kon eller membran som vibrerar när ljudet spelas upp. Detta skapar ljudvågor som sprids ut i rummet. Upphängningen hjälper till att hålla drivrutinen på plats medan den vibrerar.</p>
        <br>
        <p>Magneten i högtalaren genererar ett magnetfält som driver drivrutinen. Storleken och styrkan på magneten påverkar högtalarens ljudkvalitet och volym. Korgen hjälper till att skydda drivrutinen och upphängningen och hålla allt på plats.</p>
        <br>
        <p>Högtalare finns i olika storlekar och former, från små bärbara högtalare som kan bäras i fickan till stora högtalare som används i biografer och konserthus. Vissa högtalare är också specialiserade för att spela upp viss typ av ljud, till exempel bas eller diskant.</p>
        <br>
        <p>En högtalare är en viktig del av en ljudanläggning och kan användas för att förbättra ljudupplevelsen för musik, film eller TV-tittande. Det finns också högtalare som kan anslutas till en dator eller en smartphone för att spela musik eller andra ljudfiler. Oavsett användning är högtalare en viktig del av vår upplevelse av ljud.</p>
        <br>
        ",
        "price" => 250
    ],
    [
        "id" => 4,
        "name" => "hörlurar",
        "img" => "horlurar.webp",
        "desc" => "
        <p>Hörlurar är en typ av personlig ljudutrustning som är utformad för att sätta på huvudet och leverera ljud direkt till användarens öron. Hörlurar består av två högtalare som är monterade på en huvudbygel eller en bygel som går runt öronen.</p>
        <br>
        <p>Hörlurar kan anslutas till en rad olika ljudkällor, inklusive musikspelare, datorer och smartphones. Vissa hörlurar är också trådlösa och ansluts via Bluetooth eller annan trådlös teknik.</p>
        <br>
        <p>Hörlurar finns i olika storlekar och modeller, inklusive in-ear-hörlurar, on-ear-hörlurar och over-ear-hörlurar. In-ear-hörlurar placeras direkt i örat och är oftast mycket bärbara och lätta. On-ear-hörlurar vilar på öronen, medan over-ear-hörlurar täcker hela örat.</p>
        <br>
        <p>Hörlurar kan vara utformade för att producera olika ljudkvaliteter, från bas till diskant. Vissa hörlurar har också inbyggda funktioner som aktiverar brusreducering, vilket minskar bakgrundsljud och förbättrar ljudupplevelsen.</p>
        <br>
        <p>En fördel med hörlurar är att de ger användaren möjlighet att lyssna på musik eller andra ljudfiler privat, utan att störa omgivningen. Hörlurar kan också vara användbara för att blockera ut externa ljud, vilket kan vara fördelaktigt i bullriga miljöer eller vid resor.</p>
        <br>
        <p>Oavsett användning är hörlurar en viktig del av vår personliga ljudupplevelse och en oumbärlig del av många människors vardag.</p>
        ",
        "price" => 400
    ],
];


if (isset($_GET["json"])) {
    echo json_encode($products);
}