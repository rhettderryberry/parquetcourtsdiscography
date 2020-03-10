// function hideShow1() {

//     document.getElementById("americanalbumid").style.display = "block";

//     document.getElementById("lightupalbumid").style.display = "none";

//     document.getElementById("sunbathalbumid").style.display = "none";

//     document.getElementById("contentalbumid").style.display = "none";

//     document.getElementById("humanalbumid").style.display = "none";

//     document.getElementById("widealbumid").style.display = "none";

// }

// function hideShow2() {

//     document.getElementById("americanalbumid").style.display = "none";

//     document.getElementById("lightupalbumid").style.display = "block";

//     document.getElementById("sunbathalbumid").style.display = "none";

//     document.getElementById("contentalbumid").style.display = "none";

//     document.getElementById("humanalbumid").style.display = "none";

//     document.getElementById("widealbumid").style.display = "none";

// }

// function hideShow3() {

//     document.getElementById("americanalbumid").style.display = "none";

//     document.getElementById("lightupalbumid").style.display = "none";

//     document.getElementById("sunbathalbumid").style.display = "block";

//     document.getElementById("contentalbumid").style.display = "none";

//     document.getElementById("humanalbumid").style.display = "none";

//     document.getElementById("widealbumid").style.display = "none";

// }

// function hideShow4() {

//     document.getElementById("americanalbumid").style.display = "none";

//     document.getElementById("lightupalbumid").style.display = "none";

//     document.getElementById("sunbathalbumid").style.display = "none";

//     document.getElementById("contentalbumid").style.display = "block";

//     document.getElementById("humanalbumid").style.display = "none";

//     document.getElementById("widealbumid").style.display = "none";

// }

// function hideShow5() {

//     document.getElementById("americanalbumid").style.display = "none";

//     document.getElementById("lightupalbumid").style.display = "none";

//     document.getElementById("sunbathalbumid").style.display = "none";

//     document.getElementById("contentalbumid").style.display = "none";

//     document.getElementById("humanalbumid").style.display = "block";

//     document.getElementById("widealbumid").style.display = "none";

// }

// function hideShow6() {

//     document.getElementById("americanalbumid").style.display = "none";

//     document.getElementById("lightupalbumid").style.display = "none";

//     document.getElementById("sunbathalbumid").style.display = "none";

//     document.getElementById("contentalbumid").style.display = "none";

//     document.getElementById("humanalbumid").style.display = "none";

//     document.getElementById("widealbumid").style.display = "block";

// }

var divs = ["americanalbumid", "lightupalbumid", "sunbathalbumid", "contentalbumid", "humanalbumid", "widealbumid"];
    var visibleDivId = null;
    function divVisibility(divId) {
        if(visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
        var i, divId, div;
        for(i = 0; i < divs.length; i++) {
            divId = divs[i];
            div = document.getElementById(divId);
            if(visibleDivId === divId) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }