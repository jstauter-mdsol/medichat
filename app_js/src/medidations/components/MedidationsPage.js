import React from 'react';
import {FormattedMessage} from 'react-intl';

import Sidebar from 'lego/lib/Sidebar';
import SidebarLayout from 'lego/lib/SidebarLayout';
import PageHeader from 'lego/lib/PageHeader';

import MedidationsListContainer from '../containers/MedidationsListContainer';

export default class MedidationsPage extends React.Component {
  renderSidebar () {
    return <Sidebar>
      <Sidebar.Item icon='fa fa-user' active>Medidations</Sidebar.Item>
    </Sidebar>;
  }

  render () {
    return <SidebarLayout sidebar={this.renderSidebar()}>
      <PageHeader heading={<FormattedMessage id='medidations.page.header' defaultMessage='Medidations' />} />
      <MedidationsListContainer />
    </SidebarLayout>;
  }
}

MedidationsPage.propTypes = {
};
