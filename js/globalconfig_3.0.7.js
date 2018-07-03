document.vars_for_user = {};

var www_path = "/";

nitromeAssets.latestVars = latestVars;
nitromeAssets.userVars = {};
nitromeAssets.facebook = {};
nitromeAssets.facebook.feeds = {};
nitromeAssets.facebook.all = {};
nitromeAssets.youtube = {};
nitromeAssets.difference = {};
nitromeAssets.youtube.videos = {};
nitromeAssets.youtube.all = {};
nitromeAssets.twitter = {};
nitromeAssets.twitter.feeds = {};
nitromeAssets.twitter.all = {};
nitromeAssets.twitter.init = function (a) {
  for (i = 0; i < 2; i++) {
    if (a) {
      p = '<p class="color">' + a[i].text + "</p>";
      nitromeAssets.twitter.feeds["feed_" + i] = {};
      nitromeAssets.twitter.feeds["feed_" + i].text = a[i].text;
      nitromeAssets.twitter.feeds["feed_" + i].date = a[i].created_at;
      nitromeAssets.twitter.all = a[i]
    }
  }
};
nitromeAssets.youtube.init = function (a) {
  nitromeAssets.youtube.all = a
};
nitromeAssets.facebook.init = function (a) {
  for (i = 0; i < 15; i++) {
    if (a) {
      nitromeAssets.facebook.feeds["feed_" + i] = {};
      nitromeAssets.facebook.feeds["feed_" + i].text = a.data[i].message;
      nitromeAssets.facebook.feeds["feed_" + i].date = a.data[i].created_time;
      nitromeAssets.facebook.feeds["feed_" + i].date = a.data[i].created_time;
      nitromeAssets.facebook.all = a[i]
    }
  }
};
var scriptTag = document.createElement("SCRIPT");
scriptTag.src = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=nitrome&callback=nitromeAssets.twitter.init";
scriptTag.type = "text/javascript";
var scriptTag = document.createElement("SCRIPT");
scriptTag.src = "http://graph.facebook.com/nitrome/posts?callback=nitromeAssets.facebook.init";
var scriptTag = document.createElement("SCRIPT");
scriptTag.src = "http://gdata.youtube.com/feeds/api/users/nitrome?alt=json&callback=nitromeAssets.youtube.init";
nitromeAssets.twitter.init();
nitromeAssets.facebook.init();

function getQueryString() {
  string = window.location.search.substring(1);
  nitromeAssets.query = {};
  nitromeAssets.query.keyValuePairs = {};
  var a = [];
  keyvals2 = [];
  a = string.split("&");
  for (i = 0; i < a.length; i++) {
    keyvals2 = a[i].split("=");
    nitromeAssets.query.keyValuePairs[keyvals2[0]] = keyvals2[1]
  }
  return nitromeAssets.query.keyValuePairs
}

getQueryString();

function echo(a) {
  console.log(a)
}

var iphone_checked;
var current_source = 'site';
var skin_related_imagery = [
  'footer_width_span.png',
  'skin-sprite_2.5.3.png'
];
var menu_items =
  [
    "games",
    "shop",
    "blog",
    "profile",
    "skins",
    "iphone",
    "touchy",
    "steam"
  ];
var menu_enabled =
  {
    home: 1,
    games: 1,
    shop: 1,
    blog: 1,
    profile: 1,
    skins: 1,
    iphone: 1,
    touchy: 1,
    steam: 1
  };
var corporate_items =
  [
    "home",
    "links",
    "faqs",
    "licensing",
    "distribution",
    "contact",
    "credits",
    "jobs"
  ];
var featureImage = {
  images: [
    "shop_banner.png",
    "NES.png",
    "NES.png",
    "blog-side-ad.png",
    "papercraft_ad.png"
  ],
  links: [
    "http://www.nitrome.com/shop/",
    cdn_path + "images/blog/nes1.jpg",
    cdn_path + "images/blog/nes1.jpg", "http://www.nitrome.com/blog/",
    "http://www.nitrome.com/shop/papercraft/"
  ],
  alts: [
    "Shop Now Open!",
    "Nitrome Enjoyment System",
    "Nitrome Enjoyment System",
    "New Blog!",
    "Papercraft"
  ],
  chance: [
    0,
    20,
    40,
    60,
    80,
    100
  ]
};
nitromeAssets.writePreview = function () {
  fillWithImage()
};
nitromeAssets.featuredAd = {
  adverts: [
    {
      image: "featured-flightless.png",
      link: "http://www.nitrome.com/steam/flightless/",
      alt: "Flightless Demo!"
    },
    {
      image: "featured-touchy-games.png",
      link: "http://www.nitrome.com/touchy-games-1.html",
      alt: "All Touchy Games!"
    }
  ],
  chance: [0, 50, 100]
};
var nitrome_ads = [
  "",
  "pixellove-gravityduck.png",
  "sidead-touchy.png",
  "sidead-touchy-2.png",
  "sidead-touchy-3.png",
  "sidead-touchy-4.png",
  "steam-flightless.png",
  "sidead-ib1.png",
  "sidead-ib2.png"
];
nitromeAssets.sideAd = {};
var nitrome_alts = [
  "",
  "gravity duck!",
  "Touchy Released!",
  "Touchy Released!",
  "Touchy Released!",
  "Touchy Released!",
  "Flightless",
  "Ice Breaker iOS!",
  "Ice Breaker iOS!"
];
var nitrome_links = [
  "",
  "http://www.nitrome.com/games/pixellove/gravityduck/",
  "http://www.nitrome.com/touchy/get/",
  "http://www.nitrome.com/touchy/get/",
  "http://www.nitrome.com/touchy/get/",
  "http://www.nitrome.com/touchy/get/",
  "http://www.nitrome.com/steam/flightless/",
  "http://www.nitrome.com/press/icebreaker-ios/",
  "http://www.nitrome.com/press/icebreaker-ios/"
];
var ad_chance = [
  0,
  10, //pixellove
  20, //touchy-1
  30, //touchy-2
  40, //touchy-3
  50, //touchy-4
  75, //flightless
  80, //icebreaker-1
  100 //icebreaker-2
];
nitromeAssets.sideAd.alts = nitrome_alts;
nitromeAssets.sideAd.links = nitrome_links;
nitromeAssets.sideAd.chance = ad_chance;

function setNitromeCookie(d, f, k, e, j, c, a, h) {
  var b = d + "=" + escape(f);
  if (k) {
    var g = new Date(k, e, j);
    b += "; expires=" + g.toGMTString()
  }
  if (c) {
    b += "; path=" + escape(c)
  }
  if (a) {
    b += "; domain=" + escape(a)
  }
  if (h) {
    b += "; secure"
  }
  document.cookie = b;
}

function getNitromeCookie(b) {
  var a = document.cookie.match(b + "=(.*?)(;|$)");
  if (a) {
    return (unescape(a[1]))
  } else {
    return null
  }
}

nitromeAssets.userVars.posts = parseInt(getNitromeCookie("total_posts"), 10);
nitromeAssets.userVars.games = parseInt(getNitromeCookie("total_games"), 10);
nitromeAssets.userVars.skins = parseInt(getNitromeCookie("total_skins"), 10);
var returning = getNitromeCookie("returning");
nitromeAssets.userVars.shopItems = parseInt(getNitromeCookie("total_shop_items"), 10);
var latestPosts = parseInt(latestVars.posts.total, 10);
var latestGames = parseInt(latestVars.games.total, 10);
var latestShopItems = parseInt(latestVars.shop_items.total, 10);
var latestSkins = parseInt(latestVars.skins.total, 10);
nitromeAssets.alphaSprite = {};
nitromeAssets.alphaSprite = {
  a: {posLeft: 0, width: 7},
  b: {posLeft: 8, width: 7},
  c: {posLeft: 15, width: 7},
  d: {posLeft: 22, width: 7},
  e: {posLeft: 29, width: 7},
  f: {posLeft: 35, width: 7},
  g: {posLeft: 44, width: 7},
  h: {posLeft: 50, width: 7},
  i: {posLeft: 57, width: 4},
  j: {posLeft: 60, width: 7},
  k: {posLeft: 68, width: 7},
  l: {posLeft: 75, width: 7},
  m: {posLeft: 83, width: 10},
  n: {posLeft: 92, width: 7},
  o: {posLeft: 99, width: 7},
  p: {posLeft: 106, width: 7},
  q: {posLeft: 112, width: 7},
  r: {posLeft: 119, width: 7},
  s: {posLeft: 127, width: 7},
  t: {posLeft: 133, width: 8},
  u: {posLeft: 141, width: 7},
  v: {posLeft: 148, width: 7},
  w: {posLeft: 155, width: 10},
  x: {posLeft: 165, width: 7},
  y: {posLeft: 172, width: 7},
  z: {posLeft: 179, width: 7}
};

function writeSprite(c) {
  for (i = 0; i < c.length; i++) {
    var b = i + 1;
    var d = i - 1;
    var a = [];
    a[i] = c.substr(i, 1);
    a[b] = c.substr(i + 1, 1);
    a[d] = c.substr(i - 1, 1);
    if (a[i] == " ") {
      $chara = document.createElement("DIV");
      $chara.style.height = "11px";
      $chara.style.cssText += "float:left";
      $chara.style.width = "7px";
      document.getElementById("debug").appendChild($chara)
    } else {
      $chara = document.createElement("DIV");
      if (nitromeAssets.alphaSprite[a[i]].posLeft != 0) {
        $chara.style.background = "url('" + cdn_path + "styles/images/alphasprite.png') -" + (nitromeAssets.alphaSprite[a[i]].posLeft - 1) + "px 0"
      } else {
        $chara.style.background = "url('" + cdn_path + "styles/images/alphasprite.png') 0 0"
      }
      $chara.style.height = "11px";
      $chara.style.cssText += "float:left";
      if (a[b] == " " || a[b] == undefined) {
        $chara.style.width = (nitromeAssets.alphaSprite[a[i]].width - 1) + "px"
      } else {
        if (a[d] != undefined && (a[d] == " " || a[d] == "")) {
          $chara.style.width = (nitromeAssets.alphaSprite[a[i]].width - 1) + "px"
        } else {
          $chara.style.width = nitromeAssets.alphaSprite[a[i]].width + "px"
        }
      }
      document.getElementById("debug").appendChild($chara)
    }
  }
}

nitromeAssets.numberSprite = {};
nitromeAssets.numberSprite.num = {
  1: {posLeft: 0, width: 4},
  2: {posLeft: 4, width: 6},
  3: {posLeft: 10, width: 6},
  4: {posLeft: 16, width: 6},
  5: {posLeft: 22, width: 6},
  6: {posLeft: 28, width: 6},
  7: {posLeft: 34, width: 6},
  8: {posLeft: 40, width: 6},
  9: {posLeft: 46, width: 6},
  0: {posLeft: 52, width: 6}
};
nitromeAssets.writeFeature = function () {
  var b = Math.floor(Math.random() * 100) + 1, a = 0;
  for (a = 0; a < ad_chance.length; a++) {
    if (b <= ad_chance[a]) {
      break
    }
  }
  if (a === ad_chance.length) {
    a--
  }
  fillWithImage("left_bottom_bg", cdn_path + "images/sidead/" + this.featureImage.i.image, "122", "205", "0", this.featureImage.i.link, "", this.featureImage.i.alt)
};

function checkSiteDisplayed() {
  var vis = document.getElementById('container').style.display;
  if (vis != 'block') {
    document.getElementById('container').style.display = 'block';
  }
}

window.setTimeout('checkSiteDisplayed();', 4000);
nitromeAssets.counter = function () {
  if (returning === null) {
    var e = new Date();
    var m = e.getDate();
    var f = e.getMonth();
    var l = e.getFullYear();
    e.getTime();
    var a = "";
    totalPosts = nitromeAssets.latestVars.posts.total;
    l += 2;
    setNitromeCookie("total_posts", totalPosts, l, f, m, "/");
    setNitromeCookie("total_games", nitromeAssets.latestVars.games.total, l, f, m, "/");
    setNitromeCookie("total_shop_items", nitromeAssets.latestVars.shop_items.total, l, f, m, "/");
    //setNitromeCookie("total_skins",nitromeAssets.latestVars.skins.total,l,f,m,"/");
    setNitromeCookie("returning", true, l, f, m, "/")
  } else {
    var h = false;
    var g = "";
    var b = [];
    nitromeAssets.difference = {
      postsDifference: 0,
      gamesDifference: 0,
      shopItemsDifference: 0,
      skinsDifference: 0
    };
    if ((nitromeAssets.userVars.posts) < (latestPosts)) {
      a = "post";
      nitromeAssets.numberSprite.post = {};
      g = "";
      g = latestPosts - nitromeAssets.userVars.posts;
      nitromeAssets.difference.postsDifference = g;
      if (g >= 99) {
        g = "99"
      } else {
        g = "" + g
      }
      if (g.length > 1) {
        document.getElementById(a + "s_count").style.width = "20px";
        document.getElementById(a + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < g.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.post[i] = g.substr(i, 1);
        dNum = parseInt(g, 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.post[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.post[i]].width;
        document.getElementById(a + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(a + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(a + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (g.length === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (g.length === 2 && divNum === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px";
            h = true
          }
          if (g.length === 2 && divNum === 2 && h === true) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "2px"
          }
          if (i === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "2px";
            document.getElementById(a + "s_new_" + (divNum - 1)).style.marginLeft = "4px"
          } else {
            document.getElementById(a + "s_count").style.textAlign = "center";
          }
        }
      }
      document.getElementById(a + "s_count").style.display = "block"
    }
    if (nitromeAssets.userVars.games > latestGames) {
      setNitromeCookie("total_games", latestGames, l, f, m, "/");
    }
    if (nitromeAssets.userVars.games < latestGames) {
      a = "game";
      nitromeAssets.numberSprite.game = {};
      g = "";
      g = latestGames - nitromeAssets.userVars.games;
      nitromeAssets.difference.gamesDifference = parseInt(g, 10);
      if (g >= 99) {
        g = "99";
      } else {
        g = "" + g;
      }
      if (g.length > 1) {
        document.getElementById(a + "s_count").style.width = "20px";
        document.getElementById(a + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent";
        document.getElementById(a + "s_count").style.backgroundPosition = "-181px -149px"
      }
      for (i = 0; i < g.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.game[i] = g.substr(i, 1);
        dNum = parseInt(g[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[parseInt(nitromeAssets.numberSprite.game[i])].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.game[i]].width;
        document.getElementById(a + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(a + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(a + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (g.length === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (g.length === 2 && divNum === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px";
            h = true
          }
          if (g.length === 2 && divNum === 2 && h === true) {
            document.getElementById(a + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            h = false
          } else {
            document.getElementById(a + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(a + "s_count").style.display = "block"
    } else {
      if (getNitromeCookie("new_games") != undefined) {
        a = "game";
        var j = [];
        var c = [];
        nitromeAssets.numberSprite.game = {};
        $ng_string = getNitromeCookie("new_games");
        j = $ng_string.split("_");
        for (i = 0; i < j.length; i++) {
          if (j[i] != "") {
            c[i] = j
          }
        }
        g = "" + c.length;
        if (g >= 99) {
          g = "99"
        } else {
          g = "" + g
        }
        if (g.length > 1) {
          document.getElementById(a + "s_count").style.width = "20px";
          document.getElementById(a + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent";
          document.getElementById(a + "s_count").style.backgroundPosition = "-181px -149px"
        }
        for (i = 0; i < g.length; i++) {
          divNum = i + 1;
          nitromeAssets.numberSprite.game[i] = g.substr(i, 1);
          dNum = parseInt(g[i], 10);
          leftPosIE = nitromeAssets.numberSprite.num[parseInt(nitromeAssets.numberSprite.game[i])].posLeft;
          width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.game[i]].width;
          document.getElementById(a + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
          document.getElementById(a + "s_new_" + divNum).style.width = width + "px";
          document.getElementById(a + "s_new_" + divNum).style.height = "8px";
          if (dNum === 1) {
            if (g.length === 1) {
              document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px"
            }
            if (g.length === 2 && divNum === 1) {
              document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px";
              h = true
            }
            if (g.length === 2 && divNum === 2 && h === true) {
              document.getElementById(a + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
              h = false
            } else {
              document.getElementById(a + "s_count").style.textAlign = "center"
            }
          }
        }
        if (g > 0) {
          document.getElementById(a + "s_count").style.display = "block"
        }
      }
    }
    if (nitromeAssets.userVars.shopItems < latestShopItems) {
      a = "shop_item";
      nitromeAssets.numberSprite.shop = {};
      g = "";
      g = latestShopItems - nitromeAssets.userVars.shopItems;
      nitromeAssets.difference.shopsDifference = g;
      if (g >= 99) {
        g = "99"
      } else {
        g = "" + g
      }
      if (g.length > 1) {
        document.getElementById(a + "s_count").style.width = "20px";
        document.getElementById(a + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < g.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.shop[i] = g.substr(i, 1);
        dNum = parseInt(g[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.shop[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.shop[i]].width;
        document.getElementById(a + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(a + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(a + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (g.length === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (g.length === 2 && divNum === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px";
            h = true
          }
          if (g.length === 2 && divNum === 2 && h === true) {
            document.getElementById(a + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            h = false
          } else {
            document.getElementById(a + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(a + "s_count").style.display = "block"
    }
    if (nitromeAssets.userVars.skins < latestSkins) {
      a = "skin";
      nitromeAssets.numberSprite.skin = {};
      g = "";
      g = latestSkins - nitromeAssets.userVars.skins;
      nitromeAssets.difference.skinsDifference = g;
      if (g >= 99) {
        g = "99"
      } else {
        g = "" + g
      }
      if (g.length > 1) {
        document.getElementById(a + "s_count").style.width = "20px";
        document.getElementById(a + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < g.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.skin[i] = g.substr(i, 1);
        dNum = parseInt(g[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.skin[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.skin[i]].width;
        document.getElementById(a + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(a + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(a + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (g.length === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (g.length === 2 && divNum === 1) {
            document.getElementById(a + "s_new_" + divNum).style.marginLeft = "4px";
            h = true
          }
          if (g.length === 2 && divNum === 2 && h === true) {
            document.getElementById(a + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            h = false
          } else {
            document.getElementById(a + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(a + "s_count").style.display = "block"
    }
  }
};
var top_req;

function fillWithImage(k, b, f, e, c, d, a, g) {
  var j = "";
  if (g !== "") {
    j += "<a href='";
    j += g;
    j += "' />"
  }
  j += "<img src='";
  j += b;
  j += "' width='";
  j += f;
  j += "' height='";
  j += e;
  if (a !== "") {
    j += "' name='";
    j += a
  }
  if (c !== "") {
    j += "' border='";
    j += c
  }
  if (d !== "") {
    j += "' alt='";
    j += d
  }
  j += "' />";
  if (g !== "") {
    j += "</a>"
  }
  document.getElementById(k).innerHTML = j
}

function cssFillDiv(a, b, c, d, e) {
  var images_length = skin_related_imagery.length;
  if (b.search('http://') == -1) {
    for (i = 0; i < images_length; i++) {
      if (b == skin_related_imagery[i]) {
        if (b == 'skin-sprite_2.5.3.png' ||
          b == 'skin_sprite.png') {
          _final = images_folder + 'skin-sprite_2.5.3.png';
        } else {
          _final = images_folder + b;
        }
        break;
      } else {
        _final = cdn_path + b;
      }
    }
  } else {
    _final = b;
  }
  //stripped down cssFillDiv function!
  document.getElementById(a).style.backgroundImage = "url(" + _final + ")";
  document.getElementById(a).style.backgroundPosition = c + " " + d;
}

function removeWhitespace(a) {
  var c;
  for (c = 0; c < a.childNodes.length; c++) {
    var b = a.childNodes[c];
    if (b.nodeType === 1) {
      removeWhitespace(b)
    }
    if (((/^\s+$/.test(b.nodeValue))) && (b.nodeType === 3)) {
      a.removeChild(a.childNodes[c--])
    }
  }
  return (a)
}

writeFeaturedAd = function () {
};
nitromeAssets.sideAd.writeSideAd = function () {
  var a = Math.floor(Math.random() * 100) + 1;
  for (i = 0; i < ad_chance.length; i++) {
    if (a <= ad_chance[i]) {
      break
    }
  }
  if (i === ad_chance.length) {
    i--
  }
  fillWithImage("left_bottom_bg", cdn_path + "images/sidead/" + nitrome_ads[i] + "?" + nitromeAssets.rString, "160", "204", "0", nitrome_alts[i], "", nitrome_links[i])
};

function writePageLayout() {
  cssFillDiv("posts_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  cssFillDiv("shop_items_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  cssFillDiv("games_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  $j('#login_bg').css({"background-image": 'url(' + images_folder + 'skin-sprite_2.5.3.png)'});
  cssFillDiv("search_filter", images_folder + "skin-sprite_2.5.3.png", "-1188px", "-154px");

  cssFillDiv("left_top_bar", images_folder + "skin-sprite_2.5.3.png", "-162px", "-21px");
  cssFillDiv("left_bottom_bar", images_folder + "skin-sprite_2.5.3.png", "-324px", "-21px");
  document.getElementById("posts_count").style.top = "100px";
  document.getElementById("shop_items_count").style.top = "100px";
  document.getElementById("games_count").style.top = "100px";
}

function writeLogin() {
  cssFillDiv("login_bar", images_folder + "skin-sprite_2.5.3.png", "", "");
  cssFillDiv("login_bg", images_folder + "skin-sprite-2.png", "", "");
}

function writeMenu() {
  writePageLayout();
  cssFillDiv("menu_box", "skin-sprite_2.5.3.png", "0", "-41px");
  cssFillDiv("games_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  cssFillDiv("shop_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  cssFillDiv("blog_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  cssFillDiv("profile_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  cssFillDiv("skins_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  if (typeof(document.getElementById('iphone_link')) != "undefined") {
    cssFillDiv("iphone_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  }
  if (typeof(document.getElementById('touchy_link')) != "undefined") {
    cssFillDiv("touchy_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  }
  if (typeof(document.getElementById('steam_link')) != "undefined") {
    cssFillDiv("steam_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  }
  cssFillDiv("menu_fill", "skin-sprite_2.5.3.png", "0px", "-127px");
  cssFillDiv("menu_end", "skin-sprite_2.5.3.png", "-336px", "-41px");
}

function writeSocialLinks() {
  //deprecated
}

function menuRollover(a) {
  if (a == "games") {
    document.getElementById(a + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-125px 5px";
    document.getElementById("games_count").style.top = "105px"
  }
  else if (a == "shop") {
    document.getElementById(a + "_link").style.backgroundPosition = "-241px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-202px 5px";
    document.getElementById("shop_items_count").style.top = "105px"
  }
  else if (a == "blog") {
    document.getElementById(a + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-280px 5px ";
    document.getElementById("posts_count").style.top = "105px"
  }
  else if (a == "profile") {
    document.getElementById(a + "_link").style.backgroundPosition = "-241px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-433px 5px";
    document.getElementById(a + "_count").style.top = "105px"
  }
  else if (a == "skins") {
    document.getElementById(a + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-357px 5px";
    document.getElementById(a + "_count").style.top = "105px"
  }
  else if (a == "iphone") {
    document.getElementById(a + "_link").style.backgroundPosition = "-241px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 5px";
    document.getElementById(a + "_count").style.top = "105px"
  }
  else if (a == "touchy") {
    document.getElementById(a + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 5px";
    document.getElementById(a + "_count").style.top = "105px"
  }
  else if (a == "steam") {
    document.getElementById(a + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 5px";
    document.getElementById(a + "_count").style.top = "105px"
  }
  else if (a == "facebook") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-983px -123px"
  }
  else if (a == "twitter") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-1079px -123px"
  }
  else if (a == "youtube") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-1175px -123px"
  }
}

function menuRollout(a) {
  if (a == "games") {
    document.getElementById(a + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-125px 0";
    document.getElementById("games_count").style.top = "100px"
  }
  else if (a == "shop") {
    document.getElementById(a + "_link").style.backgroundPosition = "-171px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-202px 0";
    document.getElementById("shop_items_count").style.top = "100px"
  }
  else if (a == "blog") {
    document.getElementById(a + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-280px 0 ";
    document.getElementById("posts_count").style.top = "100px"
  }
  if (a == "profile") {
    document.getElementById(a + "_link").style.backgroundPosition = "-171px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-433px 0";
    document.getElementById(a + "_count").style.top = "100px"
  }
  else if (a == "skins") {
    document.getElementById(a + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "-357px 0";
    document.getElementById(a + "_count").style.top = "100px"
  }
  else if (a == "iphone") {
    document.getElementById(a + "_link").style.backgroundPosition = "-171px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 0";
    document.getElementById(a + "_count").style.top = "100px"
  }
  else if (a == "touchy") {
    document.getElementById(a + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 0";
    document.getElementById(a + "_count").style.top = "100px"
  }
  else if (a == "steam") {
    document.getElementById(a + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(a + "_png").style.backgroundPosition = "0 0";
    document.getElementById(a + "_count").style.top = "100px"
  }
  else if (a == "facebook") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-983px -93px"
  }
  else if (a == "twitter") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-1079px -93px"
  }
  else if (a == "youtube") {
    document.getElementById(a + "_link_icon").style.backgroundPosition = "-1175px -93px"
  }
}

function writeTopBar() {
  cssFillDiv("top_bar_box", "skin-sprite_2.5.3.png", "0", "-178px")
}

function writeAdDescriptions() {
}

function writeTopGames() {
  writeTopFivePic(topGames.game[0].game_id, topGames.game[0].name);
  for (var b = 0; b <= 4; b++) {
    var c = "";
    c += "<a class='top_five_link' href='";
    c += www_path;
    c += "games/";
    c += topGames.game[b].game_id;
    c += "' onmouseover='nitromeTooltip.displayGameData({&#39;title&#39;:&#39;" + topGames.game[b].name + "&#39;,&#39;description&#39;:&#39;&#39;,&#39;category&#39;:&#39;&#39;,&#39;hearts&#39;:&#39;&#39;});'";
    c += c += topGames.game[b].game_id;
    c += "' onMouseOut='topFiveRollover(&#39;";
    c += topGames.game[b].game_id;
    c += "&#39;)'>";
    if (topGames.game[b].name.length < 13) {
      c += topGames.game[b].name
    } else {
      c += topGames.game[b].name_abbr
    }
    c += "</a>";
    document.getElementById("top_five_text_" + (b + 1)).innerHTML = c;
    var a = "";
    a += "<a class='top_five_link' onmouseover='topRollover(&#39;top_five_text_" + (b + 1) + "&#39;,&#39;" + (b + 1) + "&#39;)' onmouseout='topRollout(&#39;top_five_text_" + (b + 1) + "&#39;,&#39;" + (b + 1) + "&#39;);' href='" + www_path + "games/" + topGames.game[b].game_id;
    a += "'><img src='" + cdn_path + "styles/images/trans.gif' width='100%' height='100%' /></a>";
    document.getElementById("top_five_link_" + (b + 1)).innerHTML = a
  }
}

function topRollover(a, b) {
  if (b == 1) {
    document.getElementById("top_game").style.opacity = ".7";
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-69px -68px"
  }
  else if (b == 2) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-34px -68px"
  }
  else if (b == 3) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-34px -101px"
  }
  else if (b == 4) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-34px -134px"
  }
  else if (b == 5) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-34px -167px"
  }
}

function topRollout(a, b) {
  if (b == 1) {
    document.getElementById("top_game").style.opacity = "1";
    document.getElementById(a).style.opacity = "1";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "0px 0px"
  }
  else if (b == 2) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-0px -68px"
  }
  else if (b == 3) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-0px -101px"
  }
  else if (b == 4) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-0px -134px"
  }
  else if (b == 5) {
    document.getElementById(a).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + b).style.backgroundPosition = "-0px -167px"
  }
  document.getElementById(a).style.opacity = "1";
  document.getElementById("top_five_overlay_" + b).style.opacity = "1"
}

function topFiveRollover(b) {
  var a = thumbnails_folder;
  a += "tf_";
  a += b;
  a += ".png"
}

function writeTopFivePic(c, a, b) {
  if (!b) {
    b = "Most Hearted!"
  }
  fillWithImage("top_game", thumbnails_folder + "ico_" + c + ".png", "60", "60", "0", b, "topfivepic", root_dir + "games/" + c + "/")
}

function writeCorporate() {
  cssFillDiv("corporate", images_folder + "footer_width_span.png", "0", "0");
  cssFillDiv("corporate_copyright", images_folder + "corporate_copyright.png", "0", "0");
  var corporateEnd = document.createElement('DIV');
  corporateEnd.id = 'corporate_end';
  corporateEnd.style.width = '11px';
  corporateEnd.style.height = '21px';
  corporateEnd.style.backgroundRepeat = 'no-repeat';
  corporateEnd.style.position = 'absolute';
  corporateEnd.style.top = '0';
  corporateEnd.style.left = '735px';
  corporateEnd.style.zIndex = '108';
  document.getElementById('corporate').appendChild(corporateEnd);
  cssFillDiv("corporate_end", images_folder + 'corporate_copyright.png', '-162px', '0');
  cssFillDiv("corporate_spacer", images_folder + 'corporate_copyright.png', '-161px', '0');
  document.getElementById("corporate").style.backgroundPosition = "0 0";
  cssFillDiv("links_corp", "skin-sprite_2.5.3.png", "-258px", "-1px");
  cssFillDiv("faqs_corp", "skin-sprite_2.5.3.png", "-313px", "-1px");
  cssFillDiv("licensing_corp", "skin-sprite_2.5.3.png", "-370px", "-1px");
  cssFillDiv("distribution_corp", "skin-sprite_2.5.3.png", "-444px", "-1px");
  cssFillDiv("contact_corp", "skin-sprite_2.5.3.png", "-544px", "-1px");
  cssFillDiv("credits_corp", "skin-sprite_2.5.3.png", "-618px", "-1px");
  cssFillDiv("jobs_corp", "skin-sprite_2.5.3.png", "-692px", "-1px");
  $j('#corporate_facebook').css({"background-image": "url('" + images_folder + "corporate_social.png')"});
  $j('#corporate_twitter').css({"background-image": "url('" + images_folder + "corporate_social.png')"});
  $j('#corporate_youtube').css({"background-image": "url('" + images_folder + "corporate_social.png')"});

  for (var b = 0; b <= 7; b++) {
    var a = "<a href='";
    if (corporate_items[b] == "home") {
      a += www_path;
      a += "index.html"
    } else {
      a += www_path;
      a += corporate_items[b]
    }
    a += "' ><img src='";
    a += images_folder;
    a += "trans.gif' width='100%' height='100%' border='0' onmouseover='corpRollover(&#39;";
    a += corporate_items[b];
    a += "&#39;);' onmouseout='corpRollout(&#39;" + corporate_items[b] + "&#39;);' /></a>";
    document.getElementById(corporate_items[b] + "_corp").innerHTML = a
  }

//new box 1
  //create items for new box creation
  newShadow = document.createElement('DIV');
  newBox = document.getElementById('new_elem_box');
  newBoxInner = document.getElementById('new_elem_box_inner');
  // build new box
  newBox.id = 'new_elem_box';
  newBox.className = 'border_color';
  newBox.style.width = '302px';
  newBox.style.height = '73px';
  newBox.style.left = '744px';
  newBox.style.top = '436px';
  newBox.style.position = 'absolute';
  newBox.style.zIndex = '112';
  document.getElementById('container').appendChild(newBox);

  // build new box_inner
  newBoxInner.id = 'new_elem_box_inner';
  newBoxInner.style.width = '300px';
  newBoxInner.style.height = '70px';
  newBoxInner.style.left = '745px';
  newBoxInner.style.top = '437px';
  newBoxInner.style.position = 'absolute';
  newBoxInner.style.backgroundColor = '#ffffff';
  newBoxInner.style.zIndex = '125';

  //build new box shadow
  newShadow.id = 'new_elem_shadow';
  newShadow.className = 'border_color';
  newShadow.style.width = '302px';
  newShadow.style.height = '73px';
  newShadow.style.left = '739px';
  newShadow.style.top = '441px';
  newShadow.style.position = 'absolute';
  newShadow.style.background = '#000000';
  newShadow.style.opacity = '0.3';
  newShadow.style.zIndex = '52';
  newShadow.style.filter = 'alpha(opacity = 30)';
  document.getElementById('container').appendChild(newShadow);
  cssFillDiv('new_elem_top_bar_2', 'skin-sprite_2.5.3.png', '-982px', '0');
  cssFillDiv('new_elem_title_2', 'skin-sprite_2.5.3.png', '-983px', '-20px');
}

function corpRollover(a) {
  if (a == "home") {
    document.getElementById("corporate").style.backgroundPosition = "0 0"
  } else if (a == "links") {
    cssFillDiv("links_corp", "skin-sprite_2.5.3.png", "-258px", "-226px");
  }
  else if (a == "videos_btn") {
    cssFillDiv("small_more_videos_btn", "skin-sprite_2.5.3.png", "-1207px", "-38px");
  }
  else if (a == "faqs") {
    cssFillDiv("faqs_corp", "skin-sprite_2.5.3.png", "-313px", "-226px");
  }
  else if (a == "licensing") {
    cssFillDiv("licensing_corp", "skin-sprite_2.5.3.png", "-370px ", "-226px");
  }
  else if (a == "distribution") {
    cssFillDiv("distribution_corp", "skin-sprite_2.5.3.png", "-444px", "-226px");
  } else if (a == "contact") {
    cssFillDiv("contact_corp", "skin-sprite_2.5.3.png", "-544px", "-226px");
  } else if (a == "credits") {
    cssFillDiv("credits_corp", "skin-sprite_2.5.3.png", "-618px", "-226px");
  } else if (a == "jobs") {
    cssFillDiv("jobs_corp", "skin-sprite_2.5.3.png", "-692px", "-226px");
  }
}

function writeLogo() {
  //deprecated
}

function corpRollout(a) {
  if (a == "home") {
    document.getElementById("corporate").style.backgroundPosition = "0 0";
  } else if (a == "links") {
    cssFillDiv("links_corp", images_folder + "skin-sprite_2.5.3.png", "-258px", "-1px");
  } else if (a == "videos_btn") {
    cssFillDiv("small_more_videos_btn", images_folder + "skin-sprite_2.5.3.png", "-1207px", "-19px");
  } else if (a == "faqs") {
    cssFillDiv("faqs_corp", images_folder + "skin-sprite_2.5.3.png", "-313px", "-1px");
  } else if (a == "licensing") {
    cssFillDiv("licensing_corp", images_folder + "skin-sprite_2.5.3.png", "-370px", "-1px");
  } else if (a == "distribution") {
    cssFillDiv("distribution_corp", images_folder + "skin-sprite_2.5.3.png", "-444px", "-1px");
  } else if (a == "contact") {
    cssFillDiv("contact_corp", images_folder + "skin-sprite_2.5.3.png", "-544px", "-1px");
  } else if (a == "credits") {
    cssFillDiv("credits_corp", images_folder + "skin-sprite_2.5.3.png", "-618px", "-1px");
  } else if (a == "jobs") {
    cssFillDiv("jobs_corp", images_folder + "skin-sprite_2.5.3.png", "-692px", "-1px");
  }
}

nitromeAssets.hideMouse = function () {
};

function loadTheOthers() {
  $container = document.getElementById('container');

  $otherRectangle = document.createElement('DIV');
  $otherRectangle.id = 'other_rect';
  $otherRectangle.style.display = 'block';
  $otherRectangle.style.width = (249 + 51) + 'px';
  $otherRectangle.style.height = (278 - 28) + 'px';
  $otherRectangle.style.top = '188px';
  $otherRectangle.style.left = '745px';
  $otherRectangle.style.backgroundImage = '';
  $otherRectangle.style.backgroundColor = '#f00';
  $otherRectangle.style.position = 'absolute';
  $otherRectangle.style.zIndex = '999';
  $otherRectangle.innerHTML = 'Please turn off your ad blocker!';


  $otherTop = document.createElement('DIV');
  $otherTop.id = 'other_top';
  $otherTop.style.display = 'block';
  $otherTop.style.width = (719 + 9) + 'px';
  $otherTop.style.height = (42 + 48) + 'px';
  $otherTop.style.top = '1px';
  $otherTop.style.left = '1px';
  $otherTop.style.backgroundImage = '';
  $otherTop.style.backgroundColor = '#f00';
  $otherTop.style.position = 'absolute';
  $otherTop.style.zIndex = '999';
  $otherTop.innerHTML = 'Please turn off your ad blocker!';

  $container.appendChild($otherTop);
  $container.appendChild($otherRectangle);
}

if (typeof(GA_googleFillSlot) == "undefined") {
  //loadTheOthers();
}
iphone_checked = parseInt(getNitromeCookie('i_time'), 10);
if (isNaN(iphone_checked)) {
  iphone_checked = 0;
}
iphone_latest = 20120907;
if (iphone_checked < iphone_latest) {
  document.getElementById("iphone_count").style.display = "block";
}

if (typeof(getNitromeCookie('skin')) == 'string' && getNitromeCookie('skin') == 'touchy') {
}

function skinLinkResize() {
  inner_width = $j(window).width();
  container_width = $j('#container').width();
  if (window.console) {
    console.log(inner_width, container_width);
  }
  if (inner_width > container_width) {
    $j('#link_left').css({display: "block"});
    $j('#link_right').css({display: "block"});
    left_width = $j('#link_left').width();
    right_width = $j('#link_right').width();
    left_width -= (container_width / 2);
    right_width -= (container_width / 2) - 7;
    $j('#link_left').width(left_width);
    $j('#link_right').width(right_width);
  } else {
    $j('#link_left').css({display: "none"});
    $j('#link_right').css({display: "none"});
  }
}

$j(document).ready(function () {
  skinLinkResize();
});
// search creation code
var filter_toggle = false;
var types = ['games', 'blog', 'users'];
var cached_search = 'Search!';

function cacheSearch() {
  cached_search = document.forms.namedItem('search').id.value;
}

function searchFill() {
  document.forms.namedItem('search').id.value = cached_search;
}

function searchRoll(icon) {
  if (icon == 'game') {
    cssFillDiv('game_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-287px', '-115px');
  }
  if (icon == 'blog') {
    cssFillDiv('post_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-307px', '-115px');
  }
  if (icon == 'user') {
    cssFillDiv('user_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-327px', '-115px');
  }
}

function explainIcon(icon) {
  if (icon == 'game') {
    document.forms.namedItem('search').id.value = 'Search our games... ';
    cssFillDiv('game_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-287px', '-128px');
  }
  if (icon == 'blog') {
    document.forms.namedItem('search').id.value = 'Search our blog posts... ';
    cssFillDiv('post_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-307px', '-128px');
  }
  if (icon == 'user') {
    document.forms.namedItem('search').id.value = 'Search through users... ';
    cssFillDiv('user_filter_search', cdn_path + 'styles/images/site_spritev7.png', '-327px', '-128px');
  }
}

function setSearchType(type) {
  document.forms.namedItem('search').search_type.value = type;
  if (typeof(document.getElementById('filter_icon_' + type)) != "undefined") {
    document.getElementById('filter_icon_' + type).style.display = 'block';
    document.getElementById('filter_icons').style.display = 'none';
  }
  searchFill();
  if (type == 'users' && current_source == 'site') {
    setSearchSource('user');
  }
  if (type != 'users' && current_source == 'user') {
    setSearchSource('site');
  }
  return toggleFilter(filter_toggle, true);
}

function setSearchSource(type) {
  if (type == 'user') {
    $j('#main_search_field').autocomplete(
      {
        source: "/ajax/user_autocomplete.php",
        minLength: 3,
        select: function (event, ui) {
          $j('#main_search_field').val(ui.item.label);
          return false;
        },
        focus: function (event, ui) {
          $j('#main_search_field').val(ui.item.label);
          return false;
        },
        search: function (event, ui) {
          console.log('$j(\'#main_search_field .loading\').show();');
          $j('#main_search_field .loading').show();
        },
        response: function (event, ui) {
          console.log('$j(\'#main_search_field .loading\').hide();');
          $j('#main_search_field .loading').hide();
        }
      }
    );
    current_source = 'user';
  }
  else if (type == 'site') {
    $j('#main_search_field').autocomplete({
      source: autoCompleteArray,
      minLength: 3,
      search: function (event, ui) {
        console.log('$j(\'#main_search_field .loading\').show();');
        $j('#main_search_field .loading').show();
      },
      response: function (event, ui) {
        console.log('$j(\'#main_search_field .loading\').hide();');
        $j('#main_search_field .loading').hide();
      }
    });
    current_source = 'site';
  }
  return true;
}

function toggleFilter(state, selected) {
  if (typeof(selected) == "undefined") {
    selected = false;

  }
  if (selected) {
    subAmount = 29
  } else {
    subAmount = 0
  }
  $j('#search_filter').stop(0, 0);
  $j('#search_filter_link').stop(0, 0);
  if (state) {
    searchFill();
    $j('#search_filter').css({"background": "url('" + images_folder + "skin-sprite_2.5.3.png') -1188px -154px"});
    document.getElementById('search_type_game').style.display = 'none';
    document.getElementById('search_type_blog').style.display = 'none';
    $j('#search_filter_link').animate({
      left: (234 - subAmount) + 'px'
    }, 300, function () {
      // Animation complete.
    });
    $j('#search_bar .login_input').animate({
      width: (220 - subAmount) + 'px'
    }, 300, function () {
      // Animation complete.
    });
    $j('#search_filter').animate({
      width: '59px',
      left: (987 - subAmount) + 'px'
    }, 300, function () {
      // Animation complete.
    });
    state = false;
  } else {
    cacheSearch();
    $j('#search_filter').css({"background": "url('" + images_folder + "skin-sprite_2.5.3.png') -1188px -180px"});
    for (i = 0; i < types.length; i++) {
      document.getElementById('filter_icon_' + types[i]).style.display = 'none';
    }
    document.getElementById('filter_icons').style.display = 'block';
    document.getElementById('search_type_game').style.display = 'block';
    document.getElementById('search_type_blog').style.display = 'block';
    $j('#search_filter_link').animate({
      left: '162px'
    }, 300, function () {
      // Animation complete.
    });
    $j('#search_bar .login_input').animate({
      width: '149px'
    }, 300, function () {
      // Animation complete.
    });
    $j('#search_filter').animate({
      width: '85px',
      left: '915px'
    }, 300, function () {
      // Animation complete.
    });
    state = true;
  }
  return state;
}

function showModal(message, modal_id, message_id) {
  $j(message_id).html(message);
  $height = $j(modal_id).height();
  $width = $j(modal_id).width();
  $windowHeight = $j(window).height();
  $windowWidth = $j(window).width();
  if ($windowWidth > 1114) {
    $windowWidth -= 90;
  }
  $j(modal_id).css({display: 'inline-block'});
  $j(modal_id).offset({
    top: $j(window).scrollTop() + (($windowHeight / 2) - ($height / 2)),
    left: ($windowWidth / 2) - ($width / 2)
  });
}

function getUserBadges() {
  //console.log('getting user badges');
}

$badgeCheck = window.setTimeout('getUserBadges();', 1000 * 60 * 3);
$j('.top_empty_badge').css({'background-image': 'url("' + images_folder + 'empty_badge_sprite.png")'});
var mid_R_hex = mid_colour.substr(0, 2);
var mid_G_hex = mid_colour.substr(2, 2);
var mid_B_hex = mid_colour.substr(4, 2);
var mid_R = parseInt(mid_R_hex, 16);
var mid_G = parseInt(mid_G_hex, 16);
var mid_B = parseInt(mid_B_hex, 16);

$j('.login_wait_screen').css({'background-color': '#' + mid_colour});
$j('.login_wait_screen').css({'background-color': 'rgba(' + mid_R + ',' + mid_G + ',' + mid_B + ',.7)'});

function takeAvatarIcon(x, y, object_id) {
  if (typeof(object_id) == 'undefined') {
    object_id = '#game_object';
  }
  realX = parseInt(x, 10) + $j(object_id).offset().left;
  realY = parseInt(y, 10) + $j(object_id).offset().top;
  $j('body').append('<img class="game_avatar_switch" src="' + cdn_path + 'styles/images/game_icons/ig_ticker_icon-avatar.png"/>');
  $j('.game_avatar_switch').css({
    position: 'absolute',
    left: realX,
    top: realY,
    'z-index': 9999
  });
  var $avt_offset = $j('#top_login_avatar').offset();
  var $half_avt_width = ($j('#top_login_avatar').width() / 2) - (12.5);
  var $half_avt_height = ($j('#top_login_avatar').height() / 2) - (12.5);
  $j('.game_avatar_switch').animate({
    top: $avt_offset.top + $half_avt_height,
    left: $avt_offset.left + $half_avt_width
  }, 1500, function () {
    $j('.game_avatar_switch').animate({width: '+=10px', height: '+=10px', top: '-=5px', left: '-=5px'}, 100);
    $j('.game_avatar_switch').fadeOut(100, function () {
      $j('.game_avatar_switch').remove()
    });
    $j('#top_login_avatar').append('<div id="wipeout"></div>');
    $j('#wipeout').css({
      'background': '#fff',
      'height': '52px',
      'width': '52px',
      'position': 'absolute',
      'z-index': '9999',
      'top': '0',
      'left': '0'
    });
    $j('#wipeout').fadeOut(400, function () {
      $j('#wipeout').remove();
    });
  });
}

function setCookie(name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  value = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
  document.cookie = name + '=' + value + '; path=/;';
}

function getCookie(name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == name) {
      return unescape(y);
    }
  }
  return null;
}

showUserMessage = function (string, item_id, single, type, comment_id) {
  $j('#container').modal('update', string);
  $j('#container').modal('show');
}