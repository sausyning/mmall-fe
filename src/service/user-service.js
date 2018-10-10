/*
* @Author: Administrator
* @Date:   2018-09-09 20:51:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-09 21:05:31
*/
var _mm = require('util/mm.js');

var _user = {
	//检查登录状态
	checkLogin : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/user/get_user_info.do'),
			method : 'POST',
			success : resolve,
			error : reject
		});
	},
	//登出
	logout : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/user/logout.do'),
			method : 'POST',
			success : resolve,
			error : reject
		});
	}
};

module.exports = _user;