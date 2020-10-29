import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';

export default function RecentSalesChart(props) {
	const [series, setSeries] = useState([
		{
			name: 'PRODUCT A',
			data: [0, 0, 41, 0, 22, 0, 44, 0, 41, 67, 22, 0]
		},
		{
			name: 'PRODUCT B',
			data: [0, 0, 20, 0, 13, 27, 13, 23, 0, 8, 13, 27]
		},
		{
			name: 'PRODUCT C',
			data: [0, 0, 15, 15, 21, 0, 0, 17, 15, 15, 21, 14]
		},
		{
			name: 'PRODUCT D',
			data: [0, 0, 25, 13, 22, 8, 21, 7, 0, 13, 22, 8]
		}
	]);
	const [options, setOptions] = useState({
		chart: {
			type: 'bar',
			height: 350,
			stacked: true,
			toolbar: {
				show: true
			},
			zoom: {
				enabled: false
			}
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						position: 'bottom',
						offsetX: -10,
						offsetY: 0
					}
				}
			}
		],
		plotOptions: {
			bar: {
				horizontal: false
			}
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'01/01/2011 GMT',
				'01/02/2011 GMT',
				'01/03/2011 GMT',
				'01/04/2011 GMT',
				'01/05/2011 GMT',
				'01/06/2011 GMT',
				'01/07/2011 GMT',
				'01/08/2011 GMT',
				'01/09/2011 GMT',
				'01/10/2011 GMT',
				'01/11/2011 GMT',
				'01/12/2011 GMT'
			]
		},
		legend: {
			position: 'right',
			offsetY: 40
		},
		fill: {
			opacity: 1
		}
	});

	return <Chart options={options} series={series} height="100%" type="bar" />;
}
