import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicField extends Component {
  state = { value: this.props.defaultValue };

  onChange = value => {
    this.setState({ value: value });
    this.props.onChange(value);
  }
  render() {
    return (
      <div className="field">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input 
          id={this.props.id} 
          type={this.props.type}
          onChange={(e) => this.onChange(e.target.value)} />
      </div>
    )
  }
}

DynamicField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string
};

export default DynamicField;