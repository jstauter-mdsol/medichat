import React from 'react';
import { Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Sidebar from 'lego/lib/Sidebar';
import SidebarLayout from 'lego/lib/SidebarLayout';
import PageHeader from 'lego/lib/PageHeader';

import MedidationsListContainer from '../containers/MedidationsListContainer';
import MedidationDetailContainer from '../containers/MedidationDetailContainer';

export default class MedidationsPage extends React.Component {
  renderSidebar () {
    return <Sidebar>
      <Sidebar.Item icon='fa fa-user' active onClick={() => {}}>Medidations</Sidebar.Item>
    </Sidebar>;
  }

  render () {
    return <SidebarLayout sidebar={this.renderSidebar()}>
      <PageHeader heading={<FormattedMessage id='medidations.page.header' defaultMessage='Medidations' />} />
      <Route exact path='/' component={MedidationsListContainer} />
      <Route path='/:medidationId' component={MedidationDetailContainer} />
    </SidebarLayout>;
  }
}

MedidationsPage.propTypes = {};
