var tit = document.title;
var c = 0;

history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

function writetitle() {    
    document.title = tit.substring(0, c);
    if (c == tit.length) {
        c = 0;
        setTimeout("writetitle()",1000)
    }
    else {
        c++;
        setTimeout("writetitle()",200)
    }
}
writetitle()
