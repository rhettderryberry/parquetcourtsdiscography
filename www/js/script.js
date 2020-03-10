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

var dragItem = document.getElementById("#dragme");
var container = document.getElementById("#logo");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e) {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}