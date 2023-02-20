'use strict';
// const crypto = require('crypto')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await uniCloud.getPhoneNumber({
		appid: '__UNI__DB894D9', // 替换成自己开通一键登录的应用的DCloud appid，使用callFunction方式调用时可以不传（会自动取当前客户端的appid），如果使用云函数URL化的方式访问必须传此参数
		provider: 'univerify',
		apiKey: '575c47ad05577d2934fe35d7d568f4c0', // 在开发者中心开通服务并获取apiKey
		apiSecret: '00f8da576e3dfa6310b6d60ecf067c84', // 在开发者中心开通服务并获取apiSecret
		access_token: event.access_token,
		openid: event.openid
	})
 
	// 执行用户信息入库等操作，正常情况下不要把完整手机号返回给前端
	// 如果数据库在uniCloud上，可以直接入库
	// 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient
	//返回数据给客户端
	return {
		code: 0,
		message: '获取手机号成功',
		data:res
	}
}