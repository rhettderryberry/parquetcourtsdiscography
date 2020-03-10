var divs = ["americanalbumid", "lightupalbumid", "sunbathalbumid", "contentalbumid", "humanalbumid", "widealbumid"];
var visibleDivId = null;

function divVisibility(divId) {
    if (visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

var newsDivs = ["parishshow", "savageandmurphy", "monasticliving", "poissonrouge", "golddiggers"];
var newsVisibleDivId = null;

function newsDivVisibility(newsDivId) {
    if (newsVisibleDivId === newsDivId) {
        newsVisibleDivId = null;
    } else {
        newsVisibleDivId = newsDivId;
    }
    newsHideNonVisibleDivs();
}

function newsHideNonVisibleDivs() {
    var newsI, newsDivId, newsDiv;
    for (newsI = 0; newsI < newsDivs.length; newsI++) {
        newsDivId = newsDivs[newsI];
        div = document.getElementById(newsDivId);
        if (newsVisibleDivId === newsDivId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    if (e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') {
        return
    };
    // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;

    // assign default values for top and left properties
    if (!targ.style.left) {
        targ.style.left = '0px'
    };
    if (!targ.style.top) {
        targ.style.top = '0px'
    };

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
    document.onmousemove = dragDiv;
    return false;

}

function dragDiv(e) {
    if (!drag) {
        return
    };
    if (!e) {
        var e = window.event
    };
    // var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left = coordX + e.clientX - offsetX + 'px';
    targ.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
}

function stopDrag() {
    drag = false;
}
window.onload = function () {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}