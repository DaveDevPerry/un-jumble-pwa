import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { defaults, Pie } from 'react-chartjs-2';
// import 'chartjs-plugin-datalabels';

// defaults.global.defaultColor = '#fff';
// defaults.global.defaultFontColor = '#f00';
// defaults.global.defaultFontFamily = '#222222';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsPieChart = ({
	threeLetters,
	fourLetters,
	fiveLetters,
	sixLetters,
	sevenLetters,
	eightLetters,
	nineLetters,
}) => {
	// const options = {
	// 	legend: {
	// 		labels: {
	// 			font: {
	// 				color: 'blue',
	// 				size: 18,
	// 			},
	// 		},
	// 	},
	// };
	// const options = {
	// 	plugins: {
	// 		// datalabels: {
	// 		// 	display: true,
	// 		// 	color: '#FFF',
	// 		// 	borderRadius: 10,
	// 		// 	backgroundColor: function (context) {
	// 		// 		return context.dataset.backgroundColor;
	// 		// 	},
	// 		// 	align: 'center',
	// 		// 	textAlign: 'center',
	// 		// 	font: {
	// 		// 		weight: 'bold',
	// 		// 	},
	// 		// },
	// 	},
	// };
	const data = {
		labels: [3, 4, 5, 6, 7, 8, 9],
		// labels: ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
		// font: { color: '#f00' },
		fontColor: '#f00',
		// labels: ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
		datasets: [
			{
				label: '# of letters in word',
				data: [
					threeLetters,
					fourLetters,
					fiveLetters,
					sixLetters,
					sevenLetters,
					eightLetters,
					nineLetters,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255, 206, 86, 1)',
				],
				// borderColor: ['rgb(51,112,156)'],
				// borderColor: [
				// 	'rgba(255, 99, 132, 1)',
				// 	'rgba(54, 162, 235, 1)',
				// 	'rgba(255, 206, 86, 1)',
				// 	'rgba(75, 192, 192, 1)',
				// 	'rgba(153, 102, 255, 1)',
				// 	'rgba(255, 159, 64, 1)',
				// 	'rgba(255, 206, 86, 1)',
				// ],
				borderWidth: 4,
				// font: { color: '#f00' },
				// fontColor: '#f00',
			},
		],
		// options: {
		// 	legend: {
		// 		labels: {
		// 			font: { color: '#f00' },
		// 		},
		// 	},
		// },
	};

	return <Pie data={data} />;
	// return <Pie data={data} options={options} />;
};

export default StatsPieChart;
