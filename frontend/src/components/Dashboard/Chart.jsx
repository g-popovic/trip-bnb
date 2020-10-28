import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';

export default function RecentSalesChart(props) {
	const [series, setSeries] = useState([
		{
			data: [
				[1603843200, 20],
				[1603756800, 18],
				[1603670400, 17],
				[1603584000, 13],
				[1603497600, 9],
				[1603411200, 8],
				[1603324800, 5],
				[1603238400, 6],
				[1603152000, 7],
				[1603065600, 5],
				[1602979200, 5],
				[1602892800, 3],
				[1602806400, 7],
				[1602720000, 6],
				[1602633600, 3],
				[1602547200, 1],
				[1602460800, 0],
				[1602374400, 0],
				[1602288000, 3],
				[1602201600, 1],
				[1602115200, 2],
				[1602028800, 0],
				[1601942400, 1],
				[1601856000, 0]
			]
		}
	]);
	const [options, setOptions] = useState({
		chart: {
			type: 'area',
			zoom: { enabled: false },
			toolbar: false
		},
		stroke: { curve: 'straight' },
		dataLabels: { enabled: false },
		labels: {},
		xaxis: {
			type: 'datetime',
			labels: {
				show: true,
				formatter: value => {
					return dayjs(value).format('MMM DD');
				},
				style: {
					cssClass: 'chart-label',
					fontFamily: 'Roboto, sans-serif'
				},
				rotate: 0
			},
			tickAmount: 4,
			tooltip: { enabled: false }
		},
		yaxis: {
			labels: {
				style: {
					cssClass: 'chart-lebal',
					fontFamily: 'Roboto, sans-serif'
				}
			}
		},
		tooltip: {
			y: {
				title: {
					formatter: (value, { dataPointIndex }) => {
						return 'Sales: ';
					}
				}
			},
			x: {
				show: true
			}
		},
		fill: {
			opacity: 1,
			gradient: {
				opacityFrom: 0.2,
				opacityTo: 0.7,
				stops: [10, 100, 100]
			}
		}
	});

	return <Chart options={options} series={series} height="100%" type="area" />;
}
