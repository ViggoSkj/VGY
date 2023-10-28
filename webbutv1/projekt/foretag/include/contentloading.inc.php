<?php

function LoadPostByID(int $id) {
    $post = Post::GetPost($id);
    LoadPost($post);
}

function LoadPost(Post $post) {
    $text = $post->GetText();
    $user = User::GetUser($post->GetUserID());
    $username = $user->GetUserName();

    $html = <<<EOD
    <div class="bg-primary rounded-3 m-5 p-3">
        <div class="d-flex align-items-center mb-3">
            <img width="70" height="70" src="public/res/Screenshot 2022-10-20 182116.png" alt="" class="rounded-5">
            <h4 class="ms-3">$username</h4>
        </div>
        <hr>
        <p>
            $text
        </p>
        <hr>
        <div class="d-flex gap-2">
            <button class="btn btn-light"> Like </button>
            <button class="btn btn-light"> Share </button>
            <button class="btn btn-light"> Comment </button>
        </div>
    </div>
    EOD;

    echo $html;
}