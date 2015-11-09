/**
 * @module Log
 * @author Rube
 * @date 15/11/8
 * @desc 错误日志和自定义日志的捕获
 */

window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    errorObj = errorObj ? {name: errorObj['name'] || ''} : '';
    var obj = {
        msg: errorMessage || '',
        uri: scriptURI || '',
        line: lineNumber || '',
        column: columnNumber || '',
        detail: errorObj
    };
    Reporter(obj).toLog();
};
