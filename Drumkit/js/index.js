(function loadScript(urls) {
    var head = document.getElementsByTagName('head')[0];
    urls.forEach((url) => {
        var script = document.createElement('script');
        script.src = "./js/" + url + ".js";
        head.appendChild(script);

    });
})(["domUtils", "event", "main"])