/*
* @Author: Administrator
* @Date:   2018-09-09 12:08:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-01 15:20:00
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm = require('util/mm.js');

$(function() {
	//渲染banner的html
	var bannerHtml = _mm.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	//初始化banner
    var $slider = $('.banner').unslider({
    	dots: true,
    });
    //前一张跟后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    });
});