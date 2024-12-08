var bg = document.getElementById("bg")


if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "default");
}
if (!localStorage.getItem("custombg")) {
    localStorage.setItem("custombg", "");
}
if (localStorage.getItem("theme") == "night") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "/assets/imgs/bg/night.jpg");
    }

    document.documentElement.style.cssText = "--primary: rgb(0, 0, 0);--secondary: rgb(74, 74, 74);--font: rgb(74, 74, 74);--accent: rgb(40, 40, 40); ";
}
else if (localStorage.getItem("theme") == "quartz") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "/assets/imgs/bg/quartz.avif");
    }
    document.documentElement.style.cssText = "    --primary: rgb(255, 255, 255);--secondary: rgb(198, 198, 198);--font: rgb(138, 138, 138); --accent: rgb(161, 161, 161); ";
}
else if (localStorage.getItem("theme") == "twelve") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "/assets/imgs/bg/twelve.jpg");
    }
    document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(74, 74, 74); --font: rgb(74, 74, 74); --accent: rgb(40, 40, 40); ";
}
else if (localStorage.getItem("theme") == "dusk") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "/assets/imgs/bg/dusk.png");
    }
    document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(255, 202, 171); --font: rgb(255, 206, 171); --accent: rgb(255, 113, 62); ";
}
else if (localStorage.getItem("theme") == "flourishing") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "/assets/imgs/bg/flourishing.jpg");
    }
    document.documentElement.style.cssText = "    --primary: rgb(255, 239, 189);--secondary: rgb(192, 171, 149); --font: rgb(255, 203, 184); --accent: rgb(243, 222, 187); ";
}
else if (localStorage.getItem("theme") == "default") {
    if (localStorage.getItem("custombg") == '') {
        bg.setAttribute("src", "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E")
    }
    document.documentElement.style.cssText = "    --primary: rgb(0, 0, 0);--secondary: rgb(255, 255, 255);--font: rgb(255, 255, 255);--accent: rgb(0, 153, 255); ";
}
if (localStorage.getItem("custombg") != '') {
    bg.setAttribute("src", localStorage.getItem("custombg"));
}