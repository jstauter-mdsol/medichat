import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MedidationsPage from './medidations/components/MedidationsPage';
import store from './store';

// add all the "providers" used by the app. This includes intl, redux, and any
// other libraries that use the react context mechanism

// set INTL_LOCALE to the abbreviation for a language to use it for translations
const locale = window.INTL_LOCALE || 'en';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = { messages: {} };
  }

  componentDidMount () {
    // async load all translations for the current locale
    require.ensure([], require => {
      const messages = require(`./i18n/${locale}.json`);
      console.log('loading translations');
      this.setState({ messages });
    });
  }

  render () {
    return <IntlProvider locale={locale} messages={this.state.messages}>
      <Provider store={store}>
        <BrowserRouter>
          <MedidationsPage />
        </BrowserRouter>
      </Provider>
    </IntlProvider>;
  }
}
