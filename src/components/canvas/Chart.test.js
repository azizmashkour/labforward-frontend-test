import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';
import ChartDatas from './ChartDatas';

describe('<Chart />', () => {
  const props = {
    data: [1, 0, 3, 9, 0],
    backgroundColor: 'rgb(0, 2, 255, .5)',
    threshold: 5,
  }
  it('renders the Charts component', () => {
    const component = shallow(<ChartDatas {...props}/>);
    expect(component.find(Chart).length).toBe(2);
    expect(component).toMatchSnapshot();
  });
});
