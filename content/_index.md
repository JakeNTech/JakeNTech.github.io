---
title: "JakeNTech"
menu: "main"
draft: "false"
description: "You guessed it, its the site of JakeNTech. Shocking right?"
artwork: "/assets/img/pure_art.png"
---
<div class="center_box">
    <img src="/assets/img/new_phone_who_dis.jpg" id="POV">
    <h1>Jake</h1>
    <p id="the_funny_line"></p>
</div>

<script>
    var the_third_line = {
        // Number: Line
        1:"This is a website, I hope.",
        2:"If lost please return to <a href='https://google.co.uk'>google.co.uk</a>",
        3:"Owner of a low milage duck, 0.7 miles",
        4:"I've got a copy of Paint.Net",
        5:"Cyberist in Cyberspace",
        6:"Jake Bullet, Cybernautic detective.",
        7:"How much does a chimney cost? Dunno but it's through the roof at the moment!"
    }
    
    document.getElementById("the_funny_line").innerHTML = the_third_line[Math.floor((Math.random()*7)+1)]
</script>