var oMeta = document.createElement('meta');
oMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
oMeta.name = "viewport";
document.getElementsByTagName('head')[0].appendChild(oMeta);
// console.log(htmlWidth);
var rem = function() {
    htmlWidth = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth);
    if (navigator.userAgent.indexOf('Mobile') != -1) {
        if (htmlWidth < 320) {
            document.getElementsByTagName("html")[0].setAttribute("style", "font-size:20px;");
        } else {
            document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + (50 * htmlWidth / 375).toFixed() + "px");
        };
    } else {
        //			document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + (50 * htmlWidth / 375).toFixed() + "px");
    };
    console.log(htmlWidth)
};
window.addEventListener('resize', function() {
    rem();
}, false);
rem();

function webviewSize(rem) {
    console.log(rem)
    return rem * 50 * (htmlWidth / 375)

};