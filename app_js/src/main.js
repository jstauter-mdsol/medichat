import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '@mdsol/sandman/assets/platform.css';

import App from './App';

// locale data is things like date/time formatting, days of the week, etc
// since we usually only support a handful of languages, we just load all of the supported ones
// here just english and japanese here, but others can easily be added
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';

addLocaleData([...en, ...ja]);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
