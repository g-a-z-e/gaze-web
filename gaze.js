'use strict';

;(function () {
    /**
    * @module Shim
    * @author Rube
    * @date 15/11/8
    * @desc 提供一些 shim 功能
    */

    /**
     * @module Config
     * @author Rube
     * @date 15/11/8
     * @desc 配置sdk相应选项
     */

    var Config = {
        event: false,
        log: true,
        info: true,
        performance: false,
        host: 'http://localhost:5656/i/web',
        groupKey: 'f0cd0f4de8289155b90d6c4e78f14b1f'
    };
    /**
     * @module Report
     * @author Rube
     * @date 15/11/8
     * @desc 上传报告
     */

    function Reporter(entity) {
        return {
            toLog: function toLog() {
                Reporter.send('log', JSON.stringify(entity));
            },
            toInfo: function toInfo() {}
        };
    }

    Reporter.send = function (type, data) {
        function report(url) {
            var img = new Image();
            var rnd_id = "_img_" + Math.random();
            window[rnd_id] = img;
            img.onload = img.onerror = function () {
                window[rnd_id] = null;
            };
            img.src = url;
        }

        switch (type) {
            case 'log':
                var url = Config.host + '/log?e=' + data + '&k=' + Config.groupKey;
                report(url);
                break;
        }
    };

    if (Config.log) {
        /**
        * @module Log
        * @author Rube
        * @date 15/11/8
        * @desc 错误日志和自定义日志的捕获
        */

        window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
            errorObj = errorObj ? { name: errorObj['name'] || '' } : '';
            var obj = {
                msg: errorMessage || '',
                uri: scriptURI || '',
                line: lineNumber || '',
                column: columnNumber || '',
                detail: errorObj
            };
            Reporter(obj).toLog();
        };
    }

    if (Config.info) {
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
    }
})();