window.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "default");
    }
    if (!localStorage.getItem("custombg")) {
        localStorage.setItem("custombg", false);
    }
    if (localStorage.getItem("theme") == "night") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg");
        }

        document.getElementById("theme").setAttribute("href", "/assets/styles/night.css");
    }
    else if (localStorage.getItem("theme") == "quartz") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg");
        }
        document.getElementById("theme").setAttribute("href", "/assets/styles/quartz.css");
    }
    else if (localStorage.getItem("theme") == "twelve") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "https://static.vecteezy.com/system/resources/previews/002/623/559/non_2x/abstract-white-and-grey-gradient-color-with-oblique-lines-stripes-background-geometric-minimal-pattern-modern-sleek-texture-simple-paper-cut-concept-illustration-vector.jpg");
        }
        document.getElementById("theme").setAttribute("href", "/assets/styles/twelve.css");
    }
    else if (localStorage.getItem("theme") == "dusk") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "https://images2.alphacoders.com/133/1330484.png");
        }
        document.getElementById("theme").setAttribute("href", "/assets/styles/dusk.css");
    }
    else if (localStorage.getItem("theme") == "flourishing") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "https://i.redd.it/u2klg77z1kr51.jpg");
        }
        document.getElementById("theme").setAttribute("href", "/assets/styles/flourishing.css");
    }
    else if (localStorage.getItem("theme") == "default") {
        if (localStorage.getItem("custombg") == 'false') {
            document.getElementById("bg").setAttribute("src", "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");
        }
        document.getElementById("theme").setAttribute("href", "/assets/styles/main.css");
    }
})
