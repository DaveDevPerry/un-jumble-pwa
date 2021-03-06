import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const StatsBarChart = ({
	threeLetters,
	fourLetters,
	fiveLetters,
	sixLetters,
	sevenLetters,
	eightLetters,
	nineLetters,
}) => {
	const data = {
		labels: ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
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
				borderColor: ['rgb(51,112,156)'],
				borderWidth: 4,
			},
		],
	};
	return <Bar data={data} />;
};

export default StatsBarChart;
