import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Select from 'react-select';
import RawDatas from '../../datas/SimpleDatas';
import ChartDatas from '../canvas/ChartDatas';
import { options } from '../../configs/options';
import './App.css';

const App = ({lang, i18n, t}) => {
  const [state, setState] = useState({ defaultThreshold: 5, lang: options[0], });

  const handleChangeThreshold = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    setState({ defaultThreshold: parsedValue });
  };

  const changeLang = (lang) => {
    const { value } = lang;
    i18n.changeLanguage(value);
  };

  const inputStyles = {
    borderColor: 'hsl(0,0%,80%)',
    borderRadius: '4px',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: '26px',
    padding: '2px 10px',
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 className="Lab__title">{t('Sudden peaks detection')}</h1>
        <div className="md8">
          <ChartDatas threshold={state.defaultThreshold} data={RawDatas.batch1} />
        </div>
        <div className="md4">
          <h2 className="Setting__title">{t('Settings')}</h2>
          <div className="Thresholds__language">
            <label>{t('Switch language')}</label>
            <Select
              defaultValue={options[0]}
              options={options}
              value={lang}
              onChange={changeLang}
              className="App-Select"
            />
          </div>
          <div className="Thresholds__parent">
            <label>
              {t('Change to update threshold')}
            </label><br/>
            <input
              type="number"
              onChange={(e) => handleChangeThreshold(e)}
              min={1}
              value={state.defaultThreshold}
              style={inputStyles}
              className="Thresholds__input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(App);
