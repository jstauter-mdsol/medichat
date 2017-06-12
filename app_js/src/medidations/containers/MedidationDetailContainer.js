import React from 'react';
import {connect} from 'react-redux';

import {loadMedidations} from '../actions';

import MedidationDetail from '../components/MedidationDetail';

class MedidationDetailContainer extends React.Component {
  componentDidMount () {
    // load data if we're hard refreshing on this page
    if (!this.props.medidation) {
      this.props.loadMedidations();
    }
  }

  render () {
    const {medidation} = this.props;
    if (medidation) {
      return <MedidationDetail medidation={medidation} />;
    }
    return <noscript />;
  }
}

MedidationDetailContainer.propTypes = {
};

export default connect(
  ({medidations}, {match}) => {
    return {medidation: medidations.items.find(m => m.id.toString() === match.params.medidationId)};
  },
  {loadMedidations}
)(MedidationDetailContainer);
