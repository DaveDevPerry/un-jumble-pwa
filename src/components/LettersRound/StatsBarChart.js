import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
	datasets: [
		{
			label: '# of letters',
			data: [12, 19, 5, 12, 7, 4, 2],
			backgroundColor: [
				'rgba(255, 99, 132, 0.7)',
				'rgba(54, 162, 235, 0.7)',
				'rgba(255, 206, 86, 0.7)',
				'rgba(75, 192, 192, 0.7)',
				'rgba(153, 102, 255, 0.7)',
				'rgba(255, 159, 64, 0.7)',
				'rgba(255, 206, 86, 0.7)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 2,
		},
	],
};

const options = {
	legend: {
		labels: {
			font: {
				color: 'blue',
				size: 18,
			},
		},
	},
};

function StatsBarChart() {
	return (
		<div>
			{/* <h1>doughnut chart</h1> */}
			<Doughnut data={data} options={options} />
		</div>
	);
}

export default StatsBarChart;
