//start vars
var rotatorMessages = [
  {
    url: "http://nitrome.com/mobile/?app=greenninja",
    title: "Green Ninja: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/greenninja.png",
    alt: "Green Ninja - Out Now!"
  },
  {
    url: "http://nitrome.com/mobile/?app=coopedup",
    title: "Cooped Up: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/coopedup.png",
    alt: "Cooped Up - Out Now!"
  },
  {
    url: "http://nitrome.com/mobile/?app=sillysausagemobile",
    title: "Silly Sausage in Meat Land: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/sillysausagemobile.png",
    alt: "Silly Sausage in Meat Land - Out Now!"
  },
  {
    url: "http://nitrome.com/mobile/?app=magictouchmobile",
    title: "Magic Touch: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/magictouchmobile.png",
    alt: "Magic Touch Out Now!"
  },
  {
    url: "http://nitrome.com/mobile/?app=platformpanic",
    title: "Platform Panic: UPDATE!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/platformpanic-updatestatic.png",
    alt: "Platform Panic on mobile"
  },
  {
    url: "http://nitrome.com/mobile/?app=gunbricksd",
    title: "Gunbrick: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/gunbrick.png",
    alt: "Gunbrick on mobile"
  },
  {
    url: "http://nitrome.com/mobile/?app=rollerpolar",
    title: "Roller Polar: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/rollerpolar.png",
    alt: "Roller Polar on mobile"
  },
  {
    url: "http://nitrome.com/mobile/?app=endlessdoves",
    title: "Endless Doves: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/endlessdoves.png",
    alt: "Endless Doves on mobile"
  },
  {
    url: "http://8bitdoves.com/get-app/",
    title: "8bit Doves: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/8bitdoves.png",
    alt: "8bit doves on mobile"
  },
  {
    url: "http://icebreaker-game.com/get-app/",
    title: "Icebreaker: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/icebreaker.png",
    alt: "Icebreaker on mobile"
  },
  {
    url: "http://www.nitrome.com/touchy/",
    title: "Get Touchy: OUT NOW!",
    imgSrc: "http://cdn.nitrome.com/styles/images/jsrotator/touchy.png",
    alt: "Alt Test touchys"
  }
];
var currentRotatorMessage = 0;
var latestVars = {
  "posts": {
    "total": 524,
    "date": "2012-12-23T07:57:21-05:00"
  },
  "games": {
    "total": 119,
    "date": "2012-12-23T07:57:21-05:00"
  },
  "skins": {
    "total": 11,
    "date": "2012-12-23T07:57:21-05:00"
  },
  "shop_items": {
    "total": 0,
    "date": "2012-12-23T07:57:21-05:00"
  }
}
//end vars start globalconfig
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
nitromeAssets.twitter.init = function (b) {
  for (i = 0; i < 2; i++) {
    if (b) {
      p = '<p class="color">' + b[i].text + "</p>";
      nitromeAssets.twitter.feeds["feed_" + i] = {};
      nitromeAssets.twitter.feeds["feed_" + i].text = b[i].text;
      nitromeAssets.twitter.feeds["feed_" + i].date = b[i].created_at;
      nitromeAssets.twitter.all = b[i]
    }
  }
};
nitromeAssets.youtube.init = function (b) {
  nitromeAssets.youtube.all = b
};
nitromeAssets.facebook.init = function (b) {
  for (i = 0; i < 15; i++) {
    if (b) {
      nitromeAssets.facebook.feeds["feed_" + i] = {};
      nitromeAssets.facebook.feeds["feed_" + i].text = b.data[i].message;
      nitromeAssets.facebook.feeds["feed_" + i].date = b.data[i].created_time;
      nitromeAssets.facebook.feeds["feed_" + i].date = b.data[i].created_time;
      nitromeAssets.facebook.all = b[i]
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
  var b = [];
  keyvals2 = [];
  b = string.split("&");
  for (i = 0; i < b.length; i++) {
    keyvals2 = b[i].split("=");
    nitromeAssets.query.keyValuePairs[keyvals2[0]] = keyvals2[1]
  }
  return nitromeAssets.query.keyValuePairs
}

getQueryString();

function echo(b) {
  console.log(b)
}

var iphone_checked;
var current_source = "site";
var skin_related_imagery = ["footer_width_span.png", "skin-sprite_2.5.3.png"];
var menu_items = ["games", "shop", "blog", "profile", "skins", "iphone", "touchy", "steam"];
var menu_enabled = {home: 1, games: 1, shop: 1, blog: 1, profile: 1, skins: 1, iphone: 1, touchy: 1, steam: 1};
var corporate_items = ["home", "links", "faqs", "licensing", "distribution", "contact", "credits", "jobs"];
var featureImage = {
  images: ["shop_banner.png", "NES.png", "NES.png", "blog-side-ad.png", "papercraft_ad.png"],
  links: [
    "http://www.nitrome.com/shop/",
    cdn_path + "images/blog/nes1.jpg",
    cdn_path + "/images/blog/nes1.jpg",
    "http://www.nitrome.com/blog/",
    "http://www.nitrome.com/shop/papercraft/"
  ],
  alts: ["Shop Now Open!", "Nitrome Enjoyment System", "Nitrome Enjoyment System", "New Blog!", "Papercraft"],
  chance: [0, 20, 40, 60, 80, 100]
};
nitromeAssets.writePreview = function () {
  fillWithImage()
};
nitromeAssets.featuredAd = {
  adverts: [{
    image: "featured-flightless.png",
    link: "http://www.nitrome.com/steam/flightless/",
    alt: "Flightless Demo!"
  }, {
    image: "featured-touchy-games.png",
    link: "http://www.nitrome.com/touchy-games-1.html",
    alt: "All Touchy Games!"
  }], chance: [0, 50, 100]
};
var nitrome_ads = ["", "pixellove-gravityduck.png", "sidead-touchy.png", "sidead-touchy-2.png", "sidead-touchy-3.png", "sidead-touchy-4.png", "steam-flightless.png", "sidead-ib1.png", "sidead-ib2.png"];
nitromeAssets.sideAd = {};
var nitrome_alts = ["", "gravity duck!", "Touchy Released!", "Touchy Released!", "Touchy Released!", "Touchy Released!", "Flightless", "Ice Breaker iOS!", "Ice Breaker iOS!"];
var nitrome_links = ["", "http://www.nitrome.com/games/pixellove/gravityduck/", "http://www.nitrome.com/touchy/get/", "http://www.nitrome.com/touchy/get/", "http://www.nitrome.com/touchy/get/", "http://www.nitrome.com/touchy/get/", "http://www.nitrome.com/steam/flightless/", "http://www.nitrome.com/press/icebreaker-ios/", "http://www.nitrome.com/press/icebreaker-ios/"];
var ad_chance = [0, 10, 20, 30, 40, 50, 75, 80, 100];
nitromeAssets.sideAd.alts = nitrome_alts;
nitromeAssets.sideAd.links = nitrome_links;
nitromeAssets.sideAd.chance = ad_chance;

function setNitromeCookie(s, q, l, r, m, t, v, n) {
  var u = s + "=" + escape(q);
  if (l) {
    var o = new Date(l, r, m);
    u += "; expires=" + o.toGMTString()
  }
  if (t) {
    u += "; path=" + escape(t)
  }
  if (v) {
    u += "; domain=" + escape(v)
  }
  if (n) {
    u += "; secure"
  }
  document.cookie = u
}

function getNitromeCookie(c) {
  var d = document.cookie.match(c + "=(.*?)(;|$)");
  if (d) {
    return (unescape(d[1]))
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

function writeSprite(h) {
  for (i = 0; i < h.length; i++) {
    var e = i + 1;
    var g = i - 1;
    var f = [];
    f[i] = h.substr(i, 1);
    f[e] = h.substr(i + 1, 1);
    f[g] = h.substr(i - 1, 1);
    if (f[i] == " ") {
      $chara = document.createElement("DIV");
      $chara.style.height = "11px";
      $chara.style.cssText += "float:left";
      $chara.style.width = "7px";
      document.getElementById("debug").appendChild($chara)
    } else {
      $chara = document.createElement("DIV");
      if (nitromeAssets.alphaSprite[f[i]].posLeft != 0) {
        $chara.style.background = "url('" + cdn_path + "styles/images/alphasprite.png') -" + (nitromeAssets.alphaSprite[f[i]].posLeft - 1) + "px 0"
      } else {
        $chara.style.background = "url('" + cdn_path + "styles/images/alphasprite.png') 0 0"
      }
      $chara.style.height = "11px";
      $chara.style.cssText += "float:left";
      if (f[e] == " " || f[e] == undefined) {
        $chara.style.width = (nitromeAssets.alphaSprite[f[i]].width - 1) + "px"
      } else {
        if (f[g] != undefined && (f[g] == " " || f[g] == "")) {
          $chara.style.width = (nitromeAssets.alphaSprite[f[i]].width - 1) + "px"
        } else {
          $chara.style.width = nitromeAssets.alphaSprite[f[i]].width + "px"
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
  var c = Math.floor(Math.random() * 100) + 1, d = 0;
  for (d = 0; d < ad_chance.length; d++) {
    if (c <= ad_chance[d]) {
      break
    }
  }
  if (d === ad_chance.length) {
    d--
  }
  fillWithImage("left_bottom_bg", cdn_path + "images/sidead/" + this.featureImage.i.image, "122", "205", "0", this.featureImage.i.link, "", this.featureImage.i.alt)
};

function checkSiteDisplayed() {
  var a = document.getElementById("container").style.display;
  if (a != "block") {
    document.getElementById("container").style.display = "block"
  }
}

window.setTimeout("checkSiteDisplayed();", 4000);
nitromeAssets.counter = function () {
  if (returning === null) {
    var s = new Date();
    var d = s.getDate();
    var r = s.getMonth();
    var k = s.getFullYear();
    s.getTime();
    var v = "";
    totalPosts = nitromeAssets.latestVars.posts.total;
    k += 2;
    setNitromeCookie("total_posts", totalPosts, k, r, d, "/");
    setNitromeCookie("total_games", nitromeAssets.latestVars.games.total, k, r, d, "/");
    setNitromeCookie("total_shop_items", nitromeAssets.latestVars.shop_items.total, k, r, d, "/");
    setNitromeCookie("returning", true, k, r, d, "/")
  } else {
    var o = false;
    var q = "";
    var u = [];
    nitromeAssets.difference = {postsDifference: 0, gamesDifference: 0, shopItemsDifference: 0, skinsDifference: 0};
    if ((nitromeAssets.userVars.posts) < (latestPosts)) {
      v = "post";
      nitromeAssets.numberSprite.post = {};
      q = "";
      q = latestPosts - nitromeAssets.userVars.posts;
      nitromeAssets.difference.postsDifference = q;
      if (q >= 99) {
        q = "99"
      } else {
        q = "" + q
      }
      if (q.length > 1) {
        document.getElementById(v + "s_count").style.width = "20px";
        document.getElementById(v + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < q.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.post[i] = q.substr(i, 1);
        dNum = parseInt(q, 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.post[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.post[i]].width;
        document.getElementById(v + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(v + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(v + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (q.length === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (q.length === 2 && divNum === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px";
            o = true
          }
          if (q.length === 2 && divNum === 2 && o === true) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "2px"
          }
          if (i === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "2px";
            document.getElementById(v + "s_new_" + (divNum - 1)).style.marginLeft = "4px"
          } else {
            document.getElementById(v + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(v + "s_count").style.display = "block"
    }
    if (nitromeAssets.userVars.games > latestGames) {
      setNitromeCookie("total_games", latestGames, k, r, d, "/")
    }
    if (nitromeAssets.userVars.games < latestGames) {
      v = "game";
      nitromeAssets.numberSprite.game = {};
      q = "";
      q = latestGames - nitromeAssets.userVars.games;
      nitromeAssets.difference.gamesDifference = parseInt(q, 10);
      if (q >= 99) {
        q = "99"
      } else {
        q = "" + q
      }
      if (q.length > 1) {
        document.getElementById(v + "s_count").style.width = "20px";
        document.getElementById(v + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent";
        document.getElementById(v + "s_count").style.backgroundPosition = "-181px -149px"
      }
      for (i = 0; i < q.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.game[i] = q.substr(i, 1);
        dNum = parseInt(q[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[parseInt(nitromeAssets.numberSprite.game[i])].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.game[i]].width;
        document.getElementById(v + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(v + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(v + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (q.length === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (q.length === 2 && divNum === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px";
            o = true
          }
          if (q.length === 2 && divNum === 2 && o === true) {
            document.getElementById(v + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            o = false
          } else {
            document.getElementById(v + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(v + "s_count").style.display = "block"
    } else {
      if (getNitromeCookie("new_games") != undefined) {
        v = "game";
        var n = [];
        var t = [];
        nitromeAssets.numberSprite.game = {};
        $ng_string = getNitromeCookie("new_games");
        n = $ng_string.split("_");
        for (i = 0; i < n.length; i++) {
          if (n[i] != "") {
            t[i] = n
          }
        }
        q = "" + t.length;
        if (q >= 99) {
          q = "99"
        } else {
          q = "" + q
        }
        if (q.length > 1) {
          document.getElementById(v + "s_count").style.width = "20px";
          document.getElementById(v + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent";
          document.getElementById(v + "s_count").style.backgroundPosition = "-181px -149px"
        }
        for (i = 0; i < q.length; i++) {
          divNum = i + 1;
          nitromeAssets.numberSprite.game[i] = q.substr(i, 1);
          dNum = parseInt(q[i], 10);
          leftPosIE = nitromeAssets.numberSprite.num[parseInt(nitromeAssets.numberSprite.game[i])].posLeft;
          width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.game[i]].width;
          document.getElementById(v + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
          document.getElementById(v + "s_new_" + divNum).style.width = width + "px";
          document.getElementById(v + "s_new_" + divNum).style.height = "8px";
          if (dNum === 1) {
            if (q.length === 1) {
              document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px"
            }
            if (q.length === 2 && divNum === 1) {
              document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px";
              o = true
            }
            if (q.length === 2 && divNum === 2 && o === true) {
              document.getElementById(v + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
              o = false
            } else {
              document.getElementById(v + "s_count").style.textAlign = "center"
            }
          }
        }
        if (q > 0) {
          document.getElementById(v + "s_count").style.display = "block"
        }
      }
    }
    if (nitromeAssets.userVars.shopItems < latestShopItems) {
      v = "shop_item";
      nitromeAssets.numberSprite.shop = {};
      q = "";
      q = latestShopItems - nitromeAssets.userVars.shopItems;
      nitromeAssets.difference.shopsDifference = q;
      if (q >= 99) {
        q = "99"
      } else {
        q = "" + q
      }
      if (q.length > 1) {
        document.getElementById(v + "s_count").style.width = "20px";
        document.getElementById(v + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < q.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.shop[i] = q.substr(i, 1);
        dNum = parseInt(q[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.shop[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.shop[i]].width;
        document.getElementById(v + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(v + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(v + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (q.length === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (q.length === 2 && divNum === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px";
            o = true
          }
          if (q.length === 2 && divNum === 2 && o === true) {
            document.getElementById(v + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            o = false
          } else {
            document.getElementById(v + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(v + "s_count").style.display = "block"
    }
    if (nitromeAssets.userVars.skins < latestSkins) {
      v = "skin";
      nitromeAssets.numberSprite.skin = {};
      q = "";
      q = latestSkins - nitromeAssets.userVars.skins;
      nitromeAssets.difference.skinsDifference = q;
      if (q >= 99) {
        q = "99"
      } else {
        q = "" + q
      }
      if (q.length > 1) {
        document.getElementById(v + "s_count").style.width = "20px";
        document.getElementById(v + "s_count").style.background = "url('" + cdn_path + "styles/images/site_spritev7.png') no-repeat scroll -181px -149px transparent"
      }
      for (i = 0; i < q.length; i++) {
        divNum = i + 1;
        nitromeAssets.numberSprite.skin[i] = q.substr(i, 1);
        dNum = parseInt(q[i], 10);
        leftPosIE = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.skin[i]].posLeft;
        width = nitromeAssets.numberSprite.num[nitromeAssets.numberSprite.skin[i]].width;
        document.getElementById(v + "s_new_" + divNum).style.background = "url('" + cdn_path + "styles/images/nums-ticker.png') no-repeat scroll -" + leftPosIE + "px 0px transparent";
        document.getElementById(v + "s_new_" + divNum).style.width = width + "px";
        document.getElementById(v + "s_new_" + divNum).style.height = "8px";
        if (dNum === 1) {
          if (q.length === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px"
          }
          if (q.length === 2 && divNum === 1) {
            document.getElementById(v + "s_new_" + divNum).style.marginLeft = "4px";
            o = true
          }
          if (q.length === 2 && divNum === 2 && o === true) {
            document.getElementById(v + "s_new_" + (divNum - 1)).style.marginLeft = "6px";
            o = false
          } else {
            document.getElementById(v + "s_count").style.textAlign = "center"
          }
        }
      }
      document.getElementById(v + "s_count").style.display = "block"
    }
  }
};
var top_req;

function fillWithImage(h, s, n, o, r, q, t, m) {
  var l = "";
  if (m !== "") {
    l += "<a href='";
    l += m;
    l += "' />"
  }
  l += "<img src='";
  l += s;
  l += "' width='";
  l += n;
  l += "' height='";
  l += o;
  if (t !== "") {
    l += "' name='";
    l += t
  }
  if (r !== "") {
    l += "' border='";
    l += r
  }
  if (q !== "") {
    l += "' alt='";
    l += q
  }
  l += "' />";
  if (m !== "") {
    l += "</a>"
  }
  document.getElementById(h).innerHTML = l
}

function cssFillDiv(g, f, l, k, j) {
  var h = skin_related_imagery.length;
  if (f.search("http://") == -1) {
    for (i = 0; i < h; i++) {
      if (f == skin_related_imagery[i]) {
        if (f == "skin-sprite_2.5.3.png" || f == "skin_sprite.png") {
          _final = images_folder + "skin-sprite_2.5.3.png"
        } else {
          _final = images_folder + f
        }
        break
      } else {
        _final = cdn_path + f
      }
    }
  } else {
    _final = f
  }
  document.getElementById(g).style.backgroundImage = "url(" + _final + ")";
  document.getElementById(g).style.backgroundPosition = l + " " + k
}

function removeWhitespace(e) {
  var f;
  for (f = 0; f < e.childNodes.length; f++) {
    var d = e.childNodes[f];
    if (d.nodeType === 1) {
      removeWhitespace(d)
    }
    if (((/^\s+$/.test(d.nodeValue))) && (d.nodeType === 3)) {
      e.removeChild(e.childNodes[f--])
    }
  }
  return (e)
}

writeFeaturedAd = function () {
};
nitromeAssets.sideAd.writeSideAd = function () {
  var b = Math.floor(Math.random() * 100) + 1;
  for (i = 0; i < ad_chance.length; i++) {
    if (b <= ad_chance[i]) {
      break
    }
  }
  if (i === ad_chance.length) {
    i--
  }
  fillWithImage("left_bottom_bg", cdn_path + "images/sidead/" + nitrome_ads[i] + "?" + nitromeAssets.rString, "160", "204", "0", nitrome_alts[i], "", nitrome_links[i])
};

function writePageLayout() {
  $j('#login_bg').css({"background-image": 'url(' + images_folder + 'skin-sprite_2.5.3.png)'});
  cssFillDiv("posts_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  cssFillDiv("shop_items_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  cssFillDiv("games_count", cdn_path + "styles/images/site_sprite.png", "-138px", "-149px");
  cssFillDiv("search_filter", images_folder + "skin-sprite_2.5.3.png", "-1188px", "-154px");
  cssFillDiv("left_top_bar", images_folder + "skin-sprite_2.5.3.png", "-162px", "-21px");
  cssFillDiv("left_bottom_bar", images_folder + "skin-sprite_2.5.3.png", "-324px", "-21px");
  document.getElementById("posts_count").style.top = "100px";
  document.getElementById("shop_items_count").style.top = "100px";
  document.getElementById("games_count").style.top = "100px";
  $j("#login_badges").css({
    background: "url(" + images_folder + "skin-sprite_2.5.3.png)",
    "background-position": "-1646px -360px"
  })
}

function writeLogin() {
  cssFillDiv("login_bar", images_folder + "skin-sprite_2.5.3.png", "", "");
  cssFillDiv("login_bg", images_folder + "skin-sprite-2.png", "", "")
}

function writeMenu() {
  writePageLayout();
  cssFillDiv("menu_box", "skin-sprite_2.5.3.png", "0", "-41px");
  cssFillDiv("games_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  cssFillDiv("shop_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  cssFillDiv("blog_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  cssFillDiv("profile_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  cssFillDiv("skins_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  if (typeof(document.getElementById("iphone_link")) != "undefined") {
    cssFillDiv("iphone_link", "skin-sprite_2.5.3.png", "-171px", "-42px");
  }
  if (typeof(document.getElementById("touchy_link")) != "undefined") {
    cssFillDiv("touchy_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  }
  if (typeof(document.getElementById("steam_link")) != "undefined") {
    cssFillDiv("steam_link", "skin-sprite_2.5.3.png", "-793px", "-42px");
  }
  cssFillDiv("menu_fill", "skin-sprite_2.5.3.png", "0px", "-127px");
  cssFillDiv("menu_end", "skin-sprite_2.5.3.png", "-336px", "-41px");
}

function writeSocialLinks() {
}

function menuRollover(b) {
  if (b == "games") {
    document.getElementById(b + "_link").style.backgroundPosition = "-864px -42px";
    document.getElementById(b + "_png").style.backgroundPosition = "-125px 5px";
    document.getElementById("games_count").style.top = "105px"
  } else {
    if (b == "shop") {
      document.getElementById(b + "_link").style.backgroundPosition = "-241px -42px";
      document.getElementById(b + "_png").style.backgroundPosition = "-202px 5px";
      document.getElementById("shop_items_count").style.top = "105px"
    } else {
      if (b == "blog") {
        document.getElementById(b + "_link").style.backgroundPosition = "-864px -42px";
        document.getElementById(b + "_png").style.backgroundPosition = "-280px 5px ";
        document.getElementById("posts_count").style.top = "105px"
      } else {
        if (b == "profile") {
          document.getElementById(b + "_link").style.backgroundPosition = "-241px -42px";
          document.getElementById(b + "_png").style.backgroundPosition = "-433px 5px";
          document.getElementById(b + "_count").style.top = "105px"
        } else {
          if (b == "skins") {
            document.getElementById(b + "_link").style.backgroundPosition = "-864px -42px";
            document.getElementById(b + "_png").style.backgroundPosition = "-357px 5px";
            document.getElementById(b + "_count").style.top = "105px"
          } else {
            if (b == "iphone") {
              document.getElementById(b + "_link").style.backgroundPosition = "-241px -42px";
              document.getElementById(b + "_png").style.backgroundPosition = "0 5px";
              document.getElementById(b + "_count").style.top = "105px"
            } else {
              if (b == "touchy") {
                document.getElementById(b + "_link").style.backgroundPosition = "-864px -42px";
                document.getElementById(b + "_png").style.backgroundPosition = "0 5px";
                document.getElementById(b + "_count").style.top = "105px"
              } else {
                if (b == "steam") {
                  document.getElementById(b + "_link").style.backgroundPosition = "-864px -42px";
                  document.getElementById(b + "_png").style.backgroundPosition = "0 5px";
                  document.getElementById(b + "_count").style.top = "105px"
                } else {
                  if (b == "facebook") {
                    document.getElementById(b + "_link_icon").style.backgroundPosition = "-983px -123px"
                  } else {
                    if (b == "twitter") {
                      document.getElementById(b + "_link_icon").style.backgroundPosition = "-1079px -123px"
                    } else {
                      if (b == "youtube") {
                        document.getElementById(b + "_link_icon").style.backgroundPosition = "-1175px -123px"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function menuRollout(b) {
  if (b == "games") {
    document.getElementById(b + "_link").style.backgroundPosition = "-793px -42px";
    document.getElementById(b + "_png").style.backgroundPosition = "-125px 0";
    document.getElementById("games_count").style.top = "100px"
  } else {
    if (b == "shop") {
      document.getElementById(b + "_link").style.backgroundPosition = "-171px -42px";
      document.getElementById(b + "_png").style.backgroundPosition = "-202px 0";
      document.getElementById("shop_items_count").style.top = "100px"
    } else {
      if (b == "blog") {
        document.getElementById(b + "_link").style.backgroundPosition = "-793px -42px";
        document.getElementById(b + "_png").style.backgroundPosition = "-280px 0 ";
        document.getElementById("posts_count").style.top = "100px"
      }
    }
  }
  if (b == "profile") {
    document.getElementById(b + "_link").style.backgroundPosition = "-171px -42px";
    document.getElementById(b + "_png").style.backgroundPosition = "-433px 0";
    document.getElementById(b + "_count").style.top = "100px"
  } else {
    if (b == "skins") {
      document.getElementById(b + "_link").style.backgroundPosition = "-793px -42px";
      document.getElementById(b + "_png").style.backgroundPosition = "-357px 0";
      document.getElementById(b + "_count").style.top = "100px"
    } else {
      if (b == "iphone") {
        document.getElementById(b + "_link").style.backgroundPosition = "-171px -42px";
        document.getElementById(b + "_png").style.backgroundPosition = "0 0";
        document.getElementById(b + "_count").style.top = "100px"
      } else {
        if (b == "touchy") {
          document.getElementById(b + "_link").style.backgroundPosition = "-793px -42px";
          document.getElementById(b + "_png").style.backgroundPosition = "0 0";
          document.getElementById(b + "_count").style.top = "100px"
        } else {
          if (b == "steam") {
            document.getElementById(b + "_link").style.backgroundPosition = "-793px -42px";
            document.getElementById(b + "_png").style.backgroundPosition = "0 0";
            document.getElementById(b + "_count").style.top = "100px"
          } else {
            if (b == "facebook") {
              document.getElementById(b + "_link_icon").style.backgroundPosition = "-983px -93px"
            } else {
              if (b == "twitter") {
                document.getElementById(b + "_link_icon").style.backgroundPosition = "-1079px -93px"
              } else {
                if (b == "youtube") {
                  document.getElementById(b + "_link_icon").style.backgroundPosition = "-1175px -93px"
                }
              }
            }
          }
        }
      }
    }
  }
}

function writeTopBar() {
  cssFillDiv("top_bar_box", "skin-sprite_2.5.3.png", "0", "-178px")
}

function writeAdDescriptions() {
}

function writeTopGames() {
  writeTopFivePic(topGames.game[0].game_id, topGames.game[0].name);
  for (var d = 0; d <= 4; d++) {
    var f = "";
    f += "<a class='top_five_link' href='";
    f += www_path;
    f += "games/";
    f += topGames.game[d].game_id;
    f += "' onmouseover='nitromeTooltip.displayGameData({&#39;title&#39;:&#39;" + topGames.game[d].name + "&#39;,&#39;description&#39;:&#39;&#39;,&#39;category&#39;:&#39;&#39;,&#39;hearts&#39;:&#39;&#39;});'";
    f += f += topGames.game[d].game_id;
    f += "' onMouseOut='topFiveRollover(&#39;";
    f += topGames.game[d].game_id;
    f += "&#39;)'>";
    if (topGames.game[d].name.length < 13) {
      f += topGames.game[d].name
    } else {
      f += topGames.game[d].name_abbr
    }
    f += "</a>";
    document.getElementById("top_five_text_" + (d + 1)).innerHTML = f;
    var e = "";
    e += "<a class='top_five_link' onmouseover='topRollover(&#39;top_five_text_" + (d + 1) + "&#39;,&#39;" + (d + 1) + "&#39;)' onmouseout='topRollout(&#39;top_five_text_" + (d + 1) + "&#39;,&#39;" + (d + 1) + "&#39;);' href='" + www_path + "games/" + topGames.game[d].game_id;
    e += "'><img src='" + cdn_path + "styles/images/trans.gif' width='100%' height='100%' /></a>";
    document.getElementById("top_five_link_" + (d + 1)).innerHTML = e
  }
}

function topRollover(d, c) {
  if (c == 1) {
    document.getElementById("top_game").style.opacity = ".7";
    document.getElementById(d).style.opacity = ".7";
    document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-69px -68px"
  } else {
    if (c == 2) {
      document.getElementById(d).style.opacity = ".7";
      document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-34px -68px"
    } else {
      if (c == 3) {
        document.getElementById(d).style.opacity = ".7";
        document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-34px -101px"
      } else {
        if (c == 4) {
          document.getElementById(d).style.opacity = ".7";
          document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-34px -134px"
        } else {
          if (c == 5) {
            document.getElementById(d).style.opacity = ".7";
            document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-34px -167px"
          }
        }
      }
    }
  }
}

function topRollout(d, c) {
  if (c == 1) {
    document.getElementById("top_game").style.opacity = "1";
    document.getElementById(d).style.opacity = "1";
    document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "0px 0px"
  } else {
    if (c == 2) {
      document.getElementById(d).style.opacity = ".7";
      document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-0px -68px"
    } else {
      if (c == 3) {
        document.getElementById(d).style.opacity = ".7";
        document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-0px -101px"
      } else {
        if (c == 4) {
          document.getElementById(d).style.opacity = ".7";
          document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-0px -134px"
        } else {
          if (c == 5) {
            document.getElementById(d).style.opacity = ".7";
            document.getElementById("top_five_overlay_" + c).style.backgroundPosition = "-0px -167px"
          }
        }
      }
    }
  }
  document.getElementById(d).style.opacity = "1";
  document.getElementById("top_five_overlay_" + c).style.opacity = "1"
}

function topFiveRollover(c) {
  var d = thumbnails_folder;
  d += "tf_";
  d += c;
  d += ".png"
}

function writeTopFivePic(f, e, d) {
  if (!d) {
    d = "Most Hearted!"
  }
  fillWithImage("top_game", thumbnails_folder + "ico_" + f + ".png", "60", "60", "0", d, "topfivepic", root_dir + "games/" + f + "/")
}

function writeCorporate() {
  cssFillDiv("corporate", images_folder + "footer_width_span.png", "0", "0");
  cssFillDiv("corporate_copyright", images_folder + "corporate_copyright.png", "0", "0");
  var e = document.createElement("DIV");
  e.id = "corporate_end";
  e.style.width = "11px";
  e.style.height = "21px";
  e.style.backgroundRepeat = "no-repeat";
  e.style.position = "absolute";
  e.style.top = "0";
  e.style.left = "735px";
  e.style.zIndex = "108";
  document.getElementById("corporate").appendChild(e);
  cssFillDiv("corporate_end", images_folder + "corporate_copyright.png", "-162px", "0");
  cssFillDiv("corporate_spacer", images_folder + "corporate_copyright.png", "-161px", "0");
  document.getElementById("corporate").style.backgroundPosition = "0 0";
  cssFillDiv("links_corp", "skin-sprite_2.5.3.png", "-258px", "-1px");
  cssFillDiv("faqs_corp", "skin-sprite_2.5.3.png", "-313px", "-1px");
  cssFillDiv("licensing_corp", "skin-sprite_2.5.3.png", "-370px", "-1px");
  cssFillDiv("distribution_corp", "skin-sprite_2.5.3.png", "-444px", "-1px");
  cssFillDiv("contact_corp", "skin-sprite_2.5.3.png", "-544px", "-1px");
  cssFillDiv("credits_corp", "skin-sprite_2.5.3.png", "-618px", "-1px");
  cssFillDiv("jobs_corp", "skin-sprite_2.5.3.png", "-692px", "-1px");
  $j("#corporate_facebook").css({"background-image": "url('" + images_folder + "corporate_social.png')"});
  $j("#corporate_twitter").css({"background-image": "url('" + images_folder + "corporate_social.png')"});
  $j("#corporate_youtube").css({"background-image": "url('" + images_folder + "corporate_social.png')"});
  for (var c = 0; c <= 7; c++) {
    var d = "<a href='";
    if (corporate_items[c] == "home") {
      d += www_path;
      d += "index.html"
    } else {
      d += www_path;
      d += corporate_items[c]
    }
    d += "' ><img src='";
    d += images_folder;
    d += "trans.gif' width='100%' height='100%' border='0' onmouseover='corpRollover(&#39;";
    d += corporate_items[c];
    d += "&#39;);' onmouseout='corpRollout(&#39;" + corporate_items[c] + "&#39;);' /></a>";
    document.getElementById(corporate_items[c] + "_corp").innerHTML = d
  }
  newShadow = document.createElement("DIV");
  newBox = document.getElementById("new_elem_box");
  newBoxInner = document.getElementById("new_elem_box_inner");
  newBox.id = "new_elem_box";
  newBox.className = "border_color";
  newBox.style.width = "302px";
  newBox.style.height = "73px";
  newBox.style.left = "744px";
  newBox.style.top = "436px";
  newBox.style.position = "absolute";
  newBox.style.zIndex = "112";
  document.getElementById("container").appendChild(newBox);
  newBoxInner.id = "new_elem_box_inner";
  newBoxInner.style.width = "300px";
  newBoxInner.style.height = "70px";
  newBoxInner.style.left = "745px";
  newBoxInner.style.top = "437px";
  newBoxInner.style.position = "absolute";
  newBoxInner.style.backgroundColor = "#ffffff";
  newBoxInner.style.zIndex = "125";
  newShadow.id = "new_elem_shadow";
  newShadow.className = "border_color";
  newShadow.style.width = "302px";
  newShadow.style.height = "73px";
  newShadow.style.left = "739px";
  newShadow.style.top = "441px";
  newShadow.style.position = "absolute";
  newShadow.style.background = "#000000";
  newShadow.style.opacity = "0.3";
  newShadow.style.zIndex = "52";
  newShadow.style.filter = "alpha(opacity = 30)";
  document.getElementById("container").appendChild(newShadow);
  cssFillDiv("new_elem_top_bar_2", "skin-sprite_2.5.3.png", "-982px", "0");
  cssFillDiv("new_elem_title_2", "skin-sprite_2.5.3.png", "-983px", "-20px")
}

function corpRollover(b) {
  if (b == "home") {
    document.getElementById("corporate").style.backgroundPosition = "0 0"
  } else {
    if (b == "links") {
      cssFillDiv("links_corp", "skin-sprite_2.5.3.png", "-258px", "-226px")
    } else {
      if (b == "videos_btn") {
        cssFillDiv("small_more_videos_btn", "skin-sprite_2.5.3.png", "-1207px", "-38px")
      } else {
        if (b == "faqs") {
          cssFillDiv("faqs_corp", "skin-sprite_2.5.3.png", "-313px", "-226px")
        } else {
          if (b == "licensing") {
            cssFillDiv("licensing_corp", "skin-sprite_2.5.3.png", "-370px ", "-226px")
          } else {
            if (b == "distribution") {
              cssFillDiv("distribution_corp", "skin-sprite_2.5.3.png", "-444px", "-226px")
            } else {
              if (b == "contact") {
                cssFillDiv("contact_corp", "skin-sprite_2.5.3.png", "-544px", "-226px")
              } else {
                if (b == "credits") {
                  cssFillDiv("credits_corp", "skin-sprite_2.5.3.png", "-618px", "-226px")
                } else {
                  if (b == "jobs") {
                    cssFillDiv("jobs_corp", "skin-sprite_2.5.3.png", "-692px", "-226px")
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function writeLogo() {
}

function corpRollout(b) {
  if (b == "home") {
    document.getElementById("corporate").style.backgroundPosition = "0 0"
  } else {
    if (b == "links") {
      cssFillDiv("links_corp", images_folder + "skin-sprite_2.5.3.png", "-258px", "-1px")
    } else {
      if (b == "videos_btn") {
        cssFillDiv("small_more_videos_btn", images_folder + "skin-sprite_2.5.3.png", "-1207px", "-19px")
      } else {
        if (b == "faqs") {
          cssFillDiv("faqs_corp", images_folder + "skin-sprite_2.5.3.png", "-313px", "-1px")
        } else {
          if (b == "licensing") {
            cssFillDiv("licensing_corp", images_folder + "skin-sprite_2.5.3.png", "-370px", "-1px")
          } else {
            if (b == "distribution") {
              cssFillDiv("distribution_corp", images_folder + "skin-sprite_2.5.3.png", "-444px", "-1px")
            } else {
              if (b == "contact") {
                cssFillDiv("contact_corp", images_folder + "skin-sprite_2.5.3.png", "-544px", "-1px")
              } else {
                if (b == "credits") {
                  cssFillDiv("credits_corp", images_folder + "skin-sprite_2.5.3.png", "-618px", "-1px")
                } else {
                  if (b == "jobs") {
                    cssFillDiv("jobs_corp", images_folder + "skin-sprite_2.5.3.png", "-692px", "-1px")
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

nitromeAssets.hideMouse = function () {
};

function loadTheOthers() {
  $container = document.getElementById("container");
  $otherRectangle = document.createElement("DIV");
  $otherRectangle.id = "other_rect";
  $otherRectangle.style.display = "block";
  $otherRectangle.style.width = (249 + 51) + "px";
  $otherRectangle.style.height = (278 - 28) + "px";
  $otherRectangle.style.top = "188px";
  $otherRectangle.style.left = "745px";
  $otherRectangle.style.backgroundImage = "";
  $otherRectangle.style.backgroundColor = "#f00";
  $otherRectangle.style.position = "absolute";
  $otherRectangle.style.zIndex = "999";
  $otherRectangle.innerHTML = "Please turn off your ad blocker!";
  $otherTop = document.createElement("DIV");
  $otherTop.id = "other_top";
  $otherTop.style.display = "block";
  $otherTop.style.width = (719 + 9) + "px";
  $otherTop.style.height = (42 + 48) + "px";
  $otherTop.style.top = "1px";
  $otherTop.style.left = "1px";
  $otherTop.style.backgroundImage = "";
  $otherTop.style.backgroundColor = "#f00";
  $otherTop.style.position = "absolute";
  $otherTop.style.zIndex = "999";
  $otherTop.innerHTML = "Please turn off your ad blocker!";
  $container.appendChild($otherTop);
  $container.appendChild($otherRectangle)
}

if (typeof(GA_googleFillSlot) == "undefined") {
}
iphone_checked = parseInt(getNitromeCookie("i_time"), 10);
if (isNaN(iphone_checked)) {
  iphone_checked = 0
}
iphone_latest = 20120907;
if (iphone_checked < iphone_latest) {
  document.getElementById("iphone_count").style.display = "block"
}
if (typeof(getNitromeCookie("skin")) == "string" && getNitromeCookie("skin") == "touchy") {
}

function skinLinkResize() {
  inner_width = $j(window).width();
  container_width = $j("#container").width();
  if (inner_width > container_width) {
    $j("#link_left").css({display: "block"});
    $j("#link_right").css({display: "block"});
    left_width = $j("#link_left").width();
    right_width = $j("#link_right").width();
    left_width -= (container_width / 2);
    right_width -= (container_width / 2) - 7;
    $j("#link_left").width(left_width);
    $j("#link_right").width(right_width)
  } else {
    $j("#link_left").css({display: "none"});
    $j("#link_right").css({display: "none"})
  }
}

$j(document).ready(function () {
  skinLinkResize()
});
var filter_toggle = false;
var types = ["games", "blog", "users"];
var cached_search = "Search!";

function cacheSearch() {
  cached_search = document.forms.namedItem("search").id.value
}

function searchFill() {
  document.forms.namedItem("search").id.value = cached_search
}

function searchRoll(a) {
  if (a == "game") {
    cssFillDiv("game_filter_search", cdn_path + "styles/images/site_spritev7.png", "-287px", "-115px")
  }
  if (a == "blog") {
    cssFillDiv("post_filter_search", cdn_path + "styles/images/site_spritev7.png", "-307px", "-115px")
  }
  if (a == "user") {
    cssFillDiv("user_filter_search", cdn_path + "styles/images/site_spritev7.png", "-327px", "-115px")
  }
}

function explainIcon(a) {
  if (a == "game") {
    document.forms.namedItem("search").id.value = "Search our games... ";
    cssFillDiv("game_filter_search", cdn_path + "styles/images/site_spritev7.png", "-287px", "-128px")
  }
  if (a == "blog") {
    document.forms.namedItem("search").id.value = "Search our blog posts... ";
    cssFillDiv("post_filter_search", cdn_path + "styles/images/site_spritev7.png", "-307px", "-128px")
  }
  if (a == "user") {
    document.forms.namedItem("search").id.value = "Search through users... ";
    cssFillDiv("user_filter_search", cdn_path + "styles/images/site_spritev7.png", "-327px", "-128px")
  }
}

function setSearchType(a) {
  document.forms.namedItem("search").search_type.value = a;
  if (typeof(document.getElementById("filter_icon_" + a)) != "undefined") {
    document.getElementById("filter_icon_" + a).style.display = "block";
    document.getElementById("filter_icons").style.display = "none"
  }
  searchFill();
  if (a == "users" && current_source == "site") {
    setSearchSource("user")
  }
  if (a != "users" && current_source == "user") {
    setSearchSource("site")
  }
  return toggleFilter(filter_toggle, true)
}

function setSearchSource(a) {
  if (a == "user") {
    $j("#main_search_field").autocomplete({
      source: "/ajax/user_autocomplete.php",
      minLength: 3,
      select: function (b, c) {
        $j("#main_search_field").val(c.item.label);
        return false
      },
      focus: function (b, c) {
        $j("#main_search_field").val(c.item.label);
        return false
      },
      search: function (b, c) {
        $j("#main_search_field .loading").show()
      },
      response: function (b, c) {
        $j("#main_search_field .loading").hide()
      }
    });
    current_source = "user"
  } else {
    if (a == "site") {
      $j("#main_search_field").autocomplete({
        source: autoCompleteArray, minLength: 3, search: function (b, c) {
          $j("#main_search_field .loading").show()
        }, response: function (b, c) {
          $j("#main_search_field .loading").hide()
        }
      });
      current_source = "site"
    }
  }
  return true
}

function toggleFilter(b, a) {
  if (typeof(a) == "undefined") {
    a = false
  }
  if (a) {
    subAmount = 29
  } else {
    subAmount = 0
  }
  $j("#search_filter").stop(0, 0);
  $j("#search_filter_link").stop(0, 0);
  if (b) {
    searchFill();
    $j("#search_filter").css({background: "url('" + images_folder + "skin-sprite_2.5.3.png') -1188px -154px"});
    document.getElementById("search_type_game").style.display = "none";
    document.getElementById("search_type_blog").style.display = "none";
    $j("#search_filter_link").animate({left: (234 - subAmount) + "px"}, 300, function () {
    });
    $j("#search_bar .login_input").animate({width: (220 - subAmount) + "px"}, 300, function () {
    });
    $j("#search_filter").animate({width: "59px", left: (987 - subAmount) + "px"}, 300, function () {
    });
    b = false
  } else {
    cacheSearch();
    $j("#search_filter").css({background: "url('" + images_folder + "skin-sprite_2.5.3.png') -1188px -180px"});
    for (i = 0; i < types.length; i++) {
      document.getElementById("filter_icon_" + types[i]).style.display = "none"
    }
    document.getElementById("filter_icons").style.display = "block";
    document.getElementById("search_type_game").style.display = "block";
    document.getElementById("search_type_blog").style.display = "block";
    $j("#search_filter_link").animate({left: "162px"}, 300, function () {
    });
    $j("#search_bar .login_input").animate({width: "149px"}, 300, function () {
    });
    $j("#search_filter").animate({width: "85px", left: "915px"}, 300, function () {
    });
    b = true
  }
  return b
}

function showModal(a, b, c) {
  $j(c).html(a);
  $height = $j(b).height();
  $width = $j(b).width();
  $windowHeight = $j(window).height();
  $windowWidth = $j(window).width();
  if ($windowWidth > 1114) {
    $windowWidth -= 90
  }
  $j(b).css({display: "inline-block"});
  $j(b).offset({
    top: $j(window).scrollTop() + (($windowHeight / 2) - ($height / 2)),
    left: ($windowWidth / 2) - ($width / 2)
  })
}

function getUserBadges() {
}

$badgeCheck = window.setTimeout("getUserBadges();", 1000 * 60 * 3);
$j(".top_empty_badge").css({"background-image": 'url("' + images_folder + 'empty_badge_sprite.png")'});
var mid_R_hex = mid_colour.substr(0, 2);
var mid_G_hex = mid_colour.substr(2, 2);
var mid_B_hex = mid_colour.substr(4, 2);
var mid_R = parseInt(mid_R_hex, 16);
var mid_G = parseInt(mid_G_hex, 16);
var mid_B = parseInt(mid_B_hex, 16);
$j(".login_wait_screen").css({"background-color": "#" + mid_colour});
$j(".login_wait_screen").css({"background-color": "rgba(" + mid_R + "," + mid_G + "," + mid_B + ",.7)"});

function takeAvatarIcon(b, f, e) {
  if (typeof(e) == "undefined") {
    e = "#game_object"
  }
  realX = parseInt(b, 10) + $j(e).offset().left;
  realY = parseInt(f, 10) + $j(e).offset().top;
  $j("body").append('<img class="game_avatar_switch" src="' + cdn_path + '/styles/images/game_icons/ig_ticker_icon-avatar.png"/>');
  $j(".game_avatar_switch").css({position: "absolute", left: realX, top: realY, "z-index": 9999});
  var a = $j("#top_login_avatar").offset();
  var c = ($j("#top_login_avatar").width() / 2) - (12.5);
  var d = ($j("#top_login_avatar").height() / 2) - (12.5);
  $j(".game_avatar_switch").animate({top: a.top + d, left: a.left + c}, 1500, function () {
    $j(".game_avatar_switch").animate({width: "+=10px", height: "+=10px", top: "-=5px", left: "-=5px"}, 100);
    $j(".game_avatar_switch").fadeOut(100, function () {
      $j(".game_avatar_switch").remove()
    });
    $j("#top_login_avatar").append('<div id="wipeout"></div>');
    $j("#wipeout").css({
      background: "#fff",
      height: "52px",
      width: "52px",
      position: "absolute",
      "z-index": "9999",
      top: "0",
      left: "0"
    });
    $j("#wipeout").fadeOut(400, function () {
      $j("#wipeout").remove()
    })
  })
}

function setCookie(a, c, b) {
  var d = new Date();
  d.setDate(d.getDate() + b);
  c = escape(c) + ((b == null) ? "" : "; expires=" + d.toUTCString());
  document.cookie = a + "=" + c + "; path=/;"
}

function getCookie(b) {
  var c, a, e, d = document.cookie.split(";");
  for (c = 0; c < d.length; c++) {
    a = d[c].substr(0, d[c].indexOf("="));
    e = d[c].substr(d[c].indexOf("=") + 1);
    a = a.replace(/^\s+|\s+$/g, "");
    if (a == b) {
      return unescape(e)
    }
  }
  return null
}

/*
if(!getCookie("greenninja_reminder")&&!getCookie("greenninja_no_reminder")){
	$j(document).ready(
		function(){
			$j("#container").modal();
			$j("#container").modal("showFrame",{src:"/modal/greenninja.html",width:560,height:404,hideClose:true});
		}
	);
	setCookie("greenninja_reminder","1",1);
}
*/
showUserMessage = function (b, a, e, d, c) {
  $j("#container").modal("update", b);
  $j("#container").modal("show")
};
//end globalconfig start sideads
var icebreaker_link = 'http://www.icebreaker-game.com/get-app/';
var eightbitdoves_link = 'http://www.8bitdoves.com/get-app/';
var endlessdoves_link = 'http://www.8bitdoves.com/get-endless-doves/';
var rollerpolar_link = 'http://www.nitrome.com/mobile/?app=rollerpolar';
var platformpanic_link = 'http://www.nitrome.com/mobile/?app=platformpanic';
var gunbrick_link = 'http://www.nitrome.com/mobile/?app=gunbricksd';
var magictouchmobile_link = 'http://www.nitrome.com/mobile/?app=magictouchmobile';
var sillysausagemobile_link = 'http://www.nitrome.com/mobile/?app=sillysausagemobile';
var coopedup_link = 'http://www.nitrome.com/mobile/?app=coopedup';
var greenninja_link = 'http://www.nitrome.com/mobile/?app=greenninja';

var nitrome_ads = [
  "", // null
  //"pixellove-flyagain.png", // pixel love
  "greenninja-out-now.png" // platform panic mobile
];
nitromeAssets.sideAd = {};
var nitrome_alts = [
  "", // null
  //"Pixel Love", // pixel love
  "Green Ninja OUT NOW!" // endless doves
];
var nitrome_links = [
  "", // null
  //"http://www.pixellovegames.com/games/flyagain/", // pixel love
  greenninja_link
];
var ad_chance = [
  0,  // null
  //10, // pixel love
  100 // endless doves
];
var sidead_types = [
  //0 = image/png, 1 = application/shockwave-x
  0, // null
  //0, // pixel love
  0  // endless doves
];
nitromeAssets.sideAd.alts = nitrome_alts;
nitromeAssets.sideAd.links = nitrome_links;
nitromeAssets.sideAd.chance = ad_chance;
nitromeAssets.sideAd.type = sidead_types;
getLatestPixelLoveSideAd = function () {
  $j.ajax({
    type: "GET",
    url: "http://www.pixellovegames.com/interchange/json/games/getLatestOne/",
    success: function (data) {
      //<a href="http://www.nitrome.com/jam/"><img src="http://cdn.nitrome.com/images/sidead/jam-sidead.png?undefined" width="160" height="320" border="0" alt="Jam!"></a>
      $j('#left_bottom_bg').html(
        ['<a href="http://www.pixellovegames.com/games/' + data.machineName + '/" target="_blank" title="Play ' + data.title + '!">',
          '<img src="http://cdn.nitrome.com/images/sidead/pixellove-' + data.machineName + '.png" width="160" height="320" border="0" alt="Pixel Love Side Ad">',
          '</a>'].join('')
      );
    }
  });
}
nitromeAssets.sideAd.writeSideAd = function () {
  var a = Math.floor(Math.random() * 100) + 1;
  for (i = 0; i < ad_chance.length; i++) {
    if (a <= ad_chance[i]) {
      break;
    }
  }
  if (i === ad_chance.length) {
    i--;
  }
  window.sideAdNum = i;
  if (sidead_types[i] == 0) {
    if (nitrome_alts[i] == 'Pixel Love') {
      getLatestPixelLoveSideAd(i);
    } else {
      //write image content
      fillWithImage(
        "left_bottom_bg", //div
        cdn_path + "images/sidead/" + nitrome_ads[i] + "?" + nitromeAssets.rString, //image
        "160", //width
        "320", //height
        "0", //?
        nitrome_alts[i], //alt name
        "",
        nitrome_links[i]
      ) //link
    }
  }
  if (sidead_types[i] == 1) {
    //write flash content
    if (!swfobject || !jQuery) {
      if (window.console) console.log('swfobject or jquery not found');
      return false;
    }
    $j('#left_bottom_bg').append('<div id="side_swf" name="side_swf"></div>');
    var flashvars = {};
    var params = {
      wmode: "transparent"
    };
    var attributes = {
      id: "sidead_flash",
      name: "sidead_flash"
    };
    swfobject.embedSWF(cdn_path + "images/sidead/" + nitrome_ads[i], "side_swf", "160", "320", "9.0.0", cdn_path + "expressInstall.swf", flashvars, params, attributes);
  }
};
nitromeAssets.sideAd.writeSideAd();
//end sideads start newgames
eval(function (p, a, c, k, e, r) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
  };
  if (!''.replace(/^/, String)) {
    while (c--) r[e(c)] = k[c] || e(c);
    k = [function (e) {
      return r[e]
    }];
    e = function () {
      return '\\w+'
    };
    c = 1
  }
  ;
  while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
  return p
}('4 h;E Z(){4 $I=0;4 $s=o(\'8\');5(C($s)=="n"||$s==B){g(\'8\',\'\',7,9,a,\'/\');l q}f{4 $k=$s.L(\'e\');$k.W();6(i=0;i<$k.b;i++){K=\'V.\'+$k[i];$(K).U(N);5($k[i]!==\'\'){$I++}}l v}}E H(){j=0;4 $F=[];$r=o(\'8\');5((($r!=n)&&($r!=B))||($r!=\'\')){4 j=0;$1=o(\'8\');5($1!=n){$1=$1.L(\'e\');6(i=0;i<$1.b;i++){5($1[i]!=\'\'){$F[j]=$1[i];j++}}}l $F}f{l B}}4 3=\'\';E S(){5(J(c.w.x.y,10)==J(o(\'z\'),10)){l q}4 d=R Q();4 7=d.O();4 9=d.T();4 a=d.P();7+=2;4 $M;4 3=\'\';$1=H();5(C($1)!=\'n\'){6(i=0;i<$1.b;i++){$G=$1[i]+\'e\';$M++}c.u.A;3=\'\';6(i=0;i<c.u.A;i++){3+=h[i].p(\'m\')+\'e\'}5(C($G)!="n"){g(\'8\',$G+3,7,9,a,\'/\')}f{g(\'8\',3,7,9,a,\'/\')}3=\'\'}f 5($1==\'\'){3=\'\';6(i=0;i<c.u.A;i++){3+=h[i].p(\'m\')+\'e\'}g(\'8\',3,7,9,a,\'/\');3=\'\'}f 5(c.w.x.y>o(\'z\')){6(i=0;i<c.u.A;i++){6(j=0;j<$1.b;j++){5($1[j]==h[i].p(\'m\')){D=v}f{D=q}}5(!D){3+=h[i].p(\'m\')+\'e\'}}6(i=0;i<$1.b;i++){3+=$1[i]+\'e\'}g(\'8\',3,7,9,a,\'/\');g(\'z\',c.w.x.y,7,9,a,\'/\');X.Y(\'v;\')}f{4 t;6(j=0;j<$1.b;j++){t=q;6(i=0;i<h.b;i++){5(h[i].p(\'m\')==$1[j]){t=v}}5(!t){$1.11(j)}}6(i=0;i<$1.b;i++){3+=$1[i]+\'e\'}}g(\'z\',c.w.x.y,7,9,a,\'/\')}', 62, 64, '|newGames||buff|var|if|for|year|new_games|month|day|length|nitromeAssets||_|else|setNitromeCookie|gameDataGames|||ng_array|return|id|undefined|getNitromeCookie|getAttribute|false|value|ng_string|isPresent|difference|true|latestVars|games|total|total_games|gamesDifference|null|typeof|isAlready|function|newGamesTrimmed|cookieString|getNewGamesCookie|ng_count|parseInt|gameClass|split|newGamesDeduction|600|getFullYear|getDate|Date|new|setNewGames|getMonth|fadeIn|div|pop|console|log|showNewGames||splice'.split('|'), 0, {}))
//end newgames start common-1
writeLogo();
writeMenu();
writeTopBar();
writeAdDescriptions();
writeCorporate();
writeTopGames();
nitromeAssets.counter();
//end common-1 start small-videos
var videoWidth = 300;
var videoHeight = 255;
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var smallplayer;

function onYouTubePlayerAPIReady() {
  smallplayer = new YT.Player('smallplayer', {
    "height": videoHeight,
    "width": videoWidth,
    "videoId": videoId,
    "playerVars": {
      'rel': 0,
      'wmode': 'transparent'
    },
    "events": {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
}

var done = false;

function onPlayerStateChange(event) {
}

function stopVideo() {
  smallplayer.stopVideo();
}

function isVideoPlaying() {
  //unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
  if (smallplayer.getPlayerState() == 3 || smallplayer.getPlayerState() == 1 || smallplayer.getPlayerState() == 5) {
    return true;
  } else {
    return false;
  }
};

function swapVideo(videoId) {
  if (typeof(smallplayer.cueVideoById) != "undefined") {
    smallplayer.cueVideoById(videoId);
    smallplayer.playVideo();
    return false;
  }
  return true;
}

$j(document).ready(function () {
  var ytLength = ytObj.length;
  $dir = 1;
  $j('#new_elem_box_inner_2').append('<div id="video_vert_spacer"></div>');
  for (i = 0; i < 4; i++) {
    if ($dir == 1) {
      $j('#new_elem_box_inner_2').append('<a class="vidLinkLeft" href="http://www.nitrome.com/videos/?' + ytObj[i].videoId + '" onclick="javascript: return swapVideo(\'' + ytObj[i].videoId + '\');"><img class="video" src="' + ytObj[i].videoThumb + '" height="60px"/><div class="vidTitle">' + ytObj[i].videoTitle + '</div></a>');
    } else {
      $j('#new_elem_box_inner_2').append('<a class="vidLinkRight" href="http://www.nitrome.com/videos/?' + ytObj[i].videoId + '" onclick="javascript: return swapVideo(\'' + ytObj[i].videoId + '\');"><img class="video" src="' + ytObj[i].videoThumb + '" height="60px"/><div class="vidTitle">' + ytObj[i].videoTitle + '</div></a>');
    }
    $dir *= -1;

  }
  $j('#new_elem_box_inner_2').append('<div id="video_bottom_spacer"></div>');
  addthis.init();
});
//end small-videos start load-icon-game
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
    if (j == topGames.game[0].game_id) {
    } else {
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
  if (typeof (nitromeTooltip) != "undefined" &&
    typeof (nitromeTooltip.hideTooltip) != "undefined" &&
    typeof (nitromeTooltip.is_active) != "undefined"
  ) {
    nitromeTooltip.hideTooltip();
    nitromeTooltip.is_active = false;
  }
  var dataType = 'json';
  var data = {"game_reference_id": j};
  var url = '/ajax/add_recently_played_game.php';
  $j.post(
    url,
    data,
    function (sdata) {

    },
    dataType);
};
//end load-icon-game start homepage
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDay();
var tab_id;
var req;

function writeFlashPanel() {
  swfUrl = cdn_path + "images/anims/nitrome_frontpage_banner_no_ads.1.0.3.swf";
  var flashvars = {
    dark_colour: dark_colour,
    mid_colour: mid_colour,
    light_colour: light_colour,
    rString: nitromeAssets.rString,
    adPlayed: "false"
  };
  var params = {
    quality: "high",
    play: "true",
    loop: "true",
    scale: "showall",
    wmode: "opaque",
    devicefont: "false",
    bgcolor: "#ffba00",
    menu: "true",
    allowscriptaccess: "true"
  };
  var attributes = {
    name: "nitrome_games",
    id: "nitrome_games",
    align: "center"
  };
  var id = "rotator_anim";
  var height = 250;
  var width = 550;
  var version = "10.0.0";
  var expressInstallSwfUrl = false;
  if (swfobject.hasFlashPlayerVersion("9.0.0")) {
    swfobject.embedSWF(
      swfUrl,
      id,
      width,
      height,
      version,
      expressInstallSwfUrl,
      flashvars,
      params,
      attributes
    );
  } else {
    writeHTML5Rotator();
  }
}

function showNewRotator() {
  $j('#rotator_anim #rotContainer').animate({
    left: ((-550) * (currentRotatorMessage)) + 550
  }, 600);
}

function writeHTML5Rotator() {
  currentRotatorMessage = 1;
  $j('#anim_box').append('<div id="rotatePrev" onclick="javscript:rotatePrev(1)"></div><div id="rotateNext" onclick="javscript:rotateNext(1)"></div>');
  html = '<div id="rotContainer">';
  for (var i = 0; i < rotatorMessages.length; i++) {
    html += '<a id="rotSlot' + i + '" class="rotatorSlot" href="' + rotatorMessages[i].url + '" title="' + rotatorMessages[i].title + '">\
			<img src="' + rotatorMessages[i].imgSrc + '" alt="' + rotatorMessages[i].alt + '" />\
		</a>';
  }
  html += "</div>";
  $j('#rotator_anim').html(html);
  $j('#rotator_anim, #rotContainer').css({
    "position": "relative",
    "left": "0",
    "top": "0"
  });
  fullWidth = (rotatorMessages.length * 550)
  $j('#rotContainer').css({
    "position": "absolute",
    "width": fullWidth + 'px',
    "height": "250px"
  });

  $j('#rotator_anim').css({
    "overflow": "hidden",
    "width": "550px",
    "height": "250px",
    "border-radius": "4px"
  })
  $j('#rotatePrev').css({
    "background-image": "url(http://cdn.nitrome.com/styles/images/rotate_prev.png)",
    "position": "absolute",
    "color": "#ffffff",
    "font-size": "24px",
    "left": "5px",
    "top": "105px",
    "cursor": "pointer",
    "z-index": 9999,
    "width": "33px",
    "height": "40px"
  });
  $j('#rotateNext').css({
    "background-image": "url(http://cdn.nitrome.com/styles/images/rotate_next.png)",
    "position": "absolute",
    "color": "#ffffff",
    "font-size": "24px",
    "right": "5px",
    "top": "105px",
    "cursor": "pointer",
    "z-index": 9999,
    "width": "33px",
    "height": "40px",
    "background-position": "-5px 0"
  });
  $j('.rotatorSlot').css({
    "position": "relative",
    "float": "left",
    "width": "550px",
    "height": "250px",
    "display": "block"
  });
  showNewRotator();
}

$j(document).ready(function () {
  window.rotatorTimerID = window.setInterval('rotateNext(0)', 10000);
});

function rotatePrev(human) {
  if (rotatorMessages.length == 1) {
    return;
  }
  if (human) {
    window.clearInterval(window.rotatorTimerID);
  }
  currentRotatorMessage--;
  if (currentRotatorMessage < 1) {
    currentRotatorMessage = rotatorMessages.length;
  }
  showNewRotator();
  if (human) {
    window.rotatorTimerID = window.setInterval('rotateNext(0)', 10000);
  }
}

function rotateNext(human) {
  if (rotatorMessages.length == 1) {
    return;
  }
  if (human) {
    window.clearInterval(window.rotatorTimerID);
  }
  currentRotatorMessage++;
  if (currentRotatorMessage > rotatorMessages.length) {
    currentRotatorMessage = 1;
  }
  showNewRotator();
  if (human) {
    window.rotatorTimerID = window.setInterval('rotateNext(0)', 10000);
  }
}

function getHeartedGames() {
  gamesString = getNitromeCookie("hearted_games");
  if (gamesString == null) {
    return [];
  }
  gamesArray = gamesString.split("_");
  var arr_len = gamesArray.length;
  for (i = 0; i < arr_len; i++) {
    if (gamesArray[i] == "") {
      gamesArray.splice(i, 1);
      arr_len--;
      i--;
    }
  }
  return gamesArray;
}

writeFlashPanel();
//end homepage