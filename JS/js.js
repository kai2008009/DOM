/*页面上禁止使用右键*/
function click(e) {
    if (document.all) {
        if (event.button == 1 || event.button == 2 || event.button == 3) {
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
var travel = true
var hotkey = 17   /* hotkey即为热键的键值,是ASII码,这里99代表c键 */
if (document.layers)
    document.captureEvents(Event.KEYDOWN)
function gogo(e) {
    if (document.layers) {
        if (e.which == hotkey && travel) {
            alert("操作错误.或许是您按错了按键!");
        }
    }
    else if (document.all) {
        if (event.keyCode == hotkey && travel) { alert("操作错误.或许是您按错了按键!"); }
    }
}
document.onkeydown = gogo

/*将按钮状态改为不可用，则可避免重复提交 */
function hui(anniu) {
    document.ftop.submit();
    anniu.disabled = true;
}

/*获取当前时间*/
var now = (new Date()).getHours();
var key = "key";
if (now > 0 && now <= 6) {
    document.write(key + ",午夜好");
} else if (now > 6 && now <= 11) {
    document.write(key + ",早上好");
} else if (now > 11 && now <= 14) {
    document.write(key + ",中午好");
} else if (now > 14 && now <= 18) {
    document.write(key + ",下午好");
} else {
    document.write(key + ",晚上好");
}