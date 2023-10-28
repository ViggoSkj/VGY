<?php

$ads = [
    0 => [
        "title" => "test title 1"
    ],
    1 => [
        "title" => "test title 2"
    ],
    2 => [
        "title" => "test title 3"
    ],
];

?>

<aside class="ads">
    <?php foreach($ads as $ad){ ?>
        <div class="ad">
            <h4> <?php echo $ad["title"]; ?> </h4>
        </div>
    <?php } ?>
</aside>