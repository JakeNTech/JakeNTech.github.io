function display_TG_special(){
    // Special,["title",TMDB_link,Series,Episode,BBC_iPlayer_Link]
    var specials = {
        1:["The Top Gear Winter Olympics","https://www.themoviedb.org/tv/45-top-gear/season/7/episode/7",7,7,"https://www.bbc.co.uk/iplayer/episode/b0074g7r/top-gear-series-7-7-winter-olympics-special"],
        2:["USA","https://www.themoviedb.org/tv/45-top-gear/season/9/episode/3",9,3,"https://www.bbc.co.uk/iplayer/episode/b0074gdc/top-gear-series-9-3-usa-special"],
        3:["Polar","https://www.themoviedb.org/tv/45-top-gear/season/0/episode/12",9,7,"https://www.bbc.co.uk/iplayer/episode/b007v18p/top-gear-series-9-7-polar-challenge"],
        4:["Botswana","https://www.themoviedb.org/tv/45-top-gear/season/10/episode/4",10,4,"https://www.bbc.co.uk/iplayer/episode/b0087f0s/top-gear-series-10-4-botswana-special"],
        5:["Vietnam","https://www.themoviedb.org/tv/45-top-gear/season/12/episode/8",12,8,"https://www.bbc.co.uk/iplayer/episode/b00gfhsn/top-gear-series-12-episode-8"],
        6:["Bolivia","https://www.themoviedb.org/tv/45-top-gear/season/14/episode/6",14,6,"https://www.bbc.co.uk/iplayer/episode/b00pm34y/top-gear-series-14-6-bolivia-special"],
        7:["East Coast","https://www.themoviedb.org/tv/45-top-gear/season/0/episode/33",15,7,"https://www.bbc.co.uk/iplayer/episode/b00x2pq7/top-gear-series-15-7-east-coast-road-trip?seriesId=b00sym5n"],
        8:["Middle East","https://www.themoviedb.org/tv/45-top-gear/season/0/episode/34",15,8,"https://www.bbc.co.uk/iplayer/episode/b00x31wf/top-gear-middle-east-special"],
        9:["India","https://www.themoviedb.org/tv/45-top-gear/season/0/episode/38",17,7,"https://www.bbc.co.uk/iplayer/episode/b018ydx6/top-gear-india-special"],
        10:["Africa","https://www.themoviedb.org/tv/45-top-gear/season/19/episode/6",19,6,"https://www.bbc.co.uk/iplayer/episode/b01r5xcq/top-gear-series-19-6-africa-special-part-1"],
        11:["Burma","https://www.themoviedb.org/tv/45-top-gear/season/21/episode/6",21,6,"https://www.bbc.co.uk/iplayer/episode/b03yb69g/top-gear-series-21-6-burma-special-part-1"],
        12:["Patagonia","https://www.themoviedb.org/tv/45-top-gear/season/0/episode/68",22,0,"https://www.bbc.co.uk/iplayer/episode/b04ww8hj/top-gear-patagonia-special-part-1?seriesId=b06hldw6"]
    }
    special_no = Math.floor((Math.random()*12)+1)
    document.getElementById("watcher").innerHTML = "<p>Top Gear Special Selector:</p><p>"+specials[special_no][0]+" Special</p><p>Series "+specials[special_no][2]+"</p><p>Episode "+specials[special_no][3]+"</p><a href='"+specials[special_no][1]+"'><button>View Episode Details on TMDB</button></a><a href='"+specials[special_no][4]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
}

function display_TG_episode(){
    var info_dict = {
        //Series:[total_episodes,[ep_1_iPlayer_link,ep_2_iPlayer_link,..]]
        1:[10,["p00yzpg2/top-gear-series-1-episode-1?seriesId=p00whzyg","p00yzqc0/top-gear-series-1-episode-2?seriesId=p00whzyg","p00yzqgf/top-gear-series-1-episode-3?seriesId=p00whzyg","p00yzqph/top-gear-series-1-episode-4?seriesId=p00whzyg","p00yzskq/top-gear-series-1-episode-5?seriesId=p00whzyg","p00yzt3m/top-gear-series-1-episode-6?seriesId=p00whzyg","p00yztbf/top-gear-series-1-episode-7?seriesId=p00whzyg","p00yzthw/top-gear-series-1-episode-8?seriesId=p00whzyg","p00yztms/top-gear-series-1-episode-9?seriesId=p00whzyg","p00yztxg/top-gear-series-1-episode-10?seriesId=p00whzyg"]],
        2:[10,["p03rds4v/top-gear-series-2-episode-1?seriesId=p03jvn83","p03rds50/top-gear-series-2-episode-2?seriesId=p03jvn83","p03rds56/top-gear-series-2-episode-3?seriesId=p03jvn83","p03rds5f/top-gear-series-2-episode-4?seriesId=p03jvn83","p03rds5k/top-gear-series-2-episode-5?seriesId=p03jvn83","p03rds5m/top-gear-series-2-episode-6?seriesId=p03jvn83","p03rds5q/top-gear-series-2-episode-7?seriesId=p03jvn83","p03rds5s/top-gear-series-2-episode-8?seriesId=p03jvn83","p03rds5x/top-gear-series-2-episode-9?seriesId=p03jvn83","p03rds61/top-gear-series-2-episode-10?seriesId=p03jvn83"]],
        3:[10,["p036g8cx/top-gear-series-3-episode-1?seriesId=p033w6mt","p036g8d0/top-gear-series-3-episode-2?seriesId=p033w6mt","p036g8d3/top-gear-series-3-episode-3?seriesId=p033w6mt","p036g8d6/top-gear-series-3-episode-4?seriesId=p033w6mt","p036g8dc/top-gear-series-3-episode-5?seriesId=p033w6mt","p036g8dg/top-gear-series-3-episode-6?seriesId=p033w6mt","p036g8dl/top-gear-series-3-episode-7?seriesId=p033w6mt","p036g8dv/top-gear-series-3-episode-8?seriesId=p033w6mt","p036g8dx/top-gear-series-3-episode-9?seriesId=p033w6mt","p036g8f2/top-gear-series-3-10-best-of-series-3?seriesId=p033w6mt"]],
        4:[10,["p03rds67/top-gear-series-4-episode-1?seriesId=p03jw1zh","p03rds6g/top-gear-series-4-episode-2?seriesId=p03jw1zh","p03rds6n/top-gear-series-4-episode-3?seriesId=p03jw1zh","p03rds6v/top-gear-series-4-episode-4?seriesId=p03jw1zh","p03rds6x/top-gear-series-4-episode-5?seriesId=p03jw1zh","p03rds72/top-gear-series-4-episode-6?seriesId=p03jw1zh","p03rds79/top-gear-series-4-episode-7?seriesId=p03jw1zh","p03rds7c/top-gear-series-4-episode-8?seriesId=p03jw1zh","p03rds7h/top-gear-series-4-episode-9?seriesId=p03jw1zh","p03rds7m/top-gear-series-4-episode-10?seriesId=p03jw1zh"]],
        5:[9,["p03rds7r/top-gear-series-5-episode-1?seriesId=p03jw4zr","p03rds7w/top-gear-series-5-episode-2?seriesId=p03jw4zr","p03rds7z/top-gear-series-5-episode-3?seriesId=p03jw4zr","p09v87vz/top-gear-series-5-episode-4?seriesId=p03jw4zr","p03rds81/top-gear-series-5-episode-5?seriesId=p03jw4zr","p03rds86/top-gear-series-5-episode-6?seriesId=p03jw4zr","p03rds89/top-gear-series-5-episode-7?seriesId=p03jw4zr","p03rds8f/top-gear-series-5-episode-8?seriesId=p03jw4zr","p03rds8k/top-gear-series-5-episode-9?seriesId=p03jw4zr"]],
        6:[11,["b0078wsh/top-gear-series-6-episode-1?seriesId=b007q8vv","b0078wvp/top-gear-series-6-episode-2?seriesId=b007q8vv","b0078x0p/top-gear-series-6-episode-3?seriesId=b007q8vv","b0078x3y/top-gear-series-6-episode-4?seriesId=b007q8vv","b0078x75/top-gear-series-6-episode-5?seriesId=b007q8vv","b0078xb7/top-gear-series-6-episode-6?seriesId=b007q8vv","b007vkt4/top-gear-series-6-episode-7?seriesId=b007q8vv","b0078xhc/top-gear-series-6-episode-8?seriesId=b007q8vv","b0078xkx/top-gear-series-6-episode-9?seriesId=b007q8vv","b0078xmp/top-gear-series-6-episode-10?seriesId=b007q8vv","b0078xql/top-gear-series-6-episode-11?seriesId=b007q8vv"]],
        7:[7,["b0074g34/top-gear-series-7-episode-1?seriesId=b007gh9t","b0074g3w/top-gear-series-7-episode-2?seriesId=b007gh9t","b0074g4k/top-gear-series-7-episode-3?seriesId=b007gh9t","b0078zdv/top-gear-series-7-episode-4?seriesId=b007gh9t","b0078zj1/top-gear-series-7-episode-5?seriesId=b007gh9t","b0074g6l/top-gear-series-7-episode-6?seriesId=b007gh9t","b0074g7r/top-gear-series-7-7-winter-olympics-special?seriesId=b007gh9t"]],
        8:[9,["b0074ftl/top-gear-series-8-episode-1?seriesId=b0084kmp","b0074fv1/top-gear-series-8-episode-2?seriesId=b0084kmp","b0074fvk/top-gear-series-8-episode-3?seriesId=b0084kmp","b0074fw0/top-gear-series-8-episode-4?seriesId=b0084kmp","b0074fwh/top-gear-series-8-episode-5?seriesId=b0084kmp","b0074fst/top-gear-series-8-episode-7?seriesId=b0084kmp","b0074ft5/top-gear-series-8-episode-8?seriesId=b0084kmp","b0074gb6/top-gear-series-8-9-best-of-british?seriesId=b0084kmp"]],
        9:[7,["b0074gbw/top-gear-series-9-episode-1?seriesId=b006ttd9","b0074gkn/top-gear-series-9-episode-2?seriesId=b006ttd9","b0074gdc/top-gear-series-9-3-usa-special?seriesId=b006ttd9","b0074gf0/top-gear-series-9-episode-4?seriesId=b006ttd9","b0074gmw/top-gear-series-9-episode-5?seriesId=b006ttd9","b0074gnn/top-gear-series-9-episode-6?seriesId=b006ttd9","b007v18p/top-gear-series-9-7-polar-challenge?seriesId=b006ttd9"]],
        10:[10,["b00828fn/top-gear-series-10-episode-1?seriesId=b0082ctt","b0082fwm/top-gear-series-10-episode-2?seriesId=b0082ctt","b00875kf/top-gear-series-10-episode-3?seriesId=b0082ctt","b0087f0s/top-gear-series-10-4-botswana-special?seriesId=b0082ctt","b008czf4/top-gear-series-10-episode-5?seriesId=b0082ctt","b008d0fb/top-gear-series-10-episode-6?seriesId=b0082ctt","b008d36h/top-gear-series-10-episode-7?seriesId=b0082ctt","b008gzy6/top-gear-series-10-episode-8?seriesId=b0082ctt","b008h368/top-gear-series-10-episode-9?seriesId=b0082ctt","b008m4dy/top-gear-series-10-episode-10?seriesId=b0082ctt"]],
        11:[6,["b00cbmbl/top-gear-series-11-episode-1?seriesId=b00cc4rp","b00ccfj0/top-gear-series-11-episode-2?seriesId=b00cc4rp","b00cgprk/top-gear-series-11-episode-3?seriesId=b00cc4rp","b00cl43b/top-gear-series-11-episode-4?seriesId=b00cc4rp","b00cq4w4/top-gear-series-11-episode-5?seriesId=b00cc4rp","b00cv2s3/top-gear-series-11-episode-6?seriesId=b00cc4rp"]],
        12:[8,["b00fq1gj/top-gear-series-12-episode-1?seriesId=b00fj1rb","b00fm0xc/top-gear-series-12-episode-2?seriesId=b00fj1rb","b00fq31w/top-gear-series-12-episode-3?seriesId=b00fj1rb","b00ftlv6/top-gear-series-12-episode-4?seriesId=b00fj1rb","b00fys1m/top-gear-series-12-episode-5?seriesId=b00fj1rb","b00g2gml/top-gear-series-12-episode-6?seriesId=b00fj1rb","b00g7dw0/top-gear-series-12-episode-7?seriesId=b00fj1rb","b00gfhsn/top-gear-series-12-episode-8?seriesId=b00fj1rb"]],
        13:[7,["b00lff2s/top-gear-series-13-episode-1?seriesId=b00lgl2p","b00lkmth/top-gear-series-13-episode-2?seriesId=b00lgl2p","b00lnd97/top-gear-series-13-episode-3?seriesId=b00lgl2p","b00lr4wc/top-gear-series-13-episode-4?seriesId=b00lgl2p","b00lvf71/top-gear-series-13-episode-5?seriesId=b00lgl2p","b00ly0x6/top-gear-series-13-episode-6?seriesId=b00lgl2p","b00m196z/top-gear-series-13-episode-7?seriesId=b00lgl2p",]],
        14:[7,["b00p1lgb/top-gear-series-14-episode-1?seriesId=b00p2h6p","b00p1ny1/top-gear-series-14-episode-2?seriesId=b00p2h6p","b00p4z1y/top-gear-series-14-episode-3?seriesId=b00p2h6p","b00p8jnc/top-gear-series-14-episode-4?seriesId=b00p2h6p","b00plqcw/top-gear-series-14-episode-5?seriesId=b00p2h6p","b00pm34y/top-gear-series-14-6-bolivia-special?seriesId=b00p2h6p","b00pws33/top-gear-series-14-episode-7?seriesId=b00p2h6p"]],
        15:[8,["b00syxz4/top-gear-series-15-episode-1?seriesId=b00sym5n","b00t0yw2/top-gear-series-15-episode-2?seriesId=b00sym5n","b00t3t7s/top-gear-series-15-episode-3?seriesId=b00sym5n","b00t5v96/top-gear-series-15-episode-4?seriesId=b00sym5n","b00t8qfb/top-gear-series-15-episode-5?seriesId=b00sym5n","b00tbs3z/top-gear-series-15-episode-6?seriesId=b00sym5n","b00x2pq7/top-gear-series-15-7-east-coast-road-trip?seriesId=b00sym5n","b00x31wf/top-gear-middle-east-special?seriesId=b00sym5n"]],
        16:[6,["b00y469f/top-gear-series-16-episode-1?seriesId=b00x31w1","b00yb5jr/top-gear-series-16-episode-2?seriesId=b00x31w1","b00yl8mx/top-gear-series-16-episode-3?seriesId=b00x31w1","b00ymwfn/top-gear-series-16-episode-4?seriesId=b00x31w1","b00yvcm7/top-gear-series-16-episode-5?seriesId=b00x31w1","b00z57tz/top-gear-series-16-episode-6?seriesId=b00x31w1"]],
        17:[7,["b0129r3z/top-gear-series-17-episode-1?seriesId=b0129r1d","b012c3bz/top-gear-series-17-episode-2?seriesId=b0129r1d","b012m668/top-gear-series-17-episode-3?seriesId=b0129r1d","b012qrz1/top-gear-series-17-episode-4?seriesId=b0129r1d","b012x158/top-gear-series-17-episode-5?seriesId=b0129r1d","b0133rm5/top-gear-series-17-episode-6?seriesId=b0129r1d","b018ydx6/top-gear-india-special?seriesId=b0129r1d"]],
        18:[7,["b01bmq59/top-gear-series-18-episode-1?seriesId=b01bmpsx","b01brd8t/top-gear-series-18-episode-2?seriesId=b01bmpsx","b01c7x0r/top-gear-series-18-episode-3?seriesId=b01bmpsx","b01cks3v/top-gear-series-18-episode-4?seriesId=b01bmpsx","b01cytpx/top-gear-series-18-episode-5?seriesId=b01bmpsx","b01db7nt/top-gear-series-18-episode-6?seriesId=b01bmpsx","b01dljnx/top-gear-series-18-episode-7?seriesId=b01bmpsx"]],
        19:[6,["b01qh2xl/top-gear-series-19-episode-1?seriesId=b01qh2vz","b01qmn70/top-gear-series-19-episode-2?seriesId=b01qh2vz","b01qqyr8/top-gear-series-19-episode-3?seriesId=b01qh2vz","b01qyjnh/top-gear-series-19-episode-4?seriesId=b01qh2vz","b01r2ckq/top-gear-series-19-episode-5?seriesId=b01qh2vz","b01r5xcq/top-gear-series-19-6-africa-special-part-1?seriesId=b01qh2vz"]],
        20:[6,["b036nplm/top-gear-series-20-episode-1?seriesId=b036npk6","b036v7np/top-gear-series-20-episode-2?seriesId=b036npk6","b0371dc3/top-gear-series-20-episode-3?seriesId=b036npk6","b037lgfl/top-gear-series-20-episode-4?seriesId=b036npk6","b037x8f7/top-gear-series-20-episode-5?seriesId=b036npk6","b0388dsx/top-gear-series-20-episode-6?seriesId=b036npk6"]],
        21:[6,["b03tzcbb/top-gear-series-21-episode-1?seriesId=b03tzc5l","b03vp5dw/top-gear-series-21-episode-2?seriesId=b03tzc5l","b03wc9v7/top-gear-series-21-episode-3?seriesId=b03tzc5l","b03x14r9/top-gear-series-21-episode-4?seriesId=b03tzc5l","b03xpmwk/top-gear-series-21-episode-5?seriesId=b03tzc5l","b03yb69g/top-gear-series-21-6-burma-special-part-1?seriesId=b03tzc5l"]],
        22:[8,["b0516rld/top-gear-series-22-episode-1?seriesId=p02gwws5","b051zzb4/top-gear-series-22-episode-2?seriesId=p02gwws5","b052r1b5/top-gear-series-22-episode-3?seriesId=p02gwws5","b053jcd5/top-gear-series-22-episode-4?seriesId=p02gwws5","b05469cm/top-gear-series-22-episode-5?seriesId=p02gwws5","b05517q7/top-gear-series-22-episode-6?seriesId=p02gwws5","b055qsq1/top-gear-series-22-episode-7?seriesId=p02gwws5","b05n7bnw/top-gear-series-22-episode-8?seriesId=p02gwws5"]],
    }
    series = Math.floor((Math.random()*22)+1);
    episode = Math.floor((Math.random()*info_dict[series][0])+1);
    document.getElementById("watcher").innerHTML = "<p>Top Gear Episode Selector:</p><p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/45-top-gear/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a><a href='https://www.bbc.co.uk/iplayer/episode/"+info_dict[series][1][episode-1]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
}

function display_DiP_Episode(){
    var episode_dict = {
        //Series:[total_episodes,[ep_1_iPlayer_link,ep_2_iPlayer_link,..]]
        1:[8,["b016mw99/death-in-paradise-series-1-episode-1","b016yq3g/death-in-paradise-series-1-episode-2","b0176qwm/death-in-paradise-series-1-episode-3","b017h8cd/death-in-paradise-series-1-episode-4","b017pt2c/death-in-paradise-series-1-episode-5","b017zn8c/death-in-paradise-series-1-episode-6","b01854xn/death-in-paradise-series-1-episode-7","b018h2dr/death-in-paradise-series-1-episode-8"]],
        2:[8,["b01pvn3m/death-in-paradise-series-2-episode-1?seriesId=b01pvmm2","b01q02p5/death-in-paradise-series-2-episode-2?seriesId=b01pvmm2","b01q9xq7/death-in-paradise-series-2-episode-3?seriesId=b01pvmm2","b01qgmh5/death-in-paradise-series-2-episode-4?seriesId=b01pvmm2","b01qm4hv/death-in-paradise-series-2-episode-5?seriesId=b01pvmm2","b01qrspp/death-in-paradise-series-2-episode-6?seriesId=b01pvmm2","b01qxz8d/death-in-paradise-series-2-episode-7?seriesId=b01pvmm2","b01r1t5q/death-in-paradise-series-2-episode-8?seriesId=b01pvmm2"]],
        3:[8,["b03qglq4/death-in-paradise-series-3-episode-1?seriesId=b03qglpq","b03sh1fb/death-in-paradise-series-3-episode-2?seriesId=b03qglpq","b03t7y80/death-in-paradise-series-3-episode-3?seriesId=b03qglpq","b03txx5l/death-in-paradise-series-3-episode-4?seriesId=b03qglpq","b03vm43m/death-in-paradise-series-3-episode-5?seriesId=b03qglpq","b03w790q/death-in-paradise-series-3-episode-6?seriesId=b03qglpq","b03wy7s0/death-in-paradise-series-3-episode-7?seriesId=b03qglpq","b03xl49z/death-in-paradise-series-3-episode-8?seriesId=b03qglpq"]],
        4:[8,["b04xw72n/death-in-paradise-series-4-episode-1?seriesId=b04xw71r","b04yn4yn/death-in-paradise-series-4-episode-2?seriesId=b04xw71r","b050h5z8/death-in-paradise-series-4-episode-3?seriesId=b04xw71r","b051bwp8/death-in-paradise-series-4-episode-4?seriesId=b04xw71r","b0520tnl/death-in-paradise-series-4-episode-5?seriesId=b04xw71r","b052qzdr/death-in-paradise-series-4-episode-6?seriesId=b04xw71r","b053ky9t/death-in-paradise-series-4-episode-7?seriesId=b04xw71r","b0547q67/death-in-paradise-series-4-episode-8?seriesId=b04xw71r"]],
        5:[8,["b06vr15s/death-in-paradise-series-5-episode-1?seriesId=b06vr5rv","b06wj7vc/death-in-paradise-series-5-episode-2?seriesId=b06vr5rv","b06ykw65/death-in-paradise-series-5-episode-3?seriesId=b06vr5rv","b06zcdt9/death-in-paradise-series-5-episode-4?seriesId=b06vr5rv","b0702b41/death-in-paradise-series-5-episode-5?seriesId=b06vr5rv","b070ppqq/death-in-paradise-series-5-episode-6?seriesId=b06vr5rv","b071fsdr/death-in-paradise-series-5-episode-7?seriesId=b06vr5rv","b07258y9/death-in-paradise-series-5-episode-8?seriesId=b06vr5rv"]],
        6:[8,["b08819cn/death-in-paradise-series-6-episode-1?seriesId=b08819c1","b088pqq5/death-in-paradise-series-6-episode-2?seriesId=b08819c1","b08blgyg/death-in-paradise-series-6-episode-3?seriesId=b08819c1","b08cbpkc/death-in-paradise-series-6-episode-4?seriesId=b08819c1","b08d3p0m/death-in-paradise-series-6-episode-5?seriesId=b08819c1","b08dzr44/death-in-paradise-series-6-episode-6?seriesId=b08819c1","b08fp6w8/death-in-paradise-series-6-episode-7?seriesId=b08819c1","b08gf5h8/death-in-paradise-series-6-episode-8?seriesId=b08819c1"]],
        7:[8,["b09lb4gl/death-in-paradise-series-7-episode-1?seriesId=b09lb4lk","b09m6cg2/death-in-paradise-series-7-episode-2?seriesId=b09lb4lk","b09p5z5m/death-in-paradise-series-7-episode-3?seriesId=b09lb4lk","b09pwhbh/death-in-paradise-series-7-episode-4?seriesId=b09lb4lk","b09qq8wn/death-in-paradise-series-7-episode-5?seriesId=b09lb4lk","b09rdn9j/death-in-paradise-series-7-episode-6?seriesId=b09lb4lk","b09s53b7/death-in-paradise-series-7-episode-7?seriesId=b09lb4lk","b09swscc/death-in-paradise-series-7-episode-8?seriesId=b09lb4lk"]],
        8:[8,["b0by8k8w/death-in-paradise-series-8-episode-1?seriesId=b0by8326","b0c07gbl/death-in-paradise-series-8-episode-2?seriesId=b0by8326","b0c13qyn/death-in-paradise-series-8-episode-3?seriesId=b0by8326","b0c1xc4g/death-in-paradise-series-8-episode-4?seriesId=b0by8326","b0c2ljmt/death-in-paradise-series-8-episode-5?seriesId=b0by8326","b0c3gz54/death-in-paradise-series-8-episode-6?seriesId=b0by8326","b0c47h4y/death-in-paradise-series-8-episode-7?seriesId=b0by8326","m0002vlg/death-in-paradise-series-8-episode-8?seriesId=b0by8326"]],
        9:[8,["m000d2tc/death-in-paradise-series-9-episode-1?seriesId=m000d2td","m000dck0/death-in-paradise-series-9-episode-2?seriesId=m000d2td","m000dlyt/death-in-paradise-series-9-episode-3?seriesId=m000d2td","m000dv6t/death-in-paradise-series-9-episode-4?seriesId=m000d2td","m000f2kb/death-in-paradise-series-9-episode-5?seriesId=m000d2td","m000f9ww/death-in-paradise-series-9-episode-6?seriesId=m000d2td","m000fk6j/death-in-paradise-series-9-episode-7?seriesId=m000d2td","m000fs5q/death-in-paradise-series-9-episode-8?seriesId=m000d2td"]],
        10:[8,["m000r0ps/death-in-paradise-series-10-episode-1?seriesId=m000r0pz","m000r7jt/death-in-paradise-series-10-episode-2?seriesId=m000r0pz","m000rj65/death-in-paradise-series-10-episode-3?seriesId=m000r0pz","m000rpty/death-in-paradise-series-10-episode-4?seriesId=m000r0pz","m000rz0p/death-in-paradise-series-10-episode-5?seriesId=m000r0pz","m000ryl7/death-in-paradise-series-10-episode-6?seriesId=m000r0pz","m000s5ck/death-in-paradise-series-10-episode-7?seriesId=m000r0pz","m000sdbf/death-in-paradise-series-10-episode-8?seriesId=m000r0pz"]],
        11:[8,["m00134xm/death-in-paradise-series-11-episode-1?seriesId=m00134xn","m0013d73/death-in-paradise-series-11-episode-2?seriesId=m00134xn","m0013njz/death-in-paradise-series-11-episode-3?seriesId=m00134xn","m0013w96/death-in-paradise-series-11-episode-4?seriesId=m00134xn","m00142ms/death-in-paradise-series-11-episode-5?seriesId=m00134xn","m0014b9j/death-in-paradise-series-11-episode-6?seriesId=m00134xn","m0014k9w/death-in-paradise-series-11-episode-7?seriesId=m00134xn","m0014skk/death-in-paradise-series-11-episode-8?seriesId=m00134xn"]],
    }
    series = Math.floor((Math.random()*12)+1);
    if (series == 12){
        var specials_dict = {
            // Special:[title,TMDB_link,BBC_iPlayer]
            1:["Christmas Special","https://www.themoviedb.org/tv/41956-death-in-paradise/season/0/episode/1?language=en-GB","https://www.bbc.co.uk/iplayer/episode/m0012w79/death-in-paradise-christmas-special?seriesId=m000r0pz"]
        }
        special_no = Math.floor((Math.random()*1)+1)
    document.getElementById("watcher").innerHTML = "<p>Death in Paradise Episode Selector, you've got a special!</p><p>"+specials[special_no][0]+" Special</p><p>Series "+specials[special_no][2]+"</p><p>Episode "+specials[special_no][3]+"</p><a href='"+specials[special_no][1]+"'><button>View Episode Details on TMDB</button></a><a href='"+specials[special_no][4]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
    }
    else{
        episode = Math.floor((Math.random()*episode_dict[series][0])+1);
        document.getElementById("watcher").innerHTML = "<p>Death in Paradise Episode Selector:</p><p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/41956-death-in-paradis/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a><a href='https://www.bbc.co.uk/iplayer/episode/"+episode_dict[series][1][episode-1]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
    }
}

function display_KuA_Episode(){
    var episode_dict = {
        //Series:[total_episodes,[ep_1_iPlayer_link,ep_2_iPlayer_link,..]]
        1:[6,["b007bk0z/keeping-up-appearances-series-1-1-daddys-accident","b01sp831/keeping-up-appearances-series-1-2-the-new-vicar?seriesId=b00hxtds","b01djr8z/keeping-up-appearances-series-1-3-stately-home?seriesId=b00hxtds","b01djsdp/keeping-up-appearances-series-1-4-the-charity-shop?seriesId=b00hxtds","b01djtdp/keeping-up-appearances-series-1-5-daisys-toyboy?seriesId=b00hxtds","b018jr9s/keeping-up-appearances-series-1-6-the-christening?seriesId=b00hxtds"]],
        2:[10,["b007bfxg/keeping-up-appearances-series-2-1-a-strange-man?seriesId=b007h8f4","b007b7ty/keeping-up-appearances-series-2-2-driving-mrs-fortescue?seriesId=b007h8f4","b0077kb8/keeping-up-appearances-series-2-3-the-candlelight-supper?seriesId=b007h8f4","b007b7yc/keeping-up-appearances-series-2-4-hyacinth-tees-off?seriesId=b007h8f4","b007brsg/keeping-up-appearances-series-2-5-problems-with-relatives?seriesId=b007h8f4","b007bg0k/keeping-up-appearances-series-2-6-onslows-birthday?seriesId=b007h8f4","b007b9px/keeping-up-appearances-series-2-7-singing-for-emmet?seriesId=b007h8f4","b007brhy/keeping-up-appearances-series-2-8-the-toy-store?seriesId=b007h8f4","b007b81t/keeping-up-appearances-series-2-9-the-three-piece-suite?seriesId=b007h8f4","b007b855/keeping-up-appearances-series-2-10-a-picnic-for-daddy?seriesId=b007h8f4"]],
        3:[7,["b007b692/keeping-up-appearances-series-3-1-early-retirement?seriesId=b0080bc4","b007b6dq/keeping-up-appearances-series-3-2-iron-age-remains?seriesId=b0080bc4","b007b6j7/keeping-up-appearances-series-3-3-violets-country-cottage?seriesId=b0080bc4","b007b6my/keeping-up-appearances-series-3-4-how-to-go-on-holiday-without-really-trying?seriesId=b0080bc4","b007b6rh/keeping-up-appearances-series-3-5-richards-new-hobby?seriesId=b0080bc4","b007b6wc/keeping-up-appearances-series-3-6-the-art-exhibition?seriesId=b0080bc4","b0077zlm/keeping-up-appearances-series-3-7-what-to-wear-when-yachting?seriesId=b0080bc4"]],
        4:[7,["b007b78b/keeping-up-appearances-series-4-1-a-job-for-richard?seriesId=b006xtzd","b007b7cy/keeping-up-appearances-series-4-2-country-retreat?seriesId=b006xtzd","b007b9yd/keeping-up-appearances-series-4-3-a-celebrity-for-the-barbecue?seriesId=b006xtzd","b007brqz/keeping-up-appearances-series-4-4-the-commodore?seriesId=b006xtzd","b007bb1t/keeping-up-appearances-series-4-5-looking-at-properties?seriesId=b006xtzd","b007brrq/keeping-up-appearances-series-4-6-please-mind-your-head?seriesId=b006xtzd","b007brs2/keeping-up-appearances-series-4-7-let-there-be-light?seriesId=b006xtzd"]],
        5:[10,["b007bs5r/keeping-up-appearances-series-5-episode-1?seriesId=b006xtbj","b007ckrt/keeping-up-appearances-series-5-episode-2?seriesId=b006xtbj","b007cky1/keeping-up-appearances-series-5-episode-3?seriesId=b006xtbj","b007bsqf/keeping-up-appearances-series-5-episode-4?seriesId=b006xtbj","b007bsws/keeping-up-appearances-series-5-episode-5?seriesId=b006xtbj","b007bt2g/keeping-up-appearances-series-5-episode-6?seriesId=b006xtbj","b007c3nz/keeping-up-appearances-series-5-episode-7?seriesId=b006xtbj","b007c95l/keeping-up-appearances-series-5-episode-8?seriesId=b006xtbj","b007c3t3/keeping-up-appearances-series-5-episode-9?seriesId=b006xtbj","b007btq9/keeping-up-appearances-series-5-episode-10?seriesId=b006xtbj"]]
    }
    series = Math.floor((Math.random()*6)+1);
    if (series == 6){
        specials_dict = {
            // Special,["title",TMDB_link,BBC_iPlayer_Link]
            1:["Sea Fever","https://www.themoviedb.org/tv/34-keeping-up-appearances/season/0/episode/2?language=en-GB","b007c3zx/keeping-up-appearances-sea-fever?seriesId=b006xtbj"],
            2:["1994 Christmas Special/Angel Gabriel Blue","https://www.themoviedb.org/tv/34-keeping-up-appearances/season/0/episode/3?language=en-GB","b007bypm/keeping-up-appearances-1994-christmas-special?seriesId=b006xtbj"],
            3:["1995 Christmas Special/Historical Pageant","https://www.themoviedb.org/tv/34-keeping-up-appearances/season/0/episode/4?language=en-GB","b007c963/keeping-up-appearances-1995-christmas-special?seriesId=b006xtbj"],
            4:["The Farther Christmas Suit","https://www.themoviedb.org/tv/34-keeping-up-appearances/season/0/episode/1?language=en-GB","b007c65w/keeping-up-appearances-the-father-christmas-suit?seriesId=b006xtbg-unindexed"]
        }
        special = Math.floor((Math.random()*4)+1);
        document.getElementById("watcher").innerHTML = "<p>Keeping Up Appearances, you've got a special!</p><p>"+specials_dict[special][0]+" Special</p><a href='"+specials_dict[special][1]+"'><button>View Episode Details on TMDB</button></a><a href='https://www.bbc.co.uk/iplayer/episode/"+specials_dict[special][2]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
    }
    else{
        episode = Math.floor((Math.random()*episode_dict[series][0])+1);
        document.getElementById("watcher").innerHTML = "<p>Keeping Up Appearances episode selector:</p><p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/34-keeping-up-appearances/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a><a href='https://www.bbc.co.uk/iplayer/episode/"+episode_dict[series][1][episode-1]+"' target='_blank' rel='noopener noreferrer'><button>Play on BBC iPlayer</button></a>"
    }
}

function display_Outnumberd_Episode(){
    var episode_dict = {
        // Not Avaliable on BBC iPlayer
        1:6,
        2:7,
        3:6,
        4:6,
        5:6,
    }
    series = Math.floor((Math.random()*6)+1);
    if (series == 6){
        specials_dict = {
            // Special,["title",TMDB_link]
            1:["The Robbers (Christmas Special 2009)","https://www.themoviedb.org/tv/12784-outnumbered/season/0/episode/3?language=en-GB"],
            2:["The Broken Santa (Christmas Special 2011)","https://www.themoviedb.org/tv/12784-outnumbered/season/0/episode/6?language=en-GB"],
            3:["The Sick Party (Christmas Special 2012)","https://www.themoviedb.org/tv/12784-outnumbered/season/0/episode/9?language=en-GB"],
            4:["Christmas Special 2016","https://www.themoviedb.org/tv/12784-outnumbered/season/0/episode/10?language=en-GB"]
        }
        special = Math.floor((Math.random()*4)+1);
        document.getElementById("watcher").innerHTML = "<p>Outnumbered episode selector, you've got a special!</p><p>"+specials_dict[special][0]+" Special</p><a href='"+specials_dict[special][1]+"'><button>View Episode Details on TMDB</button></a><p>Sadly Outnumbered isn't available on BBC iPlayer</p>"
    }
    else{
        episode = Math.floor((Math.random()*episode_dict[series])+1);
        document.getElementById("watcher").innerHTML = "<p>Outnumbered episode selector:</p><p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/12784-outnumberedr/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a><p>Sadly Outnumbered isn't available on BBC iPlayer :(</p>"
    }
}

// function display_My_Family_Episode(){
//     var episode_dict = {
//         //Series:[total_episodes,[ep_1_iPlayer_link,ep_2_iPlayer_link,..]]
//         1:[8,["p00bzd7c/my-family-series-1-1-the-serpents-tooth","p00bzd93/my-family-series-1-2-pain-in-the-class?seriesId=p009sv2m","p00bzdbs/my-family-series-1-3-droit-de-seigneur-ben?seriesId=p009sv2m","p00bzdf6/my-family-series-1-4-the-last-resort?seriesId=p009sv2m","p00bzdh2/my-family-series-1-5-farewell-to-alarms?seriesId=p009sv2m","p00bzdjc/my-family-series-1-6-death-takes-a-policy?seriesId=p009sv2m","p009sxtg/my-family-series-1-7-the-awkward-phase?seriesId=p009sv2m","p00bzdkv/my-family-series-1-8-much-ado-about-ben?seriesId=p009sv2m"]],
//         2:[12,["b007bw17/my-family-series-2-1-all-roads-lead-to-ramon?seriesId=b006xtzs","p00bzdmd/my-family-series-2-2-the-unkindest-cut?seriesId=b006xtzs","p00bzdp9/my-family-series-2-3-parisian-beauty?seriesId=b006xtzs","p00bzdrg/my-family-series-2-4-trust-never-sleeps?seriesId=b006xtzs","p00bzdtp/my-family-series-2-5-death-and-ben-take-a-holiday?seriesId=b006xtzs","p00bzdwm/my-family-series-2-6-driving-miss-crazy?seriesId=b006xtzs","p00bzdyh/my-family-series-2-7-i-second-that-emulsion?seriesId=b006xtzs","p00bzf0c/my-family-series-2-8-age-of-romance?seriesId=b006xtzs","p00bzf2b/my-family-series-2-9-get-cartier?seriesId=b006xtzs","p00bzf46/my-family-series-2-10-tis-pity?seriesId=b006xtzs","p00bzf6b/my-family-series-2-11-the-last-supper?seriesId=b006xtzs","p00bzf8h/my-family-series-2-12-ben-wants-to-be-a-millionaire?seriesId=b006xtzs","p00bzfc3/my-family-series-2-13-breakable?seriesId=b006xtzs"]],
//         3:[13,[]],
//         4:[13,[]],
//         5:[14,[]],
//         6:[7,[]],
//         7:[9,[]],
//         8:[7,[]],
//         9:[9,[]],
//         10:[7,[]],
//         11:[11,[]]
//     }
//     // console.log(Object.keys(episode_dict).length)
//     series = Math.floor((Math.random()*12)+1);
//     if (series == 12){
//         // Special,["title",TMDB_link]
//         var special_dict = {

//         }
//         special = Math.floor((Math.random()*4)+1);
//         document.getElementById("watcher").innerHTML = "<p>Outnumbered episode selector, you've got a special!</p><p>"+specials_dict[special][0]+" Special</p><a href='"+specials_dict[special][1]+"'><button>View Episode Details on TMDB</button></a><p>Sadly Outnumbered isn't available on BBC iPlayer</p>"
//     }
//     else{
//         episode = Math.floor((Math.random()*episode_dict[series][0])+1);
//         document.getElementById("watcher").innerHTML = "<p>My Family Episode Selector:</p><p>Series "+series+"</p><p>Episode "+episode+"</p><a href='https://www.themoviedb.org/tv/643-my-family/season/"+series+"/episode/"+episode+"'><button>View Episode Details on TMDB</button></a><a href='https://www.bbc.co.uk/iplayer/episode/"+episode_dict[series][1][episode-1]+"'><button>Play on BBC iPlayer</button></a>"
//     }
// }

function episode_selection(){
    series_selection = document.querySelector('input[name="series"]:checked').value;
    console.log(series_selection)
    if (series_selection == "death_in_paradise"){
        display_DiP_Episode()
    }
    else if (series_selection == "keeping_up_apperances"){
        display_KuA_Episode()
    }
    else if (series_selection == "outnumberd"){
        display_Outnumberd_Episode()
    }
    else if (series_selection == "tg_special"){
        display_TG_special()
    }
    else if (series_selection == "tg_episode"){
        display_TG_episode()
    }
    // else if (series_selection == "my_family"){
    //     display_My_Family_Episode()
    // }
    else{
        alert("I've broken")
    }
}