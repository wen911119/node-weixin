/**
 * Created by admin on 2017/2/17.
 */
function clickEventHandler(ekey,msg) {
    var res;
    switch (ekey){
        case "wx_user_center":
            res = [
                {
                    title: '个人中心',
                    description: '点我进入个人中心页',
                    picurl: 'http://img2.banggo.com/sources/cms/M2016/0216-ms.jpg',
                    url: 'http://sueinlee.com/user?openid='+msg.FromUserName
                }
            ];
            break;
        case "wx_bind_device":
            res="绑定设备";
            res = [
                {
                    title: '设备绑定',
                    description: '点我进入设备绑定页',
                    picurl: 'http://img2.banggo.com/sources/cms/M2016/0216-ms.jpg',
                    url: 'http://sueinlee.com?openid='+msg.FromUserName
                }
            ];
            break;
        case "wx_unbind_device":
            res = "解绑设备";
            break;
        default:
            res = "未知按键";
    }
    return res;
}

module.exports = clickEventHandler;