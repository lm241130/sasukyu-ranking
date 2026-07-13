var chartDom = document.getElementById('chart-container');
var myChart = echarts.init(chartDom);
var option;

option = {
	title: {
		text: '都道府県別家事時間ランキング', 
		left: 'center',                  
		top: 0,                        
		textStyle: {
			color: '#2c3e50',          
			fontSize: 20               
		}
	},
     
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		},
		formatter: function(params) {
			var val = params[0].value;
			var hours = Math.floor(val / 60);
			var minutes = val % 60;
			var timeStr = hours > 0 ? hours + '時間' + minutes + '分' : minutes + '分';
			return params[0].name + ': ' + timeStr;
		}
	},
	grid: {
		left: '3%',
		right: '8%', 
		bottom: '3%',
		containLabel: true
	},
	// X軸（数値：分）
	xAxis: {
		type: 'value',
		name: '（分）',
		axisLabel: {
			formatter: '{value} 分'
		}
	},
	// Y軸（項目：都道府県名）
	yAxis: {
		type: 'category',
		data: [
			'47位 石川県', '46位 大分県', '45位 熊本県', '44位 山口県', '43位 愛媛県', 
			'42位 長崎県', '40位 岡山県', '40位 兵庫県', '39位 佐賀県', '38位 沖縄県', 
			'36位 茨城県', '36位 山形県', '35位 広島県', '32位 徳島県', '32位 大阪府', 
			'32位 岩手県', '30位 香川県', '30位 秋田県', '29位 富山県', '28位 岐阜県', 
			'27位 三重県', '26位 滋賀県', '25位 福岡県', '24位 北海道', '23位 静岡県', 
			'20位 東京都', '20位 埼玉県', '20位 宮城県', '19位 鳥取県', '15位 京都府', 
			'15位 愛知県', '15位 福島県', '15位 青森県', '14位 山梨県', '13位 神奈川県', 
			'11位 鹿児島県', '11位 栃木県', '10位 宮崎県', '9位 島根県', '8位 群馬県', 
			'6位 長野県', '6位 福井県', '5位 千葉県', '4位 和歌山県', '3位 高知県', 
			'2位 新潟県', '1位 奈良県'
		],
		axisLabel: {
			interval: 0 
		}
	},
	series: [
		{
			data: [
				{ value: 60 }, // 47位 石川県
				{ value: 84, itemStyle: { color: '#ED1C24' } }, // 46位 大分県
				{ value: 85, itemStyle: { color: '#ED1C24' } }, // 45位 熊本県
				{ value: 88 }, // 44位 山口県
				{ value: 89 }, // 43位 愛媛県
				{ value: 90, itemStyle: { color: '#ED1C24' } }, // 42位 長崎県
				{ value: 94 }, // 40位 岡山県
				{ value: 94 }, // 40位 兵庫県
				{ value: 95, itemStyle: { color: '#ED1C24' } }, // 39位 佐賀県
				{ value: 98, itemStyle: { color: '#ED1C24' } }, // 38位 沖縄県
				{ value: 100 }, // 36位 茨城県
				{ value: 100 }, // 36位 山形県
				{ value: 101 }, // 35位 広島県
				{ value: 102 }, // 32位 徳島県
				{ value: 102 }, // 32位 大阪府
				{ value: 102 }, // 32位 岩手県
				{ value: 103 }, // 30位 香川県
				{ value: 103 }, // 30位 秋田県
				{ value: 104 }, // 29位 富山県
				{ value: 106 }, // 28位 岐阜県
				{ value: 108 }, // 27位 三重県
				{ value: 109 }, // 26位 滋賀県
				{ value: 110, itemStyle: { color: '#ED1C24' } }, // 25位 福岡県
				{ value: 111 }, // 24位 北海道
				{ value: 112 }, // 23位 静岡県
				{ value: 114 }, // 20位 東京都
				{ value: 114 }, // 20位 埼玉県
				{ value: 114 }, // 20位 宮城県
				{ value: 117 }, // 19位 鳥取県
				{ value: 118 }, // 15位 京都府
				{ value: 118 }, // 15位 愛知県
				{ value: 118 }, // 15位 福島県
				{ value: 118 }, // 15位 青森県
				{ value: 120 }, // 14位 山梨県
				{ value: 123 }, // 13位 神奈川県
				{ value: 125, itemStyle: { color: '#ED1C24' } }, // 11位 鹿児島県
				{ value: 125 }, // 11位 栃木県
				{ value: 130, itemStyle: { color: '#ED1C24' } }, // 10位 宮崎県
				{ value: 133 }, // 9位 島根県
				{ value: 134 }, // 8位 群馬県
				{ value: 137 }, // 6位 長野県
				{ value: 137 }, // 6位 福井県
				{ value: 140 }, // 5位 千葉県
				{ value: 141 }, // 4位 和歌山県
				{ value: 147 }, // 3位 高知県
				{ value: 153 }, // 2位 新潟県
				{ value: 155 }  // 1位 奈良県
			],
			type: 'bar',
			itemStyle: {
				color: '#e0e0e0', 
				borderRadius: [0, 4, 4, 0]
			},
			label: {
				show: true,
				position: 'right',
				formatter: function(params) {
					var val = params.value;
					var hours = Math.floor(val / 60);
					var minutes = val % 60;
					return hours > 0 ? hours + 'h' + minutes + 'm' : minutes + 'm';
				},
				style: {
					fontSize: 11
				}
			}
		}
	]
};

myChart.setOption(option);

window.addEventListener('resize', function() {
	myChart.resize();
});
