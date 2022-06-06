var info_dict = {
    //Series:Number_of_Episodes
    1:10,
    2:10,
    3:10,
    4:10,
    5:9,
    6:11,
    7:7,
    8:8,
    9:8,
    10:10,
    11:6,
    12:8,
    13:7,
    14:7,
    15:6,
    16:6,
    17:6,
    18:7,
    19:7,
    20:6,
    21:4,
    22:8,
}

function Series_Selector() {
    Series = Math.floor((Math.random()*22)+1);
    return Series
}

function Episode_Selector(Series){
    number_of_episodes = Math.floor((Math.random()*info_dict[Series])+1);
    return number_of_episodes
}

function display_series_episode(){
    series = Series_Selector();
    episode = Episode_Selector(series);
    document.getElementById("watcher").innerHTML = "<p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/45-top-gear/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a>"
}
