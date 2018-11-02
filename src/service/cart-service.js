/*
* @Author: Administrator
* @Date:   2018-09-09 21:03:36
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-02 17:20:49
*/
var _mm = require('util/mm.js');

var _cart = {
	//获取购物车数量
	getCartCount : function(resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success : resolve,
			error : reject
		});
	},
	//添加到购物车
	addTocart : function(productInfo,resolve,reject){
		_mm.request({
			url : _mm.getServerUrl('/cart/add.do'),
			data : productInfo,
			success : resolve,
			error : reject
		});
	}
};

module.exports = _cart;