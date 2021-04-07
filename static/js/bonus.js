function buildGauge(wfreq) {
	console.log(wfreq);
    
	var gaugeData = [
		{
			domain: { x: [0, 1], y: [0, 1] },
			value: wfreq,
			title: {text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week'},
			type: "indicator",
			mode: "gauge+number",
			gauge: {
				axis: { range: [null, 9] },
				steps: [
					{ range: [0, 1], color: 'rgb(248, 243, 236)' },
					{ range: [1, 2], color: 'rgb(244, 241, 229)' },
					{ range: [2, 3], color: 'rgb(233, 230, 202)' },
					{ range: [3, 4], color: 'rgb(229, 231, 179)' },
					{ range: [4, 5], color: 'rgb(213, 228, 157)' },
					{ range: [5, 6], color: 'rgb(183, 204, 146)' },
					{ range: [6, 7], color: 'rgb(140, 191, 136)' },
					{ range: [7, 8], color: 'rgb(138, 187, 143)' },
					{ range: [8, 9], color: 'rgb(133, 180, 138)' }
				],
			}
		}
	];
	
	var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
	
	Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

buildGauge()