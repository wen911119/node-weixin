/**
 * Created by admin on 2017/2/17.
 */
var clickEventHandler = require("./wx_clickEventHandler.js");

function EventHandler(msg) {
    var res = "事件处理结果";
    switch (msg.Event) {
        case "CLICK":
            res = clickEventHandler(msg.EventKey, msg);
            break;
        case "subscribe":
            res = "订阅";
            break;
        case "unsubscribe":
            res = "取消订阅";
            break;
        case 'SCAN':
            res = msg.EventKey;
            break;
        default:
            res = "默认处理";
            break;
    };
    return res;
};

module.exports = EventHandler;
