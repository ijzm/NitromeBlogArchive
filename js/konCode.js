KEY_UP = [38,87];
KEY_DOWN = [40,83];
KEY_LEFT = [37,65];
KEY_RIGHT = [39,68];
KEY_A = [65];
KEY_B = [66];
//KONAMI CODE: ^ ^ v v < > < > B A !
var konami_code = [KEY_UP[0],KEY_UP[0],KEY_DOWN[0],KEY_DOWN[0],KEY_LEFT[0],KEY_RIGHT[0],KEY_LEFT[0],KEY_RIGHT[0],KEY_B,KEY_A]; // using CURSORS and RETURN
var konami_alt_code = [KEY_UP[1],KEY_UP[1],KEY_DOWN[1],KEY_DOWN[1],KEY_LEFT[1],KEY_RIGHT[1],KEY_LEFT[1],KEY_RIGHT[1],KEY_B,KEY_A]; // using WASD and SPACE
var konami_match = [];
konamiHandler = function(e){
    console.log('fired');
    if(konami_match.length){
        if(konami_code[konami_match.length] == e.keyCode||konami_alt_code[konami_match.length] == e.keyCode){
            konami_match.push(e.keyCode);
        }else{
            konami_match.length = 0;
            if(konami_code[0] == e.keyCode||konami_alt_code[0] == e.keyCode){
                konami_match.push(e.keyCode);
            }
        }
    }else{
        if(konami_code[0] == e.keyCode||konami_alt_code[0] == e.keyCode){
            konami_match.push(e.keyCode);
        }
    }
    if(konami_code.length == konami_match.length){
        konamiCodeEntered();
    }
}
konamiCodeEntered = function(){
    //var konamiDetectHTML = '<p>KONAMI CODE DETECTED!</p>';
    //document.getElementById('debug').innerHTML += konamiDetectHTML;
    var konAvatar = new Avatar(136,'c94a8a1c58ea910862b1ff2139055588','koncode_avt',"http://cdn.nitrome.com/styles/images/trans.png","#container");
    if(!konAvatar.unlocked){
        konAvatar.attemptUnlock();
    }
    konami_match.length = 0;
}
window.addEventListener('keydown',konamiHandler,false);