import React from 'react';
import PropTypes from 'prop-types';

import {Pending} from 'lego/lib/Pending';
import {FormattedMessage} from 'react-intl';

export default class MedidationsList extends React.PureComponent {
  render () {
    return <table className='table'>
      <thead>
        <tr>
          <th>
            <FormattedMessage id='medidations.list.name' defaultMessage='Name' />
          </th>
          <th>
            <FormattedMessage id='medidations.list.title' defaultMessage='Title' />
          </th>
        </tr>
      </thead>
      <tbody>
        {this.props.items.map(m => (
          <tr key={m.id} >
            <td>{m.name}</td>
            <td>{m.title.value}</td>
          </tr>
        ))}
      </tbody>
    </table>;
  }
}

MedidationsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.shape({
      value: PropTypes.string
    })
  })).isRequired
};
