var divs = ["americanalbumid", "lightupalbumid", "sunbathalbumid", "contentalbumid", "humanalbumid", "widealbumid", "parishshow", "savageandmurphy", "monasticliving", "poissonrouge", "golddiggers"];
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

var newsDivs = ["parishshow", "savageandmurphy", "monasticliving", "poissonrouge", "golddiggers"];
    var newsVisibleDivId = null;
    function newsDivVisibility(newsDivId) {
        if(newsVisibleDivId === newsDivId) {
            newsVisibleDivId = null;
        } else {
            newsVisibleDivId = newsDivId;
        }
        newsHideNonVisibleDivs();
    }
    function newsHideNonVisibleDivs() {
        var newsI, newsDivId, newsDiv;
        for(newsI = 0; newsI < newsDivs.length; newsI++) {
            newsDivId = newsDivs[newsI];
            div = document.getElementById(newsDivId);
            if(newsVisibleDivId === newsDivId) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }