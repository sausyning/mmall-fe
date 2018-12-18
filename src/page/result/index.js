/*
* @Author: Administrator
* @Date:   2018-10-10 14:52:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-12-17 17:37:47
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
	if(type === 'payment'){
		var orderNumber = _mm.getUrlParam('orderNumber'),
			$orderNumber = $element.find('.order-number');
		$orderNumber.attr('href',$orderNumber.attr('href') + orderNumber);
	}
	//显示对应的提示元素
	$element.show();
});