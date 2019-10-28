#!/usr/bin/env node

// console.log(process.argv);
// 引用axios模块
var axios = require('axios');

// 定义查询参数
var data = {};

// 判断用户是否输入了城市参数，如果输入了参数，就给查询参数赋值
if(process.argv[2]){
	data.params = {
		city: process.argv[2]
	}
}

// 使用axios发出查询请求，具体用法可以参考npm
axios.get('此处为接口地址', data)
	.then(function(response) {
		var weather = response.data.results[0].weather_data[0];
		console.log(response.data.results[0].currentCity);
		console.log(weather.temperature);
		console.log(weather.weather + ',' + weather.wind);
	})
	.catch(function(err){
		console.log(err);
	})
