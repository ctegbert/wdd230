function getLastModified() {
    console.log("Getting last modified date...");
    document.getElementById("lastModified").innerHTML = document.lastModified;
}

// Lazy load images when user scrolls
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll(".image");
    var options = {
        rootMargin: "0px",
        threshold: 0.1
    };

    var lazyLoad = function(target) {
        var io = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    var src = image.getAttribute("data-src");
                    var caption = image.getAttribute("data-caption");

                    image.style.backgroundImage = "url('" + src + "')";
                    image.innerHTML = "<span class='caption'>" + caption + "</span>";
                    observer.unobserve(image);
                }
            });
        }, options);

        target.forEach(function(image) {
            lazyLoad.observe(image);
        });
    };

    lazyLoad(lazyImages);
});

// Check and display visit message based on localStorage
document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");
    var visitMessage = document.getElementById("visitMessage");

    if (lastVisit === null) {
        visitMessage.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        var currentDate = new Date();
        var daysPassed = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysPassed === 0) {
            visitMessage.innerHTML = "Back so soon! Awesome!";
        } else {
            visitMessage.innerHTML = "You last visited " + daysPassed + " day" + (daysPassed === 1 ? "" : "s") + " ago.";
        }
    }

    localStorage.setItem("lastVisit", Date.now());
});
