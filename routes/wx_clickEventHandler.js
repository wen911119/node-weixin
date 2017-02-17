/**
 * Created by admin on 2017/2/17.
 */
function clickEventHandler(ekey) {
    var res;
    switch (ekey){
        case "wx_user_center":
            res="用户中心";
            break;
        case "wx_bind_devic":
            res="绑定设备";
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