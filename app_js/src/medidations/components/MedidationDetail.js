import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import { FormattedMessage } from 'react-intl';

export default class MedidationDetail extends React.PureComponent {
  render () {
    return <Panel>
      <form>
        <FormGroup id='medidation-detail-name'>
          <ControlLabel><FormattedMessage id='medidation.detail.name' defaultMessage='Name' /></ControlLabel>
          <FormControl type='text' readOnly value={this.props.medidation.name} />
        </FormGroup>
        <FormGroup id='medidation-detail-title'>
          <ControlLabel><FormattedMessage id='medidation.detail.title' defaultMessage='Title' /></ControlLabel>
          <FormControl type='text' readOnly value={this.props.medidation.title.value} />
        </FormGroup>
      </form>
    </Panel>;
  }
}

MedidationDetail.propTypes = {
  medidation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.shape({
      value: PropTypes.string
    })
  }).isRequired
};
