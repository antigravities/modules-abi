module.exports = {
	'nw.js': {
		abisCheck: [
			['0.28.3', 64],
			['0.33.4', 69],
			['0.37.4', 73],
			['0.39.2', 75]
		],
		versionsCheck: [
			[64, '0.28.3'],
			[69, '0.33.4'],
			[70, '0.34.5']
		],
		rangeCheck: [
			[70, [
				'0.34.0',
				'0.34.5'
			]],
			[69, [
				'0.33.0',
				'0.33.4'
			]]
		]
	},
	electron: {
		abisCheck: [
			['3.1.6', 64],
			['4.0.0', 64],
			['4.2.6', 69],
			['5.0.13', 70],
			['6.0.0', 73]
		],
		versionsCheck: [
			[64, '4.0.3'],
			[69, '4.2.12'],
			[70, '5.0.13']
		],
		rangeCheck: [
			[69, [
				'4.0.4',
				'4.2.12'
			]],
			[57, [
				'1.8.0',
				'2.1.0-unsupported.20180809'
			]]
		]
	},
	node: {
		abisCheck: [
			['12.18.1', 72],
			['10.1.0', 64],
			['8.7.0', 57],
			['6.17.0', 48]
		],
		versionsCheck: [
			[64, '10.21.0'],
			[67, '11.15.0'],
			[72, '12.18.1']
		],
		rangeCheck: []
	}
};
