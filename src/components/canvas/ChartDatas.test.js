import React from 'react';
import { shallow } from 'enzyme';
import ChartDatas from './ChartDatas';

describe('<ChartDatas />', () => {
  const props = {
    data: [1, 0, 3, 9, 0],
    backgroundColor: 'rgb(0, 2, 255, .5)',
    threshold: 5,
  }
  it('renders the ChartDatas component', () => {
    const component = shallow(<ChartDatas {...props} />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
