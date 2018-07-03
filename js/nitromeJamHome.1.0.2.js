function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
angular
.module('nitromeJam',[])
.controller('nitromeJamHomeCtrl', function ($scope, $http, $sce) {
    
    $scope.isRated = false;
    $scope.userRating = 0;
    $scope.jamGames = [];
    $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;
    $http({
        url:"/jam/interchange/json/games/getByVoteAverage/",
        method:"GET",
    }).success(function(data){
        var new_data = data;
        new_data.sort(function(a, b){
                        var keyA = b.average,
                        keyB = a.average;
                        // Compare the 2 dates
                        if(keyA < keyB)
                            return -1;
                        if(keyA > keyB)
                            return 1;
                        return 0;
                    });
        for(i=0;i<12;i++){
            $scope.jamGames.push(new_data[i]);
        }
        window.setTimeout(function(){
            var opts = {
                tl_top_offset:5,
                tl_left_offset:3,
                
                tr_top_offset:5,
                tr_left_offset:16,
                
                bl_top_offset:28,
                bl_left_offset:3,
                
                br_left_offset:16,
                br_top_offset:28,
                
                title_align:'left'
            };
            $j('.icon_link').bigTip('init',opts);
            $j('.icon_link').mouseenter(function(){
                    $j(this).bigTip('update').bigTip('show');
            });
            $j('.icon_link').mouseleave(function(){
                    $j(this).bigTip('hide');
            });
        },1000);

    }).error(function(e){
        
    });
});