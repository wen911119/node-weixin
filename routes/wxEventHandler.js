/**
 * Created by admin on 2017/2/17.
 */
var clickEventHandler = require("./wx_clickEventHandler.js");
var WechatAPI = require('wechat-api');
var fetch = require('node-fetch');
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
            let msgs = msg.EventKey.split('a');
            fetch("http://1270.0.0.1:4040/api/device/bind", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "openid="+msg.FromUserName+"&deviceid="+msgs[0]+"&appid="+msgs[1]+"&developerid="+msgs[2]
            }).then(function (data) {
                return data.json()
            }).then(function(jsonData){
                if(jsonData.status=='ok'){
                    res = '绑定成功'
                }else{
                    res = '绑定失败，失败原因：'+jsonData.msg
                }
            });
            res = msg.EventKey;
            break;
        default:
            res = "默认处理";
            break;
    };
    return res;
};

module.exports = EventHandler;
