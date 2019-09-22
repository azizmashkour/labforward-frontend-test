import React, { useState } from 'react';
import RawDatas from '../../datas/SimpleDatas';
import ChartDatas from '../canvas/ChartDatas';
import './App.css';

const App = () => {

  const [state, setState] = useState({ defaultThreshold: 5 });

  const handleChangeThreshold = (e) => {
    setState({ defaultThreshold: e.target.value});
  }

  const inputStyles = {
    borderColor: "hsl(0,0%,80%)",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    height: "26px",
    padding: "2px 10px",
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="Thresholds__parent">
          <label>Change the input value to define your <b>Thresholds</b> </label>
          <input
            type="number"
            onChange={e => handleChangeThreshold(e)}
            min={1}
            value={state.defaultThreshold}
            style={inputStyles}
            className="Thresholds__input"
          />
        </div>
        <ChartDatas threshold={state.defaultThreshold} data={RawDatas.batch1}/>
      </div>
    </div>
  );

};

export default App;
