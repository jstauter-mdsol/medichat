import React from 'react';
import {connect} from 'react-redux';

import {loadMedidations} from '../actions';
import MedidationsList from '../components/MedidationsList';

class MedidationsListContainer extends React.Component {
  componentDidMount () {
    this.props.loadMedidations();
  }

  render () {
    return <MedidationsList {...this.props.medidations} />;
  }
}

MedidationsListContainer.propTypes = {
};

export default connect(
  ({medidations}) => ({medidations}),
  {loadMedidations}
)(MedidationsListContainer);
