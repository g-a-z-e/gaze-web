/**
 * @module Report
 * @author Rube
 * @date 15/11/8
 * @desc 上传报告
 */

function Reporter(entity) {
    return {
        toLog: ()=> {
            Reporter.send('log', JSON.stringify(entity));
        },
        toInfo: ()=> {

        }
    }
}

Reporter.send = (type, data)=> {
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



