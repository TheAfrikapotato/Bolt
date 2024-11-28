window.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "default");
    }
    if (!localStorage.getItem("custombg")) {
        localStorage.setItem("custombg", "");
    }
    if (localStorage.getItem("theme") == "night") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg");
        }

        document.documentElement.style.cssText = "--primary: rgb(0, 0, 0);--secondary: rgb(74, 74, 74);--font: rgb(255, 255, 255);--accent: rgb(40, 40, 40); ";
    }
    else if (localStorage.getItem("theme") == "quartz") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830026.jpg");
        }
        document.documentElement.style.cssText = "    --primary: rgb(255, 255, 255);--secondary: rgb(198, 198, 198);--font: rgb(138, 138, 138); --accent: rgb(161, 161, 161); ";
    }
    else if (localStorage.getItem("theme") == "twelve") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "https://static.vecteezy.com/system/resources/previews/002/623/559/non_2x/abstract-white-and-grey-gradient-color-with-oblique-lines-stripes-background-geometric-minimal-pattern-modern-sleek-texture-simple-paper-cut-concept-illustration-vector.jpg");
        }
        document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(74, 74, 74);--font: rgb(255, 255, 255); --accent: rgb(40, 40, 40); ";
    }
    else if (localStorage.getItem("theme") == "dusk") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "https://images2.alphacoders.com/133/1330484.png");
        }
        document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(255, 202, 171); --font: rgb(255, 246, 238); --accent: rgb(255, 113, 62); ";
    }
    else if (localStorage.getItem("theme") == "flourishing") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "https://i.redd.it/u2klg77z1kr51.jpg");
        }
        document.documentElement.style.cssText = "    --primary: rgb(255, 239, 189);--secondary: rgb(192, 171, 149); --font: rgb(255, 203, 184); --accent: rgb(243, 222, 187); ";
    }
    else if (localStorage.getItem("theme") == "default") {
        if (localStorage.getItem("custombg") == '') {
            document.getElementById("bg").setAttribute("src", "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");
        }
        document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(255, 255, 255);--font: rgb(255, 255, 255);--accent: rgb(0, 153, 255); ";
    }
})
