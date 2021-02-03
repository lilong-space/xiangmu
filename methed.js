
        // document.cookie = "name=18"
function getCookie(key) {
    let cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        result = cookieArr[i].split("=");
        if (result[0] == key) {
            return result[1];
        }
    }
    return "";
}
function removeCookie(key) {
    let date = new Date("1970-1-1");
    document.cookie = `${key} = "";expires=${date}`;
}
// removeCookie(name);
function setCookie(key, value, day) {
    let date = new Date;
    date.setDate(date.getDate() + parseInt(day));
    document.cookie = `${key} = ${value};expires=${date}`;
}
// setCookie("name","xiaoming",8)
function ajax(way, url, para, is, mode) {
    let xhr;
    if (window.ActiveXObject) {
        //ie
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    } else {
        //非ie
        xhr = new XMLHttpRequest();
    }
    pattern = way.toLowerCase();
    if (pattern === "get") {
        let site = url;
        if (para !== "") {
            site += "?" + para;
        }
        xhr.open(pattern, site, is);
        xhr.send();
    }
    if (pattern === "post") {
        xhr.open(pattern, url, is);
        xhr.setRequestHeader("Conten-type", "application/x-www-form-urlencoded");
        xhr.send(para);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            mode(xhr.responseText);
        }
    }
}