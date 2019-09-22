import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';
import ChartDatas from './ChartDatas';

describe('<ChartDatas />', () => {
  it('renders the ChartDatas component', () => {
    const component = shallow(<App />);
    expect(component.find(ChartDatas).length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
