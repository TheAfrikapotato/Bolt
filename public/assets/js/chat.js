var chatframe = document.getElementById("chatframe");
var url;
url = __uv$config.prefix + __uv$config.encodeUrl("https://discord.gg/cvXD5nDBAW");
localStorage.setItem("url", url);

chatframe.setAttribute("src", "/browser.html");