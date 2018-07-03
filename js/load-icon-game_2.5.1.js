$icon_currently_playing = "";
if (typeof (topGames.game[0].is_icon_game) != "undefined" && topGames.game[0].is_icon_game) {
    $j("div#top_five_link_1 a.top_five_link").addClass("top_icon_game");
    $j("div#top_five_link_1 a.top_icon_game").attr("href", "javascript: void(0);");
    $j("div#top_five_link_1").append('<div id="top_icon_game_' + topGames.game[0].game_id + '" class="icon_game_hov" style="display: none; "><div id="top_icon_game_placement_' + topGames.game[0].game_id + '"></div></div>');
    $j("div#top_five_link_1 a.top_icon_game").click(function () {
        return loadIconGame(topGames.game[0].name, topGames.game[0].game_id, 0, 1)
    })
}
function loadIconGame(k, j, f, a) {
    var c = new Date();
    var e = c.getDate();
    var h = c.getMonth();
    var i = c.getFullYear();
    i += 2;
    $j(".new_game_small").each(function (l, m) {
        if ($j(this).hasClass(j)) {
            $j(this).css({
                display: "none"
            });
            if (typeof (getNitromeCookie) != "undefined" && typeof (setNitromeCookie) != "undefined") {
                if (typeof (getNitromeCookie("new_games")) != "null" || typeof (getNitromeCookie("new_games")) != "undefined") {
                    $cookie = getNitromeCookie("new_games");
                    if ($cookie != "" && $cookie != null && typeof ($cookie) != "undefined") {
                        $cookie = $cookie.replace(j + "_", "");
                        setNitromeCookie("new_games", $cookie, i, h, e, "/");
                        $cookie = getNitromeCookie("new_games")
                    }
                }
            }
        }
    });
    if (typeof (a) == "undefined") {
        a = false
    }
    if (typeof (f) == "number") {
        $j("div.game_block_link").css({
            display: "block"
        });
        $j("div#game_block_link_" + f).css({
            display: "none"
        })
    } else {
        f = 0
    }
    if (!a) {
        if (j == topGames.game[0].game_id) {} else {
            if ($icon_currently_playing == j) {
                return false
            }
        }
    }
    if (typeof (k) == "undefined" || typeof (j) == "undefined") {
        return false
    }
    $j(".icon_game_hov").each(function (l) {
        $j(this).css({
            display: "none"
        });
        $j(this).text = ""
    });
    if (a) {
        document.getElementById("top_icon_game_" + j).style.display = "block";
        $icon_currently_playing = j;
        var b = {};
        var d = {
            menu: "false",
            scale: "noscale",
            allowFullscreen: "false",
            allowScriptAccess: "always",
            bgcolor: "#FFFFFF",
            wmode: "transparent"
        };
        var g = {
            id: j
        };
        swfobject.embedSWF(cdn_path + "games/" + j + "/" + j + ".swf", "top_icon_game_placement_" + j, "100%", "100%", "10.0.0", cdn_path + "games/expressInstall.swf", b, d, g)
    } else {
        document.getElementById("icon_game_" + j).style.display = "block";
        $icon_currently_playing = j;
        var b = {};
        var d = {
            menu: "false",
            scale: "noscale",
            allowFullscreen: "false",
            allowScriptAccess: "always",
            bgcolor: "#FFFFFF",
            wmode: "transparent"
        };
        var g = {
            id: j
        };
        swfobject.embedSWF(cdn_path + "games/" + j + "/" + j + ".swf", "icon_game_placement_" + j, "100%", "100%", "10.0.0", cdn_path + "games/expressInstall.swf", b, d, g)
    }
    if (typeof (nitromeTooltip) != "undefined"&&
        typeof (nitromeTooltip.hideTooltip) != "undefined"&&
        typeof (nitromeTooltip.is_active) != "undefined"
        ) {
        nitromeTooltip.hideTooltip();
        nitromeTooltip.is_active = false;
    }
    var dataType = 'json';
    var data = {"game_reference_id":j};
    var url = '/ajax/add_recently_played_game.php'; 
    $j.post(
                        url,
                        data,
                        function(sdata){
                            
                        },
                        dataType);
};