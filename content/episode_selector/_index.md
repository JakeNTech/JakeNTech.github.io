---
title: "Episode Randomiser"
draft: "false"
menu: "episode_selector"
description: "It's my turn to chose a episode to watch"
artwork: "assets/img/tv_duck.png"
---
<p>Use the radio buttons below to select a series to watch, then some magic will happen and them wow! You now have an episode to watch!</p>
<div id="watcher"></div>
<div>
    <p>Select TV series:</p>
    <input type="radio" id="death_in_paradise" name="series" value="death_in_paradise">
    <label for="Death_in_Paradise">Death In Paradise</label><br>
    <!-- IT'S BOUQUET -->
    <input type="radio" id="keeping_up_apperances" name="series" value="keeping_up_apperances">
    <label for="keeping_up_apperances">Keeping Up Appearances</label><br>
    <!-- there are too many good quotes -->
    <input type="radio" id="outnumberd" name="series" value="outnumberd">
    <label for="outnumberd">Outnumberd</label><br>
    <!-- Nick! -->
    <!-- <input type="radio" id="my_family" name="series" value="my_family">
    <label for="family">My Family</label><br> -->
    <!-- cheap_car -->
    <input type="radio" id="tg_special" name="series" value="tg_special">
    <label for="tg_special">Top Gear Special</label><br>
    <!-- not so cheap car -->
    <input type="radio" id="tg_episode" name="series" value="tg_episode">
    <label for="tg_episode">Top Gear Episode</label><br>
    <!-- go go go -->
    <input type="button" value="Select Episode!" onclick="episode_selection()">
</div>
<!-- <button type="button" onclick="display_DiP_episode()">Death in Paradise Episode</button>
<button type="button" onclick="display_KUA_episode()">Keeping Up appearance's Episode</button>
<button type="button" onclick="display_Outnumberd_episode()">Outnumbered Episode</button>
<button type="button" onclick="display_TG_episode()">Top Gear Episode</button>
<button type="button" onclick="display_TG_special()">Top Gear Special</button> -->
<script src="/assets/JS/episode_selector.js"></script>