'use strict';
;
(function () {

    var Gaze = function Gaze() {

        var config = {
            information: true,
            performance: true,
            event: true
        };
        this.setConfig = function (name, value) {

            if (config.hasOwnProperty(name) && typeof value == 'boolean' && config[name] != value) {

                var functionName = 'gaze' + name[0].toUpperCase() + name.substr(1);
                config[name] = value;
                this[functionName](value);
            }
        };
        this.getConfig = function () {
            return config;
        };
        this.run = function () {

            this.gazeInformation(config['information']);
            this.gazePerformance(config['performance']);
            this.gazeEvent(config['event']);
        };
    };

    Gaze.prototype = {
        gazeEvent: function gazeEvent(isRun) {

            var rootDom = document.getElementsByTagName('body')[0];
            if (isRun) {
                rootDom.onclick = function (e) {
                    console.log(e);
                    return true;
                };
            } else {
                rootDom.onclick = null;
            }
        },
        gazeInformation: function gazeInformation(isRun) {},
        gazePerformance: function gazePerformance(isRun) {}
    };

    var gaze = new Gaze();

    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return gaze;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = gaze;
    } else {
        window.gaze = gaze;
    }
})();