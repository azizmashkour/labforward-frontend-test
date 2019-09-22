import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const ChartDatas = ({ data, threshold, t }) => {
  // handling peak detection function
  const handlePeakDetection = (data, threshold) => {
    const parsedDatas = [];
    let last = 0;
    // looping around all our datas
    for (let i = 1; i < data.length; i++) {
      // here we check if the current data minus the previous one is >= threshold
      // then the last element will be the 0 else 1
      // so our parsedDatas array will contain the last element
      // finally we just return our parsedDatas array.
      if (Math.abs(data[i] - data[i - 1]) >= threshold) {
        last = last === 0 ? 1 : 0;
      }
      parsedDatas.push(last);
    }
    return parsedDatas;
  };

  const datas = handlePeakDetection(data, threshold);

  return (
    <>
      <Chart
        backgroundColor="rgb(255, 99, 132, 0.5)"
        color="rgb(255, 99, 132)"
        data={data}
        fill={false}
        label="Actual Data"
        steppedLine={false}
        stepSize={2}
      />
      <Chart
        backgroundColor="rgba(54, 162, 235, 0.5)"
        color="rgb(54, 162, 235)"
        data={datas}
        fill={true}
        label="Areas of interest"
        steppedLine={false}
        stepSize={0.25}
      />
    </>
  );
};

ChartDatas.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  threshold: PropTypes.number.isRequired,
};

export default ChartDatas;
