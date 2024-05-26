(function () {
    "use strict";

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");
    const udm = urlParams.get("udm");

    if (query && !udm) {
        window.location.href = `https://www.google.com/search?q=${query}&udm=14`;
    }
})();
