var options = {
	chart: {
		height: 240,
		type: 'rangeBar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
		}
	},
	series: [{
		name: 'Zuairia',
		data: [{
			x: 'Wireframes',
			y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
		}, {
			x: 'Design',
			y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()]
		 
		}, {
			x: 'Code',
			y: [new Date('2019-03-04').getTime(), new Date('2019-03-07').getTime()]
		}]
	}, {
		name: 'Sayed',
		data: [{
			x: 'Wireframes',
			y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
		}, {
			x: 'Design',
			y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
		}, {
			x: 'Code',
			y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()]
		}]
	}],
	yaxis: {
		min: new Date('2019-03-01').getTime(),
		max: new Date('2019-03-14').getTime()
	},
	xaxis: {
		type: 'datetime'
	},
	colors: ['#007ae1', '#ff3e3e', '#00bb42', '#ffbf05'],
}

var chart = new ApexCharts(
	document.querySelector("#project-timeline"),
	options
);

chart.render();