/**
 * @module Info
 * @author Rube
 * @date 15/11/8
 * @desc 浏览器信息抓取
 */

(function () {
    var gaze = {};
    gaze.i = {};
    gaze.i.Ba = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    gaze.i.cookieEnabled = navigator.cookieEnabled;
    gaze.i.javaEnabled = navigator.javaEnabled();
    gaze.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    gaze.i.Ea = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    gaze.i.colorDepth = window.screen.colorDepth || 0;

    console.log(gaze);
})();