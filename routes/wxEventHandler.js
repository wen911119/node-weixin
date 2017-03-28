/**
 * Created by admin on 2017/2/17.
 */
var clickEventHandler = require("./wx_clickEventHandler.js");
var WechatAPI = require('wechat-api');
var fetch = require('node-fetch');
function EventHandler(msg) {
    var res = "事件处理结果";
    let p = new Promise(function (resolve, reject) {
        switch (msg.Event) {
            case "CLICK":
                res = clickEventHandler(msg.EventKey, msg);
                resolve(res);
                break;
            case "subscribe":
                res = "订阅";
                resolve(res);
                break;
            case "unsubscribe":
                res = "取消订阅";
                resolve(res);
                break;
            case 'SCAN':
                let msgs = msg.EventKey.split('a');
                fetch("http://127.0.0.1:4040/api/device/bind", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "openid=" + msg.FromUserName + "&deviceid=" + msgs[0] + "&appid=" + msgs[1] + "&developerid=" + msgs[2]
                }).then(function (data) {
                    return data.json()
                }).then(function (jsonData) {
                    
                    if (jsonData.status == 'ok') {
                        res = '绑定成功'
                    } else {
                        res = '绑定失败，失败原因：' + jsonData.msg
                        console.log(res, 2222221111);
                    }
                    resolve(res);
                }).catch(e => reject(e));
                break;
            default:
                res = "默认处理";
                resolve(res);
                break;
        };
    });
    return p
};

module.exports = EventHandler;
