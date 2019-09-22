import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    const labels = Array.from(Array(data.length), (x, i) => i + 1);

    this.chartRef.current.height = 100;

    this.myChart = new ChartJs(this.chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          backgroundColor: backgroundColor || color,
          data,
          fill,
          label,
          borderColor: color,
          lineTension: 0,
          steppedLine,
        }],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: stepSize || 4,
            },
          }],
        },
      },
    });
  }

  componentDidUpdate() {
    const { data } = this.props;
    const labels = Array.from(Array(data.length), (x, i) => i + 1);
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

Chart.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  fill: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  steppedLine: PropTypes.bool.isRequired,
  stepSize: PropTypes.number.isRequired,
};
