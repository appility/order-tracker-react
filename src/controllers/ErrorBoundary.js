import React, { Component } from 'react'
import ErrorComponent from './../modules/Error';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent />
    }
    return this.props.children;
  }
}