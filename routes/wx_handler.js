var wechat = require('wechat');
var config = {
    token: 'wen911119',
    appid: 'wx59859d17d4f8bf42',
    encodingAESKey: 'encodinAESKey',
    checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};


router.get('/', wechat('wen911119').text(function (message, req, res, next) {
    // TODO
    res.reply('text');
}).image(function (message, req, res, next) {
    // TODO
    res.reply('img');
}).voice(function (message, req, res, next) {
    // TODO
    res.reply('voice.');
}).video(function (message, req, res, next) {
    // TODO
    res.reply('video.');
}).location(function (message, req, res, next) {
    // TODO
    res.reply('location.');
}).link(function (message, req, res, next) {
    // TODO
    res.reply('link.');
}).event(function (message, req, res, next) {
    // TODO
    res.reply('event.');
}).device_text(function (message, req, res, next) {
    // TODO
    res.reply('这条回复会推到设备里去.');
}).device_event(function (message, req, res, next) {
    // TODO
    res.reply('这条回复会推到设备里去.evevt');
}).middlewarify());
module.exports = router;