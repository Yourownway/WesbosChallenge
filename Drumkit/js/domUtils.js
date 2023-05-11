var UTIL = (function (nsp) {
    let items = document.querySelectorAll(".sound-item")
    let audio = document.getElementsByTagName("audio")
    let activeItem = () => document.getElementsByClassName("active")[0];

    let sub = nsp.dom = nsp.dom || {};

    const combineArray = () => {
        let array = []
        if (items.length && audio.length && items.length === audio.length) {
            for (let i = 0; i < items.length; i++) {
                array = [...array, { item: items[i], audio: audio[i] }]
            }
        }
        return array
    }
    sub.pad = combineArray();
    sub.activeItem = activeItem;
    return nsp
})( UTIL || {})