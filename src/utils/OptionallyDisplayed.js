import React from 'react';
import PropTypes from 'prop-types';

// TODO make simple function

export default class OptionallyDisplayed extends React.Component {
  render() {
    return (this.props.display === true) ?  React.Children.toArray(this.props.children) : null;
  }
}
OptionallyDisplayed.propTypes = {
  display: PropTypes.bool.isRequired
};
