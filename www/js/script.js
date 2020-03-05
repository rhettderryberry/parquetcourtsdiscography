function makeDraggable(evt) {
    var svg = evt.target;
    vsg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);

    function startDrag(evt) {
        if (evt.target.classList.contains('draggable')) {
            selectedElement = evt.target;
        }
    }

    function drag(evt) { 
    }

    function endDrag(evt) {
    }
var selectedElement = null;
}

