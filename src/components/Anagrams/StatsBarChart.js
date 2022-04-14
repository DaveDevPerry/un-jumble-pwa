import React, { useEffect, useState } from 'react';
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

const StatsBarChart = ({ levelFourData, levelFiveData, levelSixData }) => {
	const [levelFourWordData, setLevelFourWordData] = useState([]);
	const [levelFiveWordData, setLevelFiveWordData] = useState([]);
	const [levelSixWordData, setLevelSixWordData] = useState([]);
	useEffect(() => {
		// setPageTitle('Anagram');
		// console.log(games, 'anagram stats?');
		const levelFourGames = extractValue(levelFourData, 'allAnagramWords');
		console.log(levelFourGames);
		let levelFourMerged = [].concat.apply([], levelFourGames);
		console.log(levelFourMerged, 'single arr?');
		// setTotalWordCount(merged.length);
		setLevelFourWordData(levelFourMerged);
		const levelFiveGames = extractValue(levelFiveData, 'allAnagramWords');
		console.log(levelFiveGames);
		let levelFiveMerged = [].concat.apply([], levelFiveGames);
		console.log(levelFiveMerged, 'single arr?');
		// setTotalWordCount(merged.length);
		setLevelFiveWordData(levelFiveMerged);
		const levelSixGames = extractValue(levelSixData, 'allAnagramWords');
		console.log(levelSixGames);
		let levelSixMerged = [].concat.apply([], levelSixGames);
		console.log(levelSixMerged, 'single arr?');
		// setTotalWordCount(merged.length);
		setLevelSixWordData(levelSixMerged);
	}, [levelFourData, levelFiveData, levelSixData]);

	// program to extract value as an array from an array of objects
	function extractValue(arr, prop) {
		// extract value from property
		let extractedValue = arr.map((item) => item[prop]);
		return extractedValue;
	}
	// const options = {
	// 	// plugins: {
	// 	// 	title: {
	// 	// 		display: true,
	// 	// 		text: 'Chart.js Bar Chart - Stacked',
	// 	// 	},
	// 	// },
	// 	responsive: true,
	// 	scales: {
	// 		x: {
	// 			stacked: true,
	// 		},
	// 		y: {
	// 			stacked: true,
	// 		},
	// 	},
	// };
	const data = {
		labels: ['Level Four', 'Level Five', 'Level Six'],
		datasets: [
			{
				label: 'Correct Words',
				data: [
					levelFourWordData.filter((words) => {
						return words.isCorrect === true;
					}).length,
					levelFiveWordData.filter((words) => {
						return words.isCorrect === true;
					}).length,
					levelSixWordData.filter((words) => {
						return words.isCorrect === true;
					}).length,
				],
				backgroundColor: 'rgb(99, 255, 109)',
			},
			{
				label: 'Incorrect Words',
				data: [
					`-${
						levelFourWordData.filter((words) => {
							return words.isCorrect === false;
						}).length
					}`,
					`-${
						levelFiveWordData.filter((words) => {
							return words.isCorrect === false;
						}).length
					}`,
					`-${
						levelSixWordData.filter((words) => {
							return words.isCorrect === false;
						}).length
					}`,
				],
				backgroundColor: 'rgb(255, 99, 132)',
			},
		],
		// datasets: [
		// 	{
		// 		label: 'Level 4 correct',
		// 		data: levelFourWordData.filter((words) => {
		// 			return words.isCorrect === true;
		// 		}).length,
		// 		backgroundColor: 'rgb(99, 255, 109)',
		// 	},
		// 	{
		// 		label: 'Level 4 incorrect',
		// 		data: levelFourWordData.filter((words) => {
		// 			return words.isCorrect === false;
		// 		}).length,
		// 		backgroundColor: 'rgb(255, 99, 132)',
		// 	},
		// 	{
		// 		label: 'Level 5 correct',
		// 		data: levelFiveWordData.filter((words) => {
		// 			return words.isCorrect === true;
		// 		}).length,
		// 		backgroundColor: 'rgb(99, 255, 109)',
		// 	},
		// 	{
		// 		label: 'Level 5 incorrect',
		// 		data: levelFiveWordData.filter((words) => {
		// 			return words.isCorrect === false;
		// 		}).length,
		// 		backgroundColor: 'rgb(255, 99, 132)',
		// 	},
		// 	{
		// 		label: 'Level 6 correct',
		// 		data: levelSixWordData.filter((words) => {
		// 			return words.isCorrect === true;
		// 		}).length,
		// 		backgroundColor: 'rgb(99, 255, 109)',
		// 	},
		// 	{
		// 		label: 'Level 6 incorrect',
		// 		data: levelSixWordData.filter((words) => {
		// 			return words.isCorrect === false;
		// 		}).length,
		// 		backgroundColor: 'rgb(255, 99, 132)',
		// 	},
		// 	// {
		// 	// 	label: 'Level 5',
		// 	// 	data: labels.map(() =>
		// 	// 		faker.datatype.number({ min: -1000, max: 1000 })
		// 	// 	),
		// 	// 	backgroundColor: 'rgb(75, 192, 192)',
		// 	// },
		// 	// {
		// 	// 	label: 'Level 6',
		// 	// 	data: labels.map(() =>
		// 	// 		faker.datatype.number({ min: -1000, max: 1000 })
		// 	// 	),
		// 	// 	backgroundColor: 'rgb(53, 162, 235)',
		// 	// },
		// ],
		// datasets: [
		// 	{
		// 		label: 'Level 4',
		// 		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		// 		backgroundColor: 'rgb(255, 99, 132)',
		// 	},
		// 	{
		// 		label: 'Level 5',
		// 		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		// 		backgroundColor: 'rgb(75, 192, 192)',
		// 	},
		// 	{
		// 		label: 'Level 6',
		// 		data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
		// 		backgroundColor: 'rgb(53, 162, 235)',
		// 	},
		// ],
		// datasets: [
		// 	{
		// 		label: '# of letters in word',
		// 		data: [levelFourData, levelFiveData, levelSixData],
		// 		backgroundColor: [
		// 			'rgba(255, 99, 132, 1)',
		// 			'rgba(54, 162, 235, 1)',
		// 			'rgba(255, 206, 86, 1)',
		// 			'rgba(75, 192, 192, 1)',
		// 			'rgba(153, 102, 255, 1)',
		// 			'rgba(255, 159, 64, 1)',
		// 			'rgba(255, 206, 86, 1)',
		// 		],
		// 		borderColor: ['rgb(51,112,156)'],
		// 		borderWidth: 4,
		// 	},
		// ],
	};
	return <Bar data={data} />;
	// return <Bar data={data} options={options} />;
};

export default StatsBarChart;
