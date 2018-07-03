function blogChecked(){
    var d = new Date();
var year = d.getFullYear;
var month = d.getMonth;
var day = d.getDay;
year = year+2;
    setNitromeCookie('total_posts',nitromeAssets.latestVars.posts.total,year,month,day,'/');
}
//url('http://cdn.nitrome.com/images/touchy/older_posts_button.png') no-repeat 0px 0px;
blogChecked();
writeMenu();
writeTopBar();
writeAdDescriptions();
writeCorporate();
writeTopGames();
nitromeAssets.counter();