var UTIL = (function (nsp) {

    let { dom } = nsp;
    let sub = nsp.event = nsp.event || {}
    const activateKeyboard = document.addEventListener("keydown", (e) => {
        let { key } = e;
        dom.activeItem()?.classList.remove("active")
        let index = dom.pad.findIndex((prop) =>
            prop.item.innerText.toLowerCase() === key)
        if (index !== -1) {
            dom.pad[index].audio.play()
            dom.pad[index].item.classList.add("active")
        }
        setTimeout(() => {
            dom.activeItem()?.classList.remove("active")
        }, dom.pad[index].audio.duration * 1000)
    })
    const activateClick = document.addEventListener("click", (e) => {
        let { target } = e;
        dom.activeItem()?.classList.remove("active")
        let index = dom.pad.findIndex((prop) =>
            prop.item === target)
        if (index !== -1) {
            dom.pad[index].item.classList.add("active")
            dom.pad[index].audio.play()
            setTimeout(() => {
                dom.activeItem()?.classList.remove("active")
            }, dom.pad[index].audio.duration * 1000)
        }
    })
    sub.activateClick = activateClick;
    sub.activateKeyboard = activateKeyboard;

    return nsp

})(UTIL || {})
