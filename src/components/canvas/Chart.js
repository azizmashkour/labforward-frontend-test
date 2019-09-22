import React, { Component } from 'react';
import ChartJs from 'chart.js';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {

    const {
      backgroundColor,
      color,
      data,
      fill,
      label,
      steppedLine,
      stepSize,
    } = this.props;

    let labels = Array.from(Array(data.length), (x, i) => i + 1);

    this.chartRef.current.height = 100;

    this.myChart = new ChartJs(this.chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: label,
          fill: fill,
          backgroundColor: backgroundColor || color,
          borderColor: color,
          data: data,
          lineTension: 0,
          steppedLine: steppedLine,
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: stepSize || 4
            }
          }]
        }
      }
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    let labels = Array.from(Array(this.props.data.length), (x, i) => i + 1);
    this.myChart.labels = labels;
    this.myChart.data.datasets[0].data = data;
    this.myChart.update();
  }

  render() {
    return (
      <canvas ref={this.chartRef} />
    );
  }
}
