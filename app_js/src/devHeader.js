
import React from 'react';
import ReactDOM from 'react-dom';

import PlatformHeader from 'lego/lib/PlatformHeader';
import '@mdsol/sandman/assets/platform_header.css';
import logo from '@mdsol/sandman/assets/Medidata_Logo_white.png';

ReactDOM.render(
  <PlatformHeader homeUrl='/' logoUrl={logo} />,
  document.getElementById('dev-header')
);
