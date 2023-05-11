
var MAIN = (function (nsp, dom, event) {

    const start = () => {
        event.activateKeybord();
        event.activateClick();
    }

    document.addEventListener("DOMContentLoaded", start)

})(MAIN || {}, UTIL.dom, UTIL.event)

